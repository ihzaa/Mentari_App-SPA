<template>
  <h1>hai</h1>
</template>
<script>
export default {
  methods: {
    test() {
      this.$root.$refs.Loading.show();
    },
  },
  mounted() {
    this.test();
  },
};
</script>
