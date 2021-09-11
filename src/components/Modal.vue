<template>
  <div class="modal-backdrop"  v-on:click="close">
    <div class="modal">
      <h1>Explanation</h1>
      <h4>Click on your face to view your personal page</h4>
      <ul>
        <li>
          <p>The 'Expenses' column on your personal page lists everything you paid for, and how much you paid for it, minus your portion of the cost (if applicable)</p>
        </li>
        <li>
          <p>The 'Debts' column on your personal page lists everything you owe other people for, and how much you owe them (all costs were split equal ways by those who used them)</p>
        </li>
        <li>
          <p>The 'Total' at the top of your personal page represents the difference of all of your expenses and all of your debts. In essence it is the total of how much you should get paid, or have to pay, all things considered from everyone</p>
        </li>
      </ul>
      <p>As long as everyone gets paid (or pays) their Total amount, it really doesn't matter where the money comes from, so these totals will be used to display on the home screen who should pay who, and how much.</p>
      <p style="font-size: 70%"><i>btw I used a $1 = 620 colones ratio for everything. If you're not okay with that, get over yourself.</i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  text-align: center;
  margin: 30% 10%;
  height: auto;
  width: auto;
}

.modal p{
  padding: 0 10px;
}

</style>