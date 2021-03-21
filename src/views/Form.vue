<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>宝箱の情報</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <form @submit.prevent="send">
        <ion-list>
          <ion-item-group>
            <div v-for="game in games" :key="game.id">
              <ion-item-divider>
                <ion-label>{{ game.name }}</ion-label>
              </ion-item-divider>

              <ion-item>
                <ion-label>最低回数</ion-label>
                <ion-input v-model="game.min"></ion-input>
              </ion-item>

              <ion-item v-if="id == 0">
                <ion-label>優先度</ion-label>
                <ion-input v-model="game.priority"></ion-input>
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
import { defineComponent, reactive, ref } from "vue";
import { SERVER_URL } from "../const";
import store from "../store/store";
import { RequestData, ResponseData } from "../types";
import axios from "axios";

type Props = {
  id: number;
};
export default defineComponent({
  name: "Form",
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
        min:0,
        priority:0
      },
      {
        id: 1,
        name: "バンドリ",
        min:0,
        priority:0
      },
      {
        id: 2,
        name: "原神",
        min:0,
        priority:0
      },
      {
        id: 3,
        name: "プロジェクトセカイ",
        min:0,
        priority:0
      },
      {
        id: 4,
        name: "パズドラ",
        min:0,
        priority:0
      },
    ]);
    const id = ref<number>(store.getMode())
    const selectedGame = store.getGame()
    const mindata = Object.assign({}, ...selectedGame.map((id) => ({
      [id]: games.find(game => game.id === id)?.min,
    })));
   
    const send = async (): Promise<ResponseData> => {
      console.log("send...");
      const data = {
        game: selectedGame,
        moneyValue: Number(store.getMoney()),
        min: mindata,
        mode: store.getMode()
      }
      const dammyData: RequestData = {
        game: [0, 1, 2, 3], // 馬娘、バンドリ、原神、プロジェクト世界、パズドラ
        moneyValue: 2500,
        min: {
          0: 2,
          1: 1,
          2: 0,
          3: 2,
        },
        mode: 1,
      };
      console.log(data)
      console.log(dammyData)

      const res = await axios
        .post(SERVER_URL,data)
        .then((res) => {
          console.log(res);
          return res.data;
        })
        .catch((err) => {
          console.log("err happend...");
          console.log(err);
        });
      return res as ResponseData;
    };

    return { games, send, id };
  },
});
</script>
