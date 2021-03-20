<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>宝箱の情報</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <form @submit.prevent="sendData">
        <ion-list>
          <ion-item-group>
            <div v-for="game in games" :key="game.id">
              <ion-item-divider>
                <ion-label>{{ game.name }}</ion-label>
              </ion-item-divider>

              <ion-item>
                <ion-label>最低回数</ion-label>
                <ion-input></ion-input>
              </ion-item>

              <ion-item v-if="id == 0">
                <ion-label>優先度</ion-label>
                <ion-input></ion-input>
              </ion-item>
            </div>
          </ion-item-group>
        </ion-list>
        <ion-button type="submit" expand="block">送信</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";

type Props = {
  id: number;
};
export default defineComponent({
  name: "Form",
  props: {
    id: {
      type: String,
      default: "0",
    },
  },
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  setup() {
    const games = reactive([
      {
        id: 0,
        name: "馬娘",
      },
      {
        id: 1,
        name: "バンドリ",
      },
      {
        id: 2,
        name: "原神",
      },
      {
        id: 3,
        name: "プロジェクトセカイ",
      },
      {
        id: 4,
        name: "パズドラ",
      },
    ]);

    const sendData = () => {
      console.log("test");
    };
    return { games, sendData };
  },
});
</script>
