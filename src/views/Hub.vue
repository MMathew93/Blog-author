<template>
  <div class="hub">
    <Header />
    <postsDisplay />
  </div>
</template>

<script>
import Header from "@/components/Header";
import postsDisplay from "@/components/postsDisplay";
export default {
  name: "Hub",
  components: {
    Header,
    postsDisplay
  }
};
</script>

<style></style>
