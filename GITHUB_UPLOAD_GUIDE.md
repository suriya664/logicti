# How to Upload TrackPulse Logistics to GitHub

## Step 1: Install Git (if not installed)
1. Download Git from: https://git-scm.com/download/win
2. Install with default settings
3. Restart your terminal/command prompt

## Step 2: Initialize Git Repository

Open terminal in your project folder (`C:\Reactjs\logisticcompany`) and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: TrackPulse Logistics website"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com
2. Sign in or create an account
3. Click the **"+"** icon in the top right → **"New repository"**
4. Repository name: `trackpulse-logistics` (or any name you prefer)
5. Description: "TrackPulse Logistics - Premium logistics solutions website"
6. Choose **Public** or **Private**
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **"Create repository"**

## Step 4: Connect and Push to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/trackpulse-logistics.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 5: Get Your Repository Link

After pushing, your repository will be available at:
```
https://github.com/YOUR_USERNAME/trackpulse-logistics
```

## Alternative: Using GitHub Desktop (Easier Method)

1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. Click **"File"** → **"Add Local Repository"**
4. Browse to: `C:\Reactjs\logisticcompany`
5. Click **"Publish repository"**
6. Choose name and visibility
7. Click **"Publish repository"**

## Your Repository Link Format:
```
https://github.com/YOUR_USERNAME/REPOSITORY_NAME
```

## Important Notes:
- Make sure `.gitignore` is in place (it already exists)
- Never commit `node_modules` folder (already in .gitignore)
- Your repository link will be: `https://github.com/YOUR_USERNAME/trackpulse-logistics`

