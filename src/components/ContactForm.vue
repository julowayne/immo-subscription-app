<template>
  <div class="subscribe">
    <form>
      <h1 class="ion-text-center">Contact</h1><hr>
        <ion-label for="name">
          NOM
        </ion-label>
        <ion-input id="name" type="text"></ion-input>

        <ion-label for="firstname">
          PRENOM
        </ion-label>
        <ion-input id="firstname" type="text"></ion-input>


        <ion-label class="block" for="email">
          EMAIL
        </ion-label>
        <ion-input id="email" type="text"></ion-input>
    
        <ion-label>
          OBJET
        </ion-label>
        <ion-input id="siret" type="text"></ion-input>

        <ion-label for="password">
          MESSAGE
        </ion-label>
        <ion-textarea id="password" type="password"></ion-textarea>
        <div  class="ion-text-center">
          <ion-button type="button">
            Envoyer
          </ion-button>
        </div>
    </form>
  </div>
</template>

<script>
import { IonInput, IonLabel, IonButton, IonTextarea } from '@ionic/vue';
export default {
  name: 'ContactForm',
  components: { IonInput, IonLabel, IonButton, IonTextarea  }
}
</script>

<style scoped>
.subscribe {
  margin: 0 2em;
}
hr {
  background-color: #20c997;
  margin: 1em;
}
h1 {
  color: #20c997;
  margin-bottom: 0.5em;
}
a {
  text-decoration: none;
  color:#20c997;
}
form {
  padding: 0.5rem 2rem;
}
ion-button {
  --box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  --color: white;
  --background: #20c997;
  --background-activated: #20c997;
  width: 100%;
  --border-radius: 4px;
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
ion-textarea {
  border: 0.5px solid #20c997;
  border-radius: 4px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  margin: 0.2rem auto 0.8rem;
}
</style>
