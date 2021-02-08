<template>
<div>
    <header>
        <Navbar />
    </header>
    <Carousel />
  <div class="d-flex justify-content-around">
      <div class="col-3 p-4">
          <div class="card border">
              <div class="center">
                <h3 >Side Bar</h3>
              </div>
          </div>
      </div>
      <div class="col-9 p-4">
          <div class="card bg-dark">
              <h1>Main Bar</h1>
          </div>
      </div>
</div>
</div>
</template>

<script>
import Navbar from "../../../components/Navbar"
import Carousel from "../components/Carousel"

export default {
    components: {
        Navbar, Carousel
    }
}

</script>
