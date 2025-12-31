#!/bin/bash

# migrate_db.sh
# Usage: ./migrate_db.sh [SOURCE_URL] [DEST_URL]

# Load environment variables safely (ignoring comments)
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

SOURCE_DB_URL="$1"
DEST_DB_URL="$2"

echo "--------------------------------------------------------"
echo "   🎉 PartyBox Database Migration Tool (Supabase -> Dokploy)"
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
    echo "⚠️  IMPORTANT: For the Destination URL, if you are running this on your laptop,"
    echo "    you CANNOT use the internal Docker hostname (e.g. 'partyboxae-database-...')."
    echo "    You must use the VPS IP Address and the exposed Public Port."
    echo ""
    read -p "Enter DESTINATION DB URL (Dokploy/External): " DEST_DB_URL
fi

if [ -z "$SOURCE_DB_URL" ] || [ -z "$DEST_DB_URL" ]; then
    echo "❌ Error: Both Source and Destination URLs are required."
    exit 1
fi

echo ""
echo "🚀 Starting Migration..."
echo "FROM: Source DB"
echo "TO:   Destination DB"
echo ""
read -p "⚠️  Are you sure you want to overwrite the destination? (y/n): " confirm
if [ "$confirm" != "y" ]; then
    echo "Aborted."
    exit 0
fi

# 3. Create Backup File
BACKUP_FILE="backup_$(date +%Y%m%d_%H%M%S).sql"

echo "📦 Dumping source database..."

# Check if we should use Docker (if pg_dump is too old or missing)
USE_DOCKER=false
if command -v docker &> /dev/null; then
    USE_DOCKER=true
    echo "   (Detected Docker, utilizing postgres:17 container to avoid version mismatch errors)"
else
    echo "   (Docker not found, attempting to use local pg_dump)"
fi

if [ "$USE_DOCKER" = true ]; then
    # Use Docker to run pg_dump (Handles specific Postgres versions like 17)
    # We pass the URL directly. ensure we don't print it to logs.
    if docker run --rm postgres:17 pg_dump "$SOURCE_DB_URL" --no-owner --no-acl --clean --if-exists > "$BACKUP_FILE"; then
        echo "✅ Backup successful (via Docker)!"
    else
        echo "❌ Backup failed."
        rm "$BACKUP_FILE"
        exit 1
    fi
else
    # Use local pg_dump
    if pg_dump "$SOURCE_DB_URL" --no-owner --no-acl --clean --if-exists > "$BACKUP_FILE"; then
        echo "✅ Backup successful (via local pg_dump)!"
    else
        echo "❌ Backup failed. Your local Postgres version might be older than Supabase (v17)."
        echo "   Try installing Docker or upgrading postgresql locally."
        rm "$BACKUP_FILE"
        exit 1
    fi
fi

# 4. Restore to Destination
echo "📥 Restoring to destination database..."
# Check connectivity to destination first
if ! psql "$DEST_DB_URL" -c "\q" 2>/dev/null; then
     echo "❌ Connection to Destination DB failed. ignoring..."
     echo "   Continuing anyway in case it's just a psql client quirk, but be warned."
fi

if [ "$USE_DOCKER" = true ]; then
     # Use Docker to restore as well for consistency
     # We need to pipe the file INTO the container
     if cat "$BACKUP_FILE" | docker run --rm -i postgres:17 psql "$DEST_DB_URL"; then
         echo "✅ Restore successful (via Docker)!"
         echo "🎉 Migration complete!"
     else
         echo "❌ Restore failed."
         exit 1
     fi
else
    if psql "$DEST_DB_URL" < "$BACKUP_FILE"; then
        echo "✅ Restore successful!"
        echo "🎉 Migration complete!"
    else
        echo "❌ Restore failed."
    fi
fi

# Cleanup
# rm "$BACKUP_FILE" 
echo "ℹ️  Backup file saved locally: $BACKUP_FILE"
