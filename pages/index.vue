<template>
  <div class='flex'>
    <div class='box_container'>
      <BaseHeading>Select Fascia</BaseHeading>
      <div class='grid'>
        <v-card 
          class='card' 
          v-for='(fascia) in getFascias' 
          :key='fascia._id'
          @click="cardClicked({id: fascia._id, type: 'fascia'})"
          :dark='fascia.isSelected'>
          <v-img
            height="60px"
            :src="fascia.flag"
          >
          </v-img>
          <v-card-title>{{ fascia.fascia_name }}</v-card-title>
        </v-card>
      </div>
    </div>
    
    <v-btn :disabled="buttonCounter < 2" 
           style='align-self: center;' 
           color="success"
           @click="navigateForward">Next</v-btn>
    

  <div class='box_container'>
    <BaseHeading>Select Category</BaseHeading>
      <div class='grid'>
        <v-card class='card' 
                v-for='category in getCategories' 
                :key='category._id'
                @click="cardClicked({id: category._id, type: 'category'})"
                :dark='category.isSelected'>
          <v-card-title>
            <div>
              <span>{{ category.categoryName }}</span>
            </div>
            </v-card-title>
          </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
  
export default {
  name: 'homePage',
  
    data(){
      return {
        buttonCounter: 0, 
        fasciaId: ''
      }
    },
    computed: {
      ...mapGetters([
        'getCategories', 
        'getFascias'
      ])
    }, 
    methods: {
      cardClicked(data){
       this.buttonCounter++
       if(data.type === 'fascia'){
         this.fasciaId = data.id;
       }
       this.$store.commit('setSelected', data);
      }, 
      navigateForward(){
        this.$router.push('/templatelist/' + this.fasciaId);
      }
    }
  }
</script>

<style lang='scss'>
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 2rem;
  }
  .box_container {
    width: 50vw;
    margin: 3rem;
  }
  .card {
    cursor: pointer;
    transition: all .2s;
    &:hover {
      opacity: .7;
    }
  }
</style>

