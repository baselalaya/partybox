"use client";
// components/content/LaserEngravingEffect.tsx
import React, { useRef, useEffect } from "react";

const CANVAS_BG = "#ffffff";
const LASER_COLOR = "#FF6C8B"; // Partybox pink
const SPARK_COLOR = "#25C7C9"; // Partybox teal accent
const TEXT_COLOR = "#FF6C8B"; // Slate-900

export default function LaserEngravingEffect({ text = "Your Brand" }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const animationRef = useRef<number>();
    const state = useRef<any>({});

    useEffect(() => {
        let canvas = canvasRef.current;
        if (!canvas) return;
        // Set canvas width to container width for crisp rendering
        let container = canvas.parentElement;
        let w = container ? container.clientWidth : window.innerWidth;
        let h = 250;
        let ctx = canvas.getContext("2d");
        if (!ctx) return;
        canvas.width = w;
        canvas.height = h;


        // --- Classes (Laser, Spark, Particles, Text) ---
        function Laser(options: any = {}) {
            this.lifespan = options.lifespan || Math.round(Math.random() * 20 + 20);
            this.maxlife = this.lifespan;
            this.color = options.color || LASER_COLOR;
            this.x = options.x || Math.random() * w;
            this.y = options.y || Math.random() * h;
            this.width = options.width || 2;
            this.update = function (index: number, array: any[]) {
                this.lifespan > 0 && this.lifespan--;
                this.lifespan <= 0 && this.remove(index, array);
            };
            this.render = function (ctx: CanvasRenderingContext2D) {
                if (this.lifespan <= 0) return;
                ctx.beginPath();
                ctx.globalAlpha = this.lifespan / this.maxlife;
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.width;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(w, this.y);
                ctx.stroke();
                ctx.closePath();
            };
            this.remove = function (index: number, array: any[]) {
                array.splice(index, 1);
            };
        }

        function Spark(options: any = {}) {
            this.x = options.x || w * 0.5;
            this.y = options.y || h * 0.5;
            this.v = options.v || {
                direct: Math.random() * Math.PI * 2,
                weight: Math.random() * 10 + 2,
                friction: 0.94
            };
            this.a = options.a || {
                change: Math.random() * 0.2 - 0.1,
                min: this.v.direct - Math.PI * 0.4,
                max: this.v.direct + Math.PI * 0.4
            };
            this.g = options.g || {
                direct: Math.PI * 0.5 + (Math.random() * 0.4 - 0.2),
                weight: Math.random() * 0.5 + 0.5
            };
            this.width = options.width || Math.random() * 3;
            this.lifespan = options.lifespan || Math.round(Math.random() * 20 + 40);
            this.maxlife = this.lifespan;
            this.color = options.color || SPARK_COLOR;
            this.prev = { x: this.x, y: this.y };
            this.update = function (index: number, array: any[]) {
                this.prev = { x: this.x, y: this.y };
                this.x += Math.cos(this.v.direct) * this.v.weight;
                this.x += Math.cos(this.g.direct) * this.g.weight;
                this.y += Math.sin(this.v.direct) * this.v.weight;
                this.y += Math.sin(this.g.direct) * this.g.weight;
                this.v.weight *= this.v.friction;
                this.v.direct += this.a.change;
                (this.v.direct > this.a.max || this.v.direct < this.a.min) &&
                    (this.a.change *= -1);
                this.lifespan > 0 && this.lifespan--;
                this.lifespan <= 0 && this.remove(index, array);
            };
            this.render = function (ctx: CanvasRenderingContext2D) {
                if (this.lifespan <= 0) return;
                ctx.beginPath();
                ctx.globalAlpha = this.lifespan / this.maxlife;
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.width;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.prev.x, this.prev.y);
                ctx.stroke();
                ctx.closePath();
            };
            this.remove = function (index: number, array: any[]) {
                array.splice(index, 1);
            };
        }

        function Particles(options: any = {}) {
            this.max = options.max || Math.round(Math.random() * 20 + 10);
            this.sparks = Array.from({ length: this.max }, () => new Spark(options));
            this.update = function () {
                this.sparks.forEach((s: any, i: number) => s.update(i, this.sparks));
            };
            this.render = function (ctx: CanvasRenderingContext2D) {
                this.sparks.forEach((s: any) => s.render(ctx));
            };
        }

        function Text(options: any = {}) {
            const pool = document.createElement("canvas");
            const buffer = pool.getContext("2d");
            pool.width = w;
            pool.height = h;
            buffer.fillStyle = CANVAS_BG;
            buffer.fillRect(0, 0, pool.width, pool.height);
            this.size = options.size || 90;
            this.copy = (options.copy || `Hello!`) + " ";
            this.color = options.color || TEXT_COLOR;
            this.delay = options.delay || 4;
            this.basedelay = this.delay;
            buffer.font = `900 ${this.size}px 'Inter', 'Segoe UI', Arial, sans-serif`;
            buffer.textBaseline = "middle";
            this.bound = buffer.measureText(this.copy);
            this.bound.height = this.size * 1.2;
            this.x = options.x || w * 0.5 - this.bound.width * 0.5;
            this.y = options.y || h * 0.5;
            buffer.strokeStyle = this.color;
            buffer.lineWidth = 2.5;
            buffer.strokeText(this.copy, 0, this.bound.height * 0.5);
            this.data = buffer.getImageData(0, 0, this.bound.width, this.bound.height);
            this.index = 0;
            this.update = () => {
                if (this.index >= this.bound.width) {
                    this.index = 0;
                    return;
                }
                const data = this.data.data;
                for (let i = this.index * 4; i < data.length; i += 4 * this.data.width) {
                    const bitmap = data[i] + data[i + 1] + data[i + 2] + data[i + 3];
                    if (bitmap > 255 && Math.random() > 0.86) {
                        const x = this.x + this.index;
                        const y = this.y + i / this.bound.width / 4;
                        laser.push(
                            new Laser({
                                x: x,
                                y: y
                            })
                        );
                        Math.random() > 0.7 &&
                            particles.push(
                                new Particles({
                                    x: x,
                                    y: y
                                })
                            );
                    }
                }
                this.delay-- < 0 && this.index++ && (this.delay += this.basedelay);
            };
            this.render = (ctx: CanvasRenderingContext2D) => {
                ctx.putImageData(
                    this.data,
                    this.x,
                    this.y - this.bound.height * 0.5,
                    0,
                    0,
                    this.index,
                    this.bound.height
                );
            };
        }

        // --- State ---
        let laser: any[] = [];
        let particles: any[] = [];
        let textObj: any;

        // --- Init Text ---
        function setText(copy: string) {
            textObj = new Text({
                copy,
                w,
                h,
                color: TEXT_COLOR,
            });
        }
        setText(text);

        // --- Animation Loop ---
        function update() {
            textObj.update();
            laser.forEach((l, i) => l.update(i, laser));
            particles.forEach((p) => p.update());
        }
        function render() {
            ctx.globalCompositeOperation = "source-over";
            ctx.globalAlpha = 0.9;
            ctx.fillStyle = CANVAS_BG;
            ctx.fillRect(0, 0, w, h);
            ctx.globalCompositeOperation = "screen";
            textObj.render(ctx);
            laser.forEach((l) => l.render(ctx));
            particles.forEach((p) => p.render(ctx));
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
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            laser.push(new Laser({ x, y, w, h, color: LASER_COLOR }));
            particles.push(new Particles({ x, y, w, h, color: SPARK_COLOR }));
        }
        canvas.addEventListener("click", handleClick);

        function handleInput(e: Event) {
            const value = (e.target as HTMLInputElement).value;
            setText(value || " ");
        }
        const input = inputRef.current;
        input?.addEventListener("input", handleInput);

        // --- Cleanup ---
        return () => {
            cancelAnimationFrame(animationRef.current!);
            canvas.removeEventListener("click", handleClick);
            input?.removeEventListener("input", handleInput);
        };
    }, [text]);

    return (
        <div style={{ width: "100%", maxWidth: 900, margin: "0 auto", background: "#fff", borderRadius: 20, boxShadow: "0 4px 32px 0 rgba(15,23,42,0.08)", padding: 24 }}>
            <input
                ref={inputRef}
                type="text"
                defaultValue={text}
                placeholder="Type your engraving text"
                style={{
                    width: "100%",
                    fontSize: 24,
                    marginBottom: 16,
                    padding: 12,
                    borderRadius: 12,
                    border: "1.5px solid #e2e8f0",
                    background: "#f8fafc",
                    color: "#0f172a",
                    outline: "none",
                    boxShadow: "0 1px 4px 0 rgba(15,23,42,0.04)",
                    fontWeight: 500,
                }}
            />
            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: 250,
                    display: "block",
                    background: "#fff",
                    borderRadius: 16,
                    boxShadow: "0 2px 16px 0 rgba(255,108,139,0.08)",
                }}
            />
        </div>
    );
}