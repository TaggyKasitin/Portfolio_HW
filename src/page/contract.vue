<template>
  <div style="text-align: center">
    <h3>My Contract!</h3>
  </div>
  <div style="text-align: center">
    <p>
      <img
        style="border-radius: 50%"
        border="3"
        src="https://www.mxphone.com/wp-content/uploads/2020/10/Screenshot-145-1200x768.png"
        width="200"
        height="150"
      /><br />
      Gmail: taggykasitin@gmail.com
    </p>
    <p>
      <a href="https://github.com/TaggyKasitin">
        <img
          style="border-radius: 50%"
          border="3"
          src="https://www.theindianwire.com/wp-content/uploads/2019/05/maxresdefault-2.jpg"
          width="200"
          height="150"
        /> </a
      ><br />
      Github: TaggyKasitin
    </p>
  </div>

  <div style="text-align: center; margin-bottom: 20px">
    <button style="background-color: lightgray">
      <router-link to="/" style="color: black">Back</router-link>
    </button>
  </div>
  <!-- <HelloWorld msg="Hello Vue 3 in CodeSandbox!" /> -->
</template>

<script>
// import HelloWorldVue from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 10px;
  background-color: rgb(115, 205, 221);
}
</style>
