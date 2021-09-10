import Vue from 'vue'
import App from './App.vue'
import router from './router'


new Vue({
  router,
  data() {
    return {
      people: [],
      expenses: []
    }
  },
  created() {
    this.calculate().then();
  },
  methods: {
    async calculate(){
      let people;
      let expenses;
      try{
        const fetch = require('node-fetch');
        let pdata = await fetch("http://localhost:3000/people");
        people = await pdata.json();
        let edata = await fetch("http://localhost:3000/expenses");
        expenses = await edata.json()
      }
      catch(err){
        console.log("Database Failed, Running on Backup")
        people = [
          {
            "id": 1,
            "name": "Bret"
          },
          {
            "id": 2,
            "name": "Steve"
          },
          {
            "id": 3,
            "name": "Nate"
          },
          {
            "id": 4,
            "name": "Spencer"
          },
          {
            "id": 5,
            "name": "Peter"
          },
          {
            "id": 6,
            "name": "Tanner"
          },
          {
            "id": 7,
            "name": "Zach"
          },
          {
            "id": 8,
            "name": "Kevin"
          },
          {
            "id": 9,
            "name": "Jason"
          },
          {
            "id": 10,
            "name": "Landen"
          },
          {
            "id": 11,
            "name": "Aileen"
          },
          {
            "id": 12,
            "name": "Hannah"
          },
          {
            "id": 13,
            "name": "Kayla"
          },
          {
            "id": 14,
            "name": "Holly"
          },
          {
            "id": 15,
            "name": "Megan"
          },
          {
            "id": 16,
            "name": "All"
          }
        ];
        expenses = [
          {
            "id": 1,
            "payer": 9,
            "reciever": 16,
            "amount": 647,
            "reason": "Big Car Rental"
          },
          {
            "id": 2,
            "payer": 9,
            "reciever": 16,
            "amount": 33,
            "reason": "Breakfast Groceries"
          },
          {
            "id": 3,
            "payer": 11,
            "reciever": 16,
            "amount": 158.43,
            "reason": "Total for Aileen"
          },
          {
            "id": 4,
            "payer": 12,
            "reciever": 16,
            "amount": 33.36,
            "reason": "Groceries for Jaco Beach"
          },
          {
            "id": 5,
            "payer": 6,
            "reciever": "6/1/2/3/4/5/7/8",
            "amount": 34.97,
            "reason": "Thursday Night Dinner"
          },
          {
            "id": 6,
            "payer": 6,
            "reciever": 16,
            "amount": 54.05,
            "reason": "Gas"
          },
          {
            "id": 7,
            "payer": 6,
            "reciever": 16,
            "amount": 39.03,
            "reason": "Gas"
          },
          {
            "id": 9,
            "payer": 6,
            "reciever": "1/2/3/4/5/6/7/8/9/11/12/13",
            "amount": 23.42,
            "reason": "Snacks at Airport"
          },
          {
            "id": 10,
            "payer": 6,
            "reciever": 16,
            "amount": 434,
            "reason": "Sedan Rental"
          },
          {
            "id": 11,
            "payer": 3,
            "reciever": 16,
            "amount": 55,
            "reason": "Gas"
          },
          {
            "id": 12,
            "payer": 2,
            "reciever": 16,
            "amount": 4,
            "reason": "Juice and Cereal"
          },
          {
            "id": 13,
            "payer": 2,
            "reciever": 16,
            "amount": 566.71,
            "reason": "Suzuki Rental"
          },
          {
            "id": 14,
            "payer": 1,
            "reciever": 16,
            "amount": 72,
            "reason": "AirBnB Extra Costs"
          },
          {
            "id": 15,
            "payer": 1,
            "reciever": 16,
            "amount": 38.43,
            "reason": "Groceries"
          },
          {
            "id": 16,
            "payer": 1,
            "reciever": 16,
            "amount": 10,
            "reason": "Surf Boards"
          },
          {
            "id": 17,
            "payer": 1,
            "reciever": "1/2/3/4/5/6/7/8/9/11/12/13",
            "amount": 16.12,
            "reason": "Kayak"
          },
          {
            "id": 18,
            "payer": 5,
            "reciever": 16,
            "amount": 46.83,
            "reason": "Gas"
          },
          {
            "id": 19,
            "payer": 5,
            "reciever": 16,
            "amount": 49.98,
            "reason": "Gas"
          },
          {
            "id": 20,
            "payer": 9,
            "reciever": 16,
            "amount": 20,
            "reason": "Surf Boards"
          },
          {
            "id": 21,
            "payer": 15,
            "reciever": 16,
            "amount": 30.45,
            "reason": "Groceries"
          },
          {
            "id": 22,
            "payer": 15,
            "reciever": 16,
            "amount": 16.48,
            "reason": "Groceries"
          },
          {
            "id": 23,
            "payer": 10,
            "reciever": 16,
            "amount": 15,
            "reason": "Surf Boards"
          },
          {
            "id": 24,
            "payer": 10,
            "reciever": "1/2/3/10/14",
            "amount": 25,
            "reason": "Moped"
          },
          {
            "id": 25,
            "payer": 10,
            "reciever": "3/14",
            "amount": 20,
            "reason": "Sloth Sanctuary"
          }
        ];
      }
      let peopleMap = {};
      let expenseMap = {};
      for (let person of people){
        if (person['id'] !== 16){
          peopleMap[person['id']] = person['name'];
          expenseMap[person['id']] = {
            expenses: [],
            debts: []
          }
        }
      }
      for (let transaction of expenses){
        let expense = {
          id: transaction['id'].toString(),
          description: transaction['reason'].toString(),
          debtors: [],
          amount: ""
        };
        let debt = {
          id: transaction['id'].toString(),
          description: transaction['reason'].toString(),
          payer: peopleMap[transaction['payer']],
          amount: ""
        };
        if (parseInt(transaction['reciever'])===16){
          let individualAmount = Math.ceil(parseInt(transaction['amount'].toString())*100/15)/100;
          debt['amount'] = individualAmount.toString();
          for (let personId in expenseMap){
            if (personId !== transaction['payer'].toString()){
              expenseMap[personId]['debts'].push(debt);
            }
          }
          expense['debtors'].push('all');
          expense['amount'] = (Math.round(individualAmount * 1400)/100).toString();
          expenseMap[transaction['payer']]['expenses'].push(expense);
        }
        else{
          let debtorIds = transaction['reciever'].split('/');
          let individualAmount = Math.ceil(parseInt(transaction['amount'].toString())*100/debtorIds.length)/100;
          debt['amount'] = individualAmount.toString();
          for (let dId of debtorIds){
            expense['debtors'].push(peopleMap[dId]);
            if (parseInt(dId) !== transaction['payer']){
              expenseMap[parseInt(dId)]['debts'].push(debt);
            }
          }
          const index = debtorIds.indexOf(transaction['payer'].toString());
          if (index > -1) {
            debtorIds.splice(index, 1);
          }
          expense['amount'] = (Math.round(individualAmount * debtorIds.length * 100)/100).toString();
          expenseMap[transaction['payer']]['expenses'].push(expense);
        }
      }
      console.log(expenseMap);

      let peopleFinal = [];
      for (let pId in expenseMap){
        let totalExpenses = 0;
        for (let expense of expenseMap[pId]['expenses']){
          totalExpenses += parseFloat(expense['amount']);
        }
        let totalDebts = 0;
        for (let debt of expenseMap[pId]['debts']){
          totalDebts += parseFloat(debt['amount']);
        }
        peopleFinal.push({
          id: parseInt(pId),
          price: Math.round((totalExpenses - totalDebts)*100)/100,
          name: peopleMap[pId]
        });
      }

      let toBePaid = [];
      let toPay = [];
      for (let person of peopleFinal){
        person['editPrice'] = person['price'];
        if (person['price'] > 0)
          toBePaid.push(person);
        else
          toPay.push(person);
      }
      toBePaid = toBePaid.sort((a,b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0));
      toPay = toPay.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
      let payerIndex = 0;
      for (let person of toBePaid){
        toPay[payerIndex]['editPrice'] = Math.abs(toPay[payerIndex]['editPrice']);
        while (payerIndex < toPay.length && person['editPrice'] >= toPay[payerIndex]['editPrice']){
          if (!('owes' in toPay[payerIndex]))
            toPay[payerIndex]['owes'] = [];
          toPay[payerIndex]['owes'].push({
            name: person.name,
            amount: toPay[payerIndex]['editPrice']
          });
          person['editPrice'] = Math.round((person['editPrice'] - toPay[payerIndex]['editPrice'])*100)/100;
          payerIndex++;
          if(payerIndex < toPay.length)
            toPay[payerIndex]['editPrice'] = Math.abs(toPay[payerIndex]['editPrice']);
        }
        if (payerIndex < toPay.length){
          if (!('owes' in toPay[payerIndex]))
            toPay[payerIndex]['owes'] = [];
          toPay[payerIndex]['owes'].push({
            name: person.name,
            amount: person['editPrice']
          });
          toPay[payerIndex]['editPrice'] = Math.round((toPay[payerIndex]['editPrice'] - person['editPrice'])*100)/100;
        }
      }
      console.log(peopleFinal);
      this.people= peopleFinal;
      this.expenses= expenseMap;
    }
  },
  render: h => h(App)
}).$mount('#app')
