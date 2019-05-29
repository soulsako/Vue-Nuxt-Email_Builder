<template>
  <v-form @submit.prevent>
    <v-container>
      <v-layout column>

        <v-flex xs12 md4>
          <v-switch
              v-model="allButtons"
              label="Style All Buttons"
              color="success"
              value="all"
              hide-details
            ></v-switch>
        </v-flex>

        <v-flex xs12 md4>
          <v-radio-group v-model="styleProp" class="mt-0">

            <v-radio value="text">
              <template v-slot:label>
                <div>Button <strong class="black--text">Text </strong>Color</div>
              </template>
            </v-radio>

            <v-radio value="background">
              <template v-slot:label>
                <div>Button <strong class="black--text">Background</strong> Color</div>
              </template>
            </v-radio>

            <v-radio value="price">
              <template v-slot:label>
                <div><strong class="black--text">Price</strong> Color</div>
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
  export default {
    data(){
      return {
        colours: {
          hex: '#f7f7f7'
        }, 
        styleProp: 'text', 
        allButtons: 'all'
      }
    }, 
    methods: { 
      colorSelected(){
        const inputData = {
          color: this.colours.hex, 
          styleProp: this.styleProp, 
          allButtons: this.allButtons
          }
          this.$store.commit('setButtonStyles', inputData);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>