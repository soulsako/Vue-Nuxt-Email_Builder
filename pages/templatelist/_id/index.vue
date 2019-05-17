<template>
  <div class="grid">
    <div v-for="(template, index) in templatesData" :key="index" class="templates">
      <component
        v-for="(component, index) in template"
        :key="index"
        :is="componentsObj[component._component]"
        v-bind="component.content"
        country="gb"
        exclusiveCategory="men"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import configData from '@/components.json'
import Plu from '@/components/TemplateComponents/plu.vue'
import PluDouble from '@/components/TemplateComponents/pludouble.vue'
import HeaderImage from '@/components/TemplateComponents/headerimage.vue'
import TextAndCta from '@/components/TemplateComponents/textandcta.vue'

  export default {
    //Register components locally
    components: {
      Plu, 
      PluDouble, 
      HeaderImage, 
      TextAndCta
    },
    data(){
      return {
        componentsObj: {
          Plu, 
          PluDouble, 
          HeaderImage, 
          TextAndCta
        },
        templates: [], 
        templatesData: [], 
        componentsJsonData: configData
      }
    }, 
    created(){
      //Query the templates collection in database and retreive all templates with this.getFasciaId id
      this.$axios.$get('/api/templates/fascia/' + this.$route.params.id)
      .then(templates => {
        this.templates = templates;
        const componentsArray = this.templates.map(template => template.components)
        const componentsData = componentsArray.map(curr => {
          let arr = [];
          curr.forEach(comp => {
              this.componentsJsonData.forEach(currComponent => {
              if(currComponent._component === comp){
                arr.push(currComponent);
              }
            })
          })
          return arr;
        })
        this.templatesData = componentsData;
      })
    }
  }
</script>

<style lang="scss">
  .templates {
    width: 60rem;
    margin: auto;
    border: 1px solid #ccc;
    background-color: white;
  }
   .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60rem, 1fr));
    grid-gap: 2rem;
  }
</style>