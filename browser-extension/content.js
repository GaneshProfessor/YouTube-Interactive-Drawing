// YouTube Interactive Drawing Extension
// This script runs on YouTube video pages

// Target video IDs that should have drawing enabled
const INTERACTIVE_VIDEO_IDS = [
    'jFTL-DU_he8',  // New video with music (100 seconds) - CURRENT
    'yd9fobYl2o8',  // Original blank canvas video
    'hwovImkeZFU'   // First test video
];

let canvas = null;
let ctx = null;
let isDrawing = false;
let currentColor = '#ffffff';
let dots = [];
let isInitialized = false;

// Color mapping with time ranges
const colorMap = {
    '1': '#ffffff',
    '2': '#ff00ff',
    '3': '#ffff00',
    '4': '#00ff00',
    '5': '#00ffff',
    '6': '#ff0000',
    '7': '#0000ff'
};

const timeRanges = {
    '1': { start: 0, end: 12.5 },      // 0-12.5s = White
    '2': { start: 12.5, end: 25 },     // 12.5-25s = Pink
    '3': { start: 25, end: 37.5 },     // 25-37.5s = Yellow
    '4': { start: 37.5, end: 50 },     // 37.5-50s = Green
    '5': { start: 50, end: 62.5 },     // 50-62.5s = Cyan
    '6': { start: 62.5, end: 75 },     // 62.5-75s = Red
    '7': { start: 75, end: 87.5 }      // 75-87.5s = Blue
    // 8 = END (87.5-100s) - no color, just end marker
};

// Check if current video should have drawing enabled
function isInteractiveVideo() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('v');
    return INTERACTIVE_VIDEO_IDS.includes(videoId);
}

// Initialize the drawing overlay
function initDrawingOverlay() {
    if (!isInteractiveVideo() || isInitialized) return;
    
    console.log('YouTube Interactive Drawing: Initializing...');
    
    // Wait for video element to load
    const checkVideo = setInterval(() => {
        const video = document.querySelector('video.html5-main-video');
        if (video && video.readyState >= 2) {
            clearInterval(checkVideo);
            setTimeout(() => setupCanvas(), 1000); // Wait a bit more for player to stabilize
        }
    }, 500);
}

function setupCanvas() {
    try {
        // Find the video element
        const video = document.querySelector('video.html5-main-video');
        if (!video) {
            console.error('Video element not found');
            return;
        }
        
        // Find the video container
        const videoContainer = video.parentElement;
        if (!videoContainer) {
            console.error('Video container not found');
            return;
        }
        
        // Create canvas overlay
        canvas = document.createElement('canvas');
        canvas.id = 'yt-drawing-canvas';
        
        // Position canvas over video - cover the ENTIRE video area
        const updateCanvasSize = () => {
            const rect = video.getBoundingClientRect();
            const containerRect = videoContainer.getBoundingClientRect();
            
            // Check if in fullscreen mode
            const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement;
            const controlsHeight = isFullscreen ? 60 : 48; // More space in fullscreen
            
            // Use the full video dimensions but leave space at bottom for controls
            canvas.width = rect.width;
            canvas.height = rect.height - controlsHeight;
            canvas.style.width = rect.width + 'px';
            canvas.style.height = (rect.height - controlsHeight) + 'px';
            
            console.log('Canvas size updated:', canvas.width, 'x', canvas.height, 'Fullscreen:', !!isFullscreen);
        };
        
        updateCanvasSize();
        
        // Style canvas - cover entire video
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '1000';
        canvas.style.pointerEvents = 'auto';
        canvas.style.cursor = 'crosshair';
        
        // Append canvas
        videoContainer.style.position = 'relative';
        videoContainer.appendChild(canvas);
        
        ctx = canvas.getContext('2d');
        
        // Setup event listeners
        setupDrawingEvents();
        setupKeyboardEvents();
        startTimeMonitoring();
        
        // Add control panel
        addControlPanel();
        
        // Handle resize
        window.addEventListener('resize', () => {
            updateCanvasSize();
            redrawCanvas();
        });
        
        // Handle fullscreen changes
        document.addEventListener('fullscreenchange', () => {
            setTimeout(() => {
                updateCanvasSize();
                redrawCanvas();
            }, 100);
        });
        
        document.addEventListener('webkitfullscreenchange', () => {
            setTimeout(() => {
                updateCanvasSize();
                redrawCanvas();
            }, 100);
        });
        
        // Handle theater/fullscreen mode changes
        const observer = new MutationObserver(() => {
            updateCanvasSize();
            redrawCanvas();
        });
        observer.observe(videoContainer, { attributes: true, attributeFilter: ['class', 'style'] });
        
        isInitialized = true;
        console.log('YouTube Interactive Drawing: Ready! Canvas covers full video area');
        
    } catch (error) {
        console.error('YouTube Interactive Drawing: Setup failed', error);
    }
}

function setupDrawingEvents() {
    if (!canvas) return;
    
    canvas.addEventListener('mousedown', (e) => {
        e.stopPropagation(); // Prevent YouTube from receiving the click
        e.preventDefault();
        isDrawing = true;
        draw(e);
    });
    
    canvas.addEventListener('mousemove', (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isDrawing) {
            draw(e);
        }
    });
    
    canvas.addEventListener('mouseup', (e) => {
        e.stopPropagation();
        e.preventDefault();
        isDrawing = false;
    });
    
    canvas.addEventListener('mouseleave', (e) => {
        e.stopPropagation();
        e.preventDefault();
        isDrawing = false;
    });
    
    canvas.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent YouTube pause/play on click
        e.preventDefault();
    });
    
    canvas.addEventListener('dblclick', (e) => {
        e.stopPropagation(); // Prevent YouTube fullscreen on double-click
        e.preventDefault();
    });
}

function draw(e) {
    if (!isDrawing || !ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    
    // Add dot
    dots.push({ x, y, color: currentColor });
    
    // Draw dot
    ctx.fillStyle = currentColor;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();
}

function redrawCanvas() {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 8, 0, Math.PI * 2);
        ctx.fill();
    });
}

function setupKeyboardEvents() {
    document.addEventListener('keydown', (e) => {
        const key = e.key;
        
        // Handle color selection (1-7)
        if (colorMap[key] && timeRanges[key]) {
            const video = document.querySelector('video.html5-main-video');
            if (video) {
                video.currentTime = timeRanges[key].start;
            }
        }
        
        // Handle END (8) - jump to end section with no color
        if (key === '8') {
            const video = document.querySelector('video.html5-main-video');
            if (video) {
                video.currentTime = 87.5; // Jump to end section
            }
        }
    });
}

function startTimeMonitoring() {
    setInterval(() => {
        const video = document.querySelector('video.html5-main-video');
        if (video) {
            updateColorBasedOnTime(video.currentTime);
        }
    }, 100);
}

function updateColorBasedOnTime(currentTime) {
    // Check if we're in the END section (after 87.5s)
    if (currentTime >= 87.5) {
        currentColor = '#ffffff'; // Default to white or you can disable drawing
        highlightActiveColor('8');
        return;
    }
    
    // Find which time range we're in
    for (const [key, range] of Object.entries(timeRanges)) {
        if (currentTime >= range.start && currentTime < range.end) {
            currentColor = colorMap[key];
            highlightActiveColor(key);
            break;
        }
    }
}

function highlightActiveColor(key) {
    const panel = document.getElementById('yt-drawing-panel');
    if (!panel) return;
    
    const colorItems = panel.querySelectorAll('.color-item');
    colorItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.key === key) {
            item.classList.add('active');
        }
    });
}

function addControlPanel() {
    // Remove old panel if exists
    const oldPanel = document.getElementById('yt-drawing-panel');
    if (oldPanel) oldPanel.remove();
    
    // Find video container
    const videoContainer = document.querySelector('video.html5-main-video')?.parentElement;
    if (!videoContainer) {
        console.error('Cannot add control panel: video container not found');
        return;
    }
    
    const panel = document.createElement('div');
    panel.id = 'yt-drawing-panel';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'panel-header';
    header.textContent = 'Color Palettes Order';
    panel.appendChild(header);
    
    // Create color list
    const colorList = document.createElement('div');
    colorList.className = 'color-list';
    
    // Add color items
    Object.entries(colorMap).forEach(([key, color]) => {
        const colorItem = document.createElement('div');
        colorItem.className = 'color-item';
        colorItem.dataset.key = key;
        
        const keyNumber = document.createElement('span');
        keyNumber.className = 'key-number';
        keyNumber.textContent = `${key} -`;
        
        const colorDot = document.createElement('div');
        colorDot.className = 'color-dot';
        colorDot.style.background = color;
        
        colorItem.appendChild(keyNumber);
        colorItem.appendChild(colorDot);
        colorList.appendChild(colorItem);
    });
    
    // Add END item
    const endItem = document.createElement('div');
    endItem.className = 'color-item end-item';
    const endKey = document.createElement('span');
    endKey.className = 'key-number';
    endKey.textContent = '8 - END';
    endItem.appendChild(endKey);
    colorList.appendChild(endItem);
    
    panel.appendChild(colorList);
    
    // Create instructions
    const instructions = document.createElement('div');
    instructions.className = 'instructions';
    
    const p1 = document.createElement('p');
    p1.textContent = 'Press number key to jump forward';
    const p2 = document.createElement('p');
    p2.textContent = 'Each number can only be used once';
    const p3 = document.createElement('p');
    p3.textContent = 'Pause to stop/start drawing';
    const p4 = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = 'Drag the brush to draw!';
    p4.appendChild(strong);
    
    instructions.appendChild(p1);
    instructions.appendChild(p2);
    instructions.appendChild(p3);
    instructions.appendChild(p4);
    panel.appendChild(instructions);
    
    // Create buttons
    const clearBtn = document.createElement('button');
    clearBtn.id = 'clear-drawing';
    clearBtn.textContent = 'Clear Canvas';
    
    const exportBtn = document.createElement('button');
    exportBtn.id = 'export-drawing';
    exportBtn.textContent = 'Export Drawing';
    
    panel.appendChild(clearBtn);
    panel.appendChild(exportBtn);
    
    // Append to video container (inside the video player)
    videoContainer.appendChild(panel);
    
    // Button handlers
    document.getElementById('clear-drawing').addEventListener('click', (e) => {
        e.stopPropagation();
        dots = [];
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });
    
    document.getElementById('export-drawing').addEventListener('click', (e) => {
        e.stopPropagation();
        if (!canvas) return;
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'youtube-drawing.png';
        link.href = dataURL;
        link.click();
    });
}

// Initialize when page loads
setTimeout(initDrawingOverlay, 2000);

// Re-initialize when navigating to new video (YouTube SPA)
let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        isInitialized = false;
        // Remove old elements
        const oldCanvas = document.getElementById('yt-drawing-canvas');
        if (oldCanvas) oldCanvas.remove();
        const oldPanel = document.getElementById('yt-drawing-panel');
        if (oldPanel) oldPanel.remove();
        // Reinitialize
        setTimeout(initDrawingOverlay, 2000);
    }
}).observe(document, { subtree: true, childList: true });
