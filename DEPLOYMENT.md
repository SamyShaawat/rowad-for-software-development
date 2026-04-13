# cPanel Deployment Guide

## 🚀 How Auto-Deploy Works

When you push to `main` branch:
1. GitHub Actions runs quality checks (lint, typecheck, build)
2. Runs E2E tests
3. Builds production bundle
4. Pushes build artifacts to `deploy` branch
5. **cPanel auto-deploys from `deploy` branch**

## ⚠️ IMPORTANT: File Overwrite Warning

**The deployment WILL OVERWRITE existing files in `/home/irowad/public_html`**

### What Gets Overwritten:
- Any files with the same name (e.g., `index.html`, `.htaccess`, `.next/`)
- Folders that exist in both old and new deployment
- JavaScript, CSS, and asset files

### What's Preserved:
- Files unique to `public_html` (not in the repo)
- Custom uploads, images, or documents not in the git repo
- Database files and configs (if any)

### Automatic Backup:
✅ **Before each deployment, the system:**
1. Creates a backup of ALL existing files in `/home/irowad/backups/`
2. Names it with timestamp: `public_html_backup_20260413_143022`
3. Then deploys new files (overwriting old ones)

### To Restore Old Files:
```bash
# SSH into cPanel
ssh irowad@your-server.com

# List available backups
ls -la /home/irowad/backups/

# Restore specific backup
rm -rf /home/irowad/public_html/*
cp -R /home/irowad/backups/public_html_backup_20260413_143022/* /home/irowad/public_html/
```

## ⚙️ One-Time cPanel Setup (Required)

You MUST do this ONCE in cPanel:

### Step 1: Access cPanel Git Version Control
1. Log into cPanel: `https://irowad.com/cpanel`
2. Go to **Files** → **Git Version Control**
3. You should see `rowad-for-software-development` repository

### Step 2: Configure Auto-Deploy
1. Click **Manage** next to your repository
2. Set **Deployment Branch** to: `deploy`
3. Set **Deployment Path** to: `/home/irowad/public_html`
4. **Enable "Auto-Deploy"** (toggle switch)
5. Click **Save**

### Step 3: Verify Setup
1. Push a test change to `main`
2. Check GitHub Actions tab for workflow status
3. Wait 2-3 minutes
4. Visit your website to confirm changes

## 🔧 Required GitHub Secrets

Go to: `GitHub Repo → Settings → Secrets and variables → Actions`

Add these secrets:
- `GH_PAT` - Personal Access Token with repo permissions
- `CPANEL_HOST` - Your cPanel server IP/domain
- `CPANEL_USER` - Your cPanel username (`irowad`)
- `CPANEL_SSH_KEY` - SSH private key for cPanel access (optional if using auto-deploy)

## 🐛 Troubleshooting

### Changes not appearing after push to main?

1. **Check GitHub Actions**: 
   - Go to `Actions` tab
   - Click on latest workflow run
   - Check if all jobs passed

2. **Check deploy branch**:
   ```bash
   git fetch origin
   git log origin/deploy -n 5
   ```

3. **Check cPanel Git**:
   - Log into cPanel
   - Go to Git Version Control
   - Check if repository is on `deploy` branch
   - Click **Pull** manually if needed

4. **Check file permissions**:
   ```bash
   # In cPanel Terminal or SSH
   chmod -R 755 /home/irowad/public_html
   ```

### "Auto-Deploy" option not showing in cPanel?

Some cPanel versions don't have auto-deploy. Use this workaround:

1. Create a webhook in cPanel:
   - Go to **Git Version Control**
   - Click your repository
   - Look for **Webhook URL**
   - Copy the URL

2. Add webhook to GitHub:
   - Go to `Repo Settings → Webhooks`
   - Add new webhook
   - Payload URL: `[cPanel webhook URL]`
   - Content type: `application/json`
   - Events: `Pushes to deploy branch`

### Still not working?

Run manual deployment:
```bash
# SSH into cPanel
ssh irowad@your-server.com

# Navigate to repo
cd /home/irowad/repositories/rowad-for-software-development

# Pull latest from deploy branch
git fetch origin
git reset --hard origin/deploy

# Copy to public_html (with backup)
cp -R /home/irowad/public_html /home/irowad/backups/public_html_backup_$(date +%Y%m%d_%H%M%S)
cp -Rf * /home/irowad/public_html/
```

## 📝 Deployment Flow

```
Developer pushes to main
        ↓
GitHub Actions (CI checks)
        ↓
Build production bundle
        ↓
Push to deploy branch
        ↓
📦 BACKUP existing files
        ↓
cPanel detects new commit
        ↓
Auto-pulls from deploy branch
        ↓
⚠️  Files OVERWRITTEN (backup saved)
        ↓
✅ Live on rowad.com
```

## ⚡ Quick Commands

Check deployment status:
```bash
./scripts/check-deploy.sh
```

Force re-deploy:
```bash
git commit --allow-empty -m "ci: trigger redeploy"
git push origin main
```

Check build output:
```bash
ls -la build/
```

List backups:
```bash
ssh irowad@your-server.com "ls -la /home/irowad/backups/"
```

Restore from backup:
```bash
ssh irowad@your-server.com
cd /home/irowad/backups
ls -la  # find the backup you want
rm -rf /home/irowad/public_html/*
cp -R public_html_backup_YYYYMMDD_HHMMSS/* /home/irowad/public_html/
```
