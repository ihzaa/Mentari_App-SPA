<style>
html {
  height: 100%;
}
</style>
<template>
  <div class="container mx-auto py-2 h-100">
    <div
      class="row d-flex justify-content-center align-items-center align-middle h-100"
    >
      <div class="col-md-6">
        <h1>Register form</h1>
        <form @submit.prevent="submit" class="w-100">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Enter your name"
              autocomplete="name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              autocomplete="email"
            />
          </div>
          <div class="form-group">
            <label for="name">Phone</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              aria-describedby="phone"
              placeholder="Enter your phone"
              autocomplete="phone"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              autocomplete="password"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    <!-- <div class="d-flex flex-wrap w-full justify-item-center items-center pt-56">
      <div class="flex flex-wrap max-w-xl">
        <div class="p-2 text-2xl text-gray-800 font-semibold">
          <h1>Register an account</h1>
        </div>
        <div class="p-2 w-full">
          <label class="w-full" for="name">Name</label>
          <span class="w-full text-red-500" v-if="errors.name">{{
            errors.name[0]
          }}</span>
          <input
            class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
            placeholder="Name"
            type="text"
            v-model="form.name"
          />
        </div>
        <div class="p-2 w-full">
          <label for="email">Your e-mail</label>
          <input
            class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
            placeholder="Email"
            type="email"
            v-model="form.email"
          />
        </div>
        <div class="p-2 w-full">
          <label for="password">Password</label>
          <input
            class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
            placeholder="Password"
            type="password"
            v-model="form.password"
            name="password"
          />
        </div>
        <div class="p-2 w-full mt-4">
          <button
            @click.prevent="saveForm"
            type="submit"
            class="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Register
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    saveForm() {
      axios
        .post("/api/register", this.form)
        .then(() => {
          console.log("saved");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
