# Deploying PartyBox to Railway

This guide outlines the steps to deploy the PartyBox application (Next.js + Payload CMS + PostgreSQL) to Railway.

## Prerequisites

- A [Railway](https://railway.app/) account.
- A [GitHub](https://github.com/) repository with your latest code.
- Your S3 Bucket credentials (AWS, Cloudflare R2, or MinIO).

## Step 1: Create a Project & Database

1.  Log in to your Railway dashboard.
2.  Click **"New Project"**.
3.  Choose **"Provision PostgreSQL"**.
    - This will create a new Postgres database service for you.

## Step 2: Connect Your Repository

1.  In the same project, click **"New"** (or "Create" -> "Service").
2.  Select **"GitHub Repo"**.
3.  Search for and select your repository (`partybox`).
4.  Railway will automatically detect it as a Node.js/Next.js app.

## Step 3: Configure Environment Variables

Click on your application service card in the Railway dashboard, go to the **"Variables"** tab, and add the following:

### Database (Auto-filled by Railway)
Railway usually injects `DATABASE_URL` automatically if you provisioned Postgres in the same project. However, Payload often looks for `POSTGRES_URL`.

- **`POSTGRES_URL`**: `${{Postgres.DATABASE_URL}}` (Reference the variable from the Postgres service).

### Payload Config
- **`PAYLOAD_SECRET`**: Generate a strong random string (e.g., `openssl rand -hex 32`).
- **`NEXT_PUBLIC_SITE_URL`**: `https://${{RAILWAY_PUBLIC_DOMAIN}}` (This allows it to dynamically use the domain Railway assigns, or you can paste your custom domain).

### S3 Storage (Required for Images)
- **`S3_BUCKET`**: Your bucket name.
- **`S3_REGION`**: Your bucket region (e.g., `us-east-1` or `auto`).
- **`S3_ACCESS_KEY_ID`**: Your access key.
- **`S3_SECRET_ACCESS_KEY`**: Your secret key.
- **`S3_ENDPOINT`**: (Optional) URL for your S3 provider (e.g., `https://<accountid>.r2.cloudflarestorage.com` for R2).

## Step 4: Build & Start Settings

Go to the **"Settings"** tab of your application service.

1.  **Build Command**: `npm run build`
    - *Note: Ensure this runs `next build`. Payload 3.0 usually incorporates the payload build into the next build process.*
2.  **Start Command**: `npm run start`
3.  **Networking**:
    - Click "Generate Domain" to get a public URL (e.g., `partybox-production.up.railway.app`).
    - **Port**: `3000` (Default for Next.js).

## Step 5: Verify Deployment

1.  Wait for the build to finish (view the **"Deployments"** tab logs).
2.  Once "Active", visit your generated URL.
3.  Go to `/admin` to verify the CMS is working.
    - Because this is a fresh database, you may need to create your first user.

## Troubleshooting

- **Build Fails on Types**: If the build fails due to TypeScript errors, ensure your `payload-types.ts` is generated or ignored during build. Usually, `npm run build` handles this.
- **Database Connection**: Verify `POSTGRES_URL` is correct.
- **Images Not Loading**: Double-check your S3 credentials and CORS policies on your S3 bucket to allow the Railway domain.
