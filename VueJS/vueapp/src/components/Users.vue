<template>
    <div class="users">
        <h1>Users</h1>
        <form action="" v-on:submit="addUser">
            <input type="text" name="" v-model="newUser.name" placeholder="Enter name" id="">
            <br>
            <input type="email" name="" v-model="newUser.email" placeholder="Enter Email" id="">
            <br>
            <input type="submit" value="Submit">
        </form>
        <ul>
            <li v-for="(user, index) in users" v-bind:key="index">
                <input type="checkbox" class="toggle" v-model="user.contacted" name="" id="">
                <span :class="{contacted: user.contacted}">
                    {{user.name}}: {{user.email}}
                    <button v-on:click="deleteUser(user)">x</button>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'users',
    data() {
        return {
            newUser: {},
            users: [
                {
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    contacted: false
                },
                {
                    name: 'Steve Smith',
                    email: 'ssmith@gmail.com',
                    contacted: false
                },
                {
                    name: 'Tom White',
                    email: 'tomwhite@gmail.com',
                    contacted: false
                },
            ]
        }
    },
    methods: {
       addUser: function(e){
           e.preventDefault();
           this.users.push({
               name: this.newUser.name,
               email: this.newUser.email,
               contacted: false,
           })
       },
       deleteUser: function(user){
           this.users.splice(this.users.indexOf(user), 1)
       }
    },
    created: function (){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(function(res) {
            this.users = res.data;
        })
    }
    
}
</script>
<style scoped>
    .contacted {
        text-decoration: line-through
    }
    li {
        list-style: none;
    }
</style>


 