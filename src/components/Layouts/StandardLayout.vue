<script setup>
    import { useWindowsWidth } from "@/assets/js/useWindowsWidth";
    import MaterialButton from "@/components/MaterialButton.vue";
    const { type } = useWindowsWidth();

    const setContainerClass  = () => {
        let set;
        if (type.value === "mobile") {
            set = 'container-fluid px-0 mt-4';
        } else if (type.value === "desktop") {
            set = 'container-fluid gx-0';
        }else {
            set = 'container-fluid gx-0 ';
        }
        return set
    }
</script>
<script>
  import * as bootstrap from "bootstrap/dist/js/bootstrap";
  
  export default{
    data(){
      return{
        showMenu:{data:false},
      }
     },
     watch:{
      $route (to, from){
        
        
          const app = document.getElementById('app');
          app.tabIndex = '-1';
          app.focus();
          
          let offcanvas = document.getElementById('offcanvasExample'); 
          let bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
          if (bsOffcanvas) {
              bsOffcanvas.hide();
          }

          this.showMenu.data = false;
       
        
      }
    } 
  }
</script>
<template>
<div>
  <div class="item1" :class="{remove_margin : type =='mobile'}">
    <div v-if="type =='mobile'">
      <!-- <MaterialButton variant="gradient" color="white" 
            size="lg" class="button-position button-radius-shadow btn-color-new"   
            aria-controls="offcanvasExample"
            @click="showMenu.data = true" v-if="!showMenu.data"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
            </svg>
      </MaterialButton> -->
      <MaterialButton class="navbar-toggler collapsed button-size button-position  button-radius-shadow btn-color-new"
        variant="gradient" color="white" size="md"
        aria-controls="offcanvasExample"
        @click="showMenu.data = true" v-if="!showMenu.data">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
          </svg>
      </MaterialButton>
    </div>    
    <slot name="header"></slot>
  </div>
  <div class="item2 rs-bg" id="mySidebar" v-if="type =='desktop'">
    <slot name="leftsidebar" ></slot>
  </div>
  <div class="offcanvas offcanvas-start rs-bg" tabindex="-1" 
  id="offcanvasExample"  data-bs-backdrop="false"
  aria-labelledby="offcanvasExampleLabel"  v-if="type =='mobile'" :class="{ show :showMenu.data}">
      <div class="offcanvas-header justify-content-end">
        <button type="button" class="btn-close text-reset float-end" data-bs-dismiss="offcanvas" @click="showMenu.data = false" aria-label="Close" >X</button>
      </div>
      <div class="offcanvas-body">
          <slot name="leftsidebar"></slot>
      </div>
  </div>
  <div class="item3" :class="{remove_margin : type =='mobile'}">
    <div :class="setContainerClass()">
        <div class="row flex-lg-row flex-md-column-reverse flex-sm-column-reverse">
            <div class="col-lg-9 px-2 py-0 bg">
              <slot name="main" id="main"></slot>
            </div>
            <div class="col-lg-3">
              <slot name="rightsidebar"></slot>
            </div>
        </div>
    </div>
  </div>  
  
</div>
</template>
<style scoped>
.button-size {
  width: 56px;
  height: 54px;
}

.button-position{
  position: fixed;
  bottom: 50px;
  right: 30px;
  z-index: 3;
}

.button-radius-shadow{
  border-radius: 50%;
  box-shadow: 10px 10px 5px #aaaaaa !important;
}

.item1 { 
    margin-left: 286px;
    position: sticky;
    top: 0;
    z-index: 2;
 }

.header_mobile{
  min-height: 150px;
}
.item2 {
    height: 100%;
    width: 286px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
}

.disappear{
    width:0 !important;
}

.remove_margin{
  margin-left:0 !important;

}
.item3 { 
    margin-left: 286px; /* Same as the width of the sidenav */
    padding: 1.5rem !important; 
}

#main {
  transition: margin-left .5s;
  
}

@media (max-width: 991px) {
    .flex-sm-column-reverse {
        flex-direction: column-reverse !important;
    }
}



</style>