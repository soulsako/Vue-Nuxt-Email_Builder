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
      :buttonText="column.description.buttonText" 
      :brand="column.brand" 
      :description="column.description.one"
      :price="column.description.price"
      :oldPrice="column.description.oldPrice"
      :descriptionTwo="column.description.two"
      :priceTwo="column.description.priceTwo"
      :oldPriceTwo="column.description.oldPriceTwo"
      :src="column.description.src"/>
    </div>
    
    <BaseColumn
    :height="height"
    :exclusive="exclusive" 
    :sale="sale"
    :full="full" 
    :women="women"
    :button="button"
    :buttonText="columnTwo.description.buttonText"
    :brand="columnTwo.brand" 
    :description="columnTwo.description.one"
    :price="columnTwo.description.price"
    :oldPrice="columnTwo.description.oldPrice"
    :descriptionTwo="column.description.two"
    :priceTwo="column.description.priceTwo"
    :oldPriceTwo="column.description.oldPriceTwo"
    :src="columnTwo.description.src"/>
  </div>
</template>

<script>
  export default {
    props: {
      height: {
        required: true, 
        type: String
      }, 
      sale: {
        required: false,
        default: () => false,
        type: Boolean
      }, 
      exclusive: {
        required: false, 
        type: Boolean
      },
      women: {
        required: false, 
        type: Boolean
      },
      full: {
        required: false, 
        type: Boolean
      }, 
      column: {
        required: true, 
        type: Object
      }, 
      columnTwo: {
        required: true, 
        type: Object
      }, 
      button: {
        required: false, 
        type:Boolean 
      }, 
      buttonText: {
        required: false, 
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .twocolumn {
    display: inline-block;

    &__left {
      float: left;
    }
  }
</style>