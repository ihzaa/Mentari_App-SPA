<template>
  <div>
    <!-- <header>
      <Navigation />
    </header> -->
    <div class="container mt-4">
      <div class="row flex-lg-nowrap">
        <div class="col-12 col-lg-auto mb-3" style="width: 200px">
          <div class="card p-3">
            <div class="e-navlist e-navlist--active-bg">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link px-2 active"
                    ><span class="icon mr-1">
                      <b-person-fill
                        style="width: 20px; height: 20px"
                      ></b-person-fill>
                      <!-- <font-awesome-icon
                                                icon="user"
                                            /> -->
                    </span>
                    <span>Pengaturan Akun</span></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link px-2"
                    ><span class="icon mr-1">
                      <b-cart-check-fill
                        style="width: 20px; height: 20px"
                      ></b-cart-check-fill>
                      <!-- <font-awesome-icon icon="shopping-cart" /> -->
                    </span>
                    <span>Riwayat Belanja</span></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row">
            <div class="col mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="e-profile">
                    <!-- <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a href="" class="active nav-link">Settings</a>
                      </li>
                    </ul> -->
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="user_profile-tab"
                          data-toggle="tab"
                          href="#user_profile-panel"
                          role="tab"
                          >Profil</a
                        >
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="alamat-tab"
                          data-toggle="tab"
                          href="#alamat-panel"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                          >Alamat</a
                        >
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="password-tab"
                          data-toggle="tab"
                          href="#password-panel"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                          >Password</a
                        >
                      </li>
                    </ul>
                    <div class="tab-content pt-3" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="user_profile-panel"
                        role="tabpanel"
                      >
                        <form class="form" @submit.prevent="editProfile">
                          <div class="row">
                            <div class="col">
                              <div
                                class="alert alert-success alert-dismissible fade show"
                                role="alert"
                                v-if="successEditProfile"
                              >
                                Berhasil merubah data profil.
                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="alert"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Nama</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="name"
                                      placeholder="Nama Anda"
                                      v-model="name"
                                    />
                                    <div
                                      class="alert alert-danger"
                                      role="alert"
                                      v-if="errors.name"
                                    >
                                      {{ errors.name[0] }}
                                    </div>
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Nomer Telfon</label>
                                    <input
                                      class="form-control"
                                      type="number"
                                      name="phone"
                                      placeholder="nomer telfon"
                                      v-model="phone"
                                    />
                                  </div>
                                  <div
                                    class="alert alert-danger"
                                    role="alert"
                                    v-if="errors.phone"
                                  >
                                    {{ errors.phone[0] }}
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Email</label>
                                    <input
                                      class="form-control"
                                      type="email"
                                      placeholder="user@example.com"
                                      v-model="email"
                                    />
                                    <div
                                      class="alert alert-danger"
                                      role="alert"
                                      v-if="errors.email"
                                    >
                                      {{ errors.email[0] }}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col d-flex justify-content-end">
                              <button class="btn btn-primary" type="submit">
                                Simpan
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="alamat-panel"
                        role="tabpanel"
                      >
                        <div class="row">
                          <div class="col">
                            <div
                              class="alert alert-success alert-dismissible fade show"
                              role="alert"
                              v-if="successEditAlamat"
                            >
                              Berhasil merubah alamat.
                              <button
                                type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <button
                              class="btn btn-block btn-primary text-center"
                              @click="addAddress"
                            >
                              Tambah alamat
                            </button>
                            <div
                              class="alert alert-danger text-center mt-3"
                              role="alert"
                              v-if="addresses.length == 0"
                            >
                              Tidak ada alamat.
                            </div>
                            <form class="mt-2" @submit.prevent="editAddress">
                              <div
                                class="row"
                                v-for="(address, index) in addresses"
                                v-bind:key="index"
                                v-bind:id="index"
                              >
                                <div class="col-10">
                                  <div class="form-group">
                                    <label for="exampleFormControlTextarea1"
                                      >Alamat {{ index + 1 }}</label
                                    >
                                    <textarea
                                      class="form-control"
                                      rows="3"
                                      v-model="address.address"
                                      required
                                    ></textarea>
                                  </div>
                                </div>
                                <div class="col-2 d-flex align-content-center">
                                  <button
                                    class="btn btn-sm btn-danger my-auto mx-auto"
                                    @click="deleteAddress(index)"
                                  >
                                    <span class="icon">
                                      <b-trash-fill
                                        style="width: 15px; height: 15px"
                                      ></b-trash-fill>
                                      <!-- <font-awesome-icon
                                                                                icon="trash"
                                                                            /> -->
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col d-flex justify-content-end">
                                  <button
                                    class="btn btn-primary"
                                    type="submit"
                                    :disabled="addresses.length == 0"
                                  >
                                    Simpan
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="password-panel"
                        role="tabpanel"
                      >
                        <div class="row">
                          <div class="col">
                            <div
                              class="alert alert-success alert-dismissible fade show"
                              role="alert"
                              v-if="successEditPassword"
                            >
                              Berhasil merubah password.
                              <button
                                type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <b-form @submit.prevent="editPassword">
                              <label for="OldPassword">Password Lama</label>
                              <b-form-input
                                v-model="OldPassword"
                                id="OldPassword"
                                type="password"
                              ></b-form-input>
                              <div
                                class="alert alert-danger"
                                role="alert"
                                v-if="errors.OldPassword"
                              >
                                {{ errors.OldPassword[0] }}
                              </div>
                              <label for="NewPassword" class="mt-2"
                                >Password Baru</label
                              >

                              <b-form-input
                                v-model="NewPassword"
                                type="password"
                                id="NewPassword"
                              ></b-form-input>
                              <div
                                class="alert alert-danger"
                                role="alert"
                                v-if="errors.NewPassword"
                              >
                                {{ errors.NewPassword[0] }}
                              </div>

                              <label for="ReNewPassword" class="mt-2"
                                >Konfirmasi Password Baru</label
                              >

                              <b-form-input
                                v-model="ReNewPassword"
                                :state="passwordValidation"
                                type="password"
                                id="ReNewPassword"
                              ></b-form-input>

                              <b-form-invalid-feedback
                                :state="passwordValidation"
                              >
                                Password Tidak Sama.
                              </b-form-invalid-feedback>
                              <div class="row mt-4">
                                <div class="col d-flex justify-content-end">
                                  <button
                                    class="btn btn-primary"
                                    type="submit"
                                    :disabled="!passwordValidation"
                                  >
                                    Simpan
                                  </button>
                                </div>
                              </div>
                            </b-form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-3 mb-3">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="px-xl-3">
                    <button class="btn btn-block btn-secondary" @click="logout">
                      <i class="fa fa-sign-out"></i>
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title font-weight-bold">Support</h6>
                  <p class="card-text">
                    Get fast, free help from our friendly assistants.
                  </p>
                  <button type="button" class="btn btn-primary">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Navigation from "./Navigation";
import User from "../user";
import { logoutUser } from "../authUser";

export default {
  //   components: {
  //     Navigation,
  //   },
  data() {
    return {
      name: User.data.name,
      email: User.data.email,
      phone: User.data.phone,
      errors: [],
      successEditProfile: false,
      addresses: [],
      successEditAlamat: false,
      OldPassword: "",
      NewPassword: "",
      ReNewPassword: "",
      successEditPassword: false,
    };
  },
  methods: {
    resetErrors() {
      this.errors = [];
      this.successEditProfile = false;
    },
    getAddresses() {
      axios
        .get(window.Global.baseUrl + "/api/get/address")
        .then((result) => {
          this.addresses = result.data;
        })
        .then(() => {
          this.$root.$refs.Loading.hide();
        })
        .catch((err) => {});
    },
    editProfile() {
      this.resetErrors();
      this.$root.$refs.Loading.show();
      axios
        .post(window.Global.baseUrl + "/api/edit/profile", {
          name: this.name,
          email: this.email,
          phone: this.phone,
        })
        .then((resp) => {
          User.data = resp.data;
        })
        .then(() => {
          this.$root.$refs.Loading.hide();
          this.successEditProfile = true;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        })
        .finally(() => {
          this.$root.$refs.Loading.hide();
        });
    },
    addAddress() {
      this.successEditAlamat = false;
      this.addresses.push({ address: "" });
    },
    editAddress() {
      this.successEditAlamat = false;
      this.$root.$refs.Loading.show();
      axios
        .post(window.Global.baseUrl + "/api/edit/address", {
          addresses: this.addresses,
        })
        .then((resp) => {
          this.addresses = resp.data;
          this.successEditAlamat = true;
          this.$root.$refs.Loading.hide();
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    deleteAddress(index) {
      this.$delete(this.addresses, index);
      if (this.addresses.length == 0) this.editAddress();
    },
    async logout() {
      this.$root.$refs.Loading.show();

      await logoutUser();
      await this.$router.push({ name: "home" });
    },
    editPassword() {
      this.$root.$refs.Loading.show();
      this.errors = [];
      axios
        .post(window.Global.baseUrl + "/api/edit/password", {
          old: this.OldPassword,
          new: this.NewPassword,
        })
        .then((resp) => {
          this.successEditPassword = true;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        })
        .finally(() => this.$root.$refs.Loading.hide());
    },
  },
  created() {
    this.$root.$refs.Loading.show();
  },
  mounted() {
    this.getAddresses();
  },
  computed: {
    passwordValidation() {
      this.successEditPassword = false;
      if (this.ReNewPassword == "") {
        return;
      } else return this.NewPassword === this.ReNewPassword;
    },
  },
};
</script>
