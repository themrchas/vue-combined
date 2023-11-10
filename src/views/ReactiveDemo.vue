<template>
    <h2>'reactive'</h2>

    <h3>The 'reactive' keyword makes non-primtive values reactive.</h3>
    <br/><br/>
    <h3>Reactive: Curent name is {{ person.name }} and age {{ person.age }}</h3>
    <button @click="updateReactivePersonAge">Update {{ person.name }}'s age</button>
    <br/><br/>
    <h3>Non reactive primtive: Current name is {{ nonReactivePerson }}</h3>
    <button @click="updateNonReactivePersonName">Update {{ nonReactivePerson }}'s name</button>



</template>


<script>

    import { reactive } from 'vue';


export default {

    name: "reactive-demo", //https://stackoverflow.com/questions/48732088/whats-the-name-in-export-default

    setup() {

        const person = reactive({ name: "Beavis", age: 20, job: "slacker" });
        const nonReactivePerson = reactive("Butthead");

        const updateReactivePersonAge = _ => {
            person.age++;
        }

        const updateNonReactivePersonName = _ => {
            nonReactivePerson += "appended"
        }

        return { person, nonReactivePerson, updateReactivePersonAge, updateNonReactivePersonName }

    }

}

</script>