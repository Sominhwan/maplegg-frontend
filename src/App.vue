<template>
  <v-app>
    <HeaderComponent v-if="!$route.meta.hideHeader"/>
    <!-- <v-sheet class="fill-height"> -->
      <router-view />
    <!-- </v-sheet> -->
    <FooterComponent v-if="!$route.meta.hideFooter"/>
    <!-- 채팅 -->
    <chat-view/>
  </v-app>
</template>

<script>
import ChatView from '@/components/chat/ChatComponent.vue';
import FooterComponent from '@/layouts/footer/FooterComponent.vue';
import HeaderComponent from '@/layouts/header/HeaderComponent.vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    ChatView
  },
  setup(props, context) {
    const route = useRoute()
    watch(route,() => {
      console.log('변경')
      console.log(route.name);
    });
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>