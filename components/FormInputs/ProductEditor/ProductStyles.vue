<template>
  <v-form @submit.prevent>
    <v-container>
      <v-layout column>

        <v-flex xs12 md4>
          <v-radio-group v-model="styleProp" class="mt-0">

            <v-radio value="text" color="red darken-1">
              <template v-slot:label>
                <div>{{ labelOne.first }} <strong class="black--text">{{ labelOne.second }}</strong> {{ labelOne.third }}</div>
              </template>
            </v-radio>

            <v-radio value="background" color="red darken-1">
              <template v-slot:label>
                <div>{{ labelTwo.first }} <strong class="black--text">{{ labelTwo.second }}</strong> {{ labelTwo.third }}</div>
              </template>
            </v-radio>

            <v-radio value="price" color="red darken-1">
              <template v-slot:label>
                <div><strong class="black--text">{{ labelThree.first }}</strong> {{ labelThree.second }}</div>
              </template>
            </v-radio>

             <v-checkbox
              v-model="isInvert"
              :label="checkLabelTwo"
              color="red darken-1"
              value="isInvert"
              hide-details
              v-if="checkbox"
              @change="onInvertHandler"
            ></v-checkbox>

            <v-checkbox
              v-model="isSplit"
              :label="checkLabel"
              color="red darken-1"
              value="isSplit"
              hide-details
              v-if="checkbox"
              @change="onSplitHandler"
            ></v-checkbox>

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
import { mapGetters } from 'vuex'

  export default {
    props: ['labelOne', 'labelTwo', 'labelThree', 'checkLabel', 'checkbox', 'checkLabelTwo'],
    data(){
      return {
        colours: {
          hex: '#f7f7f7'
        }, 
        styleProp: 'text',  
        isSplit: null, 
        isInvert: null,
        compName: ''
      }
    },
    computed: {
      ...mapGetters([
        'getCurrComp'
      ])
    },
    methods: { 
      colorSelected(){
        let singleApparel;
        singleApparel = this.compName === 'SingleApparel' ? true : false
        const inputData = {
          singleApparel: singleApparel,
          color: this.colours.hex, 
          styleProp: this.styleProp, 
          allButtons: this.all
        }
        this.$store.commit('setStyles', inputData);
      }, 
      onInvertHandler(){
        this.$store.commit('setInvert', this.isInvert);
      }, 
      onSplitHandler(){
        this.$store.commit('setSplit', this.isSplit);
      }
    }, 
    updated(){
      this.compName = this.getCurrComp.name;
    }
  }
</script>

<style lang="scss" scoped>

</style>