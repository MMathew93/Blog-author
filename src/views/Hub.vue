<template>
  <div class="hub">
    <Header />
    <PostsDisplay />
  </div>
</template>

<script>
import Header from "@/components/Header";
import PostsDisplay from "@/components/PostsDisplay";

export default {
  name: "Hub",
  components: {
    Header,
    PostsDisplay
  }
};
</script>

<style></style>
