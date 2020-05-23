<script>
  export let route;

  import Card from "../components/Card.svelte";

  import { afterUpdate } from 'svelte';

  import DB from "../fakeDB.js";
  import { sections } from "../util/enums.js";
  import { goto } from "@sapper/app";

  $: data = DB.blogPost[`${route}`];

    afterUpdate(() => {
        console.log(data)
    })

</script>

<style>

  .BlogPreviewContainer-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 0 64px;
    max-width: 1400px
  }

</style>


<div class="BlogPreviewContainer">
  <div class="BlogPreviewContainer-container">
    {#each data as post}
      <Card
        {...post}
        action={() => goto(`blog/${route}/${post.id}`)}
        actionText="Ver mas..." />
    {/each}
  </div>
</div>