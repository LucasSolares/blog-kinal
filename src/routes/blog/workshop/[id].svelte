<script context="module">
  import DB from "../../../fakeDB.js";

  export async function preload({ params, path }) {
    const relativePath = path.split("/")[2];
    const posts = DB.blogPost[`${relativePath}`];
    const { id } = params;

    const post = posts
      .filter(postFinded => postFinded.id === parseInt(id))
      .pop();

    return { post };
  }
</script>

<script>
  import Button from "../../../components/Button.svelte";
  export let post;
</script>

<style>
  a {
    text-decoration: none;
    color: black;
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2fba30;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.8em;
  }

  a:hover {
    background-color: rgb(38, 151, 38);
  }

  a:active {
    background-color: rgb(29, 112, 29);
  }

  h1 {
    padding-bottom: 24px;
    font-weight: bold;
    font-size: 1.2em;
  }

  p {
    margin-right: 64px;
    margin-bottom: 16px;
  }

  img {
    border-radius: 24px;
    border: 6px solid #aaaaaa;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .BlogPost {
    width: 100%;
  }

  .BlogPost-wrapper {
    max-width: 1200px;
    margin: 32px auto 0 auto;
  }

  .BlogPost-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .BlogPost-file-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .BlogPost-buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .BlogPost-image-container {
    width: 600px;
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 1200px) {
    p {
      text-align: center;
      margin: 0;
      margin-bottom: 24px;
    }

    h1 {
      text-align: center;
    }

    .BlogPost-content {
      flex-direction: column;
      align-items: center;
    }

    .BlogPost-image-container {
      width: 80%;
    }
  }
</style>

<svelte:head>
  <title>Blog | {post.title}</title>
</svelte:head>

<div class="BlogPost">
  <div class="BlogPost-wrapper">

    <div class="BlogPost-content">

      <div class="BlogPost-text">
        <h1>{post.title}</h1>
        {#each post.paragraphs as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
      <div class="BlogPost-file-content">
        <div class="BlogPost-image-container">
          <img src={post.contentURL} alt={post.title} />
        </div>
        {#if post.downloadURL}
          <div class="BlogPost-buttons">
            {#if post.canPreview}
              <Button
                on:click={window.open(post.downloadURL)}
                content="Ver Archivo" />
            {/if}
            <a
              href={post.downloadURL}
              download={`${post.title}.${post.downloadURL
                .split('/')
                .pop()
                .split('.')
                .pop()}`}>
              Descargar Contenido
            </a>
          </div>
        {/if}
      </div>

    </div>
  </div>
</div>
