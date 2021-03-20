<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>モード選択</ion-title>
        <ion-buttons slot="end">
          <ion-button v-if="mode === 0" @click="$router.push('/form/1')"
            >次へ</ion-button
          >
          <ion-button v-else @click="$router.push('/form/2')">次へ</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div>
        <ion-label>限度金額</ion-label>
        <ion-input></ion-input>
        <ion-label>モードを選択</ion-label>
        <select id="recommend" v-model="mode">
          <option value="0">ユーザー指定</option>
          <option value="1">カードのレア度</option>
          <option value="2">ツイッター</option>
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChooseMode",
  data() {
    return {
      mode: 0,
    };
  },
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
    return {};
  },
});
</script>
