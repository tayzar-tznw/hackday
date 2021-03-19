<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="mail"/>
            <ion-label>入力</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="settings"/>
            <ion-label>設定</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs} from '@ionic/vue';
import {calendarOutline, checkmarkCircle, images, mail, settings, square} from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: {IonContent, IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage},
  setup() {
    return {
      images,
      square,
      calendarOutline, mail, checkmarkCircle, settings
    }
  }
}
</script>
