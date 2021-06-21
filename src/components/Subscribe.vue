<template>
  <div class="content">
    <form>
      <ion-label for="lastname">
        Nom
      </ion-label>
      <ion-input v-model="registerForm.lastname" id="lastname" type="text"></ion-input>

      <ion-label for="firstname">
        Prénom
      </ion-label>
      <ion-input v-model="registerForm.firstname" id="firstname" type="text"></ion-input>

      <ion-label class="block" for="email">
        Email
      </ion-label>
      <ion-input v-model="registerForm.email" id="email" type="text"></ion-input>
  
      <ion-label class="block" for="siret">
        N° Siret
      </ion-label>
      <ion-input v-model="registerForm.siret" id="siret" type="text"></ion-input>

      <ion-label class="block" for="password">
        Password
      </ion-label>
      <ion-input v-model="registerForm.password" id="password" type="password"></ion-input>
      <div  class="ion-text-center">
        <ion-button type="button">
          Créer mon compte
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
        registerForm: {
          firstname: '',
          lastname: '',
          email: '',
          siret: '',
          password: ''
        },
        errors: [],
      }
    },
    methods:{
      register(){
        axios("https://whoisalfred.herokuapp.com/api/register", {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            firstname: this.refisterForm.firstname,
            lastname: this.refisterForm.lastname,
            email: this.refisterForm.email,
            siret: this.refisterForm.siret,
            password: this.refisterForm.password,
          } 
        })
        .then((response)=> {
          // if(response.status === 201) return this.validationMessage = response.data.message, this.token = response.data.token
          this.$router.push({ path: "/" });
          console.log(response)
        })
        .catch(error => {
          console.log(error);
          // if(error.response.status === 400 || error.response.status ===  422){
          //   return this.errors.push(error.response.data.messages[0])
          //   }
          //   console.log(error.response.data);
          //   console.log(error.response.status);
          //   console.log(error.response.headers);
      });
      this.errors = []
      },
    }
  }
</script>

<style>

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