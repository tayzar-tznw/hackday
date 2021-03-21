<template>
  <ion-page>
    <div class="wrapper game">
      <div class="gacha" v-for="game in games" :key="game.id">
        <GameBox :img-src="game.img" v-if="state.selectedGames.includes(game.id)">
          <div v-if="beforeSent">
            <div class="gacha__first-input">
              <div style="width: 120px; display: inline;">
                <label>最低回数</label>
              </div>
              <input type="number" v-model="game.minimumDraw"/>
            </div>

            <div class="gacha__second-input" v-if="state.mode === 0">
              <div style="width: 150px; display: inline;">
                <label>優先度</label>
              </div>
              <input v-model="game.c"/>
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
      <div v-if="!beforeSent" class="tweet">
        <a href="https://twitter.com/share" data-text="量子アニーリングを信じて今からガチャ引きます！（改行）〇〇を〇〇回（改行）、〇〇を〇〇回（改行）">ガチャ宣言</a>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import {IonPage} from "@ionic/vue";
import {defineComponent, reactive, ref} from "vue";
import {SERVER_URL} from "../const";
import {RequestData, ResponseData} from "../types";
import axios from 'axios';
import TheButton from '@/components/TheButton.vue';
import GameBox from '@/components/GameBox.vue';
import {useStore} from 'vuex';


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
    IonPage,
  },
  setup() {
    const TOTALGAMES = 7;
    const store = useStore();
    const state = reactive<{ selectedGames: Array<number>; mode: number; money: number }>({
      selectedGames: store.state.selectedGames,
      mode: store.state.mode,
      money: store.state.money,
    });

    const beforeSent = ref(true);
    const total = ref(0);

    const games = reactive([
      {
        id: 0,
        name: "馬娘",
        img: require("@/assets/uma.jpg"),
        minimumDraw: 0,
        c: 0,
        times: 0,
        price: 347,
      },
      {
        id: 1,
        name: "パズドラ",
        img: require("@/assets/pazudora.jpg"),
        minimumDraw: 0,
        c: 0,
        times: 0,
        price: 340,
      },
      {
        id: 2,
        name: "原神",
        img: require("@/assets/genshin.jpg"),
        minimumDraw: 0,
        c: 0,
        times: 0,
        price: 320,
      },
      {
        id: 3,
        name: "プロジェクトセカイ",
        img: require("@/assets/sekai.jpg"),
        minimumDraw: 0,
        c: 0,
        times: 0,
        price: 315,
      },
      {
        id: 4,
        name: "NieR",
        img: require("@/assets/nier.jpg"),
        minimumDraw: 0,
        c: 0,
        times: 0,
        price: 717,
      },
      {
        id: 5,
        name: "にゃんこ",
        img: require("@/assets/nyan.jpeg"),
        minimumDraw: 0,
        c: 0,
        times: 0,
        price: 717,
      },
      {
        id: 6,
        name: "シャドバ",
        img: require("@/assets/shadow.jpg"),
        minimumDraw: 0,
        c: 0,
        times: 0,
        price: 717,
      },
    ]);


    const getTotal = () => {
      let temp = 0;
      for (let i = 0; i < TOTALGAMES; i++) {
        temp += games[i].price * games[i].times;
      }
      total.value = temp;
    }

    const send = async (): Promise<ResponseData> => {
      beforeSent.value = false;
      // TODO: ちゃんとformからdataとる
      console.log("send...")
      const dammyData: RequestData = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        //@ts-ignore
        game: [0, 1, 2, 3, 4],// 馬娘、バンドリ、原神、プロジェクト世界、パズドラ
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        //@ts-ignore
        moneyValue: parseInt(state.money),

        min: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          0: parseInt(games[0].minimumDraw),
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          1: parseInt(games[1].minimumDraw),
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          2: parseInt(games[2].minimumDraw),
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          3: parseInt(games[3].minimumDraw),
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          4: parseInt(games[4].minimumDraw),
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          5: parseInt(games[5].minimumDraw),
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          6: parseInt(games[6].minimumDraw),
        },
        c: {   // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          0: parseInt(games[0].c),
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          1: parseInt(games[1].c),
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          2: parseInt(games[2].c),
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          3: parseInt(games[3].c),
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          4: parseInt(games[4].c),
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          5: parseInt(games[5].c),
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore
          6: parseInt(games[6].c),
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        //@ts-ignore
        mode: 1,
      }

      const res = await axios
          .post(SERVER_URL,
              dammyData
          )
          .then(res => {
            // console.log(res.data)
            const temp = res.data;

            for (const keys in temp) {
              for (let i = 0; i < TOTALGAMES; i++) {
                if (games[i].name === keys) {
                  games[i].times = temp[keys];
                }
              }
            }

            getTotal();
            return res.data
          })
          .catch(err => {
            console.log("err happend...")
            console.log(err);
          })
      return res as ResponseData
    };

    return {games, beforeSent, total, state, send};
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
    font-size: 40px;
  }

  span {
    color: white;
    font-size: 30px;
  }
}

.tweet {
  width: 120px;
  background-color: #72bada;
  height: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    font-weight: bold;
    text-decoration: none;
    color: white !important;
  }
}
</style>
