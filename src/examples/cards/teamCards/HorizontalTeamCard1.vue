<script setup>
  import { useWindowsWidth } from "../../../assets/js/useWindowsWidth";
defineProps({
  image: {
    type: String,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
    name: String,
    link: String,
  },
  position: {
    type: Object,
    label: String,
    color: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const { type } = useWindowsWidth();
function getCurrentView(){
  let screen;
  if(type.value === "mobile"){
      screen = "w-40";
  }
  else{
      screen = "w-20";
  }
}
</script>
<template>
  <div class="card card-profile" style="box-shadow:none;">
    <!-- <div class="row">
      <div class="col-lg-2 col-md-2 col-4 mt-n0">
        <a>
          <div class="p-3 pt-4 pe-md-0 ">
            <img
              class="border-radius-md"
              :src="image"
              :alt="profile.name"
              :class="getCurrentView"
            />
          </div>
        </a>
      </div>
      <div class="col-lg-10 col-md-10 col-8 pl-5 my-auto">
        <div class="ps-lg-1" >
          <h5 class="mb-0 font-colors text-left" style="font-size: 15pt;">{{ profile.name }}</h5>
          <h6 :class="`text-${position.color}`">{{ position.label }}</h6>
          <p class="mb-0 font-colors">
            {{ description }}
          </p>
        </div>
      </div>
    </div> -->
    <div class="row">
      <!-- <div class="col-lg-2 col-md-2 col-4 mt-n0">
        <a>
          <div class="p-3 pt-4 pe-md-0 ">
            <img
              class="border-radius-md"
              :src="image"
              :alt="profile.name"
              :class="getCurrentView"
            />
          </div>
        </a>
      </div> -->
      <div class="col-lg-12 ps-sm-4 pe-sm-3 text-center">
          <img
              :src="image"
              :alt="profile.name"
              :class="getCurrentView"
            /><span class="mx-2 ps-me-3 mb-4 font-colors text-center" style="font-size: 16pt;">{{ profile.name }}</span>
          <!-- <h5 class="mb-4 font-colors text-center" style="font-size: 15pt;">{{ profile.name }}</h5> -->
      </div>
    </div>
  </div>
</template>
<style scope>
    .font-colors{
      color: #002315; 
    }
    .justify{
      justify-content:space-between;
    }
</style>
