<template lang="html">
  <div >
      <div  class="row ma-0">
          <div class="text-left col-xs-5 pl-2"> <span>ราคา : </span></div>
          <div class="text-left col-xs-4 pl-2"> <span> {{product.product_price}} ฿ </span></div>
            <div class="text-left col-xs-5 pl-2"> <span >คงเหลือ : </span></div>
          <div class="text-left col-xs-4 pl-2"> <span > {{product.product_number}}</span></div>
      </div>
  </div>
</template>


<script>
export default {
    props: ['product']
}
</script>
