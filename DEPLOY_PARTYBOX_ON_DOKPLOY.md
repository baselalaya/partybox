# Deploy Partybox on Dokploy

This guide outlines the specific steps to deploy the **Partybox** application (Next.js + Payload CMS) using Dokploy.

## Prerequisites

1.  **Dokploy Installed**: You must have Dokploy running on your VPS (see [DOKPLOY_DEPLOYMENT_GUIDE.md](./DOKPLOY_DEPLOYMENT_GUIDE.md)).
2.  **S3 Compatible Storage**: Since Partybox uses `@payloadcms/plugin-cloud-storage`, you need an S3 bucket (AWS S3, Cloudflare R2, or a self-hosted MinIO instance).

---

## Step 1: Create the Database

Partybox requires a PostgreSQL database.

1.  Go to your Dokploy Dashboard project.
2.  Click on **Databases** -> **Create Database**.
3.  Select **PostgreSQL**.
4.  Give it a name (e.g., `partybox-db`) and click **Create**.
5.  Once created, go to the **Environment** tab of the database to view the credentials.
6.  Construct your connection string. It usually looks like this:
    ```
    postgresql://<user>:<password>@<internal_host>:5432/<database_name>
    ```
    > **Note**: Use the **Internal Host** (often the service name like `postgresql-partybox-db`) so the app connects over the internal Docker network.

---

## Step 2: Configure Object Storage (S3)

You need the following credentials from your S3 provider (AWS, Cloudflare R2, or MinIO):

-   `S3_BUCKET`
-   `S3_ACCESS_KEY_ID`
-   `S3_SECRET_ACCESS_KEY`
-   `S3_REGION` (e.g., `eu-central-1`)
-   `S3_ENDPOINT` (Optional: Only if using MinIO or non-AWS S3)

---

## Step 3: Deploy the Application

1.  **Create Application**:
    -   Go to **Applications** -> **Create Application**.
    -   Name: `partybox`.
    -   Provider: **Git**.
    -   Repo URL: `https://github.com/baselalaya/partybox` (or your private repo details).
    -   Branch: `main`.

2.  **Build Settings**:
    -   **Build Type**: `Nixpacks` (Recommended for Next.js).
    -   **Base Directory**: `/` (Leave default).

3.  **Environment Variables**:
    Go to the **Environment** tab and add the following:

    | Variable | Value | Description |
    | :--- | :--- | :--- |
    | `NODE_ENV` | `production` | Optimizes build for production. |
    | `PAYLOAD_SECRET` | `<random_long_string>` | Used to sign cookies/tokens. Generate a secure one. |
    | `POSTGRES_URL` | `postgresql://...` | The connection string from Step 1. |
    | `DATABASE_URL` | `postgresql://...` | Same as POSTGRES_URL (for safety). |
    | `S3_BUCKET` | `<your_bucket>` | S3 Bucket name. |
    | `S3_ACCESS_KEY_ID` | `<your_key>` | S3 Access Key. |
    | `S3_SECRET_ACCESS_KEY` | `<your_secret>` | S3 Secret Key. |
    | `S3_REGION` | `<region>` | S3 Region. |
    | `NEXT_PUBLIC_SERVER_URL` | `https://partybox.huae.ae` | The full URL where the app will live. |

4.  **Deploy**:
    -   Go to the **Deployments** tab.
    -   Click **Deploy**.
    -   Dokploy will pull the code, detect it's a Next.js app via Nixpacks, install dependencies, run `npm run build`, and start the server.

---

## Step 4: Configure Domain

1.  Go to the **Domains** tab in your Application settings.
2.  Add your domain (e.g., `partybox.uae`).
3.  Ensure your DNS `A` record points to your VPS IP.
4.  Dokploy will automatically generate an SSL certificate via Let's Encrypt.

---

## Troubleshooting

### "Error: P1001: Can't reach database server"
-   Ensure you used the **Internal Host** for the `POSTGRES_URL`.
-   Ensure the database container is running.

### "Error: Connection to S3 timed out"
-   Verify your S3 credentials are correct.
-   If using AWS, ensure the bucket policy allows access.

### Build Fails
-   Check the **Logs** tab in deployments.
-   If it fails on `npm run build`, it might be a memory issue. Next.js builds are heavy. Ensure your VPS has at least 2GB RAM + Swap.
