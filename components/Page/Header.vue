<template>
  <header class="navbar navbar-expand-lg navbar-dark px-3 sticky-top">
    <nav class="container font-monospace">
      <NuxtLink class="navbar-brand mx-auto" to="/">
        <img
          height="36" width="112"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 144 46'%3E%3Cpath d='M68.3 24H79c8-11.4 29.8-18.8 41.7-24l-5.4 1.6-.3.2-15.3 4.6-3.1.9-17 5.3-3.4-3.1h-5.4l-3.5 3.2L43 5 32 1.6 26.6 0c12.3 5.4 35.1 14.5 41.7 24zm5.2-11.4c.9 0 1.6.3 2.2.8.6.5.9 1.1.9 1.9 0 .8-.4 2-1.1 3-.5.7-1.2 1.2-1.9 1.3-.7 0-1.3-.5-1.8-1.2-.7-.9-1.1-2-1.1-2.9v-.2c-.2-1.5 1.1-2.7 2.8-2.7zm70.3 17.5c-.5-1.3-2.4-1.5-4.1-1.5h-15.9l-.1.4-.1.2-4.8 16-.1.2-.2.7h16.8c2.8 0 4.6-1 5.5-3.6L143 35c1-2.6 1.2-3.9.8-4.9zm-10.2 11.7h-6.3l2.7-8.9h6.3l-2.7 8.9zM94.5 29.1c-.8-.4-2-.5-3.1-.5H79.9c-2.8 0-4.6 1-5.5 3.6l-2.2 7.5c-.6 2-1.8 4.8.3 5.9.8.4 2 .5 3.1.5h11.5c2.8 0 4.6-1 5.5-3.6l2.2-7.5c.6-2 1.8-4.9-.3-5.9zm-9.2 12.7h-6.4l2.7-8.9H88l-2.7 8.9zm-39.8 0H32.8l.7-2.3h10.9l.1-.4.1-.2.9-2.9.1-.2.2-.7h-11l.7-2.3h13.8l.1-.4.1-.2.8-2.8.1-.2.2-.7H29.3l-.1.4-.2.2-4.8 16-.1.2-.1.7h21.2l.1-.4.1-.2.8-2.8.1-.2.2-.7h-1zm70.2-13.3H99.2c-1.6 5.5-3.3 11-4.9 16.6l-.1.2-.3.7h7.5l.1-.4.1-.2 1.7-5.6h2.5l2.7 5.7.1.1.1.3h8.2l-3.3-6.6c3.4-.4 4.2-1.8 4.8-4.2.2-.6.3-1.2.5-1.7 1.2-3.5-.1-4.8-3.2-4.9zm-4.3 5.1L111 35c-.1.4-.3.5-.7.6l-6.4 1.7 1.4-4.5h5.5c.6 0 .8.2.6.8zm-86.9 1.6c.2-.6.3-1.2.5-1.7 1.2-3.6-.1-4.9-3.2-4.9H5.3C3.7 34.1 2 39.6.4 45.2l-.1.2-.3.6h7.4l.1-.4.1-.2 1.7-5.6h2.5l2.7 5.7.1.1.1.3h8.2l-3.3-6.6c3.5-.3 4.3-1.7 4.9-4.1zm-7-1.6l-.4 1.4c-.1.4-.3.5-.7.6L10 37.3l1.4-4.5h5.5c.6 0 .8.2.6.8zM71.1 35l1.2-3.8c.5-1.3-.4-2.8-1.9-2.7H57c-2.8 0-4.6 1-5.5 3.6l-2.2 7.5c-.6 2-1.8 4.8.3 5.9.8.4 2 .5 3.1.5h12.5c1.5 0 3.2-1.4 3.6-2.7l1-3.7h-5.7l-.6 2.1h-7.3l2.7-8.9h7l-.8 2.2h6z' fill-rule='evenodd' clip-rule='evenodd' fill='%23fff'/%3E%3C/svg%3E"
          alt="Radio Record">
      </NuxtLink>
      <button
        aria-controls="global-navbar" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbar"
        data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" active-class="active" to="/">
              Каналы
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" active-class="active" to="/playlist/">
              Плейлисты
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" active-class="active" to="/about/">
              О сайте
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.nav-link {
  color: $text-night-primary;
  transition: all .3s;

  &:hover,
  &:focus {
    color: $brand-accent;
  }
}
</style>
