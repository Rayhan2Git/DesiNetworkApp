# DesiNetwork — Android APK Build Guide

## What's in this project
- `www/index.html` — Combined DesiNet (Netflix) + DesiScroll (TikTok) app
- `capacitor.config.json` — Capacitor Android config
- `package.json` — Dependencies

## Requirements (install these first)
- [Node.js 18+](https://nodejs.org)
- [Android Studio](https://developer.android.com/studio) (install, then open once to finish setup)
- Java JDK 17 (Android Studio installs this automatically)

## Build Steps

### Step 1 — Install dependencies
```bash
cd DesiNetwork
npm install
```

### Step 2 — Add Android platform
```bash
npx cap add android
npx cap sync android
```

### Step 3 — Open in Android Studio
```bash
npx cap open android
```

### Step 4 — Build APK in Android Studio
1. Wait for Gradle to finish syncing (bottom status bar)
2. Menu: **Build → Build Bundle(s) / APK(s) → Build APK(s)**
3. Click **"locate"** in the popup — APK is at:
   `android/app/build/outputs/apk/debug/app-debug.apk`

### Step 5 — Install on your phone
- Enable "Install from unknown sources" in Android Settings → Security
- Transfer the APK to your phone and tap to install

## App Features
- **DesiNet tab** — Netflix-style grid, search, source filter, video player with queue
- **DesiScroll tab** — TikTok-style vertical swipe feed, auto-play, mute toggle
- **Saved tab** — All bookmarked videos, persisted across sessions
- Auto-loads latest videos from your M3U playlist on GitHub
- All videos/thumbnails proxied via your Cloudflare worker

## Troubleshooting

### Videos not loading
- Check Cloudflare worker is running: `https://feedscroll.rayhandox.workers.dev?url=TEST`
- Make sure M3U has content: `https://raw.githubusercontent.com/Rayhan2Git/Feed/main/playlist.m3u`

### Thumbnails not showing
- Add `www.*` domains to your Cloudflare worker's allowed hosts list

### Gradle sync fails
- In Android Studio: File → Invalidate Caches → Restart
