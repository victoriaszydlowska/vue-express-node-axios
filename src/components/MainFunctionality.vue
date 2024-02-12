<template>
        <h3 class="message">{{ message }}</h3>
            <p v-if="greeting" >{{ greeting }}</p>
         <form  @submit.prevent="sendData(); submitForm()">
      <label for="name">Enter your URL: </label>
      <input type="text" id="name" v-model="name" placeholder="Type your URL..." />
      <button type="submit" @click="handleClick" :style="{
        backgroundColor: active ? 'black' : 'grey',
      }"
>Submit</button>
    </form>

<template v-if="(nameedit[0]>400 && nameedit[0]<600)">
  <template v-for="(error,index) in nameedit" v-bind:key="index">
    <div> Error {{error}}. Try a different link. </div>
  </template>
</template>

<template v-else-if="(nameedit.length>1)">
  <template v-for="(item,index) in nameedit" v-bind:key="index">
    <div>{{index +1}}. {{item}}</div>
  </template>
  </template>
    <template v-else-if="(nameedit.length==1)">
      {{nameedit[0]}}
  </template>


</template>

<script>
// Using Axios
import axios from 'axios';

export default {
    data() {
        return {
            message: '',
             name: '',
      greeting: '', 
      nameedit: '',
        active: false,

        };
    },
      methods: {
    submitForm() {
      if (this.name) {
        this.greeting = `You have enterred:  ${this.name}!`;
      } else {
        this.greeting = '';
      }
    },
        handleClick() {
      this.active = !this.active;
    },

    sendData() {
     // Make an HTTP POST request to your Express.js backend
      axios.post('http://localhost:3000/data', { name: this.name })
        .then(response => {
           this.nameedit = response.data;

        })
        .catch(error => {
          console.error(error);
        });
                }
            },
    

    mounted() {
        axios.get('http://localhost:3000/api/data')
            .then(response => {
                this.message = response.data.message;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
};

</script>


<style scoped>

.message{
  padding-top:1rem;
  font-size:1.4rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0px;
}
a {
  color: #42b983;
}
form {
  padding:1rem 3rem;
}
input, button{
  padding:1rem 3rem;
  text-size:14rem;

}
button{
  background-color:grey;
  color:white;
     border: none;

}

</style>
