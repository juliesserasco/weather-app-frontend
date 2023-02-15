<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>

<script>

  export default {
      data() {
        return{
          modals:{
            jobModalShow: false,
            jobModalStyle: "display: none;",
            bdModalShow: false,
            bdModalStyle: "display: none;",
            cmModalShow: false,
            cmModalStyle: "display: none;",
            csModalShow: false,
            csModalStyle: "display: none;",
            iaModalShow: false,
            iaModalStyle: "display: none;",
            rpModalShow: false,
            rpModalStyle: "display: none;",
          }
        }
      },
      methods: {
        toggleModal(modalName){
          let display_none = "display: none;";
          let display = "display: block; background-color: rgb(93 93 93 / 50%);";

          if(modalName == "jobModalShow"){
            this.modals.jobModalShow = !this.modals.jobModalShow
            this.modals.jobModalStyle =  this.modals.jobModalShow  ? display : display_none

          }else if(modalName == "bdModalShow"){
            this.modals.bdModalShow = !this.modals.bdModalShow
            this.modals.bdModalStyle =  this.modals.bdModalShow  ? display : display_none

          }else if(modalName == "cmModalShow"){
            this.modals.cmModalShow = !this.modals.cmModalShow
            this.modals.cmModalStyle =  this.modals.cmModalShow  ? display : display_none

          }else if(modalName == "csModalShow"){
            this.modals.csModalShow = !this.modals.csModalShow
            this.modals.csModalStyle =  this.modals.csModalShow  ? display : display_none

          }else if(modalName == "iaModalShow"){
            this.modals.iaModalShow = !this.modals.iaModalShow
            this.modals.iaModalStyle =  this.modals.iaModalShow  ? display : display_none
            
          }else{
            this.modals.rpModal = !this.modals.rpModal
            this.modals.rpModalStyle =  this.modals.rpModal  ? display : display_none
            // rpModal
          }

        }

      }
  }
</script>

<template>
  <div class="container py-7">
    <div class="row mt-2 flex justify-content-center">
      <div class="col-sm-3 col-6 ms-8">
        <!-- Button trigger modal -->
        <MaterialButton
          variant="gradient"
          color="success"
          @click="toggleModal('jobModalShow')"
        >
          Launch demo modal
        </MaterialButton>

        <!-- Modal -->
        <div
          class="modal show fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          :style="modals.jobModalStyle" 
          :aria-modal="modals.jobModalShow" 
          role="dialog"
          v-if="modals.jobModalShow"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Your modal title
                </h5>
                <MaterialButton
                  @click="toggleModal('jobModalShow')"
                  color="none"
                  class="btn-close"
                  aria-label="Close"
                >X
                </MaterialButton>
              </div>
              <div class="modal-body">
                Society has put up so many boundaries, so many limitations on
                what’s right and wrong that it’s almost impossible to get a pure
                thought out.
                <br /><br />
                It’s like a little kid, a little boy, looking at colors, and no
                one told him what colors are good, before somebody tells you you
                shouldn’t like pink because that’s for girls, or you’d instantly
                become a gay two-year-old.
              </div>
              <div class="modal-footer justify-content-between">
                <MaterialButton
                  variant="gradient"
                  color="dark"
                  data-bs-dismiss="modal"
                >
                  Close
                </MaterialButton>
                <MaterialButton variant="gradient" color="success" class="mb-0">
                  Save changes
                </MaterialButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
