<script>
  import Constants from "../Constants";

  import TextAnim from "./TextAnim.svelte";

  const heading = "$ Mihai Solomon";
  const subHeading = "> freelance programmer";

  let startSecond = false;
  setTimeout(() => (startSecond = true), heading.length * 60);

  let hide = false;
  setTimeout(() => {
    hide = true;
  }, Constants.introTime);
</script>

<div class="intro {hide ? 'hide' : ''}">
  <div class="wrapper">
    <TextAnim clazz="heading" text={heading} />
    {#if startSecond}
      <TextAnim clazz="sub-heading" text={subHeading} />
    {/if}
  </div>
</div>

<style>
  .intro {
    background-color: black;
    color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    transition: 0.9s ease all;
  }

  .wrapper {
    width: 80vw;
    height: 30vh;
    margin-left: auto;
    margin-right: auto;
  }

  .hide {
    opacity: 0.5;
    margin-top: -100vh;
  }
</style>
