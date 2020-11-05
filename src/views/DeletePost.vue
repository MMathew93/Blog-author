<template>
  <div class="deletepost">
    <div class="form-box">
      <div class="title">Are you sure you want to delete this post?</div>
      <b-field horizontal>
        <b-button @click="deletePost">Yes</b-button>
        <b-button tag="router-link" :to="{ name: 'Hub' }">No</b-button>
      </b-field>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DeletePost",
  props: { id: String },
  methods: {
    deletePost() {
      try {
        axios.delete("http://localhost:3000/posts/delete/" + this.id);
        this.$router.push({ name: "Hub" });
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
</script>

<style>
.deletepost {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(248 134 36) !important;
  width: auto;
  padding: 3rem;
  border-radius: 4px;
}
</style>
