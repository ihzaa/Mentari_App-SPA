<template>
  <router-view></router-view>
</template>
 <script>
import user from "./user";
export default {
  data() {
    return {
      user: user,
    };
  },
};
</script>
