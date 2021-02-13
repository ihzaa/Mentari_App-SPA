<style scoped>
html {
  height: 100%;
}
</style>
<template>
  <div>
    <div class="container mx-auto py-2 h-100">
      <div
        class="row d-flex justify-content-center align-items-center align-middle h-100"
      >
        <div class="col-md-6 border p-4 shadow rounded">
          <h1 class="text-center">Login form</h1>
          <hr />
          <form @submit.prevent="submit" class="w-100">
            <div class="alert alert-danger" role="alert" v-if="errors.root">
              {{ errors.root }}
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                autocomplete="email"
                v-model="email"
                v-bind:class="{ 'is-invalid': errors.email }"
              />
              <div class="alert alert-danger" role="alert" v-if="errors.email">
                {{ errors.email[0] }}
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                v-bind:class="{ 'is-invalid': errors.password }"
                id="exampleInputPassword1"
                placeholder="Password"
                autocomplete="password"
                v-model="password"
              />
              <div
                class="alert alert-danger"
                role="alert"
                v-if="errors.password"
              >
                {{ errors.password[0] }}
              </div>
            </div>
            <div class="d-flex align-items-center">
              <p class="mb-0 mr-2">Belum punya akun? </p>
              <router-link :to="{ name: 'register' }"> Daftar Sekarang </router-link>
              <button type="submit" class="btn btn-outline-primary ml-auto">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import User from "../user";
import Navigation from "./Navigation";
export default {
  components: {
    Navigation,
  },
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit() {
      this.errors = [];
      axios
        .post("/api/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((resp) => {
          localStorage.setItem("token", resp.data.meta.token);
          User.data = resp.data;
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
