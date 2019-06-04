<template>
  <div class="textandcta">
    <img :src="logo" v-if="logo" alt="some logo" class="textandcta__img">
    <h1 :style="{color: textColor}" class="textandcta__heading">{{ text }}</h1>
    <BaseButton
    :color="compBtnColor"
    :background="btnBackground"
    v-if="button">Shop now</BaseButton>
  </div>
</template>

<script>
const stringNotRequired = { required: false, type: String }
const booleanNotrequired = { required: false, type: Boolean }
  export default {
    name: 'TextAndCta',
    props: {
      text: { required: true, type: String }, 
      button: booleanNotrequired, 
      logo: stringNotRequired, 
      sale: booleanNotrequired, 
      btnColor: stringNotRequired, 
      btnBackground: stringNotRequired
    },
    computed: {
      compBtnColor(){
        return this.sale ? '#e72933' : this.btnColor
      }, 
      textColor(){
        return this.sale ? '#e72933' : '#111'
      }
    } 
  }
</script>

<style lang="scss" scoped>
  .textandcta {
    width: 60rem;
    padding-top: 3.2rem;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
    > * {
      margin-bottom: 3.2rem;
    }
    &__img {

    }
    &__heading {
      font-size: 4rem;
      line-height: 2.8rem;
      font-weight: bold;
      // font-family: 'Gotham-ultra'
    }
  }
</style>