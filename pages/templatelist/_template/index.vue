<template>
  <v-container app grid-list-sm>
    <v-layout app>
      <v-flex lg6>
        <div v-for="(data, index) in generatedData" :key="index">
          <component 
          :is="components[compMethod(data.name)]" 
          v-bind="data"/>
        </div>
      </v-flex>
      <v-flex lg6>
        <div>Editing tools</div>
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
        generatedData: [],
        components: {
          HeaderImage: 'HeaderImage', 
          SingleApparel: 'SingleApparel',
          SingleFootwear: 'SingleFootwear',
          TextAndCta: 'TextAndCta',
          // TwoColumnApparel: 'TwoColumnApparel',
          // TwoColumnFootwear: 'TwoColumnFootwear'
          TwoColumn: 'TwoColumn'
        }
      }
    }, 
    computed: {
      ...mapGetters([
        'getTemplates', 
        'getTemplateInfo'
      ])
    },
    methods: {
       compMethod(name){
        if(name === 'TwoColumnApparel'|| name === 'TwoColumnFootwear'){
          return 'TwoColumn'
        }
        return name;
      }
    },
    created(){
      // console.log(this.getTemplateInfo.type);
      this.componentsData = componentsData(this.getTemplateInfo.type);
      //Loop through the templates in store and get the current template using params.query
      const currentTemplate = this.getTemplates.filter(template => {
          return template.name === this.$route.params.template;
      });
      //Generate data from components.js file for each component in the currentTemplate.components array
      const generateCompData = currentTemplate[0].components.map(name => {
        let arr;
            this.componentsData.forEach(dataComponent => {
            if(dataComponent.name === name){
              arr = dataComponent;
            }
          })
        return arr;
      });
      this.generatedData = generateCompData;
      this.$store.commit('setComponentsData', generateCompData);
    }
  }
</script>

<style lang="scss" scoped>

</style>