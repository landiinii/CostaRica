<template>
  <div>
    <div id="menu">
      <div id="brand">
        <img :src="'/images/people/'+this.$route.params.id+'.JPG'" :alt="name + ' image'">
        <h1>{{name}}</h1>
      </div>
      <div id="left">
        <router-link to="/">
          <img :src="'/images/logo.png'" alt="Home image">
          <p>Home</p>
        </router-link>
      </div>
      <div id="right">
          <div class="centering" v-on:click="showModal()">
            <img :src="'/images/globe.png'" alt="Home image">
            <p>Explanation</p>
          </div>
      </div>
    </div>
    <div class="total">
      <h1>Total: ${{priceDisplay(totaled.toString())}}</h1>
    </div>
    <div class="breakdown">
      <div v-if="expenses.length > 0" class="expenses">
        <h2>Expenses</h2>
        <div class="expenseFor" v-for="expense in expenses" :key="expense.id">
          <p>${{priceDisplay(expense.amount.toString())}} paid to {{listNames(expense.debtors)}} for {{expense.description}}</p>
        </div>
      </div>
      <div class="debts">
        <h2>Debts</h2>
        <div class="debtsFor" v-for="debt in debts" :key="debt.id">
          <p>${{priceDisplay(debt.amount.toString())}} due to {{debt.payer}} for {{debt.description}}</p>
        </div>
      </div>
    </div>

    <Modal
        v-show="isModalVisible"
        @close="closeModal"
    />
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';
export default {
  name: 'Person',
  components: {
    Modal
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  computed: {
    expenses() {
      let array = this.$root.$data.expenses[this.$route.params.id].expenses;
      return array.sort((a,b) => (parseFloat(a.amount) > parseFloat(b.amount)) ? -1 : ((parseFloat(b.amount) > parseFloat(a.amount)) ? 1 : 0));
    },
    debts() {
      let array = this.$root.$data.expenses[this.$route.params.id].debts;
      return array.sort((a,b) => (parseFloat(a.amount) > parseFloat(b.amount)) ? -1 : ((parseFloat(b.amount) > parseFloat(a.amount)) ? 1 : 0));
    },
    totaled() {
      return this.$root.$data.people.find( ({ id }) => id === parseInt(this.$route.params.id) ).price;
    },
    name(){
      return this.$root.$data.people.find( ({ id }) => id === parseInt(this.$route.params.id) ).name;
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      if (this.isModalVisible)
        this.isModalVisible = false;
    },
    listNames(list){
      let str = "";
      for (let index=0; index<list.length-1; index++){
        str += list[index];
        str += ', ';
      }
      if (list.length === 1){
        return list[list.length-1];
      }
      else{
        return str.slice(0, str.length-2) + ' and ' + list[list.length-1];
      }
    },
    priceDisplay(price){
      let split = price.split('.');
      if (split.length > 1 && split[split.length-1].length < 2){
        price = price + '0'
      }
      return price;
    }
  }
}
</script>

<style scoped>

.total {
  text-align: center;
  font-size: 36px;
}

.total h1 {
 margin: 20px 0;
}

.breakdown {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.expenses {
  text-align: center;
  max-width: 30%;
}
.expenses p {
  padding: 5px;
}

.expenses h2{
  border: 5px solid black;
  border-radius: 5px;
}

.debts {
  text-align: center;
  max-width: 30%;
}
.debts p {
  padding: 5px;
}
.debts h2 {
  border: 5px solid black;
  border-radius: 5px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "left brand right";
  margin-bottom: 10px;
}

#menu a {
  text-decoration: none !important;
  color: black;
}

#brand {
  grid-area: brand;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

#brand h1 {
  margin: 0;
}

#brand img {
  height: auto;
  padding: 0 30%;
  width: 100%;
  justify-content: center;
}

#left {
  grid-area: left;
  display: flex;
  justify-content: flex-start;
}

#left img {
  width: 100px;
}

#left p {
  margin-top: 0;
  padding-top: 0;
  text-align: center;
  font-size: 20px;
}

#right {
  grid-area: right;
  display: flex;
  justify-content: flex-end;
  text-align: center;
}

#right img {
  width: 70px;
}

#right p {
  margin-top: 0;
  padding-top: 0;
  text-align: center;
  font-size: 20px;
}

</style>