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
/* .shopping-cart:hover {
    border-bottom: 1px solid lightgreen;
} */
.shopping-cart:hover span {
    color: black;
}
#search {
    border-color: lightgrey;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-right: 0;
}
#search:focus {
    border-left-color: lightgrey;
    border-top-color: lightgrey;
    border-bottom-color: lightgrey;
    border-right-color: none;
    box-shadow: none !important;
    outline: none !important;
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
        /* margin-left: auto !important;
        margin-right: auto !important;
        margin-top: 20px; */
        margin: auto !important;
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
    .userNav {
        border-left: 0;
        margin: auto !important;
        padding-left: 0;
        font-size: 18px;
    }
    .col-7 {
        flex-basis: 80% !important;
        max-width: 80% !important;
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
                        @keyup.enter="emitSearchValue"
                        v-model="searchValue"
                    >
                    </b-form-input>
                    <b-input-group-append>
                        <b-button
                            id="searchButton"
                            variant="outline-success"
                            @click="emitSearchValue"
                        >
                            <b-search style="width: 20px; height: 20px">
                            </b-search>
                        </b-button>
                    </b-input-group-append>
                </b-input-group>
            </div>
            <!-- </b-nav-form> -->

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto mr-4">
                    <b-nav-item class="shopping-cart" :to="{ name: 'home' }">
                        <span>
                            <strong>Home</strong>
                        </span>
                    </b-nav-item>
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
                        <b-dropdown-item
                            v-model="categoryValue"
                            @click="emitCategoryValue(null)"
                        >
                            Semua Produk
                        </b-dropdown-item>
                        <b-dropdown-item v-if="categoriesCount == 0" disabled>
                            Tidak ditemukan
                        </b-dropdown-item>
                        <b-dropdown-item
                            v-else
                            v-for="category in categories"
                            v-bind:key="category.id"
                            v-model="categoryValue"
                            @click="
                                emitCategoryValue(category.id, category.name)
                            "
                        >
                            {{ category.name }}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item class="shopping-cart" :to="{ name: 'cart' }">
                        <span>
                            <strong>Keranjang</strong>
                        </span>
                        <span class="icon">
                            <b-cart-check-fill
                                style="width: 20px; height: 20px"
                            ></b-cart-check-fill>
                        </span>
                        <span class="tag my-auto">{{ cartCounter }}</span>
                    </b-nav-item>
                    <b-nav-item class="authNav" v-if="check">
                        <router-link :to="{ name: 'register' }">
                            <b-button class="ml-2" variant="outline-success"
                                >Daftar</b-button
                            >
                        </router-link>
                        <router-link :to="{ name: 'login' }">
                            <b-button class="ml-2" variant="outline-success"
                                >Masuk</b-button
                            >
                        </router-link>
                    </b-nav-item>
                    <b-nav-item-dropdown class="userNav" right v-else>
                        <template #button-content>
                            <strong v-text="name"></strong>
                        </template>
                        <b-dropdown-item :to="{ name: 'profile' }"
                            >Profile</b-dropdown-item
                        >
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
import { logoutUser } from "../authUser";
import { EventBus } from "../event-bus";

export default {
    data() {
        return {
            user: this.$parent.user.data,
            name: "",
            categories: [],
            categoriesCount: 0,
            cartCounter: 0,
            searchValue: "",
            categoryValue: ""
        };
    },
    methods: {
        async logout() {
            await logoutUser();
            await this.$router.push({ name: "home" });
        },
        splitName() {
            if (!_.isEmpty(this.user)) {
                if (typeof this.user.name == "string") {
                    this.name = this.user.name
                        .split(" ")
                        .slice(0, 2)
                        .join(" ");
                }
            }
        },
        async category() {
            try {
                let response = await axios.get(
                    window.Global.baseUrl + `/api/category`
                );
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
                    .then(resp => {
                        this.cartCounter = resp.data;
                    })
                    .catch(err => console.log(err));
            }
        },
        emitSearchValue() {
            EventBus.$emit("search-value", this.searchValue);
        },
        emitCategoryValue(id, name) {
            EventBus.$emit("category-value", id);
            EventBus.$emit("category-name", name);
        },

        kategori(input) {
            this.categoryValue = input;
        }
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
        }
    },
    created() {
        this.$root.$refs.Nav = this;
    }
};
</script>
