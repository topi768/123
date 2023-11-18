<template>
  <div class="container" >
    <my-header />
    <router-view/>
  </div>

</template>

<script>
import MyHeader from "./components/MyHeader.vue";
export default {
  components: {
    MyHeader
  }
}
</script>

<style lang="scss">
@import "@/assets/_variables.scss";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body, html {
  padding: 0;
  margin: 0;
  height: 100%;
  height: 100%;
  background: $main;
}
.container {
  padding: $pd3;
}
h1 {


font-family: 'Inter', sans-serif;
font-size: 105px;
font-style: normal;
font-weight: 600;
line-height: 135%; /* 141.75px */
letter-spacing: -1.05px;

color: $additional;
}
h2 {

/* Заголвок 2 */
font-family: 'Inter', sans-serif;
font-size: 39px;
font-style: normal;
font-weight: 500;
line-height: 135%; /* 52.65px */
color: $additional;
}
p {
  color: $additional;
  font-family: Inter;
}
.text-lg {
  font-size: 39px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 52.65px */
  letter-spacing: 0.39px;
}
.text-normal {
font-size: 25px;
font-style: normal;
font-weight: 300;
line-height: 135%; /* 33.75px */
letter-spacing: 0.75px;
}
.text-bold {
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 33.75px */
}
</style>
