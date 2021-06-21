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
import axios from 'axios'


export default  {
  name: 'Actualites',
  components: { NewsCard, IonContent, IonPage, Layout },
  methods:{
    getNews(){
      axios("https://tennis-affluence.herokuapp.com/api/news", {
          method: 'GET',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response)=> {
        console.log(response)
      })
      .catch(error => {
        console.log(error);

    });
    this.errors = []
    },
  }
}
</script>
<style>
ion-page {
  background-color: #F8F9FA;
}

</style>