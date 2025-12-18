# Partybox - Premium Photo Booth Rentals Platform

A high-performance, SEO-optimized web application for Partybox, built with Next.js 15 (App Router) and powered by Payload CMS 3.0. This platform features a dynamic content management system for photo booths, blogs, and media galleries, designed for speed and scalability.

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Actions)
- **CMS:** [Payload CMS 3.0](https://payloadcms.com/) (Headless, Local API)
- **Database:** PostgreSQL (via Drizzle ORM)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel / Railway / Docker

## ✨ Key Features

- **Dynamic Content:** Fully managed `Booths`, `Posts` (Blog), and `Gallery` via CMS.
- **Media Handling:** Support for Images and Videos (MP4/GIF) with autoplay in galleries.
- **SEO Optimized:** Automatic metadata generation, JSON-LD schemas, and sitemaps.
- **Performance:** Optimized images (`next/image`), server-side rendering (SSR), and static generation (ISR).
- **Admin Panel:** Customized Payload Admin UI for content editors.
- **Responsive Design:** Mobile-first, fluid layouts with Tailwind CSS.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL Database (Local or Cloud)
- NPM or Yarn

### 1. Installation

```bash
git clone https://github.com/baselalaya/partybox.git
cd partybox
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory. You can copy `.env.example` if available.

```env
# Database Connection
POSTGRES_URL="postgres://user:password@localhost:5432/partybox"

# Payload CMS Secret (Generate a strong random string)
PAYLOAD_SECRET="your-secret-key-here"

# Public Site URL (Used for SEO/Metadata)
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# Optional: Blob Storage (S3/R2) - Required for Vercel Deployment
# S3_ACCESS_KEY_ID=...
# S3_SECRET_ACCESS_KEY=...
# S3_BUCKET=...
# S3_REGION=...
# S3_ENDPOINT=...
```

### 3. Run Locally

Start the development server:

```bash
npm run dev
```

- **Website:** [http://localhost:3000](http://localhost:3000)
- **Admin Panel:** [http://localhost:3000/admin](http://localhost:3000/admin)

The first time you run the app, Payload will automatically generate the database schema in your PostgreSQL instance.

---

## 📂 Project Structure

```
src/
├── app/
│   ├── (website)/      # Public facing pages (Next.js App Router)
│   ├── (payload)/      # Payload CMS Admin routes
│   └── api/            # API routes (GraphQL, REST, Media)
├── collections/        # Payload CMS Collection Definitions (Booths, Gallery, etc.)
├── components/
│   ├── content/        # Content blocks (Hero, GalleryTeaser, etc.)
│   ├── layout/         # Header, Footer, Container
│   ├── payload/        # Admin UI Custom Components (Logo, Icon)
│   └── ui/             # Generic UI components
├── lib/
│   ├── payload.ts      # Data fetching utilities (Type-safe)
│   ├── seo.ts          # SEO helpers
│   └── wordpress.ts    # Legacy/Mock data (Deprecated)
├── styles/             # Global CSS
└── payload.config.ts   # Main CMS Configuration
```

---

## 🚢 Deployment Guide

### Option 1: Vercel (Recommended)

Vercel is the native platform for Next.js and provides the best performance.

**Important:** Since Vercel uses ephemeral file systems, local file uploads (`/media` folder) will **NOT** persist. You **MUST** configure an external storage adapter (like AWS S3, Cloudflare R2, or Vercel Blob) in `payload.config.ts` for production media.

1.  **Push to GitHub:** Ensure your project is pushed to a GitHub repository.
2.  **Create Vercel Project:**
    - Go to Vercel Dashboard -> "Add New..." -> "Project".
    - Import your `partybox` repository.
3.  **Configure Environment Variables:**
    - Add `POSTGRES_URL` (Use a cloud provider like Neon.tech, Supabase, or Vercel Postgres).
    - Add `PAYLOAD_SECRET`.
    - Add `NEXT_PUBLIC_SITE_URL` (e.g., `https://partybox.vercel.app`).
    - Add API Keys for your storage provider if configured.
4.  **Build Settings:**
    - Framework Preset: `Next.js`
    - Build Command: `npm run build` (Default)
    - Install Command: `npm install` (Default)
5.  **Deploy:** Click "Deploy".

### Option 2: VPS / Docker (Self-Hosted)

For full control and persistent local storage without external S3 buckets.

1.  **Build Docker Image:**
    ```bash
    docker build -t partybox .
    ```
2.  **Run Container:**
    ```bash
    docker run -d \
      -p 3000:3000 \
      -e POSTGRES_URL="postgres://..." \
      -e PAYLOAD_SECRET="..." \
      -e NEXT_PUBLIC_SITE_URL="..." \
      -v $(pwd)/media:/app/media \
      partybox
    ```
    *Note: Ensure you map the `/media` volume to persist uploads.*

### Database Migration (Production)

When deploying updates that change the database schema (e.g., adding new fields to collections):

1.  **Local:** Run `npm run dev` locally pointing to your *production* DB connection string temporarily (use caution!) OR let Payload's `db-postgres` adapter handle auto-migration on boot (default behavior in this setup).
2.  **Manual Migration:** For strict environments, generate migrations locally using Payload CLI and apply them during the build pipeline.

---

## 📝 Admin Panel Guide

Access the CMS at `/admin`.

- **Booths:** Add/Edit photo booth products. Use the `Content` field for creating rich HTML descriptions.
- **Gallery:** Upload Images or Videos (MP4). Select the correct media type from the dropdown. Videos will autoplay muted in the gallery.
- **Posts:** Manage blog articles for SEO and content marketing.
- **Media:** Library of all uploaded assets.

---

**Developed by Z CREATIVE TECH Team**
