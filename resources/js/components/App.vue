<template>
  <div>
    <header>
      <Navbar />
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>
