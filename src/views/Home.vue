<template>

  <main>
    
    <div class="grid grid-cols-4 gap-20">
      
      <div v-if="loading" class="animate-spin h-20 w-20 mr-3" viewBox="0 0 24 24">
        <img src="https://cdn.dribbble.com/users/1573707/screenshots/3712012/aug-4-2017-6-11-pm.gif">
      </div>

      <div v-for="jewel in data" :key="jewel.id" class="w-80 h-80 bg-slate-400/70 rounded grid text-center text-slate-400 text-xl justify-center">
        <router-link :to="`/jewel/${jewel.id}`">
          {{jewel.title}}
          <img class="w-64 h-64 bg-black" :src="`${jewel.url}`" alt="jewels">
        </router-link>
      </div>

    </div> 
  
  </main>

  
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      data: null,
      loading: false  
    };
  },
  methods: {
    getJewels() {
      this.loading = true;
      axios.get('http://localhost:8080/jewels')
      .then(response => {
        this.data = response.data
      })
      .catch(error => {
        console.log(error);
      })
      .then (() => { 
        this.loading = false;
      })
    },
    getId(url) {
      return url.split('/').reverse()[1];
    },
  },

  mounted() {
    this.getJewels();
  }
};
</script>
