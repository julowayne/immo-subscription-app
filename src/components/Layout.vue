<template>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-img src="assets/icon/alfred-logo-teal-nav-app.png"></ion-img>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-img src="assets/icon/utilisateur-nav-app.png"></ion-img>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {  IonHeader, IonToolbar, IonImg, IonButtons } from '@ionic/vue';

export default  {
  name: 'Layout',
  components: { IonHeader, IonToolbar, IonImg, IonButtons, }
}
</script>
<style>
ion-page {
  background-color: #F8F9FA;
}

ion-toolbar {
  --min-height: 10vh;
  background-color: white;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  border: none;

}
ion-buttons {
  max-height: 10vh;
  margin: 10px;
}
</style>