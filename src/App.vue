<template>
  <v-app>
    <HeaderComponent v-if="!$route.meta.hideHeader"/>
    <!-- <v-sheet class="fill-height"> -->
      <router-view />
    <!-- </v-sheet> -->
    <FooterComponent v-if="!$route.meta.hideFooter"/>
  </v-app>
</template>

<script>
import FooterComponent from '@/layouts/footer/FooterComponent.vue';
import HeaderComponent from '@/layouts/header/HeaderComponent.vue';

export default {
  components: {
    FooterComponent,
    HeaderComponent
  },
  mounted() {
    console.log(this.$route.path)
  },
  watch: {

  },
  setup(props, context) {
  
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