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
  methods: {
    checkAuth() {
    //   let token = localStorage.getItem("token");
    //   //   console.log(token);
    //   if (!_.isEmpty(token)) {
    //     axios
    //       .get("api/user", {
    //         headers: { Authorization: `Bearer ${token}` },
    //       })
    //       .then((result) => {
    //         user.data = result.data;
    //         window.user = result.data;
    //         console.log(user.data);
    //         axios.defaults.headers.common["Authorization"] = token;
    //         // console.log(window.user);
    //       })
    //       .catch((err) => {
    //         localStorage.removeItem("token");
    //       });
    //   }
    },
  },
  mounted() {
    // this.checkAuth();
  },
};
</script>
