<template>
  <div class="column">

    <div class="column__img" :style="{height: height + 'rem', backgroundImage: 'url(' + plu.src + ')'}">
      <div v-if="exclusive" class="column__exclusive">
      <!--Insert exclusive logo dynamically using exclusive file and computed property -->
        <img :src="exclusiveImg" alt="Only Available at JD" class="column__exclusive-img">
      </div>
    </div>

    <div v-if="button" class="column__button">
      <BaseButton
      :color="btnColor"
      :background="btnBackground"
      :sale="sale"
      >{{ plu.btnText }}</BaseButton>
    </div>

    <div v-else class="column__info">
      <div class="column__info-brand">{{ plu.brand }}</div>
      <div class="column__info-description">{{ plu.title }}</div>
      <!-- Only show old price if sale prop is true -->
      <div class="column__info--price">
      <span v-if="sale" class="column__info-oldprice">{{ currency.gb}}{{ plu.was }}</span>
      <span :style="{color: compPriceColor}" class="column__info-price">{{ currency.gb}}{{ plu.price }}</span>
      </div>
    </div>

    <div v-if="full" class="column__info two">
      <div class="column__info-description">{{ plu.titleTwo }}</div>
      <!-- Only show old price if sale prop is true -->
      <div class="column__info--price">
      <span v-if="sale" class="column__info-oldprice">{{ currency.gb}}{{ plu.wasTwo }}</span>
      <span :style="{color: compPriceColor}" class="column__info-price">{{ currency.gb}}{{ plu.priceTwo }}</span>
      </div>
    </div>
    
  </div>
</template>

<script>
import ExclusiveImage from '@/exclusive'
import Currency from '@/currency'
  export default {
    name: 'BaseColumn',
    data(){
      return {
        currency: Currency
      }
    },
    props: ['full', 'sale', 'height', 'hasPrice', 'priceColor', 'plu', 'button', 'btnColor', 'btnBackground'], 
    computed: {
      exclusiveImg(){
          return this.plu.women ? ExclusiveImage.gb.women : ExclusiveImage.gb.men;  
      },
      exclusive(){
          return this.plu.exclusive ? true : false;
      },
      compPriceColor(){
        if(this.priceColor){
          return this.priceColor
        }else if(this.sale){
          return '#e72933'
        }else {
          return '#111'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .column {
    position: relative;
    width: 27rem;
    float: right;

    &__img {
      background-position: center;
      background-size: cover;
    }

    &__exclusive {
      @include exclusiveSmall;

      &-img {
      display: block;
      width: 100%;
      
    }

    }
    &__info {
      color: #111;
      padding: 3rem 0;
      font-size: 1.8rem;

      &.two {
        padding: 0 0 1rem 0;
      }

      &-oldprice {
        text-decoration: line-through;
        margin-right: .2rem;
        color: #111;
      }
      &-brand, &-price, &-oldprice {
      font-weight: bold;
      }
    }
    &__button {
      width: 100%;
      padding: 2rem 0;
    }
    
  }
</style>