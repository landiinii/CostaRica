<template>
  <div>
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="../../public/images/logo.png" alt="Logo Picture">
        </router-link>
      </div>
      <div id="left">
          <div class="centering" v-on:click="showModal()">
            <img :src="'/images/globe.png'" alt="Home image">
            <p>Explanation</p>
          </div>
      </div>
    </div>
    <ProductList :people="positive" />
    <hr>
    <ProductList :people="negative" />

    <Modal
        v-show="isModalVisible"
        @close="closeModal"
    />
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
import Modal from '../components/Modal.vue';
export default {
  name: 'Home',
  components: {
    ProductList,
    Modal
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      if (this.isModalVisible)
        this.isModalVisible = false;
    }
  },
  computed: {
    positive() {
      return this.$root.$data.people.filter(({owes}) => !owes).sort((a, b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0));
    },
    negative() {
      return this.$root.$data.people.filter(({ owes }) => owes).sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    }
  },
}
</script>

<style scoped>


#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand left";
  margin-bottom: 10px;
}

#menu a {
  text-decoration: none;
  color: black;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 100%;
}

#left {
  grid-area: left;
  display: flex;
  justify-content: flex-end;
  text-align: center;
}

#left img {
  width: 50%;
}

#left p {
  margin-top: 0;
  padding-top: 0;
  text-align: center;
  font-size: 100%;
}

@media only screen and (max-width: 999px){
  #menu {
    grid-template-columns: 1fr 3fr 1fr;
  }
  #brand img {
    height: 100%;
    width: 100%;
    margin: auto;
  }
  #left img {
    width: 50%;
    margin: auto;
  }
  body {
    margin: 30px 60px;
  }
}
@media only screen and (max-width: 750px){
  #menu {
    grid-template-columns: 1fr 5fr 1fr;
  }
  #left img {
    width: 65%;
    margin: auto;
  }
  #brand img {
    height: 100%;
    width: 100%;
    margin: auto;
  }
}
@media only screen and (max-width: 625px){
  #menu {
    grid-template-columns: 1fr 6fr 1fr;
  }
  #left img {
    width: 50%;
    margin: auto;
  }
}
@media only screen and (max-width: 500px){
  #menu {
    grid-template-columns: 1fr 7fr 1fr;
  }
  #left img {
    width: 30px;
    margin: auto;
  }
}
@media only screen and (max-width: 438px){
  #brand img {
    height: 100%;
    width: 100%;
  }
  #left img {
    width: 25px;
  }
  #left p {
    font-size: 14px;
  }
}
@media only screen and (max-width: 320px){
  #left p {
    font-size: 10px;
  }
}
</style>
