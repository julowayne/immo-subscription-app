<template>
  <div class="content">
  <ion-card>
    <ion-card-header>
      <ion-card-title class="ion-text-center">Abonnement pour 1 mois</ion-card-title>
    </ion-card-header>
    <ion-card-content>
    <div class="card">
      <div class="cardContent">
        <img src="assets/icon/money-transfer-64.png" alt="price logo">
        <span>9.90 €</span>
      </div>
      <hr>
      <div class="cardContent">
        <img src="assets/icon/log-in-64.png" alt="price logo">
        <span>Accès aux dossier<br> de vos clients</span>
      </div>
    </div>
    <div class="ion-text-center" id="choose">
      <ion-button class="bg-blue-500 hover:bg-blue-700 shadow text-white font-bold rounded hover:shadow-lg transition-shadow duration-200 ease-in-out" type="button">
        Choisir
      </ion-button>
    </div>
    </ion-card-content>
  </ion-card>
</div>
</template>

<script>
import { IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonButton } from '@ionic/vue';
export default {
  name: 'SubscribeCards',
  components: {
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCard,
    IonButton
  }
}
</script>

<style>
.content {
  display: flex;
  justify-content: center;
}
.cardContent {
  display: flex;
  justify-content: space-around;
}
ion-card-title {
  font-size: 1.2rem;
  color: white;
  margin: 0 auto;
}
ion-card-header {
  background-color: #007bff;
  margin-bottom: 1em;
}
.card {
  max-width: 30rem;
  margin: auto;
}
hr {
  background-color: #007bff;
  margin: 1em;
}
#choose {
  margin: 1.5rem 1rem;
  text-align: right;
}
ion-button {
  width: 100%;
  height: 2.5rem;
}
</style>