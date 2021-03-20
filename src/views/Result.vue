<template>
  <ion-page>
    <div class="wrapper game">
      <div class="gacha" v-for="game in games">
        <GameBox :img-src="game.img">
          <div class="gacha__first-input">
            <div style="width: 120px; display: inline;">
              <label>最低回数</label>
            </div>
            <input v-model="game.minimumDraw"/>
          </div>

          <div class="gacha__second-input">
            <div style="width: 150px; display: inline;">
              <label>優先度</label>
            </div>
            <input/>
          </div>
        </GameBox>
      </div>
      <div class="gacha__button">
        <TheButton @click="send">送信</TheButton>
      </div>
      <!--      <form @submit.prevent="send">-->
      <!--        <ion-list>-->
      <!--          <ion-item-group>-->
      <!--            <div v-for="game in games" :key="game.id">-->
      <!--              <ion-item-divider>-->
      <!--                <ion-label>{{ game.name }}</ion-label>-->
      <!--              </ion-item-divider>-->

      <!--              <ion-item>-->
      <!--                <ion-label>最低回数</ion-label>-->
      <!--                <ion-input></ion-input>-->
      <!--              </ion-item>-->

      <!--              <ion-item v-if="id == 0">-->
      <!--                <ion-label>優先度</ion-label>-->
      <!--                <ion-input></ion-input>-->
      <!--              </ion-item>-->
      <!--            </div>-->
      <!--          </ion-item-group>-->
      <!--        </ion-list>-->

      <!--      </form>-->
    </div>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar,} from "@ionic/vue";
import {defineComponent, reactive} from "vue";
import {SERVER_URL} from "../const";
import {RequestData, ResponseData} from "../types";
import axios from 'axios';
import TheButton from '@/components/TheButton.vue';
import GameBox from '@/components/GameBox.vue';


export default defineComponent({
  name: "Result",
  props: {
    id: {
      type: String,
      default: "0",
    },
  },
  components: {
    GameBox,
    TheButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  setup() {
    const send = async (): Promise<ResponseData> => {
      // TODO: ちゃんとformからdataとる
      const dammyData: RequestData = {
        game: ["0", "1", "2", "3", "4"], // 馬娘、バンドリ、原神、プロジェクト世界、パズドラ
        moneyValue: 2500,
        minimumDraw: {
          0: 2,
          1: 1,
          2: 0,
          3: 2,
        },
        mode: "1"
      }
      const res = await axios
          .post(SERVER_URL, {
            dammyData
          })
          .then(res => {
            return res.data
          })
          .catch(err => {
            console.log(err);
          })
      return res as ResponseData
    };

    const games = reactive([
      {
        id: 0,
        name: "馬娘",
        img: require("@/assets/uma.png"),
        minimumDraw: 0,
      },
      {
        id: 1,
        name: "バンドリ",
        img: require("@/assets/bandori.png"),
        minimumDraw: 0,
      },
      {
        id: 2,
        name: "原神",
        img: require("@/assets/genshin.png"),
        minimumDraw: 0,
      },
      {
        id: 3,
        name: "プロジェクトセカイ",
        img: require("@/assets/genshin.png"),
        minimumDraw: 0,
      },
      {
        id: 4,
        name: "パズドラ",
        img: require("@/assets/genshin.png"),
        minimumDraw: 0,
      },
    ]);

    return {games, send};
  },
});
</script>
<style lang="scss">

.gacha {
  label {
    color: white;
    font-weight: bold;
    font-size: 20px;
    width: 50px;
    margin-right: 10px;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__first-input, &__second-input {
    display: flex;
    justify-content: space-between;
  }
  &__second-input{
    margin-top: 10px;
  }

  input {
    color: white;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid white;
    width: 100px;
  }
}
</style>
