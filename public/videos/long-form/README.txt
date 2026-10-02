LONG-FORM VIDEOS: drop files here and they appear on the Video Editing portfolio page
======================================================================================

Put each video in the folder that matches its type:

  faceless/         <- your 2 faceless videos
  promotional/      <- your 4 promotional videos
  talking-head/     <- your 2 talking-head videos

That is it. On the next build (npm run dev, npm run build, or a Vercel deploy)
the page picks them up by itself: title, length, filter button and player.

HOW EACH CARD IS NAMED
  File name  ->  Title shown
  01-brand-launch-film.mp4  ->  "Brand Launch Film"   (the 01- only sets the order)

OPTIONAL COVER IMAGE
  Add a JPG with the SAME name next to the video:  brand-launch-film.mp4 + brand-launch-film.jpg
  (Without it, the page shows a frame from the video.)

FILE SIZE (important)
  GitHub rejects any file over 100 MB. Keep each video under about 50 MB:
  1080p, H.264 MP4. Compress with HandBrake (preset "Fast 1080p30") or:

    ffmpeg -i input.mp4 -vf "scale=-2:1080" -c:v libx264 -crf 26 -preset slow -c:a aac -b:a 128k -movflags +faststart output.mp4

TOO BIG? USE YOUTUBE INSTEAD
  Upload to YouTube (Unlisted is fine) and list it in links.json in this folder:

  [
    { "category": "promotional", "title": "Brand Launch Film", "url": "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    { "category": "talking-head", "title": "Founder Interview", "url": "https://vimeo.com/123456789" }
  ]

  The cover image and the player are created automatically.
