# How to Install the YouTube Drawing Extension

## For Users (Chrome/Edge):

### Step 1: Download the Extension
1. Download the `browser-extension` folder
2. Extract it to a permanent location (e.g., `C:\Extensions\youtube-drawing`)

### Step 2: Install in Chrome/Edge
1. Open Chrome/Edge
2. Go to `chrome://extensions/` (or `edge://extensions/`)
3. Enable "Developer mode" (toggle in top-right)
4. Click "Load unpacked"
5. Select the `browser-extension` folder
6. The extension is now installed!

### Step 3: Use It
1. Go to YouTube: https://youtube.com/watch?v=yd9fobYl2o8
2. The drawing canvas will automatically appear
3. Click and drag to draw!
4. Press 2-8 to change colors

## For Firefox:

### Temporary Installation (Testing):
1. Open Firefox
2. Go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select `manifest.json` from the `browser-extension` folder
5. Extension loads (will be removed when Firefox closes)

### Permanent Installation:
Firefox requires extensions to be signed. You'll need to:
1. Create a Firefox Developer account
2. Submit extension for review
3. Get it signed and published

## Creating Icons:

The extension needs icon files. You can:

### Option 1: Use Online Tool
1. Go to https://www.favicon-generator.org/
2. Upload an image (drawing/brush icon)
3. Generate 16x16, 48x48, 128x128 PNG files
4. Save as `icon16.png`, `icon48.png`, `icon128.png`
5. Put them in the `browser-extension` folder

### Option 2: Use Simple Colored Squares (Quick Test)
Create simple colored PNG files:
- 16x16 pixels - red square
- 48x48 pixels - red square  
- 128x128 pixels - red square

## Publishing to Chrome Web Store:

### Requirements:
- Google Developer account ($5 one-time fee)
- Extension icons (16, 48, 128px)
- Screenshots
- Privacy policy
- Promotional images

### Steps:
1. Go to https://chrome.google.com/webstore/devconsole
2. Pay $5 developer fee (one-time)
3. Click "New Item"
4. Upload ZIP of `browser-extension` folder
5. Fill in store listing:
   - Name: "YouTube Interactive Drawing"
   - Description: "Draw on YouTube videos in real-time!"
   - Category: Fun
   - Screenshots: 1280x800 or 640x400
6. Submit for review (takes 1-3 days)
7. Once approved, it's live!

## Sharing Your Extension:

### Before Publishing:
Share the folder directly:
1. ZIP the `browser-extension` folder
2. Share via Google Drive/Dropbox
3. Users install manually (steps above)

### After Publishing:
Share the Chrome Web Store link:
```
https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID
```

## Testing:

1. Install extension (steps above)
2. Go to https://youtube.com/watch?v=yd9fobYl2o8
3. You should see:
   - Drawing canvas overlay
   - Control panel on the right
   - Ability to draw with mouse
   - Color changes with keys 2-8

## Troubleshooting:

**Extension not loading:**
- Check Developer mode is enabled
- Reload the extension
- Check browser console for errors (F12)

**Canvas not appearing:**
- Make sure you're on the correct video ID
- Check if video player has loaded
- Try refreshing the page

**Drawing not working:**
- Click on the video player area first
- Make sure canvas is visible
- Check browser console for errors

## Updating the Extension:

1. Make changes to files in `browser-extension` folder
2. Go to `chrome://extensions/`
3. Click the reload icon on your extension
4. Refresh the YouTube page

## Adding More Videos:

Edit `content.js` line 6-9:
```javascript
const INTERACTIVE_VIDEO_IDS = [
    'yd9fobYl2o8',  // Your video
    'ANOTHER_VIDEO_ID',  // Add more
];
```

## Next Steps:

1. Create icon files (16, 48, 128px)
2. Test the extension locally
3. Take screenshots for store listing
4. Publish to Chrome Web Store
5. Share with the world!

---

**Need help?** Check the browser console (F12) for error messages.
