122 lines (114 sloc) 2.56 KB

<template>
  <section>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-three-quarters content">
        <div class="post-boxes" v-for="post in posts" :key="post._id">
          <div :id="`${post._id}`">
            <div class="post tile notification">
              <div class="postInfo">
                <h1>
                  {{
                    post.title.split(" ").length > 5
                      ? post.title
                          .split(" ")
                          .slice(0, 5)
                          .join(" ") + "..."
                      : post.title
                  }}
                </h1>
                <span>{{ post.postedDate }}</span>
              </div>
              <div class="button-box">
                <b-button
                  tag="router-link"
                  :to="{ name: 'UpdatePost', params: { id: `${post._id}` } }"
                >
                  Edit
                </b-button>
                <b-button
                  tag="router-link"
                  :to="{ name: 'DeletePost', params: { id: `${post._id}` } }"
                >
                {{ post.isPublished }}
                  Delete
                </b-button>
                <div v-if="`${post.isPublished}`">
                  <span class="icon has-text-info">
                    <i class="fas fa-check-circle is-success"></i>
                  </span>
                </div>
              </div>
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
import dayjs from "dayjs";

export default {
  name: "PostsDisplay",
  data() {
    return {
      posts: []
    };
  },
  async mounted() {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      this.formatDate(res.data);
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
    },
    formatDate(dataArr) {
      if (dataArr instanceof Array) {
        dataArr.forEach(data => {
          if (data.postedDate) {
            return (data.postedDate = dayjs(data.postedDate).format(
              "MM/DD/YYYY"
            ));
          }
        });
      }
    }
  }
};
</script>

<style>
.post-boxes {
  width: 100%;
}

.content {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
}

.post {
  display: flex;
  margin: 25px;
  background-color: rgb(248 134 36) !important;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  justify-content: space-between;
}

p {
  font-size: 18px;
}

.notification {
  padding: 1.25rem !important;
}

.button-box {
  align-items: center;
}
</style>
