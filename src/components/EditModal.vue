<template>
  <section>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-three-quarters content">
        <div class="form-box">
          <form class="form">
            <b-field label="Title">
              <b-input type="text" v-model="title" />
            </b-field>
            <editor
              v-model="text"
              api-key="8owxyee6zbpdjfj249udd6rbi4png4wtmucvw1sw7nievups"
              :init="{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help'
              }"
            />
            <div class="radio-box">
              <b-switch
                v-model="isPublished"
                true-value="Published"
                false-value="Draft"
              >
                {{ isPublished }}
              </b-switch>

              <b-button native-type="button" @click="submission">
                Submit
              </b-button>
            </div>
          </form>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </section>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import axios from "axios";

export default {
  name: "EditModal",
  components: {
    editor: Editor
  },
  props: ["postId"],
  data() {
    return {
      post: "",
      title: "",
      text: "",
      isPublished: ""
    };
  },
  async mounted() {
    try {
      const res = await axios.get("http://localhost:3000/posts/" + this.postId);
      this.post = res.data;
      this.title = this.post.title;
      this.text = this.post.text;
      this.isPublished = this.post.isPublished === true ? "Published" : "Draft";
    } catch (err) {
      throw new Error(err);
    }
  },
  methods: {
    submission() {
      let newPost = {
        title: this.title,
        text: this.text,
        isPublished: this.isPublished === "Published" ? true : false
      };
      try {
        axios.put("http://localhost:3000/posts/update/" + this.postId, newPost);
        this.title = "";
        this.text = "";
        this.isPublished = "Draft";
        this.$router.push("/posts");
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style>
.content {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
}

.form-box {
  margin: 50px;
  width: 66%;
}

.form {
  display: flex;
  flex-direction: column;
  width: 66%;
  text-align: left;
}

.radio-box {
  display: flex;
  justify-content: space-between;
}

.radio {
  margin-left: 15px;
}
</style>
