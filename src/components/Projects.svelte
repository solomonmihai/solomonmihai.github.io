<script>
  import SpotifyLyricsThumbnail from "../images/spotify-lyrics.png";
  import Project from "./Project.svelte";
</script>

<div>
  <h1>* Projects</h1>

  <div class="container">
    <Project
      title="Spotify Lyrics"
      image={SpotifyLyricsThumbnail}
      url="https://spotifylyrics.netlify.app/"
    />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
