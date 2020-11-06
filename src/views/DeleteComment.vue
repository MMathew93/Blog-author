<template>
  <div class="deletecomment">
    <div class="form-box">
      <div class="title">
        Are you sure you want to delete this comment?
      </div>
      <b-field horizontal>
        <b-button @click="deleteComment">Yes</b-button>
        <b-button
          tag="router-link"
          :to="{
            name: 'PostComments',
            params: {
              id: this.postId
            }
          }"
          >No</b-button
        >
      </b-field>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DeleteComment",
  props: { postId: String, commentId: String },
  methods: {
    deleteComment() {
      try {
        axios.delete(
          "http://localhost:3000/posts/" +
            this.postId +
            "/comments/" +
            this.commentId
        );
        this.$router.push({
          name: "PostComments",
          params: { id: this.postId }
        });
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
</script>

<style>
.deletecomment {
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
