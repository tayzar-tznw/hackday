<template>
  <ion-page>
    <div class="wrapper game">
      <div class="gacha" v-for="game in games">
        <GameBox :img-src="game.img">
          <div v-if="beforeSent">
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
          </div>
          <div v-else class="gacha__times">
            <p>{{ game.times }} <span>回</span></p>
          </div>
        </GameBox>
      </div>
      <div v-if="!beforeSent">
        <div class="total">
          <h1>必要金額</h1>
          <p>{{ total }} <span>円</span></p>
        </div>

      </div>
      <div v-if="beforeSent" class="gacha__button">
        <TheButton @click="send">送信</TheButton>
      </div>
      <div v-if="!beforeSent">
        <a href="https://twitter.com/share" class="twitter-share-button"
           data-text="量子アニーリングを信じて今からガチャ引きます！（改行）〇〇を〇〇回（改行）、〇〇を〇〇回（改行）">Tweet</a>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar,} from "@ionic/vue";
import {defineComponent, reactive, ref} from "vue";
import {SERVER_URL} from "../const";
import {RequestData, ResponseData} from "../types";
import axios from 'axios';
import TheButton from '@/components/TheButton.vue';
import GameBox from '@/components/GameBox.vue';


export default defineComponent({
  name: "Form",
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
    const beforeSent = ref(true);
    const total = ref(0);

    const games = reactive([
      {
        id: 0,
        name: "馬娘",
        img: require("@/assets/uma.png"),
        minimumDraw: 0,
        times: 18,
        price: 347,
      },
      {
        id: 1,
        name: "バンドリ",
        img: require("@/assets/bandori.png"),
        minimumDraw: 0,
        times: 18,
        price: 340,
      },
      {
        id: 2,
        name: "原神",
        img: require("@/assets/genshin.png"),
        minimumDraw: 0,
        times: 18,
        price: 320,
      },
      {
        id: 3,
        name: "プロジェクトセカイ",
        img: require("@/assets/genshin.png"),
        minimumDraw: 0,
        times: 18,
        price: 315,
      },
      {
        id: 4,
        name: "パズドラ",
        img: require("@/assets/genshin.png"),
        minimumDraw: 0,
        times: 18,
        price: 717,
      },
    ]);

    const getTotal = () => {
      const total = 0;
      // const t = games.map((game) => {
      //   game.times * game.price
      // });
      // console.log(t);
      return total;
    }

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

    const send = async (): Promise<ResponseData> => {
      beforeSent.value = false;
      // TODO: ちゃんとformからdataとる

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

    return {games, beforeSent, total, send};
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

  &__second-input {
    margin-top: 10px;
  }

  &__times {
    height: 100%;

    p {
      width: 140px;
      margin: -10px 0 0 0;
      text-align: right;
      color: white;
      font-size: 70px;
    }

    span {
      position: absolute;
      color: white;
      font-size: 30px;
      bottom: 0;
      right: 0;
      margin: 10px;
    }
  }

  input {
    color: white;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid white;
    width: 100px;
  }
}

.total {
  box-sizing: border-box;
  margin: 20px;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  h1 {
    width: 100px;
    margin: 0;
    vertical-align: text-bottom;
  }

  p {
    margin: 0;
    text-align: right;
    color: white;
    font-size: 70px;
  }

  span {
    color: white;
    font-size: 30px;
  }
}
</style>
