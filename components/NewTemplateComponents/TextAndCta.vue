<template>
  <div class="textandcta">
    <img :src="logo" v-if="logo" alt="some logo" class="textandcta__img">
    <h1 :style="{color: saleColor}" class="display-2 font-weight-bold pa-3">{{ text }}</h1>
    <BaseButton
    :color="saleColor"
    :background="btnBackground"
    v-if="button">Shop now</BaseButton>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String
      }, 
      button: {
        type: Boolean
      }, 
      logo: {
        type: String, 
        default: () => ''
      }, 
      sale: {
        type: Boolean
      }, 
      btnColor: {
        required: false, 
        type: String
      }, 
      btnBackground: {
        required: false, 
        type: String
      }
    },
    computed: {
      saleColor(){
      return this.sale ? '#e72933' : this.btnColor
      }
    } 
  }
</script>

<style lang="scss" scoped>
  .textandcta {
    width: 60rem;
    padding: 2.5rem;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
  }
</style>