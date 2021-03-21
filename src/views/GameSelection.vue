<template>
  <ion-page>
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
          <TheButton @click="$router.push('/mode')">次へ</TheButton>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar,} from "@ionic/vue";
import {defineComponent, reactive} from "vue";
import TheButton from '@/components/TheButton.vue';

export default defineComponent({
  name: "GameSelection",
  components: {
    TheButton,
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
        selected: false,
        img: require("@/assets/uma.jpg"),
      },
      {
        id: 1,
        selected: false,
        img: require("@/assets/bandori.jpg"),
      },
      {
        id: 2,
        selected: false,
  img: require("@/assets/genshin.jpg"),
      },
      {
        id: 3,
        selected: false,
          img: require("@/assets/sekai.jpg"),
      },
      {
        id: 4,
        selected: false,
      img: require("@/assets/pazudora.jpg"),
      },
    ]);

    const selectGame = (id: number) => {
      games[id].selected = !games[id].selected;
    };
    return {selectGame, games};
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
    display: flex;
    justify-content: center;
  }

  &__inner {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    width: 50%;
    padding: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  &--selected {
    img {
      opacity: 0.8;
    }
  }
}
</style>
