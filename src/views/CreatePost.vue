<template>
  <div class="createnewpost">
    <Header />
    <PostModal />
  </div>
</template>

<script>
import Header from "@/components/Header";
import PostModal from "@/components/PostModal";

export default {
  name: "CreatePost",
  components: {
    Header,
    PostModal
  }
};
</script>

<style></style>
