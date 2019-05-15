<template>
  <div :class="exclusiveCategory" >

    <div :class="[{ singlecolumn: singlecolumn }]" class="pluDetails" >

       <div  class="plu" :class="[{ apparel: apparel },{ apparel_left: apparelLeft },{ footwear: footwear }]">

          <div v-if="pluDetails.plu.exclusive" class="plu_exclusive">
            <img :src="exclusiveimg[country][exclusiveCategory]" />
          </div>

          <div class="plu_asset">
            <img :src="pluDetails.plu.image" />
          </div>

          <div class="plu_content" :class="[{ pluandbtn: pluDetails.pluandbtn },{ sale: pluDetails.plu.sale }]" >
             <div class="plu_text">
                <p>{{ pluDetails.plu.brand }}</p> 
                <p class="desc">{{ pluDetails.plu.description }}</p>
                <p>
                  <span v-if="pluDetails.plu.was" class="was">{{currency[country]}}{{ pluDetails.plu.was }}</span>
                  <span class="price">{{currency[country]}}{{ pluDetails.plu.price }}</span>
                </p>
              </div>
              <div v-if="pluDetails.pluandbtn" class="plu_btn" > 
                <a href="" >{{ pluDetails.plubtntext }}</a>
              </div>
          </div>

       </div>

    </div>

  </div>
</template>

<script> 
import exclusiveimg from '@/exclusive.js';
import currency from '@/currency.js';

export default {
  name: 'plu',
  components: {
  },
  props: {
    pluDetails: {
      type: [Object, Array],
      default: () => {},
    },
    country: {
      type: String,
      default: '',
    },
    exclusiveCategory: {
      type: String,
      default: '',
    },
    apparel: {
      type: Boolean,
      default: false,
    },
    footwear: {
      type: Boolean,
      default: false,
    },
    singlecolumn: {
      type: Boolean,
      default: false,
    },
    doublecolumn: {
      type: Boolean,
      default: false,
    },
    apparelLeft: {
      type: Boolean,
      default: false,
    },
    postcard: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    exclusiveimg: exclusiveimg,
    currency: currency
  }),
  methods: {
    singlePlu(p) {
      if(Array.isArray(p)) {
        return true;
      }
      return false;
    }
  },
}
</script>

<style lang="scss">
.pluDetails { 
  margin: 0 auto;
  padding: 1.2rem;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;

  .plu_asset img {
    display: block;
  }

  .plu {
    width: 100%; 
    position: relative;

    .plu_exclusive {
      position: absolute;
      width: 50px;
      top: 1rem;
      left: 1rem;

      img {
        display: block;
        width: 100%;
      }
    }
  
    .plu_content {
      display: flex; 
      padding: 1rem 0;
      flex-direction: column;
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
          text-transform: uppercase;
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
  }

  &.singlecolumn {
    .apparel {
      .plu_content {
        position: absolute;
        left: 50%;
        bottom: 10%;
        padding: 1rem;
        color: #ffffff;
        width: 50%;
        box-sizing: border-box;
      }
    }
    .apparel.apparel_left {
      text-align: right;
      .plu_exclusive {
        left: auto;
        right: 1rem;
      }
      .plu_asset {
        display:inline-block;
      }
      .plu_content {
        left: 0%;
      }
    }
  }

  &.doublecolumn {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .plu {
      width: 270px;
    }
  }
  
}

.men .singlecolumn .apparel .plu_content{
  background-color: #000000;
}

.women .singlecolumn .apparel .plu_content{
  background-color: #b2cdce;
}

.women .singlecolumn .apparel .plu_content.sale,
.men .singlecolumn .apparel .plu_content.sale {
  background-color: red;
  .plu_text {
    .was {
      color: #000000;
    }
    .price {
      color: #ffffff;
    }
  }
}


.women .singlecolumn .footwear .plu_exclusive{
  left: auto;
  right: 1rem;
}

.doublecolumn.postcard {
  .plu_content{
    .plu_text {
      display: none;
    }
  }
}

.women .doublecolumn .plu.footwear .plu_exclusive {
  left: auto;
  right: 1rem;
}

.women .doublecolumn.postcard {
  background-color: #b2cdce;
  padding-bottom: 0;
  
  .plu {
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 1.2rem;

    .plu_asset {
      img {
        width: 100%;
      }
    }

    .plu_content {
      padding: 0;
      .plu_btn a {
        border: 0;
      }
      &.sale {
        .plu_btn a {
          color: red;
        }
      }
    }
  }
}

</style>
