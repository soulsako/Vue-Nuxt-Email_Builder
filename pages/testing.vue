<template>
  <div style="padding: 5rem;">
    <TextCta 
    v-for="component in getComponents" 
    :key="component.name" 
    v-bind="component"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SingleFootwear from '@/components/NewTemplateComponents/SingleFootwear.vue'
import SingleApparel from '@/components/NewTemplateComponents/SingleApparel.vue'
import HeaderImage from '@/components/NewTemplateComponents/HeaderImage.vue'
import TwoColumn from '@/components/NewTemplateComponents/TwoColumn.vue'
import TextCta from '@/components/NewTemplateComponents/TextCta.vue'
  export default {
    components: {
      SingleFootwear, 
      SingleApparel, 
      HeaderImage, 
      TwoColumn, 
      TextCta
    },
    computed: {
      ...mapGetters([
        'getComponents'
      ])
    }
  }
</script>

<style lang="scss">

</style>