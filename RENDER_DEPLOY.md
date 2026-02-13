# Deploy Portfolio to Render

## Step 1: Push the latest code

The API URL has been fixed for production. Push to GitHub:

```bash
git add .
git commit -m "Fix API URL for production deployment"
git push
```

## Step 2: Create a Render account

1. Go to [https://render.com](https://render.com)
2. Click **Get Started for Free**
3. Sign up with your **GitHub account** (easiest for connecting your repo)

## Step 3: Create a new Web Service

1. Click **New +** → **Web Service**
2. Connect your GitHub account if prompted
3. Find and select the **portfolio** repository
4. Click **Connect**

## Step 4: Configure the service

Use these settings:

| Setting | Value |
|---------|-------|
| **Name** | `portfolio` (or any name you like) |
| **Region** | Choose closest to you (e.g. Oregon, Frankfurt) |
| **Branch** | `main` |
| **Runtime** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |

**Important:** Render sets the `PORT` environment variable automatically. Your app already reads it.

## Step 5: Deploy

1. Click **Create Web Service**
2. Render will build and deploy (takes 3–5 minutes)
3. When done, you'll get a URL like: `https://portfolio-xxxx.onrender.com`

## Step 6: Free tier note

- Your app will **spin down** after 15 minutes of no traffic
- The first visit after spin-down may take 30–60 seconds to load
- This is normal for the free tier

## Troubleshooting

- **Build fails:** Check the build logs; ensure `npm run build` works locally
- **App crashes:** Check the runtime logs; ensure `npm start` works locally
- **404 on refresh:** Render handles SPAs by default; if issues persist, we may need to add a redirect rule
