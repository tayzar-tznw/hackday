<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="$emit('close')">Close</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    {{ content }}
  </ion-content>
</template>

<script lang="ts">
import {IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/vue';

import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Modal',
  components: {IonHeader, IonToolbar, IonButton, IonButtons, IonTitle, IonContent},
  data() {
    return {
      title: '宝箱の情報',
      content: 'Content',
    }
  }
});
</script>
