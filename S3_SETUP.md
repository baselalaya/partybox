# S3 / Object Storage Setup (Critical for Vercel)

You are hosting your site on Vercel. Vercel is "serverless", meaning it **cannot** verify or store user uploads (like images) on its own "disk". Any image uploaded during `npm run seed` or via the Admin Panel will **disappear** immediately if you don't use external storage.

To fix the missing images, you must connect Payload to an Object Storage service (like AWS S3, Supabase Storage, or Cloudflare R2).

## Option A: Use Supabase Storage (Easiest since you already have Supabase)

### 1. Create a Bucket in Supabase
1. Go to your **Supabase Dashboard** -> **Storage** (folder icon on left).
2. Click **New Bucket**.
3. Name it: `partybox-media`.
4. **IMPORTANT**: Switch "Public bucket" to **ON**.
5. Click **Save**.

### 2. Get Your S3 Credentials from Supabase
1. Go to **Project Settings** (gear icon) -> **Storage**.
2. Look for the **S3 Connection** section.
3. You will need:
   - **Endpoint**: (e.g., `https://[project-ref].supabase.co/storage/v1/s3`)
   - **Access Key ID**
   - **Secret Access Key**
   - **Region**: (This is usually your project region, e.g., `eu-central-1`. If unsure, check your Project Settings -> General -> Region).

### 3. Update Environment Variables
You need to add these variables to **BOTH** your local `.env` and Vercel.

**For Vercel:**
1. Go to Vercel Project -> Settings -> Environment Variables.
2. Add the following:

| Key | Value (Example) |
| :--- | :--- |
| `S3_ENABLED` | `true` |
| `S3_BUCKET` | `partybox-media` |
| `S3_ACCESS_KEY_ID` | `[Your Access Key ID]` |
| `S3_SECRET_ACCESS_KEY` | `[Your Secret Access Key]` |
| `S3_ENDPOINT` | `https://[project-ref].supabase.co/storage/v1/s3` |
| `S3_REGION` | `[Your Region, e.g. us-east-1]` |

**For Local `.env`:**
Add the same lines to your local file.

### 4. Re-run Seed
Once the variables are set locally:

```bash
npm run seed
```

Watch the console. It should verify `Payload Config: S3 Keys present? true`.
The script will upload the images to your new Supabase bucket.

### 5. Redeploy
Redeploy on Vercel so the live site picks up the new S3 configuration.
