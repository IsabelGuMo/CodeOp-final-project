<template>
<div class="flex flex-row flex-wrap gap-6 w-full justify-center p-20">
    
    <router-link class="text-[#fee81a]" to="/">
        Home
    </router-link>

    <div v-if="loading" class="animate-spin h-20 w-20 mr-3" viewBox="0 0 24 24">
      Loading...
    </div>
    <main v-if="data" class="grid grid-cols-3 items-center justify-items-center">
        <h2 class="w-48 h-48 bg-black/70 rounded flex items-center justify-center text-center text-[#fee81a]" v-if="data">Hola{{ data.id }}</h2>
  
    </main>
</div>
</template>

<script>
import axios from 'axios';

export default {
    props:['id'],
    data() {
        return {
            data: null,
            loading: false,
            error: false
        } 
    },
    methods: {
        getJewel() {
        this.loading = true;
        axios.get(`http://localhost:8080/jewels`)
        .then(response => {
            this.data = response.data.find(element => element.id == this.id)
            console.log(this.data);
        })
        .catch(error => {
            console.log(error);
      })
      .then (() => { 
        this.loading = false;
      })
        }
    },
    mounted() {
        this.getJewel();
    },
};
</script>