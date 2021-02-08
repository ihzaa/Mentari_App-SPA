<style>
/* Show it is fixed to the top */
body {
  min-height: 75rem;
  padding-top: 5rem;
}
nav form {
      width: 60%;
      margin: auto;
  }
@media only screen and (max-width: 990px) {
  nav form {
      margin: 0!important;
      width: 100%;
  }

  #auth{
      display: inline;
      margin-top: 20px;
  }
}
</style>

<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
  <a class="navbar-brand" style="font-size:26px;font-weight:700" href="#">Mentari</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" style="font-size:16px" href="#">Kategori</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control" style="border-radius: 10px 0 0 10px;width:75%" type="search" placeholder="Search">
      <button class="btn btn-light my-2 my-sm-0 mr-4" style="border:1px solid #ced4da;border-left-color:transparent;border-radius: 0 10px 10px 0" type="submit"><i class="fas fa-search fa-lg">
    </i></button>
    </form><i class="fas fa-shopping-cart fa-lg mr-3"></i>
    <div id="auth" class="p-3 border-left">
        <button class="btn btn-outline-success my-2 mr-2 my-sm-0" type="submit"><strong>Masuk</strong></button>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><strong>Daftar</strong></button>
    </div>
  </div>
</nav>



</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>
