<template>
<p>
  Zbroj proslijeđenih brojeva iznosi {{ parseInt(broj1)
   +  parseInt(broj2)}}   
</p>
</template>

<script>
export default {
  name: 'ZbrojiBrojeve',
  props: ['broj1','broj2']

  }
</script>

<style scoped>

</style>
