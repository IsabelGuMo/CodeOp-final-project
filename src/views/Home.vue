<template>
  <main>
    
    <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-10 sm:p-20 justify-items-center items-center ">
     
      <div v-if="loading" class="h-20 w-20 mr-3 justify-center align-center" viewBox="0 0 24 24">
        <img src="https://cdn.dribbble.com/users/1573707/screenshots/3712012/aug-4-2017-6-11-pm.gif">
      </div>
  
      <div v-for="jewel in data" :key="jewel.id" class="w-80 h-80 bg-stone-400/50 border-8 border-amber-500/50 rounded grid text-center text-stone-600 text-xl justify-center">
        <router-link :to="`/jewel/${jewel.id}`">
          {{jewel.title}}
          <img class="w-64 h-64 bg-black border-8 border-black" :src="`${jewel.url}`" alt="jewels">
        </router-link>
      </div>

    </div> 
    <div v-if="error" class="box bg-red-500 text-yellow-50 w-50 h-8 rounded">
      <p>{{error}}</p>
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
      loading: false,
      error: null 
    };
  },
  methods: {
    getJewels() {
      this.loading = true;
      this.error = null;
      axios.get("https://codeop-final-project-jade.vercel.app/db/db.json", this.data, {
	headers: {
	  'Access-Control-Allow-Origin': '*'
	  }})
      .then(response => {
        this.data = response.data
        console.log(this.data)
      })
      .catch(error => {
        console.log ("Lo sentimos, algo ha ido mal, intententelo de nuevo en unos minutos")
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

