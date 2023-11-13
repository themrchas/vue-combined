<template>

    <h2>v-model</h2>
    <h3>Allows you to bind an HTML element's value to a Vue variable</h3>
    <h3>Mustache {{  }} cannot be used inside an HTML tag - user v-model instead.</h3>
    <br />
    <h3>This example demonstrates how the input control is associated (2-way) with a Vue variable<br/>As the input changes it is shown in the text output</h3>
    <h3>&lt input type=&quot;text&quot; v-model=&quot;variable to bind&quot; /&gt;</h3>
    <h3>Enter text: <input type="text" v-model="bindVar" /></h3>
    <h3>Text output is {{ bindVar }}</h3>
    <h3>Vue variable binding using ':'</h3>
    <h3>&lt input type=&quot;text&quot; :=&quot;variable to bind&quot; /&gt;</h3>
    <h3>Enter text: <input type="text" v-model="anotherBindVar" /></h3>
    <h3>Text output is {{ anotherBindVar }}</h3>
  
   
  
  
  </template>
  
  
  <script>
  import { ref } from 'vue';
  
  
  export default {
    name: 'model',
  
    //setup as always run before any life cycle hooks are executed (mounted, created, etc.)
    //'this' is not available in the setup function
    setup() {
  
      const bindVar = ref("");
      const anotherBindVar = ref("");
  
      return { bindVar, anotherBindVar }
  
  
    }
  }
  </script>