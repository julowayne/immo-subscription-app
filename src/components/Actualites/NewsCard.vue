<template>
  <div>
    <ion-card v-for="news in allNews" :key="news">
      <img :src="news.image" />
      <ion-card-header>
        <ion-card-subtitle>A définir</ion-card-subtitle>
        <ion-card-title>{{news.title}}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        {{ news.body }}
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/vue';

  export default {
    name: "newsCard",
    components: {
      IonCard, 
      IonCardHeader, 
      IonCardSubtitle,
      IonCardTitle,  
      IonCardContent
    },
    props: {
      allNews: Array
    }
  }
</script>

<style lang="scss" scoped>

</style>