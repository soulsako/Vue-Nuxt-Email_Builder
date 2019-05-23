<template>
<!-- Insert background image dynamically using the src prop passed in -->
  <div class="singlefootwear">
    <div class="singlefootwear__top" :style="{ backgroundImage: 'url(' + src + ')' }">
      <div v-if="exclusive" class="singlefootwear__exclusive">
        <!--Insert exclusive logo dynamically using exclusive file and computed property -->
        <img :src="exclusiveImg" alt="Only Available at JD" class="singlefootwear__exclusive-img">
      </div>
    </div>
    
    <div class="singlefootwear__bottom">
      <div class="singlefootwear__info">
      <div class="singlefootwear__info-brand">{{ brand }}</div>
      <div class="singlefootwear__info-description">{{ description }}</div>
      <!-- Only show old price if sale prop is true -->
      <div class="singlefootwear__info--price">
      <span v-if="sale" class="singlefootwear__info-oldprice">{{ currency.gb}}{{ oldPrice }}</span>
      <span :style="{color: priceColor}" class="singlefootwear__info-price">{{ currency.gb}}{{ price }}</span>
      </div>
    </div>
        <BaseButton
        :color="btnColor"
        background="#fff"
        >Shop now</BaseButton>
    </div>
  </div>
</template>

<script>
import ExclusiveImage from '@/exclusive'
import Currency from '@/currency'
const stringRequired = { required: true, type: String }
const booleanNotRequired = { required: false, default: () => false, type: Boolean }
  export default {
    data() {
      return {
        currency: Currency
      }
    },
    props: {
      sale: booleanNotRequired, 
      women: booleanNotRequired, 
      src: stringRequired, 
      brand: stringRequired,
      description: stringRequired,
      url: stringRequired, 
      exclusive: booleanNotRequired, 
      price: stringRequired, 
      oldPrice: {
        required: false, 
        type: String
      }
    }, 
    computed: {
      exclusiveImg(){
        return this.women ? ExclusiveImage.gb.women : ExclusiveImage.gb.men
      }, 
      btnColor(){
        return this.sale ? '#e72933' : '#111'
      }, 
      priceColor(){
        return this.sale ? '#e72933' : '#111'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .singlefootwear {
    display: inline-block;
    text-transform: uppercase;
    &__top {
      position: relative;
      height: 40rem;
      width: 56rem;
    }

    &__exclusive {
     @include exclusiveBig;

      &-img {
        display: block;
        width: 100%;
      }
    }
    &__bottom {
      @include flexCenterY;
      justify-content: space-between;
      padding: 3rem 0;
    }
    &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        color: #111;

      &-oldprice {
        text-decoration: line-through;
        margin-right: .2rem;
        color: #111;
      }
      &-brand, &-price, &-oldprice {
      font-weight: bold;
      }
    }
  }
  
</style>