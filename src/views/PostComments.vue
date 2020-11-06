<template>
  <div class="comments">
    <Header />
    <CommentsDisplay :postId="`${this.id}`" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import CommentsDisplay from "@/components/CommentsDisplay";

export default {
  name: "Hub",
  components: {
    Header,
    CommentsDisplay
  },
  props: { id: String }
};
</script>

<style></style>
