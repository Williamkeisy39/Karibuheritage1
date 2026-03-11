# Add Video to Hero Section

Since external video URLs have CORS issues, you need to add a local video file:

## Steps:

1. Download a short airport/welcome video (MP4 format, under 10MB recommended)
   - Suggested sources: Pexels, Pixabay, or your own footage
   - Example: Search "airport welcome" or "tourist arrival" on pexels.com

2. Save the video to this folder:
   `public/videos/hero.mp4`

3. Update the video source in `src/app/page.tsx`:

Replace line 247:
```
<source src="https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4" type="video/mp4" />
```

With:
```
<source src="/videos/hero.mp4" type="video/mp4" />
```

4. The video should:
   - Be short (10-30 seconds)
   - Loop seamlessly
   - Show tourists/welcome scene at airport
   - Be optimized for web (compressed)

## Alternative (No Video):
If you can't get a video, I can set up an animated slideshow of images instead that auto-rotates through airport/welcome photos.

Would you like me to:
A) Set up image slideshow instead?
B) Wait for you to add a local video file?
