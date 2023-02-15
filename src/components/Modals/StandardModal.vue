<script setup>
    import CloseIcon from "@/assets/img/x-symbol-svgrepo-com.svg";
    
    defineProps(['show', 'hasClose', 'hasHeader', 'hasFooter', 'title', 'size', 'isScrollable', 'isBringToFront'])
</script>

<template>
    <Transition name="modal">

        <div v-if="show" class="modal" :class="{ 'bring-to-front': isBringToFront }">

            <div class="modal-dialog modal-dialog-centered" :class="[{ 'modal-dialog-scrollable' : isScrollable }, size]">

                <div class="modal-content">

                    <div v-if="hasHeader" class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
                        <button v-if="hasClose"
                            class="btn-close"
                            aria-label="Close"
                            @click="$emit('close')"
                        ><img :src="CloseIcon" /></button>
                    </div>

                    <div v-else style="text-align: right; padding-right: 10px; padding-top: 3px;">
                        <button v-if="hasClose"
                            class="btn-close"
                            aria-label="Close"
                            @click="$emit('close')"
                        ><img :src="CloseIcon" /></button>
                    </div>

                    <div class="modal-body">
                        <slot name="body">Body</slot>

                    </div>

                    <div v-if="hasFooter" class="modal-footer justify-content-between">
                        <span>&nbsp;</span>
                        <div>
                            <slot name="footer">Footer</slot>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </Transition>

</template>

<style scoped>

    .modal {
        background-color: rgba(0, 0, 0, 0.5);
        display: block;
        transition: opacity 0.3s ease;
    }
    .modal-header {
        padding: 0 13px 13px 13px;
    }
    .modal-dialog {
        max-width: 400px;
    }

    .dialog-xxxxxl {
        max-width: 1200px;
    }
    .dialog-xxxxl {
        max-width: 900px;
    }
    .dialog-xxxl {
        max-width: 800px;
    }
    .dialog-xxl {
        max-width: 700px;
    }
    .dialog-xl {
        max-width: 600px;
    }
    .dialog-lg {
        max-width: 500px;
    }
    .dialog-md {
        max-width: 400px;
    }
    .dialog-sm {
        max-width: 300px;
    }
    .modal-content {
        transition: all 0.3s ease;
    }

    /*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */

    .modal-enter-from {
        opacity: 0;
    }

    .modal-leave-to {
        opacity: 0;
    }

    .modal-enter-from .modal-content,
    .modal-leave-to .modal-content {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .modal-title {
        color: #424242;
    }

    .modal-dialog-centered{
        margin-right: auto !important;
        margin-left: auto !important;
    }
    .modal-fullscreen {
        margin-top: 30px;
        max-width: 90%;
        max-height: 90%;
    }
    .modal-fullscreen .modal-body {
        overflow-y: hidden;
    }
    .bring-to-front {
        z-index: 9999;
    }
</style>