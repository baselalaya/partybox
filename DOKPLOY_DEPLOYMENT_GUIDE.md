# Dokploy Deployment Guide

This guide provides a step-by-step walkthrough for deploying Dokploy on a Virtual Private Server (VPS), based on the official [Dokploy Documentation](https://docs.dokploy.com/docs/core).

## Prerequisites

Before starting, ensure you have a VPS that meets the following requirements:

-   **RAM**: Minimum 2GB (Recommended for smooth Docker builds)
-   **Disk Space**: Minimum 30GB
-   **OS**: Standard Linux distribution (Ubuntu/Debian recommended)
-   **Ports**: The following ports must be free and accessible:
    -   `80` (HTTP - used by Traefik)
    -   `443` (HTTPS - used by Traefik)
    -   `3000` (Dokploy Web Interface)

> **Note**: If you have existing services using these ports, stop them before proceeding or the installation will fail.

## Step 1: Connect to your VPS

SSH into your server using your terminal:

```bash
ssh root@your-server-ip
```

## Step 2: Install Dokploy

Dokploy uses a simple installation script that automatically sets up Docker (if not already present) and configures the necessary services.

Run the following command:

```bash
curl -sSL https://dokploy.com/install.sh | sh
```

Wait for the script to complete. It will install Docker, pull the required images, and start the Dokploy container.

## Step 3: Access the Dashboard

Once the installation is complete, open your web browser and navigate to:

```
http://your-server-ip:3000
```

> **Important**: Ensure your VPS firewall allows traffic on port 3000.

## Step 4: Initial Configuration

1.  **Create Admin Account**: You will be greeted with a setup screen. specific details to create your administrative account. This will be your primary login for managing deployments.

## Step 5: Secure Your Installation (Recommended)

Running Dokploy on an IP address with port 3000 is not recommended for production. You should configure a domain and SSL.

### 1. Configure a Domain
Navigate to the **Domains** section in the Dokploy dashboard to set up a custom domain (e.g., `app.yourdomain.com`) with automatic SSL/TLS via Let's Encrypt.

### 2. Disable Direct IP Access
**WARNING**: Only do this AFTER you have verified that your custom domain is working correctly. If you do this before setting up a domain, you will lose access to the dashboard.

To check if your domain is working, try accessing the dashboard via `https://your-domain.com`.

If successful, run the following command on your VPS to close port 3000 to the public:

```bash
docker service update --publish-rm "published=3000,target=3000,mode=host" dokploy
```

This ensures the dashboard is only accessible via your secure domain.

## Troubleshooting

-   **Installation Fails**: Check if ports 80, 443, or 3000 are in use by another service (like Apache or Nginx).
-   **Cannot Access Dashboard**: Verify your VPS firewall settings (Security Groups, UFW) allow inbound traffic on port 3000.
