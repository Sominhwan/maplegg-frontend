<template>
    <v-footer
      class=" text-center d-flex flex-column"
      color="#F5F7FA"
    >
      <v-container style="width: 60%;">
        <v-row no-gutters>
          <v-btn
            v-for="link in links"
            :key="link"
            color="black"
            variant="text"
            class="mx-1"
            rounded="xl"
          >
            {{ link }}
          </v-btn>
        </v-row>
        <img class="footer-divider" src="https://cdn.dak.gg/maple/images/footer/icons/divider.svg" alt="divider">
        <v-row class="mt-2" no-gutters>
          <v-col cols="10" class="text-left">
            <span
              v-for="link in links"
              :key="link"
              class="footer-text mr-2 ml-1"
            >
              {{ link }}
            </span>
            <br/>
            <span class="footer-sub-text mt-2 ml-1">
              © All Rights Reserved. Hosted by SMH Inc. Maple.GG is not associated with NEXON Korea.
            </span>
          </v-col>
          <v-col cols="2" class="text-right">
            <v-icon
              v-for="icon in icons"
              :key="icon.icon"
              class="sns-icon mx-3"
              :icon="icon.icon"
              :style="getButtonStyle(icon)"
              variant="text"
            ></v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
      const links = ref([
        '주식회사 메이플 지지(OP.GG)',
        '통신판매업신고',
        '제2024-부산사하구-000호',
        '사업자등록번호: 111-11-11111',
        '051-222-2222',
        '대표자: 소민환',
      ]);
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
        links,
        icons,
        getButtonStyle
      };
    }
}
</script>
<style scoped>
  .footer-divider {
    width: 100%;
  }

  .footer-text {
    color: #121214;
    font-size: 14px;
  }

  .footer-sub-text {
    color: #121214;
    font-size: 12px;
  }

  .sns-icon {
    cursor: pointer;
  }
</style>