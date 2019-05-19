<template>
<!--Insert background image dynamically using the src prop passed in -->
  <div id="dropzone" class="singleapparel dropzone" :style="{ backgroundImage: 'url(' + src + ')', backgroundPosition: invertImg}">
    <!--Invert exclusive logo and background image using computed properties-->
    <div v-if="exclusive" class="singleapparel__exclusive" :style="invertExclusive">
      <!--Insert exclusive logo dynamically using exclusive file and computed property -->
      <img :src="exclusiveImg" alt="Only Available at JD" class="singleapparel__exclusive-img">
    </div>
     <!--dynamically change background-color with infoColor computed property-->
      <div id="box1" class="singleapparel__info-one draggable" :style="{backgroundColor: infoBackColor, color: infoTextColor}">
        <div class="singleapparel__info-brand">{{ brand }}</div>
        <div class="singleapparel__info-description">{{ description.one }}</div>
        <!-- Only show old price if sale prop is true -->
        <div class="singleapparel__info--price">
        <span v-if="sale" class="singleapparel__info-oldprice">{{ currency.gb}}{{ description.oldPrice }}</span>
        <span class="singleapparel__info-price">{{ currency.gb}}{{ description.price }}</span>
        </div>
      </div>
        <!-- Only show second info box if multiple prop is true -->
      <div id="box2" v-if="multiple" class="singleapparel__info-two draggable" :style="{backgroundColor: infoBackColor, color: infoTextColor}">
        <div class="singleapparel__info-description">{{ description.two }}</div>
        <!-- Only show old price if sale prop is true -->
        <div class="singleapparel__info--price">
        <span v-if="sale" class="singleapparel__info-oldprice">{{ currency.gb}}{{ description.oldPriceTwo }}</span>
        <span class="singleapparel__info-price">{{ currency.gb}}{{ description.priceTwo }}</span>
        </div>
      </div>
  </div>
</template>


<script>
import ExclusiveImage from '@/exclusive'
import Currency from '@/currency'
import interact from 'interactjs'
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
      multiple: {
        required: false, 
        default: () => false, 
        type: Boolean
      },
      description: {
        required: true, 
        type: Object
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
      user: {
        required: false, 
        default: () => {}, 
        type: Object
      }, 
      invert: {
        required: false, 
        default: () => false, 
        type: Boolean
      }
    }, 
    computed: {
      exclusiveImg(){
        return this.women ? ExclusiveImage.gb.women : ExclusiveImage.gb.men
      }, 
      infoBackColor(){
        if(this.user.backColor){
          return this.user.backColor;
        }else if(this.sale){
          return '#E74C3C'
        }else if(this.women){
          return '#008080'
        }else {
          return '#111'
        }
      }, 
      infoTextColor(){
        return this.user.textColor ? this.user.textColor : '#fff';
      }, 
      invertImg(){
        return this.invert ? 'right' : 'left'
      }, 
      invertExclusive(){
        return this.invert ? {right: '3rem'} : {left: '3rem'}
      }
    },
    methods: {
      dragMoveListener(event){
        var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          // translate the element
          target.style.webkitTransform = target.style.transform ='translate(' + x + 'px, ' + y + 'px)';

          // update the posiion attributes
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);

          // enable draggables to be dropped into this
        interact('.dropzone').dropzone({  
          // Require a 50% element overlap for a drop to be possible
          overlap: .20,

          // listen for drop related events:

          ondropactivate: function (event) {
            // add active dropzone feedback
            event.target.classList.add('drop-active');
          },
          ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;

            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target');
          },
          ondragleave: function (event) {
            // remove the drop feedback style
            event.target.classList.remove('drop-target');
          },
          ondropdeactivate: function (event) {
            // remove active dropzone feedback
            event.target.classList.remove('drop-active');
            event.target.classList.remove('drop-target');
          }
        });
      }
    },
    mounted(){
      // Execute the ineractjs library to allow drag an drop of description div
      // target elements with the "draggable" class
      interact('.draggable')  
            .draggable({
              // enable inertial throwing
              inertia: true,
              // keep the element within the area of it's parent
              restrict: {
                restriction: "parent",
                endOnly: false,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
              },
              // enable autoScroll
              autoScroll: true,
              // call this function on every dragmove event
              onmove: this.dragMoveListener,
            });
          }
        }
</script>

<style lang="scss" scoped>
  .singleapparel {
    position: relative;
    width: 55.3rem;
    height: 53rem;

    &__exclusive {
      position: absolute;
      top: 3rem;
      width: 5rem;
      height: 5rem;

      &-img {
        display: block;
        width: 100%;
      }
    }
    &__info {
      

      &-one {
        margin-bottom: 1rem;
      }

      &-one, &-two {
        padding: 1.5rem;
        color: #fff;
        max-width: 50%;
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
    
  }
</style>