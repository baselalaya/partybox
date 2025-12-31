#!/bin/bash

# sync_prod_to_local.sh
# Usage: ./sync_prod_to_local.sh

# 1. Add libpq to PATH for this script session
export PATH="/opt/homebrew/opt/libpq/bin:$PATH"

# Load environment variables safely
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

echo "--------------------------------------------------------"
echo "   🔄 Sync Supabase to Local PartyBox DB"
echo "--------------------------------------------------------"

# 1. Source (Supabase)
SOURCE_DB_URL="$POSTGRES_URL"
if [ -z "$SOURCE_DB_URL" ]; then
    read -p "Enter SOURCE DB URL (Supabase): " SOURCE_DB_URL
fi

# 2. Destination (Local)
# Default assumes a local postgres running on 5432 with standard creds. 
DEFAULT_LOCAL="postgresql://postgres:postgres@localhost:5432/partybox"
read -p "Enter LOCAL DB URL [default: $DEFAULT_LOCAL]: " USER_LOCAL_URL

DEST_DB_URL="${USER_LOCAL_URL:-$DEFAULT_LOCAL}"

echo ""
echo "FROM: Supabase (Remote)"
echo "TO:   $DEST_DB_URL (Local)"
echo ""

# 3. Create Backup File
BACKUP_FILE="backup_supabase_$(date +%Y%m%d).sql"

echo "📦 Downloading data from Supabase..."
# Use pg_dump (now using the path we exported)
pg_dump "$SOURCE_DB_URL" --no-owner --no-acl --clean --if-exists > "$BACKUP_FILE"

if [ $? -eq 0 ]; then
    echo "✅ Backup downloaded: $BACKUP_FILE"
else
    echo "❌ Backup failed."
    exit 1
fi

# 4. Restore to Local
echo "📥 Restoring to Local DB..."
psql "$DEST_DB_URL" < "$BACKUP_FILE"

if [ $? -eq 0 ]; then
    echo "✅ Restore successful!"
    echo "🎉 Local database is now synced with Supabase!"
    # Optional: rm "$BACKUP_FILE"
else
    echo "❌ Restore failed. Make sure your local Postgres is running and the database exists."
    echo "   To create it: createdb partybox"
fi
