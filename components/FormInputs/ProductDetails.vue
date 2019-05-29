<template>
<div>
  <v-form @submit.prevent="submitPlu">
    <v-container>
      <v-layout column>

        <v-flex xs12 md4>
          <v-text-field
            v-model="plus[0]"
            :autofocus="true"
            label="Enter PLU"
            clearable
            required
          ></v-text-field>
        </v-flex>

        <v-flex v-if="twoColumn" xs12 md4>
          <v-text-field
            v-model="plus[1]"
            clearable
            label="Enter second PLU"
          ></v-text-field>
        </v-flex>

        <v-btn color="blue-grey darken-4" dark type="submit">Submit</v-btn>

      </v-layout>
    </v-container>
  </v-form>
  <div @click="this.showError = false">
    <v-alert 
        :value="showError"
        :type="errorType"
        dismissible
      >
        {{ errorMessage }}
      </v-alert>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    props: {
      twoColumn: {
        required: false,
        default: () => false, 
        type: Boolean
      }
    },
    data(){
      return {
        plus: [],
        url: '', 
        showError: false, 
        errorMessage: '', 
        errorType: ''
      }
    },
    computed: {
      ...mapGetters([
        'getCurrentComponent',
        'getFascia'
      ]), 
      iso(){
        // Getting fascia as "JD GB" etc..
        return this.getFascia.name.split(' ')[1].toLowerCase();
      }
    },
    methods: { 
      submitPlu(){
        if(this.plus.length === 0){
          return this.alert('error', 'Plu is required!');
        }
        this.$axios.$post('/api/submitplu', {
          plus: this.plus.join(),
          iso: this.iso,
          site: 'jdsports'
          })
        .then(response => {
          console.log(response);
          if(response.products.length === 0){
            return this.alert('error', 'No products found. Plese check PLU and try again!');
          }else {
            return this.alert('success', 'Product found successfully');
          }
        })
        this.plus = [];
      }, 
      alert(type, message){
        this.showError = true;
        this.errorType = type;
        this.errorMessage = message;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>