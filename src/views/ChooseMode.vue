<template>
  <ion-page>
    <div class="wrapper">
      <h1>モードを選択</h1>
      <div class="input-box">
        <div class="input-box__item">
          <label>限度金額</label>
          <input type="text" v-model="money" required=""/>
        </div>
        <div class="input-box__item">
          <label>モードを選択</label>
          <select id="recommend" v-model="mode">
            <option value="0">ユーザー指定</option>
            <option value="1">カードのレア度</option>
            <option value="2">ツイッター</option>
          </select>
        </div>

        <div class="input-box__button">
          <TheButton @click="goToForm">次へ</TheButton>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import {IonPage} from "@ionic/vue";
import {defineComponent, ref} from "vue";
import TheButton from '@/components/TheButton.vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

export default defineComponent({
  name: "ChooseMode",
  components: {
    IonPage,
    TheButton,
  },
  setup() {
    const router = useRouter();
    // const route = useRoute();
    const money = ref<number>();
    const mode = ref(0);
    const store = useStore();
    store.commit('changemode', 0);

    const goToForm = () => {
      store.commit('changemode', mode);
      store.commit('addMoney', money);
      router.push('/form');
    }

    return {money, mode, goToForm};
  },
});
</script>

<style lang="scss">
.input-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__item {
    width: 200px;
    margin: 20px;
  }

  label {
    text-align: left;
    display: block;
    color: #03e9f4;
    font-weight: bold;
    font-size: 1.6em;
    margin-bottom: 10px;
  }

  input, select {
    width: 100%;
    height: 40px;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0);
    letter-spacing: 2px;
    outline: none;
    color: white;
    font-weight: bold;
  }

  input {
    padding: 10px;
  }
}

</style>
