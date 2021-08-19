<script>
  export let text;
  export let clazz = "";
  export let time = 50;

  let index = 0;

  const id = setInterval(() => {
    if (++index == text.length) {
      clearInterval(id);
    }
  }, time);
</script>

<p class={clazz}>
  {text.substring(0, index)}<span class={index >= text.length ? "hide" : ""}>█</span>
</p>

<style>
  .heading {
    font-size: 5em;
    font-weight: bold;
    margin: 0;
  }

  .sub-heading {
    font-size: 3em;
    color: #00b802;
  }

  .hide {
    opacity: 0;
  }
</style>
