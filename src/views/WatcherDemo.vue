<template>

<h3>'watch' will fire a function when a variable changes</h3>
<p>Name: <input v-model="name"></p>
<p>Name has changed {{ numberOfChanges }} times.</p>

<h3>'watchEffect' will fire when the component is loaded and when reference (reactive) value within function changes</h3>
<p>watchEffect</p>


</template>

<script>

    import { ref, watch, watchEffect } from 'vue';

    export default {
  name: 'WatcherDemo',

  //setup as always run before any life cycle hooks are executed (mounted, created, etc.)
  //'this' is not available in the setup function
  setup() {

    const name = ref("");
    const numberOfChanges = ref(0);

    watch(name,() => {
        numberOfChanges.value++;
    })


    watchEffect(() => {
        console.log("watchEffect ran on 'name' change with new value",name.value);
    })





    return { name, numberOfChanges };

  }
}


</script>


<style>


</style>