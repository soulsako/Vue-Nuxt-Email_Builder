<template>
  <div class="grid">
    <div v-for="template in templates" :key="template._id" class="templates">
      <components
        v-for="(component, index) in template.components"
        :key="index"
        :is="componentsData[component]"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import componentsData from '@/components.json'
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
        templates: [], 
        componentsData: componentsData
      }
    }, 
    created(){
      //Query the templates collection in database and retreive all templates with this.getFasciaId id
      this.$axios.$get('/api/templates/fascia/' + this.$route.params.id)
      .then(templates => {
        this.templates = templates;
      })
    }, 
    computed: {
      createComponentJsonData(){
        // Array which holds components array for all templates
        // [['plu', 'pluDouble'], ['plu', 'pluDouble'], ['plu', 'pluDouble']]
        const componentsFromDatabase = this.templates.map(curr => {
          curr.components.forEach(component => {
            
          }) 
        });
      }
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