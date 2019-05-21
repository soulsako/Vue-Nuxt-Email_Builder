<template>
  <v-container app grid-list-lg>
    <v-layout app>
      <v-flex lg12 v-for="(template, index) in templates" :key="index">
        <div v-for="(component, index) in template" :key="index">
          <component 
          :is="components[component.name]" 
          v-bind="component"/>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import componentsData from '@/componentsData';
  export default {
    data(){
      return {
        componentsData: [],
        templates: [], 
        components: {
          HeaderImage: 'HeaderImage', 
          SingleApparel: 'SingleApparel',
          SingleFootwear: 'SingleFootwear',
          TextAndCta: 'TextAndCta',
          TwoColumnApparel: 'TwoColumnApparel',
          TwoColumnFootwear: 'TwoColumnFootwear'
        }
      }
    }, 
    computed: {
      ...mapGetters([
        'getTemplateInfo'
      ])
    },
    created(){
      // console.log(this.getTemplateInfo.type);
      this.componentsData = componentsData(this.getTemplateInfo.type);
      this.$axios.$get(`/api/templates/${this.getTemplateInfo.type}`)
      .then(response => {
        const templates = response.templates.map(template => {
          return template.components;
        })
        .map(compArray => {
          let arr = [];
          compArray.forEach(name => {
              this.componentsData.forEach(dataComponent => {
              if(dataComponent.name === name){
               arr.push(dataComponent);
              }
            })
          })
          return arr;
        })
        this.templates = templates;
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>