# Hero Background Video Specifications

## Optimal Video Requirements for Fast Loading

Based on 2024 web performance best practices, the hero background video should meet these specifications:

### File Format & Compression
- **Primary**: WebM format (VP9 codec) for 30-50% better compression than MP4
- **Fallback**: MP4 format (H.264 codec) for Safari/legacy browser support
- **Resolution**: 1920x1080 (1080p) maximum, 1280x720 (720p) recommended for balance
- **Frame Rate**: 24fps or 30fps maximum
- **Bitrate**: 1-2 Mbps for good quality/size balance

### Content Specifications
- **Duration**: 15-20 seconds maximum (loops seamlessly)
- **Audio**: Remove entirely to save 20% bandwidth
- **Content**: Subtle, abstract motion that doesn't distract from text
- **Style**: Professional, brand-appropriate visuals

### File Size Targets
- **WebM version**: 2-3 MB maximum
- **MP4 version**: 3-4 MB maximum
- **Combined**: Under 6 MB total for both formats

### Optimization Commands

#### Create WebM version (VP9 codec):
```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 1.5M -c:a libvorbis -b:a 128k -an \
  -vf "scale=1280:720" -r 24 -t 20 hero-background.webm
```

#### Create MP4 version (H.264 codec):
```bash
ffmpeg -i input.mp4 -c:v libx264 -b:v 2M -an \
  -vf "scale=1280:720" -r 24 -t 20 -preset slow hero-background.mp4
```

### Performance Features Implemented

1. **Lazy Loading**: Video loads 1.5s after critical content
2. **Preload="none"**: Prevents automatic download
3. **Fallback Background**: Instant gradient while video loads
4. **SVG Poster**: Inline gradient poster for instant display
5. **Error Handling**: Graceful fallback if video fails
6. **Progressive Enhancement**: Site works perfectly without video

### Content Suggestions

The video should feature:
- Subtle upward motion (representing "climbing the ladder")
- Professional business/community imagery
- Birmingham city elements (optional)
- Soft, gradual movements that don't compete with text
- Warm, welcoming atmosphere matching The Ladder's mission

### File Placement
- Place optimized video files in `/public/TheLadder/videos/`
- Files: `hero-background.webm` and `hero-background.mp4`
- Total combined size should be under 6MB for optimal loading

The implementation prioritizes user experience with instant fallback backgrounds and progressive video enhancement that doesn't impact Core Web Vitals scores.