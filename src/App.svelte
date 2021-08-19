<script>
  import { Router, Route } from "svelte-navigator";

  import Intro from "./components/Intro.svelte";
  import Content from "./components/Content.svelte";
  import Projects from "./components/Projects.svelte";
  import Links from "./components/Links.svelte";

  import Calculator from "./components/Calculator.svelte"

  import Constants from "./Constants";

  let showIntro = true;
  setTimeout(() => (showIntro = false), Constants.introTime + 1000);

  let showContainer = false;
  setTimeout(() => (showContainer = true), Constants.introTime);
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <Router>
    <Route path="/" primary={false}>
      {#if showIntro}
        <Intro />
      {/if}
      {#if showContainer}
        <div class="container">
          <Content />
          <Projects />
          <Links />
        </div>
      {/if}
    </Route>
    <Route path="/calculator" primary={false}>
      <div class="container">
        <Calculator />
      </div>
    </Route>
  </Router>
</main>

<style>
  :global(:root) {
    --accent: #9739de;
  }

  :global(body) {
    font-family: Inconsolata;
    margin: 0;
    padding: 0;
  }

  :global(a) {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  :global(a:hover) {
    text-decoration: underline;
    color: var(--accent);
  }

  :global(h1) {
    margin-top: 50px;
  }

  :global(::selection) {
    background-color: var(--accent);
    color: white;
  }

  .container {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.1rem;
  }

  @media (max-width: 620px) {
    .container {
      width: 90%;
    }
  }
</style>
