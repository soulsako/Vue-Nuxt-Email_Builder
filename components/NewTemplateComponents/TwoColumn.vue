<template>
  <div class="twocolumn">
    <div class="mr-3 twocolumn__left">
      <BaseColumn
      :full="full"
      :sale="sale"
      :height="height"
      :hasPrice="hasPrice"
      :button="button"
      :btnColor="btnColor"
      :btnBackground="btnBackground"
      :plu="pluOne"
      
      />
    </div>
    
    <BaseColumn
      :full="full"
      :sale="sale"
      :height="height"
      :hasPrice="hasPrice"
      :btnColor="btnColor"
      :btnBackground="btnBackground"
      :button="button"
      :plu="pluTwo"
      />
  </div>
</template>

<script>

const stringRequired = {required: true, type: String},
booleanNotRequired = {required: false, type: Boolean, default: () => false},
stringNotRequired = {required: false, type: String},
objectRequired = { type: Object, required: true };

  export default {
    name: 'TwoColumn',
    props: {
      full: booleanNotRequired,
      sale: booleanNotRequired, 
      height: stringRequired,
      hasPrice: booleanNotRequired,
      priceColor: stringNotRequired,
      button: booleanNotRequired,
      btnColor: stringNotRequired, 
      btnBackground: stringNotRequired, 
      pluOne: objectRequired, 
      pluTwo: objectRequired, 
      twoColumn: {
        type: Boolean, 
        required: true
      }
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