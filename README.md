# 🎨 YouTube Interactive Drawing

Transform YouTube videos into interactive drawing canvases! Draw directly on YouTube videos in real-time with this browser extension.

![Version](https://img.shields.io/badge/version-1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Firefox](https://img.shields.io/badge/Firefox-Approved-orange)

## ✨ Features

- 🖱️ **Real-time Drawing**: Click and drag to draw on YouTube videos
- 🎨 **7 Vibrant Colors**: Press keys 1-7 to switch colors instantly
- ⌨️ **Keyboard Shortcuts**: Quick color changes and timeline navigation
- 🖼️ **Export Artwork**: Save your drawings as PNG images
- 🎬 **Fullscreen Support**: Works perfectly in fullscreen mode
- 🔒 **Privacy-Focused**: Zero data collection, all local storage
- ⚡ **Lightweight**: No performance impact on YouTube

## 🎮 How to Use

1. Install the extension (see installation instructions below)
2. Visit an interactive YouTube video
3. Click and drag on the video to draw
4. Press number keys 1-7 to change colors:
   - **1**: White
   - **2**: Pink
   - **3**: Yellow
   - **4**: Green
   - **5**: Cyan
   - **6**: Red
   - **7**: Blue
   - **8**: End marker (jump to end section)
5. Use the control panel to clear or export your drawing

## 🚀 Installation

### Firefox (Recommended - One-Click Install)

Install from Mozilla Add-ons:
```
https://addons.mozilla.org/firefox/addon/youtube-interactive-drawing/
```

### Chrome (Manual Install)

1. Download this repository as ZIP
2. Extract the `browser-extension` folder
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" (top right)
5. Click "Load unpacked"
6. Select the `browser-extension` folder
7. Done! Visit the demo video below

## 📺 Demo Video

Try it on our blank canvas video:
```
https://youtube.com/watch?v=yd9fobYl2o8
```

## 🛠️ Technical Details

### Built With
- Vanilla JavaScript (no frameworks)
- HTML5 Canvas API
- Chrome Extension Manifest V3
- WebExtensions API (Firefox compatible)

### File Structure
```
browser-extension/
├── manifest.json       # Extension configuration
├── content.js          # Main drawing logic
├── overlay.css         # UI styling
├── popup.html          # Extension popup
└── icons/              # Extension icons
```

### Permissions Used
- `activeTab`: Inject drawing canvas on YouTube pages
- `storage`: Save extension settings locally

## 🎯 How It Works

1. Extension detects specific YouTube video IDs
2. Injects a transparent canvas overlay on the video player
3. Captures mouse events for drawing
4. Monitors video timeline to sync colors
5. Stores drawings locally in browser
6. Exports canvas as PNG on demand

## 🔒 Privacy & Security

- ✅ **No data collection**: Zero tracking or analytics
- ✅ **No external servers**: Everything runs locally
- ✅ **No account required**: Works immediately after install
- ✅ **Open source**: Full code transparency
- ✅ **Secure DOM methods**: No innerHTML usage

## 🌟 Screenshots

![Drawing Interface](screenshots/drawing-interface.png)
![Color Palette](screenshots/color-palette.png)
![Fullscreen Mode](screenshots/fullscreen.png)

## 📝 Development

### Prerequisites
- Modern web browser (Chrome/Firefox)
- Basic knowledge of JavaScript

### Local Development
1. Clone this repository:
   ```bash
   git clone https://github.com/GaneshProfessor/YouTube-Interactive-Drawing.git
   ```

2. Load extension in browser:
   - **Firefox**: `about:debugging` → Load Temporary Add-on
   - **Chrome**: `chrome://extensions` → Load unpacked

3. Make changes to files in `browser-extension/`

4. Reload extension to test changes

### Adding New Video IDs

Edit `content.js` and add video IDs to the array:
```javascript
const INTERACTIVE_VIDEO_IDS = [
    'yd9fobYl2o8',  // Your video ID here
    'hwovImkeZFU'
];
```

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Firerama's YouTube interactive experiments
- Built with ❤️ for creative minds
- Thanks to the Mozilla and Chrome extension communities

## 📞 Contact

- GitHub: [@GaneshProfessor](https://github.com/GaneshProfessor)
- Project Link: [https://github.com/GaneshProfessor/YouTube-Interactive-Drawing](https://github.com/GaneshProfessor/YouTube-Interactive-Drawing)

## 🎉 Support

If you like this project:
- ⭐ Star this repository
- 🐦 Share on social media
- 🎨 Create and share your artwork
- 🔗 Link to this project

---

**Made with 🎨 by Ganesh**

*Transform YouTube into your canvas!*
