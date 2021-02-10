<template>
<div>
<header>
    <Navigation />
</header>
    <mdb-card wide ecommerce>
  <mdb-view cascade>
    <mdb-card-image waves src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(4).jpg" top alt="sample photo" />
  </mdb-view>
  <mdb-card-body class="text-center" cascade>
    <a href="" class="text-muted">
      <h5>Category</h5>
    </a>
    <mdb-card-title>
      <strong><a href="">Product name</a></strong>
    </mdb-card-title>
    <ul class="rating">
      <li><mdb-icon icon="star" /></li>
      <li><mdb-icon icon="star" /></li>
      <li><mdb-icon icon="star" /></li>
      <li><mdb-icon icon="star" /></li>
      <li><mdb-icon far icon="star" /></li>
    </ul>
    <mdb-card-text>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</mdb-card-text>
    <mdb-card-footer color="white" textColor="black" class="px-1">
      <span class="float-left">49$ <span class="discount">199$</span></span>
      <span class="float-right">
        <a>
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">
              Share
            </div>
            <mdb-icon slot="reference" icon="eye" class="ml-3"></mdb-icon>
          </mdb-tooltip>
        </a>
        <a class="active">
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">
              Added to watchlist
            </div>
            <mdb-icon slot="reference" icon="heart" class="ml-3"></mdb-icon>
          </mdb-tooltip>
        </a>
      </span>
    </mdb-card-footer>
  </mdb-card-body>
</mdb-card>
</div>

</template>

<script>
export default {
    components: {
        Navigation
    }
}
</script>
