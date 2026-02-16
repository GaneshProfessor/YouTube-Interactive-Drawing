# Firefox Add-ons Publishing Guide (100% FREE!)

## 🦊 Step-by-Step Guide to Publish on Firefox

### Step 1: Create Firefox Developer Account (FREE!)

1. Go to: https://addons.mozilla.org/developers/
2. Click "Register" or "Log in"
3. Create account with:
   - Email
   - Username
   - Password
4. Verify your email
5. **No payment required!** ✅

### Step 2: Prepare Your Extension for Firefox

Your extension should work on Firefox as-is, but let's verify:

1. **Test in Firefox first:**
   - Open Firefox
   - Go to `about:debugging#/runtime/this-firefox`
   - Click "Load Temporary Add-on"
   - Select `manifest.json` from `browser-extension` folder
   - Go to https://youtube.com/watch?v=yd9fobYl2o8
   - Test if drawing works

2. **If it works, you're ready!** If not, let me know what errors you see.

### Step 3: Create ZIP File

1. Go to `browser-extension` folder
2. Select ALL files:
   - manifest.json
   - content.js
   - overlay.css
   - popup.html
   - icon16.png
   - icon48.png
   - icon128.png

3. Right-click → "Send to" → "Compressed (zipped) folder"
4. Name it: `youtube-drawing-firefox.zip`

**Important:** Files must be at ROOT of ZIP, not in a subfolder!

### Step 4: Submit to Firefox Add-ons

1. **Go to Developer Hub:**
   - https://addons.mozilla.org/developers/addon/submit/distribution

2. **Choose Distribution:**
   - Select "On this site" (recommended)
   - Click "Continue"

3. **Upload Your Add-on:**
   - Click "Select a file"
   - Upload `youtube-drawing-firefox.zip`
   - Wait for automatic validation
   - Fix any errors if they appear (usually none)

4. **Fill in Details:**

**Name:**
```
YouTube Interactive Drawing
```

**Add-on URL:**
```
youtube-interactive-drawing
```
(This will be: addons.mozilla.org/firefox/addon/youtube-interactive-drawing)

**Summary (250 characters max):**
```
Draw on YouTube videos in real-time! Click and drag to create colorful artwork directly on videos. Features 7 colors, export functionality, and works in fullscreen mode. Transform any enabled YouTube video into your personal canvas!
```

**Description:**
```
🎨 YouTube Interactive Drawing

Transform YouTube videos into interactive drawing canvases! This extension allows you to draw directly on YouTube videos using your mouse and keyboard.

✨ Features:
• Click and drag to draw on enabled YouTube videos
• 7 vibrant colors to choose from (press keys 1-7)
• Real-time drawing with smooth brush strokes
• Color changes based on video timeline
• Clear canvas and export your artwork as PNG
• Works in normal and fullscreen mode
• Lightweight and fast - no performance impact

🎮 How to Use:
1. Visit an interactive YouTube video
2. Click and drag on the video to draw
3. Press number keys 1-7 to change colors:
   - 1: White
   - 2: Pink
   - 3: Yellow
   - 4: Green
   - 5: Cyan
   - 6: Red
   - 7: Blue
   - 8: End marker
4. Use the control panel on the right to clear or export your drawing

⌨️ Keyboard Shortcuts:
• 1-7: Change drawing colors
• 8: Jump to end section
• Arrow keys: Navigate video timeline
• Space: Pause/Play video

🎯 Perfect For:
• Creative expression and digital art
• Art practice and experimentation
• Fun video annotations
• Interactive learning experiences
• Collaborative drawing sessions

🔒 Privacy & Security:
This extension only activates on specific YouTube videos. It does not:
- Collect any personal data
- Track your browsing activity
- Access your YouTube account
- Store any information on external servers

All drawings are stored locally in your browser.

📺 Try it on our demo video:
https://youtube.com/watch?v=yd9fobYl2o8

🌟 Open Source:
This extension is built with vanilla JavaScript and respects your privacy.

Created with ❤️ for creative minds!

Need help? Found a bug? Contact us through the support section.
```

**Categories:**
- Select: "Other"
- Or: "Entertainment"

**Tags:**
```
youtube, drawing, canvas, art, interactive, creative, video, annotation
```

**License:**
```
MIT License (or choose another)
```

**Version:**
```
1.0
```

**Version Notes:**
```
Initial release with core drawing functionality
```

5. **Add Screenshots:**

You need at least 1 screenshot (ideally 3-5):

**What to capture:**
- Extension in action on YouTube
- Drawing canvas with artwork
- Color palette visible
- Different colors being used

**Size:** Any size, but recommended: 1280x800 or 640x400

**How to take:**
- Windows: Win + Shift + S
- Or use Snipping Tool

6. **Privacy Policy:**

Create a simple privacy policy:

```
Privacy Policy for YouTube Interactive Drawing

Last Updated: [Today's Date]

Data Collection:
This extension does NOT collect, store, or transmit any personal information.

What the extension does:
- Adds a drawing canvas overlay to specific YouTube videos
- Stores your drawings locally in your browser only
- Does not track your browsing activity
- Does not access your YouTube account
- Does not collect any personal data

Permissions Used:
- activeTab: Required to inject the drawing canvas onto YouTube video pages
- storage: Required to save extension settings locally in your browser

Third-Party Services:
This extension does not use any third-party services or analytics.

Contact:
[Your Email]

This extension is provided "as is" without warranty of any kind.
```

**Host this on:**
- GitHub Pages (create a privacy.html file)
- Or paste directly in the submission form

7. **Technical Details:**

**This add-on is experimental:**
```
No (uncheck)
```

**Requires payment:**
```
No (uncheck)
```

**Has a privacy policy:**
```
Yes (check)
```

**Privacy Policy URL:**
```
[Your GitHub Pages URL or paste policy above]
```

### Step 5: Submit for Review

1. Review all information
2. Click "Submit Version"
3. Wait for Mozilla's review

**Review Time:**
- Usually 1-7 days
- Sometimes faster (24-48 hours)
- You'll get email updates

### Step 6: After Approval

Once approved:
1. Your extension will be live at:
   ```
   https://addons.mozilla.org/firefox/addon/youtube-interactive-drawing/
   ```

2. Share this URL everywhere!

3. Users can install with ONE CLICK (no Developer Mode needed!)

## 📢 Promoting Your Firefox Extension

### Update Your YouTube Video Description:

```
🎨 Want to draw on this video?

🦊 Firefox Users:
Install: https://addons.mozilla.org/firefox/addon/youtube-interactive-drawing/
(One-click install - FREE!)

💻 Chrome Users:
Install: [GitHub link]
(Manual install - FREE!)

Then refresh this page and start drawing!
```

### Share on Social Media:

**Twitter/X:**
```
🎨 Just published my Firefox extension: YouTube Interactive Drawing!

Draw on YouTube videos in real-time with 7 colors 🌈

Install (FREE): [firefox-addon-link]
Demo: https://youtube.com/watch?v=yd9fobYl2o8

#Firefox #WebExtension #CreativeCoding
```

**Reddit:**
- r/firefox
- r/FirefoxAddons
- r/InternetIsBeautiful

## 🔄 Updating Your Extension

When you want to update:

1. Make changes to extension files
2. Update version in `manifest.json`:
   ```json
   "version": "1.1"
   ```
3. Create new ZIP file
4. Go to: https://addons.mozilla.org/developers/addons
5. Click your extension
6. Click "Upload New Version"
7. Submit for review
8. Users auto-update within hours!

## ⚠️ Common Issues & Solutions

**Issue: "Manifest validation failed"**
- Solution: Make sure manifest.json is valid JSON
- Use: https://jsonlint.com to validate

**Issue: "Missing icon"**
- Solution: Verify all icon files are in ZIP

**Issue: "Permission not justified"**
- Solution: Explain why you need each permission in description

**Issue: "Extension doesn't work in Firefox"**
- Solution: Test in `about:debugging` first
- Check browser console for errors (F12)

## 💡 Tips for Success

✅ **Do:**
- Test thoroughly in Firefox before submitting
- Provide clear screenshots
- Write detailed description
- Respond to user reviews
- Update regularly

❌ **Don't:**
- Submit untested extensions
- Use misleading descriptions
- Ignore user feedback
- Violate Mozilla's policies

## 📊 After Publishing

You can track:
- Number of users
- Daily downloads
- Ratings and reviews
- Version statistics

Access at: https://addons.mozilla.org/developers/addons

## 🎉 Congratulations!

Once published, you'll have:
✅ A live Firefox extension
✅ FREE distribution
✅ Automatic updates
✅ Professional appearance
✅ Portfolio project

**Total Cost: $0** 🎉

---

## 🚀 Quick Checklist

- [ ] Create Firefox Developer account (FREE)
- [ ] Test extension in Firefox
- [ ] Create ZIP file
- [ ] Take 3-5 screenshots
- [ ] Write privacy policy
- [ ] Submit to Firefox Add-ons
- [ ] Wait for approval (1-7 days)
- [ ] Share your extension!

---

**Ready to submit? Let's do this!** 🦊

Need help with any step? Just ask!
