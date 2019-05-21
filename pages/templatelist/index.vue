<template>
  <v-container app grid-list-lg>
    <v-layout app wrap>
      <v-flex lg4 v-for="(template, index) in templates" :key="index">
        <v-card :hover="true" height="460" :to="`/templatelist/${template.name}`">
          <v-card-title primary-title class="justify-center">
            <h3 class="headline">{{template.title}}</h3>
          </v-card-title>
          <v-img
          class="app__img" 
          :style="{'background-image': 'url(' + require(`@/assets/images/templateImages/product/${template.image}`) + ')'}"
          aspect-ratio="1" 
          width="100%"/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    data(){
      return {
        templates: []
      }
    }, 
    computed: {
      ...mapGetters([
        'getTemplateInfo'
      ])
    }, 
    created(){
      this.$axios.$get(`/api/mentemplates/${this.getTemplateInfo.type}`)
      .then(response => {
        //Extract the information needed for this component 
        const templates = response.templates.map(template => {
          return {image: template.image, title: template.title, name: template.name}
        })
        this.templates = templates;
        //Mutate the state and set all templates in the store to be used for the next page
        this.$store.commit('setTemplates', response.templates);
      });
    }
  }
</script>

<style lang="scss" scoped>
  .app {
    
    &__img {
      background-size: cover;
      background-position: center;
    }
  }

</style>