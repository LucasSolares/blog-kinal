<script>
  export let segment;
</script>

<style>
  .Header {
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 32px 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .Header-container {
    display: flex;
  }

  .Header-navigation ul {
    display: flex;
  }

  a {
    text-decoration: none;
    font-size: 1em;
    font-weight: 600;
    margin: 0 16px;
    color: white;
    letter-spacing: 0.1em;
  }

  a:hover {
    color: rgb(255, 168, 188);
  }

  a:active {
    color: rgb(255, 66, 110);
  }

  .Header-navigation-item-active,
  .Header-navigation-item-active:hover,
  .Header-navigation-item-active:active {
    color: #ff023f;
  }

  h1 {
    font-size: 1.2em;
    font-family: "Rock Salt", cursive;
    color: white;
    margin-right: 64px;
  }

  .Header-without-image {

      background-color: black;
      box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.5);
      position: static;

  }
</style>

<div class="Header" class:Header-without-image={segment !== undefined}>
  <header class="Header-container">
    <h1>Lucas Solares</h1>
    <nav class="Header-navigation">
      <ul>
        <li>
          <a
            href="/"
            class:Header-navigation-item-active={segment === undefined}>
            Inicio
          </a>
        </li>
        <li>
          <a
            href="portfolio"
            class:Header-navigation-item-active={segment === 'portfolio'}>
            Portafolio
          </a>
        </li>
        <li>
          <a
            href="blog"
            class:Header-navigation-item-active={segment === 'blog'}>
            Blog
          </a>
        </li>
      </ul>
    </nav>
  </header>
</div>
