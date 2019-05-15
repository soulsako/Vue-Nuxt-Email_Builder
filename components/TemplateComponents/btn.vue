<template>
  <div v-if="btndata">
     <div v-for="ptc in btndata" :key="ptc.index"  class="plu_content" :class="[{ sale: ptc.sale },{ pluandbtn: ptc.pluandbtn }]" > 
        <div v-if="ptc.brand" class="plu_text">
          <p>{{ ptc.brand }}</p> 
          <p class="desc">{{ ptc.description }}</p>
          <p>
            <span v-if="ptc.was" class="was">{{currency[country]}} {{ptc.was}}</span>
            <span class="price">{{currency[country]}} {{ptc.price}}</span>
          </p>
        </div> 
        <div v-if="ptc.pluandbtn" class="plu_btn" >
          <a href="" >{{ptc.plubtntext}}</a>
        </div>
      </div>
  </div>
</template>

<script>
import currency from '../currency.js';

export default {
  name: 'btn',
  components: {
  },
  props: {
    btndata: {
      type: [Object, Array],
      default: () => {},
    },
    country: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    currency: currency
  }),
  methods: {
  },
}
</script>

<style lang="scss">
.plu_content {
  display: flex; 
  padding: 1rem 0;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  .plu_text {
    text-align: left;

    p {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.7rem;

      &.desc {
        font-weight: normal;
        line-height: normal;
        margin-bottom: .5rem;
      }

      span.was {
        text-decoration: line-through;
        margin-right: .5rem;
      }
    }
  }

  .plu_btn {
    a {
      margin: 0;
      padding: 1rem 0;
      display: block;
      border: 1px solid #000;
      text-decoration: none;
      color: #000;
      font-weight: bold;
      font-size: 1rem;
    } 
  }

  &.pluandbtn {
    flex-direction: row;
    align-items: center;

    .plu_text, .plu_btn {
      flex: 1;
    }
  }

  &.sale {
    .plu_text {
      .price {
        color: red;
      }
    }
    .plu_btn {
      a {
        color: red;
        border-color: red;
      }
    }
  }
}
</style>
