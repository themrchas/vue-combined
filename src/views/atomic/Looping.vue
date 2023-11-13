<template>

    <h2>v-for</h2>
    
    <br />
    <h3>Iterate over an array</h3>
    <h3>&lt;li v-for=&quot;item in array&quot;:key=Math.random()&gt;</h3>
    <ul>
        <li v-for="name in arrayNames" :key=Math.random()>
            {{  name }}
        </li>
    </ul>

    <h3>Iterate over an Object's properties</h3>
    <h3>&lt;li v-for=&quot;(value,key) in example Object&quot;:key=Math.random()&gt;</h3>
    <ul>
        <li v-for="(value,key) in exampleObject" :key=Math.random()>
            Key: {{ key }}  Value: {{ value }}
        </li>
    </ul>

    <h3>Iterate a specific number of times.</h3>
    <h3>This example shows a component being displayed twice</h3>
    <h3>&lt;Component v-for&quot;i in 2&quot;&gt;</h3>
    <Login v-for="i in 2"/>
  
  </template>
  
  
  <script>
  import { ref } from 'vue';
  import Login from '../../components/Login.vue'
  
  
  export default {
    name: 'looping',
    components: {Login},
  
    //setup as always run before any life cycle hooks are executed (mounted, created, etc.)
    //'this' is not available in the setup function
    setup() {
  
      const arrayNames=ref(["Beavis","Butthead","Mr. Johnson","Stuart"]);
      const arrayPeople=ref([{name:"Beavis", age:15, friend:"Butthead"},{name:"Mr. Anderson", age:72, friend:"Unknown"}])

      const exampleObject = {make:"Subaru", model:"Outback", color:"Red", engineSize:"2.5l"}
  
      return { arrayNames, arrayPeople, exampleObject };
  
  
    }
  }
  </script>