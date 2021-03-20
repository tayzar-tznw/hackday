<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>宝箱の情報</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <form @submit.prevent="sendData(w)">
        <ion-item>
          <ion-label>限度額</ion-label>
          <ion-input v-model="w" placeholder="1234"></ion-input>
        </ion-item>

        <ion-list>
          <ion-item-group>
            <div>
              <ion-item-divider>
                <ion-label>宝物 A</ion-label>
              </ion-item-divider>

              <ion-item lines="none">
                <ion-label>モード: 2</ion-label>
              </ion-item>

              <ion-item lines="none">
                <ion-label>最低回数: 3回</ion-label>
              </ion-item>

              <ion-item lines="none">
                <ion-label>優先度: 2</ion-label>
              </ion-item>
            </div>
            <div>
              <ion-item-divider>
                <ion-label>宝物 B</ion-label>
              </ion-item-divider>

              <ion-item lines="none">
                <ion-label>モード: 2</ion-label>
              </ion-item>

              <ion-item lines="none">
                <ion-label>優先度: 2</ion-label>
              </ion-item>

              <ion-item lines="none">
                <ion-label>最低回数: 3回</ion-label>
              </ion-item>
            </div>
          </ion-item-group>
        </ion-list>
        <ion-button @click="setOpen(true)" expand="block"
          >ガチャを追加</ion-button
        >
        <ion-button type="submit" expand="block">送信</ion-button>
      </form>

      <ion-modal :is-open="isOpenRef" css-class="my-custom-class">
        <Modal @close="setOpen(false)" @submit="addData"></Modal>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import Modal from "@/components/Modal.vue";

export default defineComponent({
  name: "Tab1",
  data() {
    return {
      w: 0,
    };
  },
  components: {
    Modal,
    IonList,
    IonItemGroup,
    IonItemDivider,
    IonInput,
    IonLabel,
    IonItem,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonContent,
    IonPage,
  },
  setup() {
    //Modalウィンドウの表示
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => (isOpenRef.value = state);

    //データを送信
    const sendData = (w: number) => {
      console.log(w);
    };
    return { isOpenRef, setOpen, sendData };
  },
});
</script>
