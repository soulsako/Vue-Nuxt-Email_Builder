<template>
  <div>
    <v-container fluid app>
      <v-layout app white elevation-8>
        <v-flex class="v-flex-6" pa-2>
          <h6 class="heading-4 subheading pa-4 blue-grey darken-4 text-uppercase text-sm-center white--text">Click on a component to start editing</h6>
          <div 
          v-for="(data, index) in getComponentsData" 
          :key="index" 
          class="components__div mb-3"
          @click="onComponentSelect({...data, index: index})"
          >
            <component 
            :is="components[compMethod(data.name)]" 
            v-bind="data"
            />
          </div>
        </v-flex>
        <v-flex lg5 pa-2 text-sm-center>
          <ProductEditor
          :labelOne="{ first: 'Button', second: 'text', third: 'color' }"
          :labelTwo="{ first: 'Button', second: 'background', third: 'color' }"
          :labelThree="{ first: 'Price', second: 'color' }"
          >
          Global styles</ProductEditor>
        </v-flex>
      </v-layout>
    </v-container>
    <ProductModal
      :dialog="dialog"
      @close="onCloseHandler"
      @save="onSaveHandler"
      />
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import jsonData from '@/componentsData.json';
  export default { 
    data(){
      return {
        components: {
          HeaderImage: 'HeaderImage', 
          SingleApparel: 'SingleApparel',
          SingleFootwear: 'SingleFootwear',
          TextAndCta: 'TextAndCta',
          TwoColumn: 'TwoColumn'
        }, 
        componentsData: [],
        jsonData: jsonData,
        dialog: false
      }
    }, 
    computed: {
      ...mapGetters([
        'getTemplates', 
        'getTemplateInfo', 
        'getComponentsData'
      ])
    },
    methods: {
      // Render same component for many different names in the database
       compMethod(name){
        if(name === 'TwoColumnApparel'|| name === 'TwoColumnFootwear'){
          return 'TwoColumn'
        }
        return name;
      }, 
      onComponentSelect(compData){
        this.dialog = true;
        this.$store.commit('setCurrComp', compData);
      }, 
      onSaveHandler(){
        this.$store.commit('setNewCurrComp');
        this.dialog = false;
      }, 
      onCloseHandler(){
        this.$store.commit('setClearImages');
        this.dialog = false;
      }
    },
    mounted(){
      let newComponents;
      if(this.getTemplateInfo.type.name === 'sale'){
        newComponents = this.jsonData.map(component => {
          component.sale = true;
          return component;
        })
        this.jsonData = newComponents;
      }
      //filter templates in store and get the current template using params.query
      const currentTemplate = this.getTemplates.filter(template => {
          return template.name === this.$route.params.template;
      });
      //Generate data from components.js file for each component in the currentTemplate.components array
      const generateCompData = currentTemplate[0].components.map(name => {
        let arr;
            this.jsonData.forEach(dataComponent => {
            if(dataComponent.name === name){
              arr = {...dataComponent};
            }
          })
        return arr;
      });
      this.$store.commit('setComponentsData', generateCompData);
    }
  }
</script>

<style lang="scss" scoped>
 
 .v-flex-6 {
   overflow-y: scroll;
   max-height: 70rem;
   overflow-x: hidden;
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 .components__div {
   cursor: pointer;
 }
 .heading-4 {
   width: 100%;
 }
 .subheading {
   font-family: 'HCo Gotham SSm', sans-serif !important;
 }
</style>