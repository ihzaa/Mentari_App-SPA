<template>
  <div class="container my-4 px-4">
    <div class="row">
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
      <div class="col-md-4"></div>
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
    };
  },
  methods: {
    getItem() {
      axios
        .get(window.Global.baseUrl + "/api/get/cart/item")
        .then((result) => {
          this.items = result.data;
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
  },
  created() {
    this.$root.$refs.Loading.show();
  },
  mounted() {
    this.getItem();
  },
};
</script>
