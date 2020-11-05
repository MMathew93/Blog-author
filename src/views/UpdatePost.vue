<template>
  <div class="createnewpost">
    <Header />
    <EditModal :postId="`${this.id}`" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import EditModal from "@/components/EditModal";

export default {
  name: "CreatePost",
  components: {
    Header,
    EditModal
  },
  props: { id: String }
};
</script>

<style></style>
