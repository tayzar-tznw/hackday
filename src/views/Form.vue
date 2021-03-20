<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>宝箱の情報</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div>{{ id }}</div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import {defineComponent, SetupContext} from "vue";
import Modal from '@/components/Modal.vue';

type Props = {
  id: number;
}
export default defineComponent({
  name: 'Form',
  props: {
    id: {
      type: Number,
      default: 0,
    }
  },
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage
  },
  setup(props: Props, context: SetupContext) {

    return {}
  }
});
</script>
