<template>
  <div class="column">
    <div class="column__img" :style="{height: height + 'rem', backgroundImage: 'url(' + src + ')'}">
      <div v-if="exclusive" class="column__exclusive">
      <!--Insert exclusive logo dynamically using exclusive file and computed property -->
        <img :src="exclusiveImg" alt="Only Available at JD" class="column__exclusive-img">
      </div>
    </div>

    <div v-if="button" class="column__button">
      <BaseButton
      :color="priceColor"
      background="#fff"
      >{{ buttonText }}</BaseButton>
    </div>

    <div v-else class="column__info">
      <div class="column__info-brand">{{ brand }}</div>
      <div class="column__info-description">{{ description }}</div>
      <!-- Only show old price if sale prop is true -->
      <div class="column__info--price">
      <span v-if="sale" class="column__info-oldprice">{{ currency.gb}}{{ oldPrice }}</span>
      <span :style="{color: priceColor}" class="column__info-price">{{ currency.gb}}{{ price }}</span>
      </div>
    </div>

    <div v-if="full" class="column__info two">
      <div class="column__info-description">{{ descriptionTwo }}</div>
      <!-- Only show old price if sale prop is true -->
      <div class="column__info--price">
      <span v-if="sale" class="column__info-oldprice">{{ currency.gb}}{{ oldPriceTwo }}</span>
      <span :style="{color: priceColor}" class="column__info-price">{{ currency.gb}}{{ priceTwo }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ExclusiveImage from '@/exclusive'
import Currency from '@/currency'
  export default {
    data(){
      return {
        currency: Currency
      }
    },
    props: ['height', 'sale', 'women', 'exclusive', 'full', 'button', 'buttonText', 'brand', 'description', 'price', 'oldPrice', 'src', 'descriptionTwo', 'oldPriceTwo', 'priceTwo'], 
    computed: {
      exclusiveImg(){
        return this.women ? ExclusiveImage.gb.women : ExclusiveImage.gb.men
      }, 
      priceColor(){
        return this.sale ? '#e72933' : '#111'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .column {
    position: relative;
    width: 27rem;
    float: right;

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