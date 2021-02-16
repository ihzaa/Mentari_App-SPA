<style>
html {
  height: 100%;
}
</style>
<template>
  <div class="h-100">
    <header>
      <Nav />
    </header>
    <div class="container mx-auto py-2 h-100">
      <div
        class="row d-flex justify-content-center align-items-center align-middle h-100 px-4"
      >
        <div class="col-md-6 border p-4 shadow rounded">
          <h1 class="text-center">Register form</h1>
          <hr />
          <form @submit.prevent="submit" class="w-100">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                aria-describedby="name"
                placeholder="Enter your name"
                autocomplete="name"
                v-model="name"
                v-bind:class="{ 'is-invalid': errors.name }"
              />
              <div class="alert alert-danger" role="alert" v-if="errors.name">
                {{ errors.name[0] }}
              </div>
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
              <label for="name">Phone</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                aria-describedby="phone"
                v-bind:class="{ 'is-invalid': errors.phone }"
                placeholder="Enter your phone"
                autocomplete="phone"
                v-model="phone"
              />
              <div class="alert alert-danger" role="alert" v-if="errors.phone">
                {{ errors.phone[0] }}
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
              <p class="mb-0 mr-2">Sudah punya akun?</p>
              <router-link :to="{ name: 'login' }">
                Login Sekarang
              </router-link>
              <button type="submit" class="btn btn-outline-primary ml-auto">
                Register
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
import Nav from "./Navigation_Auth";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      phone: "",
      errors: [],
    };
  },
  methods: {
    submit() {
      this.errors = [];
      axios
        .post("/api/auth/register", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
        })
        .then((resp) => {
          localStorage.setItem("token", resp.data.meta.token);
          User.data = resp.data.data;
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
