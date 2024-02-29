<script setup>
const { data: trainers } = await useTrainers();
</script>

<template>
  <div>
    <h1>ポケットモンスター</h1>
    <GamifyList>
      <GamifyItem v-if="trainers.length > 0">
        <NuxtLink to="/trainer">つづきからはじめる</NuxtLink>
      </GamifyItem>
      <GamifyItem v-else>
        <span>つづきからはじめる</span>
      </GamifyItem>
      <GamifyItem>
        <NuxtLink to="/new">あたらしくはじめる</NuxtLink>
      </GamifyItem>
    </GamifyList>
  </div>
</template>

<style scoped>
div {
  height: 100vh;
  background-size: cover;
  background-image: url(pokemon.jpg);
}
h1 {
  color: grey;
}
NuxtLink{
  color: gray;
}
span{
  color: gray;
}
</style>
