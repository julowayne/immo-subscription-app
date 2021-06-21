<template>
  <div class="content">
    <form>
      <ion-label for="name">
        Nom
      </ion-label>
      <ion-input id="name" type="text"></ion-input>

      <ion-label for="firstname">
        Prénom
      </ion-label>
      <ion-input id="firstname" type="text"></ion-input>

      <ion-label class="block" for="email">
        Email
      </ion-label>
      <ion-input id="email" type="text"></ion-input>
      <div class="text">Télécharger ma dernière facture <img id="download" src="assets/icon/telecharger.png" alt=""></div>
      <ion-text>Entrer un code promo: <ion-input id="promo" type="text"></ion-input></ion-text>
      <div class="ion-text-center">
        <ion-button type="button">
          Enregistrer
        </ion-button>
      </div>
    </form>
  </div>
</template>

<script>
import { IonInput, IonLabel, IonButton, IonText } from '@ionic/vue';

export default {
  name: 'Informations',
  components: { IonInput, IonLabel, IonButton, IonText  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color:#007bff;
}
ion-button {
  --box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  --color: white;
  --background: #007bff;
  --background-activated: #007bff;
  width: 100%;
  --border-radius: 4px;
}
.text {
  font-weight: bold;
  margin-bottom: 1em;
}
ion-text {
  font-weight: bold;
}
form {
  padding: 1rem 2rem;
}
ion-label {
  color: #007bff;
  letter-spacing: 1px;
}
#download {
  width: 8%;
  margin-left: 1em;
}
ion-input {
  border: 0.5px solid #007bff;
  border-radius: 4px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  height: 2em;
  margin: 0.2rem auto 0.8rem;
}
</style>