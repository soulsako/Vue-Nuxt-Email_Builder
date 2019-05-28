<template>
  <v-form @submit.prevent="submitPlu">
    <v-container>
      <v-layout column>

        <v-flex xs12 md4>
          <v-text-field
            v-model="plu"
            :autofocus="true"
            label="Enter PLU"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            v-model="url"
            label="Enter Product URL"
            required
          ></v-text-field>
        </v-flex>

        <v-btn color="blue-grey darken-4" dark type="submit">Submit</v-btn>

      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data(){
      return {
        plu: '', 
        url: '' 
      }
    }, 
    methods: { 
      submitPlu(){
        //Mutate the store to update product details 
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>