<style>
@import url("/auth/fonts/material-icon/css/material-design-iconic-font.min.css");
@import url("/auth/css/style.css");
</style>
<template>
  <section class="sign-in">
    <div class="container">
      <div class="signin-content">
        <div class="signin-image">
          <figure>
            <img src="/auth/images/signin-image.jpg" alt="sing up image" />
          </figure>
          <!-- <a href="#" class="signup-image-link">Create an account</a> -->
          <router-link class="signup-image-link" :to="{ name: 'register' }">
            Create an account
          </router-link>
        </div>

        <div class="signin-form">
          <h2 class="form-title">Sign up</h2>
          <div class="alert alert-danger" v-if="errors.root">
            <strong>{{ errors.root }}</strong>
          </div>
          <form @submit.prevent="submit">
            <div class="form-group input-group">
              <!-- <label for="email"><i class="zmdi zmdi-email"></i></label> -->
              <span class="input-group-addon d-flex align-items-center mr-2"
                ><i class="zmdi zmdi-email"></i
              ></span>

              <input
                class="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                v-model="email"
                required
                autocomplete="email"
              />
              <span style="color: red" v-if="errors.email">
                <strong>{{ errors.email[0] }}</strong>
              </span>
            </div>
            <div class="form-group input-group">
              <!-- <label for="pass"><i class="zmdi zmdi-lock"></i></label> -->
              <span class="input-group-addon d-flex align-items-center mr-2"
                ><i class="zmdi zmdi-lock"></i
              ></span>

              <input
                class="form-control"
                type="password"
                name="pass"
                id="pass"
                placeholder="Password"
                v-model="password"
                required
                autocomplete="password"
              />
              <span style="color: red" v-if="errors.password">
                <strong>{{ errors.password[0] }}</strong>
              </span>
            </div>
            <!-- <div class="form-group">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                class="agree-term"
              />
              <label for="remember-me" class="label-agree-term"
                ><span><span></span></span>Remember me</label
              >
            </div> -->
            <div class="form-group form-button">
              <input
                type="submit"
                name="signin"
                id="signin"
                class="form-submit"
                value="Log in"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: null,
      password: null,
      errors: [],
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    submit() {
        this.errors = []
      this.login({
        payload: {
          email: this.email,
          password: this.password,
        },
        context: this,
      });
    },
  },
};
</script>
