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
        productInfo: [], 
        productImages: []
      }
    },
    computed: {
      ...mapGetters([
        'getFascia'
      ]), 
      iso(){
        // Getting fascia as "JD GB" etc..and converting it to just 'gb'
        return this.getFascia.name.split(' ')[1].toLowerCase();
      }
    },
    watch: {
      productInfo(){
        this.$store.commit('setProductInfo', this.productInfo);
      },
      productImages(){
        this.$store.commit('setProductImages', this.productImages);
      }
    },
    methods: { 
      submitPlu(){
        //Get product data. Price, description etc.
        this.$axios.$post('/api/submitplu', {
          plus: this.plus.join(),
          iso: this.iso,
          site: 'jdsports'
          })
        .then(response => {
          //Returns an array of each product object
          this.productInfo = response.products;
        })
        //Get product images. Returns an array of images (shot1, shot2, etc)
        const productImages = this.plus.map(plu => {
          let images;
          //Returns an array of images [[images], [images]]
          this.$axios.$get(`https://i8.amplience.net/s/jpl/jd_${plu}_is.json`)
          .then(response => {
            images = response.items;
          });
          return images;
        })
        this.productImages = productImages;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>