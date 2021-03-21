<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>モード選択</ion-title>
        <ion-buttons slot="end">
          <ion-button v-if="mode===0" @click="setMode(mode)"
            >次へ</ion-button
          >
          <ion-button v-else @click="setMode(mode)">次へ</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div>
        <ion-label>限度金額</ion-label>
        <ion-input v-model="money"></ion-input>
        <ion-label>モードを選択</ion-label>
        <select id="recommend" v-model="mode">
          <option :value=0>ユーザー指定</option>
          <option :value=1>カードのレア度</option>
          <option :value=2>ツイッター</option>
        </select>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRouter } from 'vue-router'
import store from "../store/store";
export default defineComponent({
  name: "ChooseMode",
  components: {
    IonInput,
    IonButton,
    IonButtons,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  setup() {
    const router = useRouter()
    const mode = ref<number>(0);
    const money = ref<number>(0)
    const setMode = (mode: number) => {
      store.setMode(mode)
      store.setMoney(money.value)
      router.push('/form/1')
    }
    return {mode, setMode, money};
  },
});
</script>
