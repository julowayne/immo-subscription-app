<template>
  <div class="content">
    <form method="POST" @submit.prevent="login">
      <ion-label class="block" for="email">
        Email
      </ion-label>
      <ion-input v-model="loginForm.email" id="email" type="text"></ion-input>
  
      <ion-label for="password">
        Password
      </ion-label>
      <ion-input v-model="loginForm.password" id="password" type="password"></ion-input>
      <div class="ion-text-center">
        <ion-button type="submit">
          Connexion
        </ion-button>
      </div>
    </form>
  </div>
</template>

<script>
import { IonInput, IonLabel, IonButton } from '@ionic/vue';
import axios from 'axios'


  export default {
    name: 'Subscribe',
    components: { IonInput, IonLabel, IonButton  },
    data(){
      return {
        loginForm: {
          email: '',
          password: ''
        },
        errors: [],
      }
    },
    methods:{
      login(){
        axios(`${process.env.VUE_APP_URL}api/auth/login`, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            email: this.loginForm.email,
            password: this.loginForm.password,
          } 
        })
        .then((response)=> {
          this.$router.push({ path: "/" });
          console.log(response)
        })
        .catch(error => {
          console.log(error);

      });
      this.errors = []
      },
    }
  }
</script>

<style scoped>
a {
  text-decoration: none;
  color:#20c997;
}
ion-button {
  --box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  --color: white;
  --background: #20c997;
  --background-activated: #20c997;
  width: 100%;
  --border-radius: 4px;
}
form {
  padding: 1rem 2rem;
}
ion-label {
  color: #20c997;
  letter-spacing: 1px;
}
ion-input {
  border: 0.5px solid #20c997;
  border-radius: 4px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  height: 2em;
  margin: 0.2rem auto 0.8rem;
}
</style>