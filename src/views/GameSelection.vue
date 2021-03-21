<template>
  <ion-page>
    <ion-content>
      <div class="wrapper">
        <h1>5つのゲームを選択</h1>
        <div class="game">
          <div class="game__inner">
            <div class="game__item"
                 :class="game.selected ? 'game--selected' : ''"
                 v-for="game in games"
                 :key="game.id"
                 @click="selectGame(game.id)">
              <img :src="game.img"/>
            </div>
          </div>
          <div class="game__button">
            <TheButton @click="goToMode">次へ</TheButton>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage,IonContent} from "@ionic/vue";
import {defineComponent, reactive} from "vue";
import TheButton from '@/components/TheButton.vue';
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';

export default defineComponent({
  name: "GameSelection",
  components: {
    TheButton,
    IonPage,
    IonContent,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const games = reactive([
      {
        id: 0,
        selected: false,
        img: require("@/assets/uma.png"),
      },
      {
        id: 1,
        selected: false,
        img: require("@/assets/pazudora.png"),
      },
      {
        id: 2,
        selected: false,
        img: require("@/assets/gensin.png"),
      },
      {
        id: 3,
        selected: false,
        img: require("@/assets/puroseka.png"),
      },
      {
        id: 4,
        selected: false,
        img: require("@/assets/nier.png"),
      },
      {
        id: 5,
        selected: false,
        img: require("@/assets/nyanko.png"),
      },
      {
        id: 6,
        selected: false,
        img: require("@/assets/syadoba.png"),
      },
    ]);

    const selectGame = (id: number) => {
      games[id].selected = !games[id].selected;
    };

    const goToMode = () => {
      for (let i = 0; i < 7; i++) {
        if (games[i].selected) {
          store.commit('addSelectedGames', games[i].id);
        }
      }
      router.push('/mode');
    }
    return {selectGame, games, goToMode};
  },
});
</script>

<style lang="scss">
.wrapper {
  height: 100%;
  background-size: cover;
  background: url(~@/assets/background.jpg) no-repeat -200px;

  h1 {
    text-align: center;
    color: white;
  }
}

.game {
  &__button {
    height: 30px;
    align-items: flex-start;
    display: flex;
    justify-content: center;
  }

  &__inner {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__item {
    width: 40%;
    padding: 5px 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  &--selected {
    img {
      opacity: 0.6;
    }
  }
}
</style>
