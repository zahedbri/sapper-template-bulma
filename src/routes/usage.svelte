
<script>
 let today = new Date();
</script>

<svelte:head>
	<title>Usage</title>
</svelte:head>

<section class="section">
  <div class="container">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="logo-512.png" alt="Sapper/Svelte logo">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="logo-192.png" alt="Sapper/Svelte logo">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Cool Guy</p>
            <p class="subtitle is-6">@coolestguy</p>
          </div>
        </div>

        <div class="content">
          <ol>
            <li>
                <a href="https://sapper.svelte.dev/docs#Sapper_app_structure">Read the Sapper docs</a>
            </li>
            <li>
                <a href="https://svelte.dev/tutorial/basics">Read about Svelte</a>
            </li>
            <li>
                <a href="https://svelte.dev/examples">Get some examples</a>
            </li>
          </ol>
          <time datetime="2016-1-1">{today}</time>
        </div>
      </div>
    </div>
  </div>
</section>

