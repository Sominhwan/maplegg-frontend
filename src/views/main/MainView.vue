<template>
    <img src="@/assets/main/main-background.jpg" aspect-ratio="16/9" cover height="500" style="position: relative; width: 100%"/>
    <div class="overlay-text">
      <h2>Maple.gg</h2>
    </div>
    <v-card
      class="main-search-input ml-15"
      width="400"
      style="background-color: rgba(0, 0, 0, 0.0);"
    >
      <v-text-field
          variant="solo"
          bg-color="#323337"
          label="캐릭터 또는 길드명을 입력하세요."
          append-inner-icon="mdi-magnify"
          rounded
          single-line
          hide-details
          maxlength="30"
          v-model="searchInfoValue"
          @click:append-inner="searchInfo()"
          @keyup.enter="searchInfo()"
      ></v-text-field>
    </v-card>
</template>

<script>
import { ref } from 'vue';
import { getText } from "@/api/main/main.js";
export default {
  mounted() {
    this.test()
  },
  methods: {
    test() {
      getText()
        .then((res) => {
          console.log(res.data)

        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {

        })
    }
  },
  setup(props, context) {
    const searchInfoValue = ref('');
    const searchInfo = () => {
        console.log(searchInfoValue.value)
    };

    return {
        searchInfoValue,
        searchInfo
    }
  }
}
</script>

<style scoped>
  .overlay-text {
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translate(-75%, 0);
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    z-index: 10;
  }

  .main-search-input {
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translate(-75%, 0);
  }
</style>