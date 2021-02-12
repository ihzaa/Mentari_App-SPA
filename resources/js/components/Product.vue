<style scoped>
.product-card {
    max-width: 20rem;
}
.product-card:hover{
    cursor: pointer;
    box-shadow: 0 8px 16px 0 lightgreen;
}
.header{
    background-color: white;
}
.info {
    height: 110px;

}
.harga {
    font-size: 18px;
    font-weight: 1000!important;
}
.card-body {
    padding: 0;
}
.card-footer {
    background-color: white;
}
@media only screen and (max-width: 700px) {
    .product-card {
        max-width: 40rem;
    }
}
</style>

<template>
    <div class="mx-5 my-3">
        <b-row class="justify-content-around" align-v="center">
            <b-card
    class="product-card mb-2 p-3 mx-1"
    v-for="product in productInfo" v-bind:key="product.id" name="">
  <b-card-img-lazy width="100%" height="200" src="https://picsum.photos/600/400/?image=25" top></b-card-img-lazy>
  <b-card-header class="header text-center" tag="header"><h5><strong>{{ product.name }}</strong></h5></b-card-header>
  <b-card-body>
    <b-card-text class="info">
      {{product.description}}
    </b-card-text>
    <b-card-text class="harga text-right">
    <p>Rp. {{product.price}}</p>
    </b-card-text>
  </b-card-body>
  <b-card-footer class="card-footer" tag="footer">
      <b-button href="#" variant="success"><i class="fas fa-shopping-cart fa-lg"></i></b-button>
    </b-card-footer>
</b-card>
        </b-row>
    </div>
</template>

<script>
import Axios from "axios";
import global from "../global";

  export default {
    data() {
      return {
        productInfo: [],
        global: null
      }
    },
    async mounted() {
        try{
            let response = await Axios.get(`/api/product`);
            this.productInfo = response.data.data;

            this.global = global
        }catch(err){
            console.log(err)
        }
    }
  }
</script>
