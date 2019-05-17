<template>
<v-stepper v-model="e1">
  <v-stepper-header>

    <v-stepper-step :complete="e1 > 1" step='1'>Select Fascia</v-stepper-step>

    <v-divider></v-divider>

    <v-stepper-step :complete="e1 > 2" step="2">Select Category</v-stepper-step>

    <v-divider></v-divider>

    <v-stepper-step :complete="e1 > 3" step="3">Select Template Type</v-stepper-step>

  </v-stepper-header>

  <v-stepper-items>

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
                @click="cardClicked({id: fascia._id, type: 'fascia'})"
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
      <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
    </v-stepper-content>

    <v-stepper-content step="2">
      <v-container px-0 py-4 fluid grid-list-lg>
        <v-layout app wrap justify-center>
          <v-flex lg4 v-for='category in getCategories' :key='category._id'>
            <v-card class='app__card mb-5' 
              @click="cardClicked({id: category._id, type: 'category'})"
              :dark='category.isSelected'>
              <v-img
              class="app__img"
              aspect-ratio="1"
              :style="{'background-image': 'url(' + require(`../assets/images/${category.background_image}`) + ')'}"
              >
              </v-img>
              <v-title></v-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-btn color="primary" @click="e1 = 3">Continue</v-btn>
      <v-btn color="error" @click="e1 = 1">Back</v-btn>
    </v-stepper-content>

    <v-stepper-content step="3">
      <v-card height="200px" color="grey lighten-1" class="mb-5">
      </v-card>
      <v-btn color="primary" @click="e1 = 1">Continue</v-btn>
      <v-btn color="error" @click="e1 = 2">Back</v-btn>
    </v-stepper-content>

  </v-stepper-items>
</v-stepper>
 
</template>

<script>
import { mapGetters } from 'vuex';
  
export default {
  name: 'homePage',
  
    data(){
      return {
        e1: 1,
        fasciaId: ''
      }
    },
    computed: {
      ...mapGetters([
        'getCategories', 
        'getFascias'
      ])
    }, 
    methods: {
      cardClicked(data){
       this.$store.commit('setSelected', data);
      }
    }
  }
</script>

<style lang='scss'>
  .app__card {
    cursor: pointer;
    transition: all .2s;
    &:hover {
      opacity: .7;
    }
  }
  .app__img {
    background-size: cover;
    background-position: center;
    opacity: .4;
  }
</style>

