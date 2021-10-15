<template lang="html">
  <div>
    <img :src="`/image/${image}`" class="aa">
  </div>
</template>

<script>
export default {
    props: ['image']
}
</script>
<style>
  @import './ProductImage.css';
</style>
