<template>
  <div>
    <div :id="id" class="text_and_cta" :class="[{ sale: sale }]" >
      <span v-if="logo">
        <img :src="logo" />
      </span>
      <h2>{{ heading }}</h2>
      <a :href="url">{{ cta }}</a>
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
    heading: {
      type: String,
      default: '',
    },
    logo: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    cta: {
      type: String,
      default: '',
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
.t-textandcta {
  text-align: center;
}
.text_and_cta {
  display: inline-flex;
  width: 100%;
  margin: 0;
  padding: 2rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0 0 1.2rem 0;
    padding: 0;
    font-size: 2rem;
    font-weight: bold;
  }

  a {
    color: #000;
    border: 1px solid #000;
    padding: 1rem 2rem;
    text-decoration: none;
    font-weight: bold;
    font-size: .9rem;
    width: 40%;
  }

  &.sale {
    h2 {
      color: red;
    }
    a {
      color: red;
      border: 1px solid red;
    }
  }
} 
</style>
