<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card card-default">
          <div class="card-header">Reset Password</div>
          <div class="card-body">
            <form
              autocomplete="off"
              @submit.prevent="requestResetPassword"
              method="post"
            >
              <div class="form-group">
                <label for="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="user@example.com"
                  v-model="email"
                  required
                />
                <div class="alert alert-danger" role="alert" v-if="error">
                  {{ error }}
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Kirim Email Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      email: null,
      error: "",
    };
  },
  methods: {
    requestResetPassword() {
      this.$root.$refs.Loading.show();
      this.error = "";
      axios
        .post(window.Global.baseUrl + "/api/auth/reset-password", {
          email: this.email,
        })
        .then((result) => {
          Swal.fire({
            icon: "success",
            title: "Email berisi password baru berhasil dikirim.",
            text: "Jika tidak menerima email, cek folder spam."
          });
          this.$router.push({ name: "login" });
        })
        .catch((error) => {
          this.error = "Email tidak ditemukan.";
        })
        .finally(() => {
          this.$root.$refs.Loading.hide();
        });
    },
  },
};
</script>
