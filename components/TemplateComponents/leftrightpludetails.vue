<template>
  <div class="leftrightpludetails" :class="[{ sale: sale}, {'left': pluposition }]">

    <div v-if="exclusive" class="plu_exclusive">
        <img :src="exclusiveimg[country][exclusiveCategory]" />
    </div>

    <div class="leftrightpludetails_img">
      <img :src="image" />
    </div>
    <div class="leftrightpludetails_box" >
      <p>{{ brand }}</p>
      <p class="branddescription">{{ description }}</p>
      <p>
        <span v-if="was" class="was">{{currency[country]}} {{ was }}</span>
        <span class="price">{{currency[country]}} {{ price }}</span>
      </p>
    </div>
    
  </div>
</template>

<script>
import currency from '@/currency.js';
import exclusiveimg from '@/exclusive.js';

export default {
  name: 'leftrightpludetails',
  components: { 
  },
  props: {
    country: {
      type: String,
      default: ''
    },
    sale: {
      type: Boolean,
      default: false, 
    },
    image: {
      type: String,
      default: '',
    },
    brand: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    was: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '',
    },
    pluposition: {
      type: Boolean,
      default: false,
    },
    exclusive: {
      type: Boolean,
      default: false,
    },
    exclusiveCategory: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    currency: currency,
    exclusiveimg: exclusiveimg
  }),
  methods: { 
  },
}
</script>

<style lang="scss">
.leftrightpludetails {
  position: relative; 
  width: 600px;
  text-align: left;
  margin: 0 auto;
  padding: 1.2rem;
  box-sizing: border-box;

  &_img {
    width: 415px;
    display: inline-block;
    img {
      display: block;
    }
  }

  .plu_exclusive {
    position: absolute;
    width: 50px;
    top: 2rem;
    left: 2rem;

    img {
      display: block;
      width: 100%;
    }
  }

  &_box {
    position: absolute;
    bottom: 10%;
    background-color: #000;
    padding: 1rem;
    color: #fff;
    left: 50%;
    width: 50%;
    box-sizing: border-box;

    p {
      padding: 0;
      margin: 0;
      line-height: 1.7rem;
      font-weight: bold;
      text-transform: uppercase;

      &.branddescription {
        font-weight: normal
      }

      .was {
        text-decoration: line-through;
        margin-right: .5rem;
      }
    }

  }
}

.leftrightpludetails.sale {
  .leftrightpludetails_box {
    background-color: red;
    .was {
      color: black;
    }
  }
}

.leftrightpludetails.left {
  text-align: right;

   .plu_exclusive { 
     left: auto;
     right: 2rem;
   }

  .leftrightpludetails_box {
    left: 0;
    p {
      text-align: right;
    }
  }
}
</style>
