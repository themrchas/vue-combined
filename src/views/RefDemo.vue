<template>
  
  <h3>Unless modified with 'ref' or 'reactive' all variables are non-reactive in the Compostion model.</h3>

  <h3>Non reactive: Current name is {{ name }} and age is {{ age }}</h3>
  <button @click="updateNonReactiveAge">Update {{ name }}'s age</button> 
  <br /><br />
  

  <h3>The 'ref' keyword makes variables reactive but note that essentially you are provided a pointer to the variable.</h3>
  <h3>Reactive using 'ref': Current age is {{ reactiveAge }}</h3>
  <button @click="updateReactiveAge">Update age</button> 
 <br /><br />

 <h3>You can also use refs to gain access to a control and its properties/values</h3>
  <p ref="p_ref">&lt;p&gt;This is a paragraph tag&lt;p&gt;</p>
  <button @click="handleClick">Get paragraph tag info</button> 
   
</template>

<script>
import { ref } from 'vue';

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'RefDemo',

  //setup as always run before any life cycle hooks are executed (mounted, created, etc.)
  //'this' is not available in the setup function
  setup() {

    //Note auto import when you click 'ref'
    const p_ref = ref(null)

    //By default these are not reactive variables
    const name = "Beavis";
    const age = 12;

    const updateNonReactiveAge = _ => {
      age++;
    }

    const reactiveAge = ref(20);

    const updateReactiveAge = _ => {
      reactiveAge.value++;
    }

    const handleClick = () => {
      console.log("p_ref refers to ",p_ref ," with value ",p_ref.value);
      p_ref.value.classList.add('test');
      p_ref.value.textContent = 'hello world!'
    }

    //Until this return is executed, the value of p_ref will be null.
    return {name, age, handleClick,  p_ref, reactiveAge, updateNonReactiveAge, updateReactiveAge }

  }





}
</script>
