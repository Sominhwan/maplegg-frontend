<template>
    <v-footer
      class=" text-center d-flex flex-column"
      color="#F5F7FA"
    >
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4"
          :icon="icon.icon"
          :style="getButtonStyle(icon)"
          variant="text"
        ></v-btn>
      </div>
  
      <div class="pt-0">
        푸터
      </div>
  
      <v-divider></v-divider>
  
      <div>
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
      const icons = ref([
        {
          icon: 'mdi-facebook', color: '#1877F2'
        },
        {
          icon: 'mdi-twitter', color: 'black'
        },
        {
          icon: 'mdi-linkedin', color: 'grey'
        },
        {
          icon: 'mdi-instagram', 
          customColor: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #FD1D1D, #F56040, #F77737, #FCAF45)'
        }
      ]);

      const getButtonStyle = (icon) => {
      if (icon.customColor) {
        return {
          color: 'red', 
        };
      } else {
        return {
          color: icon.color,
        };
      }
    };
      return {
        icons,
        getButtonStyle
      };
    }
}
</script>