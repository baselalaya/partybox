"use client";
// components/content/LaserEngravingEffect.tsx
import React, { useRef, useEffect, useState } from "react";

const SPARK_COLOR = "#FFD700"; // Golden/yellow sparks
const SPARK_COLOR_ALT = "#FF8C00"; // Orange sparks
const BURN_COLOR = "#2a1a0a"; // Dark brown burned wood color

export default function LaserEngravingEffect({ text = "Your Brand" }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const animationRef = useRef<number>();
    const [woodImage, setWoodImage] = useState<HTMLImageElement | null>(null);
    const [displayText, setDisplayText] = useState(text);

    // Load wood texture
    useEffect(() => {
        const img = new Image();
        img.src = "/wood-texture.png";
        img.onload = () => setWoodImage(img);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !woodImage) return;

        const container = canvas.parentElement;
        const w = container ? container.clientWidth : window.innerWidth;
        const h = 250;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        canvas.width = w;
        canvas.height = h;

        // Current laser position for glow effect
        let currentLaserX = 0;
        let currentLaserY = h * 0.5;
        let isEngraving = true;

        // --- Spark class for small particles ---
        class Spark {
            x: number;
            y: number;
            vx: number;
            vy: number;
            life: number;
            maxLife: number;
            size: number;
            color: string;
            gravity: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                // Emit sparks in all directions but favor upward/outward
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 2 + 1;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed - 2; // Slight upward bias
                this.life = Math.random() * 25 + 20;
                this.maxLife = this.life;
                this.size = Math.random() * 2.5 + 1;
                this.color = Math.random() > 0.4 ? SPARK_COLOR : SPARK_COLOR_ALT;
                this.gravity = 0.1;
            }

            update(): boolean {
                this.x += this.vx;
                this.y += this.vy;
                this.vy += this.gravity; // Gravity pulls down
                this.vx *= 0.97; // Friction
                this.life--;
                return this.life > 0;
            }

            render(ctx: CanvasRenderingContext2D) {
                const alpha = this.life / this.maxLife;
                ctx.globalAlpha = alpha;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * alpha, 0, Math.PI * 2);
                ctx.fill();

                // Add a small glow around sparks
                ctx.globalAlpha = alpha * 0.3;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * alpha * 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // --- Smoke particle class ---
        class Smoke {
            x: number;
            y: number;
            vx: number;
            vy: number;
            life: number;
            maxLife: number;
            size: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = -Math.random() * 1.5 - 0.5; // Rise up
                this.life = Math.random() * 40 + 30;
                this.maxLife = this.life;
                this.size = Math.random() * 8 + 4;
            }

            update(): boolean {
                this.x += this.vx;
                this.y += this.vy;
                this.vx *= 0.99;
                this.size += 0.1; // Expand as it rises
                this.life--;
                return this.life > 0;
            }

            render(ctx: CanvasRenderingContext2D) {
                const alpha = (this.life / this.maxLife) * 0.15;
                ctx.globalAlpha = alpha;
                ctx.fillStyle = "#888";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // --- Text handler ---
        class TextEngraver {
            pool: HTMLCanvasElement;
            buffer: CanvasRenderingContext2D;
            size: number;
            copy: string;
            color: string;
            delay: number;
            baseDelay: number;
            bound: { width: number; height: number };
            x: number;
            y: number;
            index: number;
            textData: ImageData; // For detecting text pixels
            isWaiting: boolean; // For waiting before restart

            constructor(options: { copy?: string; color?: string; size?: number }) {
                this.pool = document.createElement("canvas");
                this.buffer = this.pool.getContext("2d")!;

                this.size = options.size || 80;
                this.copy = (options.copy || "Hello!") + " ";
                this.color = options.color || BURN_COLOR;
                this.delay = 1;
                this.baseDelay = this.delay;

                // Measure text first
                this.buffer.font = `800 ${this.size}px 'Inter', 'Segoe UI', Arial, sans-serif`;
                this.buffer.textBaseline = "middle";

                const metrics = this.buffer.measureText(this.copy);
                this.bound = {
                    width: Math.ceil(metrics.width),
                    height: Math.ceil(this.size * 1.2)
                };

                // Set pool canvas to text size
                this.pool.width = this.bound.width;
                this.pool.height = this.bound.height;

                // Clear with transparency
                this.buffer.clearRect(0, 0, this.pool.width, this.pool.height);

                this.x = w * 0.5 - this.bound.width * 0.5;
                this.y = h * 0.5;

                // Re-set font after canvas resize
                this.buffer.font = `800 ${this.size}px 'Inter', 'Segoe UI', Arial, sans-serif`;
                this.buffer.textBaseline = "middle";

                // Draw burned text effect - dark with slight depth
                this.buffer.save();

                // Shadow for depth effect
                this.buffer.shadowColor = "rgba(0, 0, 0, 0.6)";
                this.buffer.shadowBlur = 3;
                this.buffer.shadowOffsetX = 1;
                this.buffer.shadowOffsetY = 1;

                // Dark burned color with gradient
                const gradient = this.buffer.createLinearGradient(0, 0, 0, this.bound.height);
                gradient.addColorStop(0, "#1a0f05");
                gradient.addColorStop(0.3, this.color);
                gradient.addColorStop(0.7, this.color);
                gradient.addColorStop(1, "#0f0805");
                this.buffer.fillStyle = gradient;
                this.buffer.fillText(this.copy, 0, this.bound.height * 0.5);

                this.buffer.restore();

                // Get the text pixel data for detecting dark pixels
                this.textData = this.buffer.getImageData(0, 0, this.bound.width, this.bound.height);
                this.index = 0;
                this.isWaiting = false;
            }

            update(sparks: Spark[], smoke: Smoke[]): void {
                // If waiting, don't do anything
                if (this.isWaiting) return;

                if (this.index >= this.bound.width) {
                    isEngraving = false;
                    this.isWaiting = true;
                    setTimeout(() => {
                        this.index = 0;
                        this.isWaiting = false;
                        isEngraving = true;
                    }, 5000);
                    return;
                }

                isEngraving = true;
                const data = this.textData.data;
                const imgWidth = this.bound.width;
                const rowHeight = this.bound.height;

                // Track if we found any pixels this column
                let foundPixel = false;
                let lastY = this.y;

                for (let row = 0; row < rowHeight; row++) {
                    const i = (row * imgWidth + this.index) * 4;
                    if (i < data.length && i >= 0) {
                        const a = data[i + 3]; // Alpha channel

                        // Detect visible pixels (has alpha)
                        if (a > 50) {
                            foundPixel = true;
                            const x = this.x + this.index;
                            const y = this.y - this.bound.height * 0.5 + row;

                            currentLaserX = x;
                            currentLaserY = y;
                            lastY = y;

                            // Emit sparks occasionally
                            if (Math.random() > 0.90) {
                                const sparkCount = Math.floor(Math.random() * 2) + 1;
                                for (let s = 0; s < sparkCount; s++) {
                                    sparks.push(new Spark(x, y));
                                }
                            }

                            // Emit smoke occasionally
                            if (Math.random() > 0.92) {
                                smoke.push(new Smoke(x, y));
                            }
                        }
                    }
                }

                // If no pixel found but we're engraving, keep laser at reasonable position
                if (!foundPixel) {
                    currentLaserX = this.x + this.index;
                    currentLaserY = lastY;
                }

                this.delay--;
                if (this.delay < 0) {
                    this.index++;
                    this.delay = this.baseDelay;
                }
            }

            render(ctx: CanvasRenderingContext2D): void {
                // Use drawImage with clipping to reveal text progressively
                ctx.drawImage(
                    this.pool,
                    0, 0, this.index, this.bound.height, // Source: only up to current index
                    this.x, this.y - this.bound.height * 0.5, this.index, this.bound.height // Dest
                );
            }
        }

        // --- Render laser burn point glow ---
        function renderBurnGlow(ctx: CanvasRenderingContext2D) {
            if (!isEngraving) return;

            // Large soft outer glow - orange/red for burning
            const outerGradient = ctx.createRadialGradient(
                currentLaserX, currentLaserY, 0,
                currentLaserX, currentLaserY, 30
            );
            outerGradient.addColorStop(0, "rgba(255, 100, 0, 0.5)");
            outerGradient.addColorStop(0.3, "rgba(255, 50, 0, 0.3)");
            outerGradient.addColorStop(1, "rgba(255, 50, 0, 0)");

            ctx.globalAlpha = 1;
            ctx.fillStyle = outerGradient;
            ctx.beginPath();
            ctx.arc(currentLaserX, currentLaserY, 30, 0, Math.PI * 2);
            ctx.fill();

            // Medium glow - yellow/orange
            const midGradient = ctx.createRadialGradient(
                currentLaserX, currentLaserY, 0,
                currentLaserX, currentLaserY, 15
            );
            midGradient.addColorStop(0, "rgba(255, 200, 50, 0.9)");
            midGradient.addColorStop(0.4, "rgba(255, 150, 0, 0.6)");
            midGradient.addColorStop(1, "rgba(255, 100, 0, 0)");

            ctx.globalAlpha = 1;
            ctx.fillStyle = midGradient;
            ctx.beginPath();
            ctx.arc(currentLaserX, currentLaserY, 15, 0, Math.PI * 2);
            ctx.fill();

            // Bright white-hot core
            const coreGradient = ctx.createRadialGradient(
                currentLaserX, currentLaserY, 0,
                currentLaserX, currentLaserY, 5
            );
            coreGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
            coreGradient.addColorStop(0.3, "rgba(255, 255, 200, 0.9)");
            coreGradient.addColorStop(1, "rgba(255, 200, 100, 0)");

            ctx.globalAlpha = 1;
            ctx.fillStyle = coreGradient;
            ctx.beginPath();
            ctx.arc(currentLaserX, currentLaserY, 5, 0, Math.PI * 2);
            ctx.fill();
        }

        // --- State ---
        let sparks: Spark[] = [];
        let smoke: Smoke[] = [];
        let textObj: TextEngraver;

        // --- Init Text ---
        function setText(copy: string) {
            sparks = [];
            smoke = [];
            textObj = new TextEngraver({
                copy,
                color: BURN_COLOR,
            });
        }
        setText(displayText);

        // --- Animation Loop ---
        function update() {
            textObj.update(sparks, smoke);
            sparks = sparks.filter(s => s.update());
            smoke = smoke.filter(s => s.update());
        }

        function render() {
            // Draw wood background
            ctx.globalCompositeOperation = "source-over";
            ctx.globalAlpha = 1;
            ctx.drawImage(woodImage, 0, 0, w, h);

            // Render engraved text
            ctx.globalCompositeOperation = "source-over";
            ctx.globalAlpha = 1;
            textObj.render(ctx);

            // Render smoke (behind sparks)
            ctx.globalCompositeOperation = "source-over";
            smoke.forEach(s => s.render(ctx));

            // Render sparks with additive blending
            ctx.globalCompositeOperation = "lighter";
            sparks.forEach(s => s.render(ctx));

            // Render burn glow
            ctx.globalCompositeOperation = "lighter";
            renderBurnGlow(ctx);

            ctx.globalAlpha = 1;
        }

        function loop() {
            update();
            render();
            animationRef.current = requestAnimationFrame(loop);
        }
        loop();

        // --- Event Handlers ---
        function handleClick(e: MouseEvent) {
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            const x = (e.clientX - rect.left) * scaleX;
            const y = (e.clientY - rect.top) * scaleY;
            // Add burst of sparks on click
            for (let i = 0; i < 20; i++) {
                sparks.push(new Spark(x, y));
            }
            for (let i = 0; i < 3; i++) {
                smoke.push(new Smoke(x, y));
            }
        }
        canvas.addEventListener("click", handleClick);

        // --- Cleanup ---
        return () => {
            cancelAnimationFrame(animationRef.current!);
            canvas.removeEventListener("click", handleClick);
        };
    }, [displayText, woodImage]);

    return (
        <div style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}>
            {/* Outer frame for depth */}
            <div
                style={{
                    background: "linear-gradient(145deg, #8B6914 0%, #5D4E37 50%, #3E2723 100%)",
                    padding: "8px",
                    borderRadius: 20,
                    boxShadow: `
                        0 10px 40px rgba(0, 0, 0, 0.4),
                        0 4px 12px rgba(0, 0, 0, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                    `,
                }}
            >
                {/* Inner frame bevel */}
                <div
                    style={{
                        background: "linear-gradient(180deg, #4A3728 0%, #6B4423 100%)",
                        padding: "4px",
                        borderRadius: 14,
                        boxShadow: `
                            inset 0 2px 4px rgba(0, 0, 0, 0.4),
                            inset 0 -1px 2px rgba(255, 255, 255, 0.05)
                        `,
                    }}
                >
                    <canvas
                        ref={canvasRef}
                        style={{
                            width: "100%",
                            height: 250,
                            display: "block",
                            borderRadius: 10,
                            boxShadow: `
                                inset 0 4px 12px rgba(0, 0, 0, 0.5),
                                inset 0 -2px 6px rgba(0, 0, 0, 0.3),
                                inset 4px 0 8px rgba(0, 0, 0, 0.2),
                                inset -4px 0 8px rgba(0, 0, 0, 0.2)
                            `,
                        }}
                    />
                </div>
            </div>
            {/* Eye-catching Input Section */}
            <div
                style={{
                    marginTop: -80,
                    padding: "16px 20px",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,245,231,0.95) 100%)",
                    borderRadius: 16,
                    border: "2px solid transparent",
                    backgroundClip: "padding-box",
                    boxShadow: `
                        0 4px 20px rgba(139, 90, 43, 0.15),
                        0 0 0 2px rgba(255, 159, 110, 0.3)
                    `,
                    position: "relative" as const,
                }}
            >
                {/* Label with typing indicator */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 10,
                    }}
                >
                    <span
                        style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#8B5A2B",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                        }}
                    >
                        Try it yourself
                    </span>
                    <span
                        style={{
                            fontSize: 11,
                            color: "#a67c52",
                            fontWeight: 500,
                        }}
                    >
                        — Type any name or word below
                    </span>
                </div>

                {/* Input with icon */}
                <div style={{ position: "relative" as const }}>
                    <svg
                        style={{
                            position: "absolute",
                            left: 14,
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: 20,
                            height: 20,
                            opacity: 0.5,
                        }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#8B5A2B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        value={displayText}
                        onChange={(e) => setDisplayText(e.target.value || " ")}
                        placeholder="Enter your name, brand, or any text..."
                        style={{
                            width: "100%",
                            fontSize: 20,
                            padding: "14px 16px 14px 48px",
                            borderRadius: 10,
                            border: "2px solid #d4a574",
                            background: "#fff",
                            color: "#5d4037",
                            outline: "none",
                            boxShadow: "inset 0 2px 4px rgba(139, 90, 43, 0.08)",
                            fontWeight: 600,
                            transition: "all 0.2s ease",
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = "#FF9F6E";
                            e.target.style.boxShadow = "inset 0 2px 4px rgba(139, 90, 43, 0.08), 0 0 0 3px rgba(255, 159, 110, 0.2)";
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = "#d4a574";
                            e.target.style.boxShadow = "inset 0 2px 4px rgba(139, 90, 43, 0.08)";
                        }}
                    />
                </div>

                {/* Hint text */}
                <p
                    style={{
                        marginTop: 8,
                        fontSize: 12,
                        color: "#a67c52",
                        textAlign: "center",
                    }}
                >
                    Watch your text get laser-engraved in real-time
                </p>
            </div>
        </div>
    );
}