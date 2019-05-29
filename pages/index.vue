<template>
<v-stepper v-model="e1">
  <v-stepper-header>

    <v-stepper-step :complete="e1 > 1" step='1' color="red darken-1">Select Fascia</v-stepper-step>

    <v-divider></v-divider>

    <v-stepper-step :complete="e1 > 2" step="2" color="red darken-1">Select Category</v-stepper-step>

    <v-divider></v-divider>

    <v-stepper-step :complete="e1 > 3" step="3" color="red darken-1">Select Template Type</v-stepper-step>

  </v-stepper-header>

  <v-stepper-items>
    <!-- SELECT FASCIA -->
    <v-stepper-content class="pt-1" step="1">
      <v-card class="mb-5">
        <v-container px-0 py-4 fluid grid-list-lg>
          <v-layout wrap>
            <v-flex 
              v-for='fascia in getFascias' 
              :key='fascia._id'
              lg1>
                <v-card 
                class='app__card' 
                @click="slideCard({ id: fascia._id, type: 'fascia', name: fascia.fascia_name })"
                :dark="fascia.isSelected"
                flat>
                <v-img
                :src="fascia.flag"
                aspect-ratio="1.45"
                >
                </v-img>
                </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-stepper-content>
    <!-- SELECT CATEGORY -->
    <v-stepper-content step="2">
      <v-container px-0 py-4 fluid grid-list-lg>
        <v-layout app wrap justify-center>
          <v-flex lg4 v-for='category in getCategories' :key='category._id'>

            <v-card 
            :color="category.background_color" 
            class="white--text app__card"
            hover
            height="200"
            @click="slideCard({ id: category._id, type: 'category', mapTemplates: category.map_templates})">
              <div class="centerText">
                <v-icon large dark>{{category.icon}}</v-icon>
                <v-card-title primary-title>
                  <div class="headline">
                    {{ category.category_name }}
              </div>
              </v-card-title>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-btn color="red darken-1" dark @click="e1 = 1">Back</v-btn>
    </v-stepper-content>
    <!-- SELECT TEMPLATE TYPE -->
    <v-stepper-content step="3">
      <v-container fluid grid-list-lg>
        <v-layout app wrap>
          <v-flex lg4 v-for="template in templateTypes" :key="template.id">
            <v-card 
            :color="template.background" 
            class="white--text app__card"
            hover
            height="200"
            @click="slideCard({id: template.id, name: template.type, type: 'templateType'})">
              <div class="centerText">
                <v-icon large dark>{{template.icon}}</v-icon>
                <v-card-title primary-title>
                  <div class="headline">
                    {{ template.type }}
              </div>
              </v-card-title>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-btn color="red darken-1" dark @click="e1 = 2">Back</v-btn>
    </v-stepper-content>

  </v-stepper-items>
</v-stepper>
 
</template>

<script>
import { mapGetters } from 'vuex';
  
export default {
  name: 'HomePage',
  
    data(){
      return {
        e1: 1,
        templateTypes: [],
      }
    },
    computed: {
      ...mapGetters([
        'getCategories', 
        'getFascias', 
        // 'getTemplateTypes'
      ])
    }, 
    methods: {
      slideCard(data){
        if(data.type === 'fascia'){
          this.e1 = 2;
        }else if(data.type === 'category'){
          this.$axios.$get(`/api/${data.mapTemplates}/all`)
         .then(response => {
           const templateTypes = response.map(curr => {
             return {
               id: curr._id,
               type: curr.template_type, 
               background: curr.background_color, 
               icon: curr.icon 
              }
           });
           this.templateTypes = templateTypes;
           this.e1 = 3;
         });
        }else {
          this.$router.push('/templatelist');
        }
        this.$store.commit('setSelected', data);
        
    },
  }
}
</script>

<style lang='scss' scoped>
  .app__card {
    cursor: pointer;
    &-title {
      @include centerText;
    }
  }
  .app__img {
    background-size: cover;
    background-position: center;
  }
  .centerText {
    @include centerText;
    text-transform: uppercase;
    text-align: center;
  }
</style>

