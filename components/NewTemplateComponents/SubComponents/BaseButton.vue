<template>
  <div
  :style="{backgroundColor: btnBackground, color: btnColor, border: '1px solid ' + btnColor}"
  class="button">
  <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        required: false,
        type: String
      }, 
      background: {
        required: false,
        type: String
      }, 
      sale: {
        required: false, 
        type: Boolean
      }
    }, 
    computed: {
      btnColor(){
        return this.colorMixin(this.color, '#111')
      }, 
      btnBackground(){
       return this.colorMixin(this.background, '#fff')
      }
    }, 
    methods: {
      colorMixin(prop, fallBack){
        if(prop){
          return prop
        }else if(this.sale){
          return '#e72933'
        }else {
          return fallBack
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    width: 27rem;
    display: inline-block;
    padding: 1.8rem;
    font-size: $font-size-1;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
  }
</style>