<template>

    <div class="flex flex-row flex-wrap gap-6 w-full justify-center p-20">

        <div v-if="loading" class="animate-spin h-20 w-20 mr-3" viewBox="0 0 24 24">
        Loading...
        </div>

        <main v-if="data" class="sm:grid grid-cols-3 grid-rows">
            <div class="flex flex-col xl:w-64 xl:h-64 sm:w-48 sm:h-48 sm:sticky top-10 justify-self-center bg-stone-500/50 rounded flex items-center justify-center text-center">
                <router-link class="text-amber-400 sm:text-xl bg-stone-400 rounded p-3 m-4" to="/">
                    <p>Home</p>
                </router-link>
                <h2 class="text-stone-600 sm:text-xl text-l">{{ data.title }}</h2>
                <p class="text-stone-500 sm:text-xl text-l"> {{data.description}}</p>
            </div>
            
            <div class="flex flex-col gap-10">
                <img class="bg-black/70 border-8 border-black rounded w-96 transition duration-500 hover:scale-125" :src="data.url" :alt="data.description">
                <img class="bg-black/70 border-8 border-black rounded w-96 transition duration-500 hover:scale-125" :src="data.url2" :alt="data.description">
                <img class="bg-black/70 border-8 border-black rounded w-96 transition duration-500 hover:scale-125" :src="data.url3" :alt="data.description">
            </div>

            <div class="flex flex-col xl:w-64 xl:h-64 sm:w-48 sm:h-48 sticky top-10 justify-self-center bg-stone-500/50 rounded flex items-center justify-center text-center">
                
                <a class="text-stone-600 bg-stone-400 rounded p-3 m-4" target="_blank" href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGpGBFFRLhZqwLsjmRsWCgqdmJB?compose=new">
                    <p class="text-amber-400 text-xl">Contáctanos
                    <i class="fa-solid fa-paper-plane text-stone-500"></i>
                </p>
                Email</a>  
            </div>
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
            axios.get("../db/db.json", this.data, {
	headers: {
	  'Access-Control-Allow-Origin': '*'
	  }})
        .then(response => {
            this.data = response.data.jewels.find(element => element.id == this.id)
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