# Supabase Connection Guide for PartyBox

The deployment failed because the application is trying to connect to a local database (`127.0.0.1`) which does not exist in the Vercel cloud environment. You typically used a local Postgres database during development, but for production, you need a hosted database like **Supabase**.

## Step 1: Create a Supabase Project
1. Go to [database.new](https://database.new) and create a new project.
2. Save the database password you create; you will need it for the connection string.

## Step 2: Get the Connection String
1. Once the project is created, go to **Project Settings** (gear icon) -> **Database**.
2. Under **Connection string**, make sure **URI** is selected.
3. Copy the string. It will look like this:
   `postgresql://postgres:[YOUR-PASSWORD]@db.project-ref.supabase.co:5432/postgres`

   > **Crucial for Vercel:** Supabase provides a "Transaction Pooler" connection string (port 6543) which is better for Serverless environments like Next.js/Vercel. If you see an option for **"Transaction Pooler"** or port `6543` instead of `5432`, use that one. It usually looks like `postgresql://postgres.[ref]:[password]@aws-0-region.pooler.supabase.com:6543/postgres`.

## Step 3: Update Vercel Environment Variables
1. Go to your Vercel Dashboard -> Select the **partybox** project.
2. Go to **Settings** -> **Environment Variables**.
3. Add a new variable:
   - **Key:** `POSTGRES_URL`
   - **Value:** (The connection string you copied from Supabase, replace `[YOUR-PASSWORD]` with your actual password)
4. (Verification) Ensure you also have `PAYLOAD_SECRET` set in Vercel. If not, generate a random string and add it.

## Step 4: Redeploy
1. Go to the **Deployments** tab in Vercel.
2. Find the failed deployment, click the three dots button, and select **Redeploy**.
3. Do **not** use the "Use existing build cache" option if possible, or just redeploy normally. The new build will pick up the environment variables.

## Step 5: (Optional) Local Development
To use the Supabase database locally, update your local `.env` file:
```env
POSTGRES_URL="your-supabase-connection-string"
```
