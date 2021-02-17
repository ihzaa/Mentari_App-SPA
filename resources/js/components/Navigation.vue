<style>
body {
  min-height: 100%;
  padding-top: 80px;
}
.search {
  width: 30%;
}
.search-group {
  width: 90%;
}
.authNav {
  border-left: solid 1px gray;
  padding-left: 20px;
}
.kategori {
  cursor: pointer;
  margin-right: 30px;
  margin-top: auto;
  margin-bottom: auto;
}
.shopping-cart {
  cursor: pointer;
  margin-right: 30px;
  margin-top: auto;
  margin-bottom: auto;
}
.shopping-cart:hover {
  background-color: lightgreen;
  border-radius: 50px;
}
.shopping-cart:hover span {
  color: white;
}
#search {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-right: 0;
}
#searchButton {
  border-color: #ced4da;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left: 0;
}

@media only screen and (max-width: 990px) {
  body {
    padding-top: 120px !important;
  }
  .search {
    width: 100%;
  }
  .search-group {
    width: 100%;
  }
  .kategori {
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 20px;
    position: relative;
  }
  .kategori span {
    font-size: 18px;
  }
  .shopping-cart {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .shopping-cart span {
    font-size: 18px;
  }
  .authNav {
    border-left: 0;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    font-size: 18px;
  }
}
</style>

<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      class="bg-white px-5 fixed-top"
      variant="info"
    >
      <b-navbar-brand :to="{ name: 'home' }">
        <h1><strong>Mentari</strong></h1>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <div class="search">
        <b-input-group class="search-group mx-auto">
          <b-form-input
            size="lg"
            id="search"
            placeholder="Search"
          ></b-form-input>
          <b-input-group-append>
            <b-button id="searchButton" variant="outline-secondary"
              ><font-awesome-icon icon="search" />
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
      <!-- </b-nav-form> -->

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mr-4">
          <b-nav-item-dropdown class="kategori" right>
            <template #button-content>
              <span>
                <strong>Kategori</strong>
              </span>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item class="shopping-cart">
            <span>
              <strong>Keranjang</strong>
            </span>
            <span class="icon">
              <font-awesome-icon icon="shopping-cart" />
            </span>
            <span class="tag">0</span>
          </b-nav-item>
          <b-nav-item class="authNav" v-if="check">
            <router-link :to="{ name: 'register' }">
              <b-button class="ml-2" variant="outline-success">Daftar</b-button>
            </router-link>
            <router-link :to="{ name: 'login' }">
              <b-button class="ml-2" variant="outline-success">Masuk</b-button>
            </router-link>
          </b-nav-item>
          <b-nav-item-dropdown class="userNav" right v-else>
            <template #button-content>
              <strong v-text="name"></strong>
            </template>
            <b-dropdown-item :to="{ name: 'profile' }">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click.prevent="logout"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { logoutUser } from "../authUser";
export default {
  data() {
    return {
      user: this.$parent.$parent.user.data,
      name: "",
    };
  },
  methods: {
    async logout() {
      await logoutUser();
    },
    splitName() {
      if (!_.isEmpty(this.user)) {
        this.name = this.user.name.split(" ").slice(0, 2).join(" ");
      }
    },
  },
  mounted() {
    this.splitName();
  },
  computed: {
    check() {
      this.user = this.$parent.$parent.user.data;
      this.splitName();
      return _.isEmpty(this.$parent.$parent.user.data);
    },
  },
};
</script>
