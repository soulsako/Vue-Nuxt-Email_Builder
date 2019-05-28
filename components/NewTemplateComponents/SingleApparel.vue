<template>
<!--Insert background image dynamically using the src prop passed in -->
  <div id="dropzone" class="singleapparel dropzone" :style="{ backgroundImage: 'url(' + src + ')', backgroundPosition: invertImg}">
    <!--Invert exclusive logo and background image using computed properties-->
    <div v-if="exclusive" class="singleapparel__exclusive" :style="invertExclusive">
      <!--Insert exclusive logo dynamically using exclusive file and computed property -->
      <img :src="exclusiveImg" alt="Only Available at JD" class="singleapparel__exclusive-img">
    </div>
     <!--dynamically change background-color with infoColor computed property-->
      <div id="box1" class="singleapparel__info-one draggable" :style="{backgroundColor: infoBackColor, color: infoTextColor, bottom: bottom, ...rightOrLeft}">
        <div class="singleapparel__info-brand">{{ brand }}</div>
        <div class="singleapparel__info-description">{{ descriptionOne }}</div>
        <!-- Only show old price if sale prop is true -->
        <div class="singleapparel__info--price">
        <span v-if="sale" class="singleapparel__info-oldprice">{{ currency.gb}}{{ oldPrice }}</span>
        <span class="singleapparel__info-price">{{ currency.gb}}{{ price }}</span>
        <div v-if="multiple">
          <div class="singleapparel__info-description">{{ descriptionTwo }}</div>
          <!-- Only show old price if sale prop is true -->
          <div class="singleapparel__info--price">
          <span v-if="sale" class="singleapparel__info-oldprice">{{ currency.gb}}{{ oldPriceTwo }}</span>
          <span class="singleapparel__info-price">{{ currency.gb}}{{ priceTwo }}</span>
          </div>
        </div>
        </div>
      </div>
        <!-- Only show second info box if multipleSplit prop is true -->
      <div id="box2" v-if="multipleSplit" class="singleapparel__info-two draggable" :style="{backgroundColor: infoBackColor, color: infoTextColor, ...rightOrLeft}">
        <div class="singleapparel__info-description">{{ descriptionTwo }}</div>
        <!-- Only show old price if sale prop is true -->
        <div class="singleapparel__info--price">
        <span v-if="sale" class="singleapparel__info-oldprice">{{ currency.gb}}{{ oldPriceTwo }}</span>
        <span class="singleapparel__info-price">{{ currency.gb}}{{ priceTwo }}</span>
        </div>
      </div>
  </div>
</template>


<script>
import ExclusiveImage from '@/exclusive'
import Currency from '@/currency'
import interact from 'interactjs'
const stringNotRequired = {type: String, required: false}
const stringTrue = {type: String, required: true}
const falseBoolean = {required: false, default: () => false, type: Boolean}

  export default {
    data() {
      return {
        currency: Currency
      }
    },
    props: {
      sale: falseBoolean, 
      women: falseBoolean, 
      src: stringTrue, 
      brand:stringTrue,
      multiple: falseBoolean,
      multipleSplit: falseBoolean,
      descriptionOne: stringTrue,
      descriptionTwo: stringTrue,
      url: stringTrue, 
      exclusive: falseBoolean,  
      invert: falseBoolean,
      price: stringTrue,
      oldPrice: stringNotRequired, 
      priceTwo: stringNotRequired, 
      oldPriceTwo: stringNotRequired, 
      color: stringNotRequired, 
      backgroundColor: stringNotRequired
    }, 
    computed: {
      exclusiveImg(){
        return this.women ? ExclusiveImage.gb.women : ExclusiveImage.gb.men
      }, 
      infoBackColor(){
        if(this.backgroundColor){
          return this.backgroundColor;
        }else if(this.sale){
          return '#e72933'
        }else if(this.women){
          return '#008080'
        }else {
          return '#111'
        }
      }, 
      infoTextColor(){
        return this.color ? this.color : '#fff';
      }, 
      invertImg(){
        return this.invert ? 'right' : 'left'
      }, 
      invertExclusive(){
        return this.invert ? {right: '3rem'} : {left: '3rem'}
      },
      bottom(){
        return this.multipleSplit ? '6rem' : '4rem'
      }, 
      rightOrLeft(){
        return this.invert ? {left: '26%'} : {right: '-26%'}
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
    width: 56rem;
    height: 53rem;

    &__exclusive {
     @include exclusiveBig;

      &-img {
        display: block;
        width: 100%;
      }
    }
    &__info { 
     
      &-one {
        margin-bottom: 1rem;
      }
      &-two {
        top: 85%;
      }
      &-one, &-two {
        padding: 1.8rem;
        color: #fff;
        width: 29rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        transform: translate(-50%, -50%);
        position: absolute;
        font-size: $font-size-1;
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
    
  }
</style>