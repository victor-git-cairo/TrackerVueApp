<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="form.email" />
    <br />
    <input
      type="text"
      name="password"
      placeholder="password"
      v-model="form.password"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService.js";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    async register() {
      console.log(
        "The register button was clicked",
        this.form.email,
        this.form.password
      );
      const response =
        await AuthenticationService.register({
          email: this.form.email,
          password: this.form.password,
        });
      console.log(response.data);
    },
  },
  watch: {
    // "form.email": {
    //   handler: (value) => {
    //     console.log("Email value has changed", value);
    //   },
    // },
  },
};
</script>

<style scope>
</style>


