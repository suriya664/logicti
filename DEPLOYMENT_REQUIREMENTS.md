# Deployment Requirements Guide

This guide covers all requirements for deploying your logistics company React app to GitHub Actions and Vercel.

## 📋 Requirements Checklist

### ✅ 1. Node.js Version
- **Required:** Node.js >= 20.0.0
- **Current in package.json:** Specified in `engines` field
- **Why:** `react-router-dom@7.10.1` requires Node.js 20+

### ✅ 2. Package Dependencies
All dependencies are configured in `package.json`:
- React 19.2.1
- React Router DOM 7.10.1 (requires Node 20+)
- React Scripts 5.0.1
- TypeScript 4.9.5 (compatible with react-scripts)

### ✅ 3. Configuration Files

#### `.npmrc`
- Handles peer dependency conflicts automatically
- Contains: `legacy-peer-deps=true`

#### `vercel.json`
- Configured for Vercel deployment
- Includes SPA routing rewrites

#### `.github/workflows/deploy.yml`
- Configured for GitHub Actions
- Uses Node.js 20
- Includes `--legacy-peer-deps` flag

## 🚀 Deployment Options

### Option 1: Deploy to Vercel (Recommended - Free & Easy)

#### Requirements:
1. GitHub repository pushed to GitHub
2. Vercel account (free)

#### Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository: `suriya664/logicti`
   - Vercel will auto-detect the settings from `vercel.json`
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` branch will trigger a new deployment
   - You'll get a unique URL like: `https://logicti-xyz.vercel.app`
   - You can add a custom domain later

#### Vercel Settings (Auto-detected):
- **Framework Preset:** Create React App
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install --legacy-peer-deps`
- **Node Version:** 20.x (auto-detected from engines)

### Option 2: Deploy via GitHub Actions (GitHub Pages)

#### Requirements:
1. GitHub repository
2. GitHub Pages enabled in repository settings

#### Steps:

1. **Enable GitHub Pages:**
   - Go to repository: `https://github.com/suriya664/logicti`
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Configure GitHub Actions"
   git push origin main
   ```

3. **GitHub Actions will:**
   - Automatically run on every push to `main`
   - Install dependencies with Node.js 20
   - Build your project
   - Deploy to GitHub Pages

4. **Access your site:**
   - URL: `https://suriya664.github.io/logicti`
   - May take 2-5 minutes after first deployment

#### GitHub Actions Workflow:
- **Triggers:** Push to `main` or `master` branch
- **Node Version:** 20
- **Build:** `npm run build`
- **Deploy:** GitHub Pages automatically

## 🔧 Local Development Setup

### Install Requirements:
```bash
# Make sure you have Node.js 20+ installed
node --version  # Should show v20.x.x or higher

# If not installed, download from: https://nodejs.org/
```

### Install Dependencies:
```bash
npm install --legacy-peer-deps
```

### Run Locally:
```bash
npm start
# Opens http://localhost:3000
```

### Build for Production:
```bash
npm run build
# Creates optimized build in ./build folder
```

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [x] Node.js version >= 20.0.0 specified in `package.json`
- [x] All dependencies installed without errors
- [x] `.npmrc` file exists with `legacy-peer-deps=true`
- [x] `vercel.json` configured (for Vercel)
- [x] GitHub Actions workflow updated (for GitHub Pages)
- [x] `package-lock.json` is up to date
- [x] Code pushed to GitHub repository
- [x] Repository is public or Vercel has access (for Vercel)

## 🐛 Troubleshooting

### Error: "Unsupported engine - node >=20.0.0 required"
**Solution:** 
- Update your local Node.js to version 20+
- Download from: https://nodejs.org/
- Or use `nvm` to switch versions: `nvm install 20 && nvm use 20`

### Error: "npm ci can only install when lock file is in sync"
**Solution:**
```bash
# Delete node_modules and package-lock.json, then reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Error: "Peer dependency conflicts"
**Solution:** 
- The `.npmrc` file should handle this automatically
- Make sure `.npmrc` contains: `legacy-peer-deps=true`
- Run: `npm install --legacy-peer-deps`

### GitHub Actions Build Fails
**Solution:**
- Check workflow file uses Node.js 20
- Verify `--legacy-peer-deps` flag is in install command
- Check Actions tab in GitHub for detailed error logs

### Vercel Deployment Fails
**Solution:**
- Check Vercel build logs in dashboard
- Verify `vercel.json` exists and is correct
- Ensure Node.js 20 is being used (Vercel auto-detects from engines)
- Check that all environment variables are set if needed

## 📝 Environment Variables (If Needed)

If you add backend APIs or services later, set environment variables:

**For Vercel:**
- Go to Project Settings → Environment Variables
- Add variables there

**For GitHub Actions:**
- Add to workflow file using `secrets`
- Or use GitHub Secrets in repository settings

## 🌐 Custom Domain Setup

### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### GitHub Pages:
1. Go to repository Settings → Pages
2. Add custom domain
3. Configure DNS with your domain provider

## 📊 Deployment Status

### Current Configuration:
- ✅ Node.js: 20.x (required)
- ✅ React: 19.2.1
- ✅ React Router: 7.10.1
- ✅ Build System: Create React App
- ✅ Package Manager: npm
- ✅ Peer Dependencies: Handled via `.npmrc`

### Ready for Deployment:
- ✅ Vercel deployment configuration complete
- ✅ GitHub Actions workflow configured
- ✅ All dependencies compatible
- ✅ Build process tested

## 🎯 Quick Deploy Commands

```bash
# 1. Make sure everything is committed
git add .
git commit -m "Ready for deployment"

# 2. Push to GitHub
git push origin main

# 3. For Vercel: Just connect repo at vercel.com
#    For GitHub Pages: Already configured via Actions
```

## 📞 Support

If you encounter issues:
1. Check the build logs in Vercel/GitHub Actions
2. Verify Node.js version matches requirements
3. Ensure all files are pushed to GitHub
4. Check that `.npmrc` and `vercel.json` are in the repository

---

**Last Updated:** Configuration is ready for deployment!
**Repository:** https://github.com/suriya664/logicti
