<template>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-buttons slot="start" @click.prevent="home">
        <ion-img src="assets/icon/alfred-logo-teal-nav-app.png"></ion-img>
      </ion-buttons>
      <ion-title> {{ $route.name }}</ion-title>
        <ion-buttons slot="end" @click.prevent="getProfile">
          <ion-img src="assets/icon/utilisateur-nav-app.png"></ion-img>
        </ion-buttons>
        <!-- <ion-buttons slot="end" @click.prevent="home">
          <ion-img src="assets/icon/utilisateur-nav-app.png"></ion-img>
        </ion-buttons> -->
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonTitle, IonHeader, IonToolbar, IonImg, IonButtons } from '@ionic/vue';
import { mapGetters } from 'vuex'


export default  {
  name: 'Layout',
  components: { IonHeader, IonToolbar, IonImg, IonButtons, IonTitle },
  methods: {
    getProfile(){
      this.$router.push({ path: "profile"});
    },
    home(){
      this.$router.push({ path: "/"});
    }
  },
  computed: {
    ...mapGetters(['user']),
  },
}
</script>
<style>
ion-page {
  background-color: #F8F9FA;
}
ion-title {
  font-size: 1.5em;
  font-weight: lighter;
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