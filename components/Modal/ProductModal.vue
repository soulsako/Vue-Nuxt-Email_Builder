<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>

        <v-toolbar dark color="red lighten-1">
          <v-btn icon dark @click="$emit('close')">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Editor</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="$emit('close')">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container app>
          <v-layout app white elevation-8>
            <v-flex lg7 py-2 px-1>
              <component 
              :is="components[compMethod(extractComponent[0].name)]" 
              v-bind="extractComponent[0]"
              v-if="dialog"
              style="margin: 0 auto"/>
            </v-flex>

            <v-divider vertical />

            <v-flex lg5 py-2 px-2 text-sm-center>
              <ProductEditor 
              :double="true"
              :twoColumn="twoColumn"
              >
              Styles
              </ProductEditor>
            </v-flex>
          </v-layout>
        </v-container>

        </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {

    props: {
      dialog: {
        required: false, 
        default: () => false, 
        type: Boolean
      },
      name: {
        required: false, 
        type: String
      }
    }, 
    data(){
      return {
        components: {
          HeaderImage: 'HeaderImage', 
          SingleApparel: 'SingleApparel',
          SingleFootwear: 'SingleFootwear',
          TextAndCta: 'TextAndCta',
          TwoColumn: 'TwoColumn'
        }, 
        twoColumn: false
      }
    }, 
    computed: {
      ...mapGetters([
        'getComponentsData'
      ]), 
      extractComponent(){
          return this.getComponentsData.filter(component => {
          return component.name === this.name
        })
      }
    },
    methods: {
      compMethod(name){
        if(name === 'TwoColumnApparel'|| name === 'TwoColumnFootwear'){
          return 'TwoColumn'
        }
        return name;
      }
    },
    updated(){
      const twoString = this.name.substring(0, 3).toLowerCase();
      this.twoColumn = twoString === 'two' ? true : false
    }
  }
</script>

<style lang="scss" scoped>

</style>