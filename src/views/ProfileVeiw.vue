<template>
  <div class="about">
    <h1>This is a profile page.</h1>

      <zbroji-brojeve broj1="37" broj2="58"> </zbroji-brojeve>

    <moja-kartica naslov="Prva kartica" tekst="Moja prva komponenta"></moja-kartica>
    <moja-kartica naslov="Druga kartica" tekst="Moja prva komponenta"></moja-kartica>
    <moja-kartica naslov="Treca kartica" tekst="Moja prva komponenta"></moja-kartica>
  </div>
</template>

<script>
import MojaKartica from '@/components/MojaKartica.vue'
import ZbrojiBrojeve from '@/components/ZbrojiBrojeve.vue'

export default {
  name: 'ProfileView',
  components: {
    MojaKartica,
    ZbrojiBrojeve
  }
}
</script>

    MojaKartica