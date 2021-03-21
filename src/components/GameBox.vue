<template>
  <div class="game-box">
    <div class="game-box__left">
      <img :src="imgSrc">
    </div>
    <div class="game-box__right">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

interface Props {
  imgSrc: string;
}

export default defineComponent({
  name: 'GameBox',
  props: {imgSrc: String},
})
</script>

<style lang="scss">
.game-box {
  box-sizing: border-box;
  height: 100px;
  margin: 10px 20px;
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(5px);
  border: 0.1px solid #03e9f4;;
  display: flex;
  flex-direction: row;

  &__left {
    width: 30%;

    img {
      height: 100px;
      object-fit: cover;
    }
  }

  &__right {
    width: 70%;
    padding: 20px;
  }
}
</style>
