export default function embedYouTubeVideo(url) {
  const videoID = url.split('watch?v=')[1];
  return `https://www.youtube.com/embed/${videoID}`;
}
