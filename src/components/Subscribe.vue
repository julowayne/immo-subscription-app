<template>
  <div class="content">
    <form method="POST" @submit.prevent="registerUser(registerForm)">
      <div v-if="messages">
        <div v-for="error in messages.error" :key="error">
          {{ error }}
          </div>
      </div>
      <ion-label for="lastname">
        Nom
      </ion-label>
      <!-- <div class="errors" v-if="errors">{{errors[1]}}</div> -->
      <ion-input v-model="registerForm.lastname" id="lastname" type="text"></ion-input>

      <ion-label for="firstname">
        Prénom
      </ion-label>
      <!-- <div class="errors" v-if="errors">{{errors[0]}}</div> -->
      <ion-input v-model="registerForm.firstname" id="firstname" type="text"></ion-input>

      <ion-label class="block" for="email">
        Email
      </ion-label>
      <!-- <div class="errors" v-if="errors">{{errors[3]}}</div> -->
      <ion-input v-model="registerForm.email" id="email" type="email"></ion-input>
  
      <ion-label class="block" for="siret">
        N° Siret
      </ion-label>
      <!-- <div class="errors" v-if="errors">{{errors[2]}}</div> -->
      <ion-input v-model="registerForm.siret" id="siret" type="text"></ion-input>

      <ion-label class="block" for="password">
        Password
      </ion-label>
      <!-- <div class="errors" v-if="errors">{{errors[4]}}</div> -->
      <ion-input v-model="registerForm.password" id="password" type="password"></ion-input>
      <div class="ion-text-center">
        <ion-button type="submit">
          Créer mon compte
        </ion-button>
      </div>
    </form>
  </div>
</template>

<script>
import { IonInput, IonLabel, IonButton } from '@ionic/vue';
import { mapActions, mapGetters } from 'vuex'



  export default {
    name: 'Subscribe',
    components: { IonInput, IonLabel, IonButton  },
    data(){
      return {
        registerForm: {},
      }
    },
    computed: {
     ...mapGetters(['messages'])
    },
    methods:{
      ...mapActions(['register']),
        registerUser(registerForm){
            this.register(registerForm)
      },
    }
  }
</script>

<style>

a {
  text-decoration: none;
  color:#20c997;
}
.errors {
  margin: 2px 0;
  color:red;
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