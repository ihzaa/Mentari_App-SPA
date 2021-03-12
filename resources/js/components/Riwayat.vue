<template>
    <div>
        <div class="container mt-4">
            <div class="row flex-lg-nowrap">
                <div class="col-12 col-lg-auto mb-3" style="width: 200px">
                    <div class="card p-3">
                        <div class="e-navlist e-navlist--active-bg">
                            <ul class="nav">
                                <li class="nav-item">
                                    <router-link
                                        :to="{ name: 'profile' }"
                                        class="nav-link px-2"
                                        ><span class="icon mr-1">
                                            <b-person-fill
                                                style="width: 20px; height: 20px"
                                            ></b-person-fill>
                                        </span>
                                        <span
                                            >Pengaturan Akun</span
                                        ></router-link
                                    >
                                </li>
                                <li class="nav-item">
                                    <p class="nav-link px-2">
                                        <span class="icon mr-1">
                                            <b-cart-check-fill
                                                style="width: 20px; height: 20px"
                                            ></b-cart-check-fill>
                                            <!-- <font-awesome-icon icon="shopping-cart" /> -->
                                        </span>
                                        <span>Riwayat Belanja</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="row">
                        <div class="col mb-3">
                            <div class="card">
                                <div class="card-header">Riwayat Belanja</div>
                                <div class="card-body">
                                    <div id="accordion">
                                        <div
                                            class="card mb-2"
                                            v-for="(history,
                                            index) in histories"
                                            v-bind:key="index"
                                        >
                                            <div
                                                class="card-header  d-flex justify-content-between"
                                                id="headingOne"
                                            >
                                                <h5 class="mb-0">
                                                    <button
                                                        class="btn btn-link"
                                                        data-toggle="collapse"
                                                        v-bind:data-target="
                                                            '#collapse' + index
                                                        "
                                                        aria-expanded="true"
                                                    >
                                                        {{
                                                            timeStampToDate(
                                                                history.created_at
                                                            )
                                                        }}
                                                    </button>
                                                </h5>
                                                <p
                                                    class="m-1"
                                                    style="font-size:14px"
                                                    v-if="history.status == 0"
                                                >
                                                    Sedang diproses
                                                </p>
                                                <p
                                                    class="m-1"
                                                    style="font-size:14px"
                                                    v-else
                                                >
                                                    Telah terkirim
                                                </p>
                                            </div>

                                            <div
                                                v-bind:id="'collapse' + index"
                                                class="collapse"
                                                data-parent="#accordion"
                                            >
                                                <div class="card-body">
                                                    <ul
                                                        class="list-group list-group-flush"
                                                    >
                                                        <li
                                                            class="list-group-item"
                                                            v-for="(id,
                                                            idx) in parseItemId(
                                                                history.cart_id
                                                            )"
                                                            v-bind:key="idx"
                                                        >
                                                            {{
                                                                itemId[
                                                                    carts[id]
                                                                        .item_id
                                                                ]
                                                            }}
                                                            x{{
                                                                carts[id]
                                                                    .quantity
                                                            }}
                                                        </li>
                                                    </ul>
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
                                        <button
                                            class="btn btn-block btn-secondary"
                                            @click="logout"
                                        >
                                            <i class="fa fa-sign-out"></i>
                                            <span>Logout</span>
                                        </button>
                                    </div>
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
import moment from "moment";
import { logoutUser } from "../authUser";

export default {
    data() {
        return {
            itemId: [],
            histories: [],
            carts: []
        };
    },
    methods: {
        async logout() {
            this.$root.$refs.Loading.show();

            await logoutUser();
            this.$router.push({ name: "home" });
        },
        getHistory() {
            axios
                .get(window.Global.baseUrl + "/api/transaction/history")
                .then(result => {
                    this.itemId = result.data.item;
                    this.histories = result.data.history;
                    this.carts = result.data.cart;
                })
                .then(() => {
                    this.$root.$refs.Loading.hide();
                })
                .catch(err => {
                    console.log(err);
                });
        },
        parseItemId(arr) {
            return JSON.parse(arr);
        },
        timeStampToDate(date) {
            return moment(date).format("D MMM YYYY, HH:mm");
        },
        async logout() {
            this.$root.$refs.Loading.show();

            await logoutUser();
            this.$root.$refs.Nav.cartCounter = 0;
            this.$router.push({ name: "home" });
        }
    },
    created() {
        this.$root.$refs.Loading.show();
    },
    mounted() {
        this.getHistory();
    }
};
</script>
