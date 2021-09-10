<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

.menu-item p {
  margin: 0;
}

.terms a{
  display: block;
  color: #cacaca;
  font-size: 15px;
  line-height: 15px;
  padding: 4px;
}

@media only screen and (max-width: 1100px){
  body {
    margin: 30px 50px;
  }
}
@media only screen and (max-width: 760px){
  body {
    margin: 20px 40px;
  }
}
@media only screen and (max-width: 520px){
  body {
    margin: 20px 20px;
  }
}

</style>
