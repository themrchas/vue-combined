<template>

    <h2>v-bind</h2>
    <h3>Class and Style Bindings</h3>
    <h3>&lt;h3 v-bind:class&quot;{blueViolet : boolean}&quot;&gt;Lorem ipsum...&lt;h3&gt;</h3>
    <h3 v-bind:class="{blueViolet : styleExample1}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, asperiores itaque repellendus a officiis molestias magni animi velit ad quia.</h3>
    <button type="button" @click="applyStyle1">Toggle Style</button>

    <h3>This examples shows you can have 'add' a class to existing element classes. Static class is unaffected by v-bind</h3>
    <h3>&lt;h3 :class&quot;{blueViolet : boolean}&quot; class=&quot;static class&quot;&gt;Lorem ipsum...&lt;h3&gt;</h3>
    <h3 :class="{blueViolet : styleExample2}" class="funkyFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, asperiores itaque repellendus a officiis molestias magni animi velit ad quia.</h3>
    <button type="button" @click="applyStyle2">Toggle Style</button>

</template>

<script>
import { ref } from 'vue';

export default {
    name: 'bind',
  
    //setup as always run before any life cycle hooks are executed (mounted, created, etc.)
    //'this' is not available in the setup function
    setup() {

        const styleExample1=ref(false);
        const styleExample2=ref(false);

        const applyStyle1 = _ => {
            styleExample1.value = !styleExample1.value;
        }

        const applyStyle2 = _ => {
            styleExample2.value = !styleExample2.value;
        }

         
        return {styleExample1, styleExample2, applyStyle1, applyStyle2}
  
    }
  }
</script>

<style>

    .blueViolet {
        color: blueviolet;
    }

    .funkyFont {
        font-family: "Brush Script MT";
        font-size: 1.5rem;

    }


</style>