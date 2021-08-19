<script>
  export let words;
  let index = 0;

  let wordLength = 1;

  setInterval(() => {
    if (++wordLength == words[index].length) {
      setTimeout(() => {
        wordLength = 1;
        index++;
        if (index == words.length) {
          index = 0;
        }
      }, 1000);
    }
  }, 80);
</script>

<div><span>{words[index].substring(0, wordLength)}</span></div>

<style>
  div {
    width: 63px;
    display: inline-flex;
    border: 1px solid black;
    padding: 3px;
    overflow: hidden;
    font-weight: bold;
  }
</style>
