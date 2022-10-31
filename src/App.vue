<template>
  <div>
    <div class="flex flex-col items-center text-5xl mt-20 text-stone-500 sm:text-9xl">
      <h3 class="text-xl sm:text-2xl">{ThreeLittleBirdsSoul}</h3>
      <h1 class="">Tlb<i class="fa-solid fa-feather w-8 text-amber-500/50"></i></h1>
      <h1 class="">Soul</h1>
      <h3 class="text-xl sm:text-2xl">
        by IsabelGM
        <i class="fa-solid fa-dove text-amber-500/50"></i>
        <i class="fa-solid fa-dove text-amber-500/50"></i>
        <i class="fa-solid fa-dove text-amber-500/50"></i>
      </h3>
    </div>
    
    <RouterView />
    <footer class="text-stone-500 text-center">
      This is a IsabelGM project that was created at <a class="text-amber-500" target="_blank" href="http://codeop.tech">CodeOp</a>, a full stack development bootcamp in Barcelona.
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
  
  
</style>
