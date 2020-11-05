<template>
  <div class="header" section="header">
    <b-navbar class="nav-bar spaced">
      <template slot="brand" />
      <template slot="end">
        <b-navbar-dropdown right collapsible label="Info">
          <b-navbar-item tag="router-link" :to="{ path: '/posts/create' }">
            Create New Post
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/posts' }">
            All Posts
          </b-navbar-item>
          <b-navbar-item href="https://github.com/MMathew93/Blog-author">
            Source Code
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.navbar {
  background-color: rgb(248 134 36) !important;
}
.navbar-item img {
  max-height: 5rem !important;
}
</style>
