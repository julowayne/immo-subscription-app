<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Layout />
      <Home name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent} from '@ionic/vue';
import Home from '@/components/Home.vue';
import Layout from '@/components/Layout.vue';

export default  {
  name: 'Accueil',
  components: { Home, IonContent, IonPage, Layout }
}
</script>
<style>
ion-page {
  background-color: #F8F9FA;
}

</style>