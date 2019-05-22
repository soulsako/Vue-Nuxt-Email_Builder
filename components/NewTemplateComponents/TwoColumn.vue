<template>
  <div class="twocolumn">
    <div class="mr-3 twocolumn__left">
      <BaseColumn
      :height="height"
      :sale="sale"
      :women="women"
      :exclusive="exclusive"
      :full="full"
      :button="button"
      :buttonText="buttonText"
      :brand="brand" 
      :description="description"
      :price="price"
      :oldPrice="oldPrice"
      :descriptionTwo="descriptionThree"
      :priceTwo="priceThree"
      :oldPriceTwo="oldPriceThree"
      :src="src"/>
    </div>
    
   <BaseColumn
      :height="height"
      :sale="sale"
      :women="women"
      :exclusive="exclusive"
      :full="full"
      :button="button"
      :buttonText="buttonTextTwo"
      :brand="brandTwo" 
      :description="descriptionTwo"
      :price="priceTwo"
      :oldPrice="oldPriceTwo"
      :descriptionTwo="descriptionFour"
      :priceTwo="priceFour"
      :oldPriceTwo="oldPriceFour"
      :src="srcTwo"/>
  </div>
</template>

<script>
const stringRequired = {required: true, type: String}
const booleanNotRequired = {required: false, type: Boolean, default: () => false}
const stringNotRequired = {required: false, type: String}
  export default {
    props: {
      height: stringRequired, 
      sale: booleanNotRequired, 
      exclusive: booleanNotRequired,
      women: booleanNotRequired,
      full: booleanNotRequired, 
      button: booleanNotRequired, 
      buttonText: stringNotRequired,
      buttonTextTwo: stringNotRequired, 
      brand: stringRequired,
      description: stringRequired, 
      price: stringRequired,
      oldPrice: stringNotRequired,  
      src: stringRequired, 
      brandTwo: stringRequired, 
      descriptionTwo: stringRequired, 
      priceTwo: stringRequired, 
      oldPriceTwo: stringRequired, 
      srcTwo: stringRequired, 
      descriptionThree: stringNotRequired, 
      descriptionFour: stringNotRequired, 
      priceThree: stringNotRequired, 
      priceFour: stringNotRequired, 
      oldPriceThree: stringNotRequired, 
      oldPriceFour: stringNotRequired
    }
  }
</script>

<style lang="scss" scoped>
  .twocolumn {
    width: 56rem;
    display: inline-block;
    @include clearFix;

    &__left {
      float: left;
      width: 27rem;
    }
  }
</style>