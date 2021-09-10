<template>
  <div>
    <div id="menu">
      <div id="brand">
        <img :src="'/images/people/'+this.$route.params.id+'.JPG'" :alt="name + ' image'">
        <h1>{{name}}</h1>
      </div>
      <div id="left">
        <router-link to="/">
          <div class="innerLeft">
            <img :src="'/images/logo.png'" alt="Home image">
            <p>Home</p>
          </div>
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
        <h2><u>Expenses</u></h2>
        <div class="expenseFor" v-for="expense in expenses" :key="expense.id">
          <p>${{priceDisplay(expense.amount.toString())}} paid to {{listNames(expense.debtors)}} for {{expense.description}}</p>
        </div>
      </div>
      <div class="debts">
        <h2><u>Debts</u></h2>
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

}
.total h1 {
 margin: 20px 0;
  font-size: 350%;
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

.debts {
  text-align: center;
  max-width: 30%;
}
.debts p {
  padding: 5px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "left brand right";
  margin-bottom: 10px;
}

#menu a {
  text-decoration: none;
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
  padding: 0 30%;
  width: 100%;
}

#left {
  grid-area: left;
  display: flex;
  justify-content: flex-start;
  text-align: center;
}

#left img {
  width: 100px;
}

#left p {
  margin-top: 0;
  padding-top: 0;
  text-align: center;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
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


@media only screen and (max-width: 999px){
  #menu {
    grid-template-columns: 1fr 3fr 1fr;
  }
  .total h1 {
    margin: 20px 0;
    font-size: 350%;
  }
  #brand h1 {
    margin: 0;
  }
  #brand img {
    height: auto;
    padding: 0 30%;
    width: 100%;
  }
  #left img {
    width: 50%;
    margin: auto;
  }
  #left p {
    font-size: 18px;
  }
  #right img {
    width: 50%;
    margin: auto;
  }
  #right p {
    font-size: 18px;
  }
}
@media only screen and (max-width: 750px){
  .total h1 {
    font-size: 300%;
  }
  #menu {
    grid-template-columns: 1fr 5fr 1fr;
  }
  #left img {
    width: 70%;
    margin: auto;
  }
  #brand img {
    height: 100%;
    width: 100%;
    margin: auto;
  }
}
@media only screen and (max-width: 625px){
  .total h1 {
    font-size: 250%;
  }
  #menu {
    grid-template-columns: 1fr 6fr 1fr;
  }
  #brand img {
    width: 100%;
  }
  #brand h1 {
    font-size: 24px;
  }
  #left img {
    width: 100%;
  }
  #left p {
    font-size: 16px;
  }
  #right img {
    width: 50%;
  }
  #right p {
    font-size: 16px;
  }
}
@media only screen and (max-width: 500px){
  .total h1 {
    font-size: 200%;
  }
  #menu {
    grid-template-columns: 1fr 8fr 1fr;
  }
  #brand h1 {
    font-size: 24px;
  }
  #left img {
    width: 60px;
  }
  #left p {
    font-size: 16px;
  }
  #right img {
    width: 45%;
  }
  #right p {
    font-size: 16px;
  }
}
@media only screen and (max-width: 438px){
  .total h1 {
    font-size: 180%;
  }
  #brand img {
    height: 100%;
    width: 100%;
  }
  #left img {
    width: 40px;
  }
  #left p {
    font-size: 14px;
  }
  #right img {
    width: 35%;
  }
  #right p {
    font-size: 14px;
  }
}
@media only screen and (max-width: 320px){
  .total h1 {
    font-size: 150%;
  }
  #brand h1 {
    font-size: 14px;
  }
  #left img {
    width: 30px;
  }
  #left p {
    font-size: 12px;
  }
  #right img {
    width: 30%;
  }
  #right p {
    font-size: 12px;
  }
}

</style>