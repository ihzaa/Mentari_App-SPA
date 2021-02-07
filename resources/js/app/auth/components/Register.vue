<style>
@import url("/auth/fonts/material-icon/css/material-design-iconic-font.min.css");
@import url("/auth/css/style.css");
</style>
<template>
  <section class="signup">
    <div class="container">
      <div class="signup-content">
        <div class="signup-form">
          <h2 class="form-title">Sign up</h2>
          <form @submit.prevent="submit">
            <div class="form-group input-group">
              <!-- <label for="name"
                ><i class="zmdi zmdi-account material-icons-name"></i
              ></label> -->
              <span class="input-group-addon d-flex align-items-center mr-2"
                ><i class="zmdi zmdi-account material-icons-name"></i
              ></span>
              <input
                class="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                v-model="name"
                required
                autocomplete="name"
              />
              <span style="color: red" v-if="errors.name">
                <strong>{{ errors.name[0] }}</strong>
              </span>
            </div>
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
              <!-- <label for="phone"><i class="zmdi zmdi-phone"></i></label> -->
              <span class="input-group-addon d-flex align-items-center mr-2"
                ><i class="zmdi zmdi-phone"></i
              ></span>

              <input
                class="form-control"
                type="number"
                name="phone"
                id="phone"
                placeholder="Your Phone Number"
                v-model="phone"
                required
                autocomplete="phone"
              />
              <span style="color: red" v-if="errors.phone">
                <strong>{{ errors.phone[0] }}</strong>
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
            <!-- <div class="form-group" v-if="errors.password">
              <label for="re-pass"
                ><i class="zmdi zmdi-lock-outline"></i
              ></label>
              <input
                type="password"
                name="re_pass"
                id="re_pass"
                placeholder="Repeat your password"
                v-model="repassword"
                required
                autocomplete="repassword"
              />
              <span style="color: red" v-if="errors.password">
                <strong>{{ errors.password[0] }}</strong>
              </span>
              <span style="color: red; display: none" id="password_error">
                <strong>{{ errors.password[0] }}</strong>
              </span>
            </div> -->
            <div class="form-group form-button">
              <input
                type="submit"
                name="signup"
                id="signup"
                class="form-submit"
                value="Register"
              />
            </div>
          </form>
        </div>
        <div class="signup-image">
          <figure>
            <img src="auth/images/signup-image.jpg" alt="sing up image" />
          </figure>
          <router-link class="signup-image-link" :to="{ name: 'login' }">
            I am already member
          </router-link>
          <!-- <a href="#" class="signup-image-link">I am already member</a> -->
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
      name: null,
      email: null,
      password: null,
      phone: null,
      repassword: null,
      errors: [],
    };
  },
  methods: {
    ...mapActions({
      register: "auth/register",
    }),
    submit() {
      this.errors = [];

      //   if (this.password.length < 6) {
      //     this.passwordNotSixChar();
      //     return;
      //   }
      //   if (this.password == this.repassword) {
      //     document.querySelector("#password_error").style.display = "none";
      this.register({
        payload: {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
        },
        context: this,
      });
      //   } else {
      //     this.passwordNotEquals();
      //   }
    },
    passwordNotEquals() {
      let el = document.querySelector("#password_error");
      el.innerHTML = "Password not equals";
      el.style.display = "block";
      el.focus();
    },
    passwordNotSixChar() {
      let el = document.querySelector("#password_error");
      el.innerHTML = "Password minimum 6 characters";
      el.style.display = "block";
      el.focus();
    },
  },
};
</script>
