<template>
    <div class="test">
        <input type="text" v-model="title"> <br />
        <h1>{{title}}</h1>
        <p v-if="showName">{{users.first_name}}</p>
        <p v-text="users.last_name"></p>
        <ul>
            <li v-for="(item, i) in items" :key="i">{{item.title}}</li>
        </ul>
        <button v-on:click="greet('Hello World')">Say Greeting</button>
        <input type="text" name="" v-on:keyup.enter="enterHit" v-on:keyup="pressKey" id="">
        <br />
        <label for="firstname">First Name:</label>
        <input type="text" name="" v-model="users.first_name" id="firstname">
        <br>
        <label for="lastname">Last Name:</label>
        <input type="text" name="" v-model="users.last_name" id="lastname">
        <br>
        <h1>{{fullname}}</h1>
        <h2>{{msg}}</h2>
    </div>
</template>
<script>
export default {
    name: 'test',
    props: {
        msg: {
            default: 'foobar',
            type: String
        }
    },
    data() {
        return {
            title: "hello world",
            users: {
                first_name: 'john',
                last_name: 'Doe'
            },
            showName: true,
            items: [
                {title: 'item One'},
                {title: "item two"},
                {title: "item three"}
            ]
        }
    },
    methods: {
        greet: function(greeting) {
            alert( greeting );
        },
        pressKey: function(e) {
            console.log(e.target.value);
        },
        enterHit: function(e) {
            console.log('You hit enter');
        }
    },
    computed: {
        fullname: function () {
            return this.users.first_name + " " + this.users.last_name
        }
    }
}
</script>
<style scoped>

</style>


