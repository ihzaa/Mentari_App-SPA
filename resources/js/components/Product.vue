<style scoped>
.info {
    height: 110px;

}
.harga {
    font-size: 18px;
    font-weight: 1000;
    border-bottom: solid 1px ced4da;
}
.card-body {
    padding: 0;
}
.card-footer {
    background-color: white;
}
</style>

<template>
    <div class="mx-5 my-2">
  <b-card
    title="Produk 1"
    img-src="https://picsum.photos/600/400/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 p-3"
  >
    <div class="info">
    <b-card-text class="desc">
      Deskripsi produk.
    </b-card-text>
    </div>
    <div class="harga text-right">
    <h4>Rp. 20.000</h4>
    </div>

<div class="card-footer d-flex mt-1">
    <b-button href="#" variant="success"><i class="fas fa-shopping-cart fa-lg"></i></b-button>
</div>
  </b-card>
</div>
</template>
