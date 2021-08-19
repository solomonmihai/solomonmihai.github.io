<script>
  let price;
  let result = "";
  let rate;
  let error;

  const url = `https://api.exchangerate.host/convert?from=USD&to=RON`;

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      rate = json.info.rate;
    }).catch(err => error = err);

</script>

<h1 style="margin-bottom: 70px">
  Fiverr tax calculator
</h1>

{#if rate}
  <p style="font-weight: bold;">1 USD = {rate} RON</p>
  <p>Price: <input type="number" bind:value={price} /></p>
  {#if price}
    <p>Pre Tax: <b>{Math.floor(+rate * price)} RON</b></p>
    <p>After Tax: <b>{Math.floor((price - ((20 / 100) * price)) * +rate) + " RON"}</b></p>
  {/if}
  {#if error}
    <p style="color: red">Error: {error}</p>
  {/if}
{/if}
