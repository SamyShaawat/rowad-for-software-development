# 🚀 Quick Deployment Guide for cPanel (No SSH, No Auto-Deploy)

## Your Situation
- ❌ SSH access: **Disabled** on your hosting
- ❌ Auto-deploy toggle: **Not available** in cPanel
- ✅ Git Version Control: **Available**

---

## ✅ Solution 1: Manual Pull (Easiest - Works Now)

### After Every Push to `main`:

1. **Wait 3-5 minutes** for GitHub Actions to build
2. **Log into cPanel**
3. Go to **Git Version Control**
4. Click on `rowad-for-software-development`
5. Click **Pull / Deploy** button
6. Select branch: `deploy`
7. Click **Pull**

**That's it!** Your site updates immediately.

---

## ⚡ Solution 2: Webhook (Automatic - Setup Required)

### Step 1: Upload the Webhook Script

1. **In cPanel**, go to **File Manager**
2. Navigate to: `/home/irowad/public_html/`
3. Upload the file: `scripts/deploy-webhook.php`
4. Rename it to just: `deploy.php` (move to root of public_html)
5. Set permissions: Right-click → Change Permissions → `755`

### Step 2: Edit the Secret

1. Open `deploy.php` in cPanel File Manager
2. Find this line:
   ```php
   $DEPLOY_SECRET = 'rowad-deploy-2026-secret';
   ```
3. Change to your own secret:
   ```php
   $DEPLOY_SECRET = 'your-secret-password-here';
   ```

### Step 3: Add Webhook to GitHub

1. Go to: https://github.com/SamyShaawat/rowad-for-software-development/settings/hooks/new

2. Fill in:
   - **Payload URL**: `https://rowad.com/deploy.php?secret=your-secret-password-here`
   - **Content type**: `application/json`
   - **Secret**: `your-secret-password-here` (same as above)
   
3. Under **"Which events would you like to trigger this webhook?"**:
   - Select: **Just the push event**
   
4. Click **Add webhook**

### Step 4: Test It

1. Push to `main`:
   ```bash
   git commit --allow-empty -m "test: trigger webhook deployment"
   git push origin main
   ```

2. Wait 5 minutes

3. Check if it worked:
   - Visit: https://rowad.com
   - Or check the log: `/home/irowad/deployment-log.txt`

---

## 🔍 How to Check Deployment Status

### Check GitHub Actions
```
https://github.com/SamyShaawat/rowad-for-software-development/actions
```

Look for green checkmarks ✅

### Check Deployment Log (if using webhook)
In cPanel File Manager:
```
/home/irowad/deployment-log.txt
```

### Check What's on Deploy Branch
```bash
git fetch origin
git log origin/deploy -n 5 --oneline
```

---

## 🐛 Troubleshooting

### Site Not Updating?

1. **Check if GitHub Actions finished**:
   - Go to Actions tab
   - Wait for green checkmark

2. **Check deploy branch**:
   ```bash
   git log origin/deploy -n 1
   ```

3. **Pull manually from cPanel**:
   - Git Version Control → Pull/Deploy → Select `deploy` → Pull

### Webhook Not Working?

1. **Check webhook deliveries**:
   - Go to: Repo Settings → Webhooks
   - Click your webhook
   - Check "Recent Deliveries"
   - Look for ❌ (failed) or ✅ (success)

2. **Test the webhook directly**:
   ```
   https://rowad.com/deploy.php?secret=your-secret-password-here
   ```
   Should return JSON with deployment status

3. **Check file permissions**:
   - `deploy.php` should be `755`
   - Repository path should be readable

### Still Stuck?

Use **Solution 1** (manual pull) - it always works!

---

## 📝 Quick Reference

### Deploy Branch
- **Name**: `deploy`
- **Updated by**: GitHub Actions (automatic)
- **Contains**: Production-ready build

### Repository Path (on cPanel)
```
/home/irowad/repositories/rowad-for-software-development
```

### Website Root
```
/home/irowad/public_html
```

### Deployment Command (if doing manually)
```bash
cd /home/irowad/repositories/rowad-for-software-development
git fetch origin deploy
git reset --hard origin/deploy
cp -Rf * /home/irowad/public_html/
cp -Rf .* /home/irowad/public_html/ 2>/dev/null
```

---

## 🎯 Recommended Workflow

For now, use **Solution 1** (manual pull):
1. Push to `main`
2. Wait 3-5 minutes
3. Log into cPanel
4. Click Pull/Deploy
5. Done!

It's only ONE extra click and it's reliable! 🚀
