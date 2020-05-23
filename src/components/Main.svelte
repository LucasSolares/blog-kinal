<script>
  import Button from "./Button.svelte";
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
    background-color: #FF023F;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1em;
  }

  a:hover {
    background-color: rgb(211, 3, 51);
  }

  a:active {
    background-color: rgb(161, 3, 40);
  }

  .Main {
    overflow-x: hidden;
  }
  .Main-container {
    background-color: #ecf1fd;
    width: 100vw;
    height: 100vh;
    background-image: url("images/png/background-image-main.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Main-content {
    width: 50%;
    text-align: center;
    padding: 48px;
    min-height: 400px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  h2,
  small {
    font-size: 4em;
    font-weight: 700;
    color: white;
    font-family: "Rock Salt", cursive;
  }

  small {
    font-size: 16px;
    text-align: right;
    width: 100%;
  }

  p {
    width: 60%;
    color: white;
    letter-spacing: 0.1em;
    line-height: 1.2em;
  }
</style>

<div class="Main">
  <div class="Main-container">
    <div class="Main-content">
      <h2>
        <strong>Lucas</strong>
        Solares
      </h2>

      <p>
        Soy desarrollador Web, Mobile and Desktop con más de 3 años de
        experiencia, desarrollando con las mejores y más novedosas técnologias
        como Svelte, Flutter o React, ademas de manejar de manera avanzada
        conceptos como UI y UX.
      </p>
      <a
        href="files/pdf/cv.pdf"
        download="Curriculum Vitae - Lucas Solares">
        Descargar CV
      </a>
      <small>made by TopLop</small>
    </div>
  </div>
</div>
