<template>
  <div class="form-box">
    <form class="form">
      <b-field label="title">
        <b-input v-model="title" />
      </b-field>
      <editor
        api-key="no-api-key"
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
        <b-radio v-model="published" name="published" native-value="published">
          Published
        </b-radio>
      </div>
    </form>
    <b-field horizontal>
      <b-button native-type="button" @click="submission">Submit</b-button>
      <b-button @click="cancelSubmission">Cancel</b-button>
    </b-field>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "PostModal",
  components: {
    editor: Editor
  }
};
</script>

<style></style>
