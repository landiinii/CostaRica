<template>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="person in people" :key="person.id">
        <router-link :to="'/person/'+person.id">
          <div class="info">
              <h1>{{person.name}}</h1>
            </div>
            <div class="image">
              <img :src="'/images/people/'+person.id+'.JPG'" :alt="person.name + '\'s picture'">
            </div>
          <div v-if="person.owes" class="price">
            <div class="payment" v-for="owing in person.owes" :key="owing.name">
              <h1>Pays {{owing.name}} ${{owing.amount}}</h1>
            </div>
          </div>
          <div v-else class="price">
            <h1>Gets Paid {{person.price}}</h1>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    people: Array
  }

}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
}

.info {
  background: #00aeef;
  color: #000;
  padding: 10px 10px;
  height: 40px;
  align-content: center;
  text-align: center;
}

.info h1 {
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 15px;
}

.price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #00aeef;
  color: #000;
  padding: 10px 10px;
  align-content: center;
  text-align: center;
}

.price h1{
  font-size: 20px;
  margin: 0;
}
.payment h1{
  font-size: 20px;
  margin: 0;
}
</style>