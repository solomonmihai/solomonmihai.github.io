<script>
  import Link from "./Link.svelte";
</script>

<div>
  <h1>* Work with me</h1>
  <p>If you are interested in working with me, you can find me on these websites!</p>
  <div class="links">
    <Link url="https://www.fiverr.com/mihaisolomon64" text="Fiverr" />
    <Link url="https://www.upwork.com/freelancers/~01640e167efd17a220" text="Upwork" />
    <Link url="https://www.linkedin.com/in/mihai-solomon-0b42301a3" text="LinkedIn" />
    <Link url="https://github.com/solomonmihai" text="Github" />
    <Link url="mailto:solomonmihai10@gmail.com" text="Mail" />
  </div>
</div>

<style>
  .links {
    margin-left: 30px;
    margin-bottom: 80px;
  }
</style>
