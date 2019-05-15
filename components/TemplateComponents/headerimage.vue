<template>
  <div>
    <div class="header_component" :class="[{ sale:sale }]">
      <img :src="image" />
      <div v-if="cta" class="header_component_ctas">
        <a :href="url" :class="[{ invert: invert }]">{{ cta }}</a>
      </div>
      <div v-else class="header_component_ctas">
          <a v-for="button in buttons"
           :key="button.url"
           :href="button.url"
           :class="[{ invert: invert }]"
           >{{ button.cta }}</a>
      </div>
    </div>
  </div> 
</template>

<script> 

export default {
  name: 'headerImage',
  components: { 
  },
  props: {
    sale: {
      type: Boolean,
      default: false, 
    },
    invert: {
      type: Boolean,
      default: false, 
    },
    image: {
      type: String,
      default: '',
    },
    cta: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    buttons: {
      type: [Object, Array],
      default: () => {},
    },
    id: {
      type: String
    }
  },
  data: () => ({
  }),
  methods: {
  },
}
</script>

<style lang="scss">
.t-headerimage {
  text-align: center;
}
.header_component {
  position: relative;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;

  img {
    width: 100%;
    display: block;
  }

  &_ctas {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10%;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    padding: 0 2rem;

    a {
    color: black;
    border: 1px solid white;
    background-color: white;
    padding: 1rem 2rem;
    text-decoration: none;
    margin: 1%;
    font-weight: bold;
    font-size: .9rem;
    width: 45%;
    text-transform: uppercase;

      &.invert {
        color: white;
        border: 1px solid #000;
        background-color: #000;
      }
    }
  } 
}

.header_component.sale {
  background-color: red;
  a {
    color: red;
    border: 1px solid red;
  }
}
</style>
