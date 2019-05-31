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
        imagePlus: [], 
        productOne: [], 
        productTwo: []
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
      productOne(){
        this.$store.commit('setProductOne', this.productOne);
      }, 
      productTwo(){
        this.$store.commit('setProductTwo', this.productTwo);
      }
    },
    methods: { 
      
      async submitPlu(){
        let productOne = [], 
            productTwo = [];
      //Get product data. Price, description etc.
      //Plu returned from product data will then be used to fetch images therefore the async function
      await this.$axios.$post('/api/submitplu', {
        plus: this.plus.join(),
        iso: this.iso,
        site: 'jdsports'
        }) 
      .then(response => {
        const imagePlus = response.products.map(product =>  {
          return product.plu;
        })
        this.imagePlus = imagePlus;
        
        //Returns an array of each product object
        this.extractProducts(response.products, productOne, productTwo);
        
      })
      const that = this;
      //Get product images. Returns an array of images (shot1, shot2, etc)
      const productImages = this.imagePlus.map(async function(plu) {
        let images;
        //Returns an array of images [[images], [images]]
          await that.$axios.$get(`https://i8.amplience.net/s/jpl/jd_${plu}_is.json`)
        .then(response => {
          images = response.items;
        });
        return images;
      })
      Promise.all(productImages)
      .then(images => {
        this.extractProducts(images, productOne, productTwo);
        this.productOne = productOne;
        this.productTwo = productTwo;
        
      });
      this.plus = [];
      }, 
      extractProducts(response, productOne, productTwo){
        if(response.length === 2){
          productOne.push(response[0])
          productTwo.push(response[1])
        }else {
          productOne.push(response[0])
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>