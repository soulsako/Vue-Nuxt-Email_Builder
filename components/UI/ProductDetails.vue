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
        plus: ['53523'], 
        url: '' 
      }
    }, 
    methods: { 
      submitPlu(){
        this.$axios.$post('/api/submitplu', {
          plus: this.plus,
          iso: 'gb',
          site: 'jdsports'
          })
        .then(response => {
          console.log(response);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>