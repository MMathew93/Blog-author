<template>
  <section class="login">
    <div class="title">LOG IN</div>
    <div class="form-box">
      <div class="errors" v-for="error in errors" :key="error.msg">
        {{ error.msg }}
      </div>
      <form class="form">
        <b-field label="Username">
          <b-input v-model="username" />
        </b-field>
        <b-field label="password">
          <b-input v-model="password" />
        </b-field>
        <div class="button-box"></div>
      </form>
      <b-field>
        <b-button native-type="button" @click="login">Log In</b-button>
      </b-field>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "loginModal",
  data() {
    return {
      username: "",
      password: "",
      errors: []
    };
  },
  methods: {
    async login() {
      let attempt = {
        username: this.username,
        password: this.password
      };
      try {
        const res = await axios.post(
          "http://localhost:3000/admin/login",
          attempt
        );
        if (res.data.token) {
          let token = res.data.token;
          localStorage.setItem("SavedToken", "Bearer " + token);
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
          this.$router.push({ name: "Hub" });
        } else {
          this.username = "";
          this.password = "";
          this.errors = res.data.errors;
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style>
.login {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  font-size: 48px;
  color: white !important;
  font-weight: bold;
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

.form {
  width: 66%;
  text-align: left;
}
.label {
  color: rgb(153, 145, 131);
}
.select,
.select select {
  width: 100%;
}
.button-box {
  display: flex;
  justify-content: center;
}
.button {
  margin: 15px;
}
</style>
