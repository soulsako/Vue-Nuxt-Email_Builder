<template>
  <v-form @submit.prevent="submitPlu">
    <v-container>
      <v-layout column>

        <v-flex xs12 md4>
          <v-text-field
            v-model="plus"
            :autofocus="true"
            label="Enter PLU"
            required
          ></v-text-field>
        </v-flex>

        <v-flex v-if="twoColumn" xs12 md4>
          <v-text-field
            v-model="url"
            label="Enter second PLU"
          ></v-text-field>
        </v-flex>

        <v-btn color="blue-grey darken-4" dark type="submit">Submit</v-btn>

      </v-layout>
    </v-container>
  </v-form>
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
        plus: '', 
        url: '' 
      }
    },
    computed: {
      ...mapGetters([
        'getCurrentComponent'
      ])
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