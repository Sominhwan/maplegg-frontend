<template>
  <v-app>
    <HeaderComponent v-if="!$route.meta.hideHeader" :headerContent="routeUrl"/>
      <router-view />
    <FooterComponent v-if="!$route.meta.hideFooter"/>
    <!-- 채팅 -->
    <chat-view/>
  </v-app>
</template>

<script>
import ChatView from '@/components/chat/ChatComponent.vue';
import FooterComponent from '@/layouts/footer/FooterComponent.vue';
import HeaderComponent from '@/layouts/header/HeaderComponent.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    ChatView
  },
  setup(props, context) {
    const route = useRoute();
    const routeUrl = ref('/');

    watch(route,() => {
      routeUrl.value = route.path
    });

    return {
      routeUrl
    }
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