# Random Video Background Implementation

## Overview
The hero section now randomly selects a background video from available videos in `/public/TheLadder/videos/` on each page load, providing dynamic visual variety while maintaining performance.

## Current Implementation

### Available Videos
- **Graduate.mp4** - Graduation ceremony representing achievement and success
- **Handing_Keys.mp4** - Handing over keys representing new opportunities and housing

### Features Implemented
- ✅ **Random Selection**: Chooses different video on each page refresh
- ✅ **Performance Optimized**: Lazy loading after 1.5s delay
- ✅ **Fallback System**: Graceful degradation with animated gradient background
- ✅ **Multi-Format Support**: Attempts WebM first, falls back to MP4
- ✅ **Error Handling**: Console logging and fallback on video failure
- ✅ **Development Logging**: Shows selected video in browser console during development

## Technical Details

### Video Selection Logic
```javascript
// Randomly selects from available videos on component mount
const randomIndex = Math.floor(Math.random() * backgroundVideos.length)
const randomVideo = backgroundVideos[randomIndex]
```

### HTML5 Video Implementation
```html
<video autoPlay muted loop playsInline preload="none">
  <source src="/TheLladder/videos/Graduate.webm" type="video/webm" />
  <source src="/TheLadder/videos/Graduate.mp4" type="video/mp4" />
</video>
```

### Performance Features
- **Preload="none"**: Prevents automatic download
- **Lazy Loading**: 1.5 second delay after critical content
- **Opacity Transition**: Smooth 1s fade-in when video loads
- **Fallback Background**: Instant gradient display while loading

## Adding New Videos

### Step 1: Add Video Files
Place optimized video files in `/public/TheLadder/videos/`:
- **Primary**: `video-name.mp4` (H.264, under 4MB)
- **Optional**: `video-name.webm` (VP9, under 3MB for better compression)

### Step 2: Update Component
Edit `/src/components/hero-compact.jsx` and add to the `backgroundVideos` array:

```javascript
const backgroundVideos = [
  {
    filename: 'Graduate.mp4',
    description: 'Graduation ceremony - representing achievement and success'
  },
  {
    filename: 'Handing_Keys.mp4', 
    description: 'Handing over keys - representing new opportunities and housing'
  },
  {
    filename: 'your-new-video.mp4',
    description: 'Description of what the video represents'
  }
]
```

## Video Optimization Guidelines

### Technical Specifications
- **Format**: MP4 (H.264) primary, WebM (VP9) optional
- **Resolution**: 1280x720 (720p) recommended, 1920x1080 (1080p) maximum
- **Frame Rate**: 24-30fps maximum
- **Duration**: 15-20 seconds with seamless loop
- **File Size**: Under 4MB per video, under 3MB for WebM
- **Audio**: Remove completely to save bandwidth

### Content Guidelines
- **Subtle Motion**: Gentle movements that don't compete with text
- **Brand Appropriate**: Professional, uplifting, community-focused
- **Loop Seamlessly**: First and last frames should match for smooth looping
- **Readability**: Ensure text overlay remains readable with gradient overlay

### Optimization Commands
```bash
# Create optimized MP4
ffmpeg -i input.mp4 -c:v libx264 -b:v 2M -an \
  -vf "scale=1280:720" -r 24 -t 20 -preset slow output.mp4

# Create optimized WebM (optional)
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 1.5M -an \
  -vf "scale=1280:720" -r 24 -t 20 output.webm
```

## Testing the Implementation

### Browser Console
During development, check the browser console for:
```
🎥 Selected background video: Graduate.mp4 (1/2)
   Description: Graduation ceremony - representing achievement and success
```

### Manual Testing
1. Refresh the page multiple times
2. Verify different videos load randomly
3. Check fallback works if videos fail to load
4. Test on mobile devices for performance

## Performance Impact

### Before vs After
- **Bundle Size**: Minimal increase (1.4 kB)
- **Initial Load**: No impact (lazy loaded)
- **Core Web Vitals**: Protected by delayed loading
- **Fallback**: Instant gradient if video fails

### Browser Support
- **WebM**: Modern browsers (Chrome, Firefox, Edge)
- **MP4**: Universal browser support
- **Fallback**: All browsers (animated gradient)

## Troubleshooting

### Video Not Loading
1. Check file paths in `/public/TheLadder/videos/`
2. Verify video formats (MP4 required, WebM optional)
3. Check browser console for error messages
4. Test with smaller file sizes if performance issues

### Random Selection Not Working
1. Clear browser cache
2. Check `backgroundVideos` array in component
3. Verify React state updates in browser dev tools

### Performance Issues
1. Reduce video file sizes
2. Consider removing WebM versions if not needed
3. Increase lazy loading delay if necessary

This implementation provides an engaging, performant hero background that automatically varies on each visit while maintaining The Ladder's professional appearance and fast loading times.