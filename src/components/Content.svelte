<script>
  import WordCarousel from "./WordCarousel.svelte";
</script>

<div>
  <p class="heading"><a href="/">$ Mihai Solomon</a></p>
</div>
<div style="margin-bottom: 20px">
  <p>
    Hi there, I'm Mihai, I'm a self taught software developer from <a
      href="https://en.wikipedia.org/wiki/Romania">Romania</a
    >
  </p>
  <p>
    I can build you a <WordCarousel words={["website", "game", "script"]} />
  </p>
  <h1>* Experience</h1>
  <p>
    For the last 2 years I've been working as a freelance programmer with multiple clients from all
    over the globe.
  </p>
  <p>
    My developer experience resumes to building web applications using React, Typescript and P5.js,
    games and automation scripts using Python.
  </p>
  <p>I also have some experience using TailwindCSS, Svelte, C/C++ with OpenGL and C#.</p>
</div>

<style>
  .heading {
    font-size: 3rem;
  }
</style>
