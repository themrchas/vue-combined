<template>

<router-link :to="{ name: 'model'}">v-model - 2-way variable binding examples</router-link>
<router-link :to="{ name: 'looping'}">v-for Iteration examples</router-link>
<router-link :to="{ name: 'bind'}">v-bind Control </router-link>

</template>

 





<script>
import { ref } from 'vue';


export default {
  name: 'basics',

  //setup as always run before any life cycle hooks are executed (mounted, created, etc.)
  //'this' is not available in the setup function
  setup() {

    

  }
}
</script>