<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>5つのゲームを選択</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="$router.push('/mode')">次へ</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="game">
        <div class="game__item"
             v-for="game in games"
             :key="game.id"
             :class='game.selected ? "game--selected":""'
             @click="selectGame(game.id)">
          <img :src="game.img">
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar,} from '@ionic/vue';
import {defineComponent, reactive} from "vue";

export default defineComponent({
  name: 'GameSelection',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage
  },
  setup() {
    const games = reactive([
      {
        id: 0,
        selected: false,
        img: require("@/assets/uma.png")
      },
      {
        id: 1,
        selected: false,
        img: require("@/assets/bandori.png")
      },
      {
        id: 2,
        selected: false,
        img: require("@/assets/genshin.png")
      },
      {
        id: 3,
        selected: false,
        img: require("@/assets/genshin.png")
      },
      {
        id: 4,
        selected: false,
        img: require("@/assets/genshin.png")
      }
    ])

    const selectGame = (id: number) => {
      games[id].selected = !games[id].selected
    }
    return {selectGame, games}
  }
});
</script>

<style lang="scss">
.game {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  &__item {
    width: 50%;
    padding: 10px;

    img {
      object-fit: cover;
      border-radius: 5px;
    }
  }

  &--selected {
    img {
      opacity: 0.5;
    }
  }
}
</style>
