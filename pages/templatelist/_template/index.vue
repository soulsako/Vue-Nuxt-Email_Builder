<template>
  <v-container fluid>
    <v-layout app white elevation-8>
      <v-flex lg7 class="v-flex-6">
        <div 
        v-for="(data, index) in getComponentsData" 
        :key="index" 
        class="components__div mb-3"
        @click="onComponentSelect({name: data.name, index: index})"
        >
          <component 
          :is="components[compMethod(data.name)]" 
          v-bind="data"
          />
        </div>
      </v-flex>
      <v-flex lg5 pa-2 text-sm-center>
        <v-tabs
          centered
          color="blue-grey darken-4"
          dark
          icons-and-text>
          <v-tabs-slider color="success"></v-tabs-slider>

          <v-tab href="#tab-1">
            Details
            <v-icon>details</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Styles
            <v-icon>invert_colors</v-icon>
          </v-tab>

          <v-tab-item
            value="tab-1"
          >
            <v-card flat>
              <ProductDetails v-if="showPluInput" :twoColumn="twoColumn"/>
            </v-card>
          </v-tab-item>

          <v-tab-item
            value="tab-2"
          >
            <v-card flat>
              <ProductStyles />
            </v-card>
          </v-tab-item>

        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
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
        showPluInput: false, 
        twoColumn: false
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
        this.showPluInput = true;
        const twoString = compData.name.toLowerCase().substring(0, 3);
        this.twoColumn = twoString === 'two' ? true : false
        this.$store.commit('setCurrentComponent', compData);
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
              arr = dataComponent;
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
   border: 3px solid $color-primary;
   cursor: pointer;
 }
</style>