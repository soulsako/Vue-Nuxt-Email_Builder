<template>
  <div :class="exclusiveCategory">
     <div :class="[{ doublecolumn: doublecolumn },{ postcard: postcard}]" class="pluDetails" >
       <div v-for="ptc in pluDetails" :key="ptc.index"  class="plu" :class="[{ apparel: apparel },{ footwear: footwear }]">
         <div v-if="ptc.pluimage">
           <img :src="ptc.pluimage" />
         </div>
         <div v-if="singlePlu(ptc.plu)" >
            <div v-if="ptc.plu[0].exclusive || ptc.plu[1].exclusive" class="plu_exclusive">
                <img :src="exclusiveimg[country][exclusiveCategory]" />
            </div>
            <div v-for="p in ptc.plu" :key="p.index"> 
               <div class="plu_content" :class="[{ sale: p.sale }]" >
                <div v-if="p.brand" class="plu_text">
                    <p>{{ p.brand }}</p> 
                    <p class="desc">{{ p.description }}</p>
                    <p>
                      <span v-if="p.was" class="was">{{currency[country]}}{{ p.was }}</span>
                      <span class="price">{{currency[country]}}{{ p.price }}</span>
                    </p>
                  </div>
              </div>
            </div>

         </div>

         <div v-else>
            <div v-if="ptc.plu.exclusive" class="plu_exclusive">
              <img :src="exclusiveimg[country][exclusiveCategory]" />
            </div>

            <div class="plu_asset">
              <img :src="ptc.plu.image" />
            </div>

            <div class="plu_content" :class="[{ sale: ptc.plu.sale }]" >
              <div v-if="ptc.plu.brand" class="plu_text">
                  <p>{{ ptc.plu.brand }}</p> 
                  <p class="desc">{{ ptc.plu.description }}</p>
                  <p>
                    <span v-if="ptc.plu.was" class="was">{{currency[country]}}{{ ptc.plu.was }}</span>
                    <span class="price">{{currency[country]}}{{ ptc.plu.price }}</span>
                  </p>
                </div>
                <div v-if="ptc.pluandbtn" class="plu_btn" > 
                  <a href="" >{{ ptc.plubtntext }}</a>
                </div>
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
  name: 'pludouble',
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
