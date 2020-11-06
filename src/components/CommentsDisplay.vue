<template>
  <section>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-three-quarters content">
        <div
          class="comment-boxes"
          v-for="comment in comments"
          :key="comment._id"
        >
          <div :id="`${comment._id}`">
            <div class="comment tile notification">
              <div class="commentheader">
                <div class="commentInfo">
                  <p class="text">{{ comment.username }}</p>
                  <i class="fas fa-circle dot"></i>
                  <p class="text">{{ comment.postedDate }}</p>
                </div>
                <div class="button-box">
                  <b-button
                    tag="router-link"
                    :to="{
                      name: 'DeleteComment',
                      params: {
                        postId: postId,
                        commentId: `${comment._id}`
                      }
                    }"
                  >
                    Delete
                  </b-button>
                </div>
              </div>
              <div class="commentText">
                <p class="text">{{ comment.text }}</p>
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
  name: "CommentsDisplay",
  props: ["postId"],
  data() {
    return {
      comments: []
    };
  },
  async mounted() {
    try {
      const res = await axios.get(
        "http://localhost:3000/posts/" + this.postId + "/comments"
      );
      this.formatDate(res.data);
      this.sortPosts(res.data);
      this.comments = res.data;
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
.comment-boxes {
  width: 100%;
}

.content {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
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

.comment {
  display: flex;
  margin: 25px;
  background-color: rgb(248 134 36) !important;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  justify-content: space-between;
  flex-direction: column;
}

.commentInfo,
.commentText {
  display: flex;
  align-items: center;
  margin: 5px;
}

.commentheader {
  display: flex;
  justify-content: space-between;
}

.text {
  margin: 0px !important;
}

.dot {
  margin: 0 10px;
  font-size: 5px;
}
</style>
