122 lines (114 sloc) 2.56 KB

<template>
  <section>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-three-quarters content">
        <div class="post-boxes" v-for="post in posts" :key="post._id">
          <div :id="`${post._id}`" class="article">
            <div class="post tile notification">
              <h1>
                {{ post.title }}
              </h1>
              <span>{{ post.postedDate }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "postsDisplay",
  data() {
    return {
      posts: []
    };
  },
  async mounted() {
    try {
      const res = await axios.get("http://localhost:3000/posts", {
        headers: { "Authorization": localStorage.getItem("SavedToken") }
      });
      this.sortPosts(res.data);
      this.posts = res.data;
    } catch (err) {
      throw new Error(err);
    }
  },
  methods: {
    sortPosts(dataArr) {
      dataArr.sort((a, b) => {
        if (a.date > b.date) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }
};
</script>

<style>
.post-boxes {
  width: 100%;
}

.article {
  position: relative;
}

.content {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
}
.post {
  display: flex;
  flex-direction: column;
  margin: 25px;
  background-color: rgb(248 134 36) !important;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
}
p {
  font-size: 18px;
}
.notification {
  padding: 1.25rem !important;
}
</style>
