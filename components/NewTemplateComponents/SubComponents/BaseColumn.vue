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
      color="#111"
      background="#fff"
      :fulWidth="true"
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
      <div class="column__info-description">{{ description }}</div>
      <!-- Only show old price if sale prop is true -->
      <div class="column__info--price">
      <span v-if="sale" class="column__info-oldprice">{{ currency.gb}}{{ oldPrice }}</span>
      <span :style="{color: priceColor}" class="column__info-price">{{ currency.gb}}{{ price }}</span>
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
    props: {
      height: {
        required: true, 
        type: String
      },
      full: {
        required: false,
        type: Boolean
      },
      src: {
        required: false, 
        type: String
      }, 
      brand: {
        required: false, 
        type: String
      }, 
      description: {
        required: false, 
        type: String
      }, 
      oldPrice: {
        required: false, 
        type: String
      }, 
      price:  {
        required: false, 
        type: String
      },
      descriptionTwo: {
        required: false, 
        type: String
      }, 
      oldPriceTwo: {
        required: false, 
        type: String
      }, 
      priceTwo:  {
        required: false, 
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
      button: {
        required: false, 
        type: Boolean
      }, 
      buttonText: {
        required: false, 
        type: String
      }
    }, 
    computed: {
      exclusiveImg(){
        return this.women ? ExclusiveImage.gb.women : ExclusiveImage.gb.men
      }, 
      priceColor(){
        return this.sale ? 'red' : '#111'
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
      position: absolute;
      top: 1.5rem;
      left: 1.5rem;
      width: 5rem;
      height: 5rem;

      &-img {
      display: block;
      width: 100%;
    }

    }
    &__info {
      color: #111;
      padding: 1rem 0;

      &.two {
        padding: 0 0 1rem 0;
      }

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
    &__button {
      width: 100%;
      padding-top: 1rem;
    }
    
  }
</style>