<template>
  <div>
    <ion-card>
      <!-- <img src="./madison.jpg" /> -->
      <ion-card-header>
        <ion-card-subtitle>Destination</ion-card-subtitle>
        <ion-card-title>Madison, WI</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
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
    }
  }
</script>

<style lang="scss" scoped>

</style>