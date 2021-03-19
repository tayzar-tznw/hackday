<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>宝箱の情報</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item>
        <ion-label>金額</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>種類</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-button @click="setOpen(true)" expand="block">追加</ion-button>
      <ion-button expand="block">送信</ion-button>

      <ion-modal
          :is-open="isOpenRef"
          css-class="my-custom-class">
        <Modal @close="setOpen(false)"></Modal>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {defineComponent, ref} from "vue";
import Modal from '@/components/Modal.vue';

export default defineComponent({
  name: 'Tab1',
  components: {Modal, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonPage},
  setup() {
    const inputData = ref([]);
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    const data = {content: 'New Content'};
    return {isOpenRef, setOpen, data}
  }
});
</script>
