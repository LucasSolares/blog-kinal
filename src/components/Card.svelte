<script>
  import Button from "./Button.svelte";

  export let id;
  export let iconHeaderURL;
  export let iconAlternative;
  export let title;
  export let secondaryText;
  export let contentURL;
  export let shortDescription;
  export let actionText;
  export let action;
</script>

<style>
  h2 {
    padding-bottom: 8px;
    font-weight: bold;
    font-size: 1.1em;
  }

  h4 {
    color: #aaaaaa;
    padding-bottom: 8px;
    font-size: 0.6em;
  }

  p {
    font-size: 0.9em;
    padding-bottom: 16px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .Card-container {
    width: 100%;
  }

  .Card {
    width: 30%;
    min-width: 350px;
    max-width: 350px;
    margin: 24px;
    border-radius: 8px;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  .Card-header {
    width: 80%;
    padding: 16px;
    padding-bottom: 8px;
    display: flex;
    align-items: center;
  }

  .Card-icon {
    position: relative;
    max-width: 64px;
    min-width: 32px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #aaaaaa;
  }

  .Card-icon:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .Card-icon img {
    position: absolute;
  }

  .Card-text-header {
    width: 100%;
    margin-left: 16px;
    text-align: left;
  }

  .Card-text {
    width: 100%;
    text-align: left;
  }

  .Card-description {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Card-content {
    height: 200px;
  }
</style>

<div class="Card">
  <div class="Card-container">
    {#if iconHeaderURL && iconAlternative}
      <div class="Card-header">
        <div class="Card-icon">
          <img src={iconHeaderURL} alt={iconAlternative || id} />
        </div>
        <div class="Card-text-header">
          <h2>{title}</h2>
          <h4>{secondaryText}</h4>
        </div>
      </div>
    {/if}
    <div class="Card-content">
      <img src={contentURL} alt={title} />
    </div>
    <div class="Card-description">
      {#if !iconHeaderURL}
        <div class="Card-text">
          <h2>{title}</h2>
          <h4>{secondaryText}</h4>
        </div>
      {/if}
      <p>{shortDescription}</p>
      <div class="Card-actions">
        <Button
          on:click={action}
          width={160}
          height={30}
          isUpper={false}
          content={actionText} />
      </div>
    </div>
  </div>
</div>
