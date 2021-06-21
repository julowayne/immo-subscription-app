<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Layout />
      <news-card :allNews="allNews" />
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
  data(){
    return {
      allNews: []
    }
  },
  methods:{
    getNews(){
      axios.get(`${process.env.VUE_APP_URL}api/news`)
        .then((response)=> {
          this.allNews = response.data.allNews
          console.log(response)
        })
        .catch(error => {
          console.log(error);
      });
      this.errors = []
    }
    },
    mounted(){
      this.getNews()
    }
  }
</script>
<style>
ion-page {
  background-color: #F8F9FA;
}

</style>