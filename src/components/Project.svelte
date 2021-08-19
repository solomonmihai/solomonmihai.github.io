<script>
  export let title;
  export let image;
  export let url;
</script>

<div class="hoverTrigger" on:click={() => window.open(url, "_blank")}>
  <div class="box">
    <div class="imgWrapper" style="background-image: url('{image}')" />
    <p>{title}</p>
  </div>
</div>

<style>
  @keyframes appear {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  .box {
    width: 220px;
    height: 220px;

    padding: 15px;
    margin: 20px;

    border: 1px solid black;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease;

    opacity: 0;
    animation: appear 1.5s ease forwards;
  }

  .imgWrapper {
    border-radius: 200px;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease;
  }

  .hoverTrigger:hover > .box {
    border: 1px solid var(--accent);
  }

  .hoverTrigger:hover > .box > p {
    text-decoration: underline;
    color: var(--accent);
  }
</style>
