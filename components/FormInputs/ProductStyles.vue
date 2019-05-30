<template>
  <v-form @submit.prevent>
    <v-container>
      <v-layout column>

        <v-flex xs12 md4>
          <v-switch
              v-model="all"
              :label="switchLabel"
              color="red darken-1"
              value="all"
              hide-details
            ></v-switch>
        </v-flex>

        <v-flex xs12 md4>
          <v-radio-group v-model="styleProp" class="mt-0">

            <v-radio value="text" color="red darken-1">
              <template v-slot:label>
                <div>{{ radioLabelOne.first }} <strong class="black--text">{{ radioLabelOne.second }}</strong>{{ radioLabelOne.third }}</div>
              </template>
            </v-radio>

            <v-radio value="background" color="red darken-1">
              <template v-slot:label>
                <div>{{ radioLabelTwo.first }} <strong class="black--text">{{ radioLabelTwo.second }}</strong> {{ radioLabelTwo.third }}</div>
              </template>
            </v-radio>

            <v-radio value="price" color="red darken-1">
              <template v-slot:label>
                <div><strong class="black--text">{{ radioLabelThree.first }}</strong> {{ radioLabelThree.second }}</div>
              </template>
            </v-radio>

          </v-radio-group>
        </v-flex>

        <v-flex xs12 md4>
        <no-ssr placeholder="Loading...">
          <sketch-picker v-model="colours" @input="colorSelected"/>
        </no-ssr>
        </v-flex>
        
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
const stringRequired = { required: true, type: String }
const objectRequired = { required: true, type: Object }
  export default {
    props: {
      switchLabel: stringRequired, 
      radioLabelOne: objectRequired, 
      radioLabelTwo: objectRequired,
      radioLabelThree: objectRequired,  
      radioLabelFour: {
        required: false, 
        type: Object
      }
    },
    data(){
      return {
        colours: {
          hex: '#f7f7f7'
        }, 
        styleProp: 'text', 
        all: 'all'
      }
    }, 
    methods: { 
      colorSelected(){
        const inputData = {
          color: this.colours.hex, 
          styleProp: this.styleProp, 
          allButtons: this.all
        }
        this.$store.commit('setButtonStyles', inputData);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>