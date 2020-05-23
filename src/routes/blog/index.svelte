<script>
  import BlogPreviewContainer from "../../containers/BlogPreviewContainer.svelte";

  import blogSection from "../../stores/blog-section.js";

  import { sections } from "../../util/enums.js";

  const changeSection = section => blogSection.update(() => section);
</script>

<style>
  div {
    height: 100px;
  }

  .Blog {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    cursor: pointer;
    margin: 0 32px;
    letter-spacing: 0.1em;
    font-weight: 600;
    text-align: center;
  }

  p:hover {
    color: rgb(255, 168, 188);
  }

  p:active {
    color: rgb(255, 66, 110);
  }

  .Blog-navigation {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 32px 0;
    background-color: #ecf1fd;
    padding: 24px 0;
    box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.4);
  }

  .Blog-navigation-item,
  .Blog-navigation-item:active,
  .Blog-navigation-item:hover {
    color: #ff023f;
  }
</style>

<svelte:head>
  <title>Lucas Solares | Blog</title>
</svelte:head>

<div class="Blog">
  <nav class="Blog-navigation">
    <p
      class:Blog-navigation-item={$blogSection === sections.WORKSHOP}
      on:click={() => changeSection(sections.WORKSHOP)}>
      Taller
    </p>
    <p
      class:Blog-navigation-item={$blogSection === sections.TECH}
      on:click={() => changeSection(sections.TECH)}>
      Tecnología
    </p>
    <p
      class:Blog-navigation-item={$blogSection === sections.SUPERVISED_PRACTICE}
      on:click={() => changeSection(sections.SUPERVISED_PRACTICE)}>
      Practica Supervisada
    </p>
  </nav>
  <BlogPreviewContainer route={$blogSection} />
</div>
