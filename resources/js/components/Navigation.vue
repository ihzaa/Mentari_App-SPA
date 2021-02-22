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
      style="z-index: 5000"
    >
      <b-navbar-brand :to="{ name: 'home' }">
        <h1><strong>Mentari</strong></h1>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <div class="search" v-if="this.$route.name === 'home'">
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
          <b-nav-item-dropdown
            class="kategori"
            right
            v-if="this.$route.name === 'home'"
          >
            <template #button-content>
              <span>
                <strong>Kategori</strong>
              </span>
            </template>
            <b-dropdown-item v-if="categoriesCount == 0">
              Tidak ditemukan
            </b-dropdown-item>
            <b-dropdown-item
              v-else
              v-for="category in categories"
              v-bind:key="category.id"
            >
              {{ category.name }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item class="shopping-cart">
            <span>
              <strong>Keranjang</strong>
            </span>
            <span class="icon">
              <b-cart-check-fill
                style="width: 20px; height: 20px"
              ></b-cart-check-fill>
              <!-- <font-awesome-icon icon="shopping-cart" /> -->
            </span>
            <span class="tag my-auto">{{ cartCounter }}</span>
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
      user: this.$parent.user.data,
      name: "",
      categories: [],
      categoriesCount: 0,
      cartCounter: 0,
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
    async category() {
      try {
        let response = await axios.get(window.Global.baseUrl + `/api/category`);
        this.categories = response.data.data;
        this.categoriesCount = response.data.data.length;
      } catch (err) {
        console.log(err);
      }
    },
    async getCartCount() {
      if (!_.isEmpty(this.user)) {
        axios
          .get(window.Global.baseUrl + "/api/get/cart/count")
          .then((resp) => {
            this.cartCounter = resp.data;
          })
          .catch((err) => console.log(err));
      }
    },
  },
  mounted() {
    this.splitName();
    this.category();
    this.getCartCount();
  },
  computed: {
    check() {
      this.user = this.$parent.user.data;
      this.splitName();
      return _.isEmpty(this.$parent.user.data);
    },
  },
  created() {
    this.$root.$refs.Nav = this;
  },
};
</script>
