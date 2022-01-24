<template>
    <div>
        <form @submit.prevent="onsubmit">
            <div>
                <h2>Registrati</h2>
            </div>
            <div class="input">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email">
            </div>
            <div class="input">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password">
            </div>
            <div>
                <button class="btn btn-dark">Salva</button>
            </div>
        </form>
    </div>
</template>


<script>
//import axios from '/Users/alessandro/Desktop/Matteo/VUE JS/vuesecond/app/src/views/axios-auth'
export default {
    name: 'Register',
    data(){
        return {
            email: '',
            password: '',
        }
    },
    methods : {
        onsubmit() {
            const formData = {
                email : this.email,
                password : this.password
            }
            console.log(formData);
            this.$store.dispatch('register', {email: formData.email, password: formData.password})

        }
    }
}
</script>

