
<script setup>
import Loader from "@/assets/img/Loading-Icon.gif";
defineProps({
  labelVisible: {
    type: Boolean,
    default: true,
  },
  imgWidth: {
    type: String,
    default: null,
  },
});
</script>

<template>
          <div id="loader">
            <h3 v-if="labelVisible">Please Wait..</h3>
            <img
                :src="Loader"
                alt="Loader"
                loading="lazy"
                :style="[ `${imgWidth}` ? {width: `${imgWidth}` + '%'} : '' ]"
              />
          </div>                     
</template>

<style scope>
  #loader{text-align:center; width:100%;}
</style>
