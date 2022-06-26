<template>
  <div class="about">
    <h1>Novosti</h1>

    <moja-kartica naslov="Novost 1" tekst="Sok sou"></moja-kartica>
    <moja-kartica naslov="Novost 2" tekst="Moja prva komponenta"></moja-kartica>
    <moja-kartica naslov="Novost 3" tekst="Moja prva komponenta"></moja-kartica>
  </div>
</template>

<script>
import MojaKartica from '@/components/MojaKartica.vue'

export default {
  name: 'NewsView',
  components: {
    MojaKartica,
  }
}
</script>