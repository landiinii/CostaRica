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
      return this.$root.$data.people.filter(({ owes }) => !owes).sort((a,b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0));
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
  text-decoration: none !important;
  color: black;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#left {
  grid-area: left;
  display: flex;
  justify-content: flex-end;
  text-align: center;
}

#left img {
  width: 70px;
}

#left p {
  margin-top: 0;
  padding-top: 0;
  text-align: center;
  font-size: 20px;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
