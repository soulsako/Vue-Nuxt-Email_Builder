<template>
<!-- Insert background image dynamically using the src prop passed in -->
  <div class="singlefootwear">
    <div class="singlefootwear__top" :style="{ backgroundImage: 'url(' + src + ')' }">
      <div v-if="exclusive" class="singlefootwear__exclusive">
        <!--Insert exclusive logo dynamically using exclusive file and computed property -->
        <img :src="exclusiveImg" alt="Only Available at JD" class="singlefootwear__exclusive-img">
      </div>
    </div>
     <!--dynamically change background-color with infoColor computed property-->
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
  export default {
    data() {
      return {
        currency: Currency
      }
    },
    props: {
      sale: {
        required: false, 
        default: () => false, 
        type: Boolean
      }, 
      women: {
        required: false,
        default: () => false, 
        type: Boolean
      }, 
      src: {
        required: true, 
        type: String
      }, 
      brand: {
        required: true,
        type: String
      },
      description: {
        required: true, 
        type: String
      },
      url: {
        required: true, 
        type: String
      }, 
      exclusive: {
        required: false, 
        default: () => false, 
        type: Boolean
      }, 
      price: {
        required: true, 
        type: String
      }, 
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
        return this.sale ? 'red' : '#111'
      }, 
      priceColor(){
        return this.sale ? 'red' : '#111'
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
      min-height: 40rem;
      min-width: 56rem;
    }

    &__exclusive {
      position: absolute;
      top: 3rem;
      left: 3rem;
      width: 5rem;
      height: 5rem;

      &-img {
        display: block;
        width: 100%;
      }
    }
    &__bottom {
      @include flexCenterY;
      justify-content: space-between;
      padding: 1.5rem 0;
    }
    &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        color: #111;

      &-oldprice {
        text-decoration: line-through;
        margin-right: .8
        rem;
        color: #111;
      }
      &-brand, &-price, &-oldprice {
      font-weight: bold;
      }
    }
  }
  
</style>