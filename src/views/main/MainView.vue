<template>
    <img src="@/assets/main/main-background.jpg"  cover height="500" style="position: relative; width: 100%"/>
    <div class="overlay-text">
      <div class="main-title">Maple.gg</div>
    </div>
    <v-card
      class="main-search-input"
      width="400"
      style="background-color: rgba(0, 0, 0, 0.0);"
    >
      <v-form @submit="searchInfo()">
        <v-text-field
            variant="solo"
            bg-color="#323337"
            placeholder="캐릭터 또는 길드명을 입력하세요."
            append-inner-icon="mdi-magnify"
            rounded
            single-line
            hide-details
            maxlength="30"
            v-model="searchInfoValue"
            @click:append-inner="searchInfo()"
            autofocus
        ></v-text-field>
        <!-- @keyup.enter="searchInfo()" -->
      </v-form>
    </v-card>
    <v-sheet class="notice-sheet" height="75">
      <v-container class="notice-container" style="width: 50%; height: 100%;">
        <v-row no-gutters>
          <v-col cols="12" class="d-flex align-center">
            <i class="material-icons" style="font-size: 30px; ">campaign</i>
            <div class="flow-container">
              <div class="flow-text">
                  <div class="flow-wrap">공지사항 테스트 입니다22.</div>
                  <div class="flow-wrap">2023-12-30 연말입니다. </div>
                  <div class="flow-wrap">Text that flows from right to left. </div>
                  <div class="flow-wrap">Text that flows from right to left. </div>
              </div>
            </div>
          </v-col>         
        </v-row>
      </v-container>
    </v-sheet>
    <v-container class="main-container">
      <v-row>
        <v-col>
          
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { getText } from "@/api/main/main.js";
import { ref } from 'vue';
export default {
  mounted() {

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
  .main-title {
    font-family: 'Single Day', cursive;
    font-size: 80px;
  }
  .overlay-text {
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translate(-50%, 0);
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
    transform: translate(-50%, 0);
  }

  .notice-sheet {
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(253,187,45,1) 100%);  
    position: relative; 
    bottom: 6px;
  }

  .notice-container {
    overflow: hidden;
    white-space: nowrap;
  }


  .flow-text {
    display: flex;
    flex: 0 0 auto;
    white-space: nowrap;
    overflow: hidden;
    transition: 0.3s;
    font-size: 2.5rem;
    font-weight:bold;
    color: #000;
  }
  .flow-text:hover {
    color: yellow;
  }
  .flow-text:hover .flow-wrap {
    animation-play-state: paused;
    cursor: pointer;
  }
  .flow-wrap {
    animation: textLoop 10s linear infinite;
    padding-right: 5.4881vw;
    font-size: 18px;
  }
  
  @keyframes textLoop {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  .main-container {
    width: 50%;
  }
</style>