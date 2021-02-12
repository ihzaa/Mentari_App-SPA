<style>
body {
    min-height: 75rem;
    padding-top: 80px;
}
.search {
    width: 40%;
}
.search-group {
    width: 80%;
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
        margin-left: auto;
        margin-right: auto;
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
            <b-navbar-brand href="#"
                ><h1><strong>Mentari</strong></h1></b-navbar-brand
            >

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
                            ><i class="fas fa-search fa-lg"></i
                        ></b-button>
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
                            <i class="fas fa-shopping-cart fa-lg"></i>
                        </span>
                        <span class="tag">0</span>
                    </b-nav-item>
                    <b-nav-item class="authNav" v-if="userLogin">
                        <b-button variant="outline-success">Daftar</b-button>
                        <b-button class="ml-2" variant="outline-success"
                            >Masuk</b-button
                        >
                    </b-nav-item>
                    <b-nav-item-dropdown
                        class="userNav"
                        right
                        v-if="!userLogin"
                    >
                        <template #button-content>
                            <strong>User</strong>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import user from "../user";

export default {
    data() {
        return {
            userLogin: false
        };
    },
    mounted() {
        this.userLogin = window._.isEmpty(user.data);
        console.log(this.userLogin);
    }
};
</script>
