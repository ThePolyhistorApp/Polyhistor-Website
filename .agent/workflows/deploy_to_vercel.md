---
description: How to link Environment Variables to Vercel Deployment
---

# Deploying Environment Variables to Vercel

Since your project uses `next/third-parties` and `firebase`, your secrets need to be available during the build process on Vercel.

## Option 1: Vercel Dashboard (Recommended)
This is the standard and easiest way. Vercel automatically pulls these variables when you push code to GitHub.

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Select your project **"ThePolyHistor-Website"**.
3.  Go to **Settings** > **Environment Variables**.
4.  Copy the contents of your `.env.local` file.
5.  Paste them into the key/value fields (Vercel allows bulk paste).
6.  Click **Save**.
7.  **Trigger a new deployment** (push a commit to main) for changes to take effect.

## Option 2: GitHub Actions (Advanced)
If you specifically want to deploy via GitHub Actions, create the file `.github/workflows/deploy.yml`:

```yaml
name: Vercel Production Deployment
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
  # Map your secrets here if not using Vercel System Env Vars
  NEXT_PUBLIC_FIREBASE_API_KEY: ${{ secrets.NEXT_PUBLIC_FIREBASE_API_KEY }}
  # ... repeat for all variables

on:
  push:
    branches:
      - main

jobs:
  Deploy-Production:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
      - name: Build Project Artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

**Required GitHub Secrets:**
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- plus all your Firebase keys
