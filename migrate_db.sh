#!/bin/bash

# migrate_db.sh
# Usage: ./migrate_db.sh [SOURCE_URL] [DEST_URL]

# 0. ENSURE pg_dump IS FOUND (Add Homebrew libpq to PATH)
export PATH="/opt/homebrew/opt/libpq/bin:$PATH"

# Load environment variables safely (ignoring comments)
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

SOURCE_DB_URL="$1"
DEST_DB_URL="$2"

echo "--------------------------------------------------------"
echo "   🎉 PartyBox Database Migration Tool (Supabase -> New DB)"
echo "--------------------------------------------------------"

# 1. Get Source URL
if [ -z "$SOURCE_DB_URL" ]; then
    if [ -n "$POSTGRES_URL" ]; then
        echo "Found POSTGRES_URL in .env (Supabase):"
        echo "  $POSTGRES_URL"
        read -p "Use this as SOURCE? (y/n): " use_env
        if [ "$use_env" = "y" ]; then
            SOURCE_DB_URL="$POSTGRES_URL"
        fi
    fi
fi

if [ -z "$SOURCE_DB_URL" ]; then
    read -p "Enter SOURCE DB URL (Supabase/Internal): " SOURCE_DB_URL
fi

# 2. Get Destination URL
if [ -z "$DEST_DB_URL" ]; then
    echo ""
    echo "⚠️  IMPORTANT: "
    echo "    1. Go to your Database Service Dashboard."
    echo "    2. Find 'External Connection String' (Make sure access is enabled/public)."
    echo "    3. Paste it below."
    echo ""
    read -p "Enter DESTINATION DB URL: " DEST_DB_URL
fi

if [ -z "$SOURCE_DB_URL" ] || [ -z "$DEST_DB_URL" ]; then
    echo "❌ Error: Both Source and Destination URLs are required."
    exit 1
fi

echo ""
echo "🚀 Starting Migration..."
echo "FROM: Source (Supabase)"
echo "TO:   Destination (New DB)"
echo ""
read -p "⚠️  Are you sure you want to overwrite the destination? (y/n): " confirm
if [ "$confirm" != "y" ]; then
    echo "Aborted."
    exit 0
fi

# 3. Create Backup File
BACKUP_FILE="backup_migrate_$(date +%Y%m%d_%H%M%S).sql"

echo "📦 Dumping source database..."

# Try explicit path first, then fall back to system path
if [ -f "/opt/homebrew/opt/libpq/bin/pg_dump" ]; then
    PG_DUMP="/opt/homebrew/opt/libpq/bin/pg_dump"
    PSQL="/opt/homebrew/opt/libpq/bin/psql"
else
    PG_DUMP="pg_dump"
    PSQL="psql"
fi

# Dump
"$PG_DUMP" "$SOURCE_DB_URL" --no-owner --no-acl --clean --if-exists > "$BACKUP_FILE"

if [ $? -ne 0 ]; then
    echo "❌ Backup failed. Check credentials or install libpq (brew install libpq)."
    rm "$BACKUP_FILE"
    exit 1
fi

# 4. Restore to Destination
echo "📥 Restoring to destination database..."
"$PSQL" "$DEST_DB_URL" < "$BACKUP_FILE"

if [ $? -eq 0 ]; then
    echo "✅ Restore successful!"
    echo "🎉 Migration complete!"
    echo "👉 Now: Update your Frontend Service 'POSTGRES_URL' to point to the new Internal DB URL."
else
    echo "❌ Restore failed. Check connection string."
fi

# Cleanup
# rm "$BACKUP_FILE" 
echo "ℹ️  Backup file saved locally: $BACKUP_FILE"
