<template>
  <div class="container my-4 px-4">
    <div class="text-center my-5" v-if="items.length == 0">
      <h4>Ups! Anda belum memiliki item di keranjang.</h4>
      <h4 class="mt-5">
        Silahkan kembali ke halaman
        <router-link :to="{ name: 'home' }">home</router-link>
        dan lanjut berbelanja.
      </h4>
      <!-- <div class="col-md-12">
        <h2 class="text-center">Ooopss kamu belum punya item di keranjang.</h2>
      </div> -->
    </div>
    <div class="row" v-else>
      <div class="col-md-8">
        <h1>Keranjang</h1>
        <div v-for="(item, index) in items" :key="item.cart_id">
          <hr />
          <div class="row" v-bind:id="'item' + index">
            <div class="col-1 d-flex">
              <div class="form-check my-auto mx-auto">
                <input
                  class="form-check-input position-static"
                  style="height: 17px; width: 17px"
                  type="checkbox"
                  v-bind:value="item.cart_id"
                  v-model="checkedItem"
                />
              </div>
            </div>
            <div class="col-2">
              <img
                v-if="item.img == null"
                src="/frontend/images/no-image-available.png"
                alt=""
                class="img-fluid"
              />
              <img
                v-else
                v-bind:src="global + item.img"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="col-9">
              <div>
                <p class="d-flex h5">
                  {{ item.name }}
                  <span class="ml-auto"
                    ><button
                      class="btn btn-sm btn-danger"
                      @click="deleteItem(index)"
                    >
                      <span class="icon">
                        <b-trash-fill
                          style="width: 15px; height: 15px"
                        ></b-trash-fill>
                      </span></button
                  ></span>
                </p>
                <h3>
                  <small
                    ><strong>Rp. {{ formatPrice(item.price) }}</strong></small
                  >
                </h3>
              </div>
              <div class="d-flex">
                <ul class="ml-auto list-inline">
                  <li class="list-inline-item">
                    <form
                      @submit.prevent="changeQuantity(index, item.quantity - 1)"
                    >
                      <button
                        type="submit"
                        class="btn btn-sm btn-outline-success"
                      >
                        -
                      </button>
                    </form>
                  </li>
                  <li class="list-inline-item">
                    <form
                      @submit.prevent="changeQuantity(index, item.quantity)"
                    >
                      <input
                        type="number"
                        style="max-width: 50px"
                        v-model="item.quantity"
                      />
                    </form>
                  </li>
                  <li class="list-inline-item">
                    <form
                      @submit.prevent="changeQuantity(index, item.quantity + 1)"
                    >
                      <button
                        type="submit"
                        class="btn btn-sm btn-outline-success"
                      >
                        +
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h2>Ringkasan Belanja</h2>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              Total Harga: <strong>Rp. {{ formatPrice(totalPrice) }}</strong>
            </h5>
            <hr />
            <h5 class="card-title">Pilih Alamat:</h5>
            <div v-if="addresses.length == 0">
              <h5>
                Anda belum memiliki alamat, tambahkan di halaman
                <router-link :to="{ name: 'profile' }">profil</router-link>.
              </h5>
            </div>
            <div v-else>
              <div
                v-for="(address, index) in addresses"
                v-bind:key="index"
                class="d-flex card mb-2 p-1"
              >
                <div class="custom-control custom-radio my-auto mx-auto">
                  <input
                    type="radio"
                    v-bind:id="'alamat' + address.id"
                    name="alamat"
                    class="custom-control-input"
                    v-bind:value="address.id"
                    v-model="checkedAddress"
                  />
                  <label
                    class="custom-control-label ml-2"
                    v-bind:for="'alamat' + address.id"
                    >{{ address.address }}</label
                  >
                </div>
              </div>
              <button
                class="btn btn-block btn-primary mt-4"
                :disabled="buttonCondition"
                @click="buy"
              >
                Beli
              </button>
            </div>
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
      items: [],
      global: window.Global.imgPath,
      checkedItem: [],
      addresses: [],
      checkedAddress: "",
    };
  },
  methods: {
    getItem() {
      axios
        .get(window.Global.baseUrl + "/api/get/cart/item")
        .then((result) => {
          this.items = result.data.items;
          this.addresses = result.data.addresses;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.$root.$refs.Loading.hide();
        });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    async changeQuantity(index, quantity) {
      if (quantity <= 0) {
        this.deleteItem(index);
        return;
      }
      this.items[index].quantity = quantity;

      axios
        .post(window.Global.baseUrl + "/api/cart/item/quantity", {
          id: this.items[index].cart_id,
          quantity: quantity,
        })
        // .then(() => {
        //   this.items[index].quantity = quantity;
        // })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteItem(index) {
      Swal.fire({
        title: "Yakin menghapus item?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: `Hapus!`,
        cancelButtonText: "Batal.",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$root.$refs.Loading.show();
          axios
            .post(window.Global.baseUrl + "/api/delete/cart/item", {
              id: this.items[index].cart_id,
            })
            .then((result) => {
              this.items.splice(index, 1);
              this.$root.$refs.Nav.cartCounter--;
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              this.$root.$refs.Loading.hide();
            });
        }
      });
    },
    buy() {
      Swal.fire({
        title: "Yakin melakukan pembelian?",
        text: `Total harga Rp. ${this.formatPrice(
          this.totalPrice
        )} dibayarkan melalui kurir.`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: `Ya!`,
        cancelButtonText: "Batal.",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$root.$refs.Loading.show();
          axios
            .post(window.Global.baseUrl + "/api/cart/item/buy", {
              address: this.checkedAddress,
              items: this.checkedItem,
            })
            .then((result) => {
              this.$root.$refs.Nav.cartCounter = result.data;
              this.$root.$refs.Loading.hide();
              Swal.fire({
                icon: "success",
                title: "Pembelian berhasil.",
              });
              this.$router.push({ name: "home" });
            })

            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
  },
  created() {
    this.$root.$refs.Loading.show();
  },
  mounted() {
    this.getItem();
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (this.checkedItem.includes(this.items[i].cart_id)) {
          total += this.items[i].quantity * this.items[i].price;
        }
      }
      return total;
    },
    buttonCondition() {
      return _.isEmpty(this.checkedItem) || this.checkedAddress == "";
    },
  },
};
</script>
