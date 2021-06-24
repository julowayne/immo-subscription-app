<template>
  <div>
    <ion-card v-for="actu in news" :key="actu">
      <img :src="actu.image" />
      <ion-card-header>
        <ion-card-title>{{actu.title}}</ion-card-title>
      </ion-card-header>
      <ion-card-content v-html="actu.body">
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import { mapActions, mapGetters } from 'vuex'

  export default {
    name: "newsCard",
    components: {
      IonCard, 
      IonCardHeader, 
      IonCardTitle,  
      IonCardContent
    },
    computed: {
        ...mapGetters(['news'])
    },
    methods: {
      ...mapActions(['getAllNews']),
        allNews(){
          this.getAllNews()
      },
    },
    mounted(){
      this.allNews()
    }
  }
</script>

<style lang="scss" scoped>

</style>