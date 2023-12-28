<template>
  <!-- 상단 nabvar -->

  <HeaderComponent/>
  <!-- bodu -->
  <!-- <v-sheet class="fill-height">
    <v-img :src="MainBackground" aspect-ratio="16/9" cover height="400"/>
  </v-sheet> -->
  <MainView/>
  <FooterComponent/>
</template>

<script>
//import MainBackground from '@/assets/main/main-background.jpg';
import FooterComponent from '@/layouts/footer/FooterComponent.vue';
import HeaderComponent from '@/layouts/header/HeaderComponent.vue';
import MainView from '@/views/main/MainView.vue';

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    MainView
  },
  mounted() {
    console.log(this.$route.path)
  },
  watch: {

  },
  setup(props, context) {
  
  }
}
  // const items = reactive([
  //   { title: 'Click Me' },
  //   { title: 'Click Me' },
  //   { title: 'Click Me' },
  //   { title: 'Click Me 2' }
  // ]);


</script>
<style scoped>

</style>