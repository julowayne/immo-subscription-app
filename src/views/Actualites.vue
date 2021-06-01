<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Layout />
      <news-card />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent} from '@ionic/vue';
import Layout from '@/components/Layout.vue';
import NewsCard from '@/components/Actualites/NewsCard.vue';

export default  {
  name: 'Actualites',
  components: { NewsCard, IonContent, IonPage, Layout }
}
</script>
<style>
ion-page {
  background-color: #F8F9FA;
}

</style>