<template>
  <v-sheet width="100%" height="100%" color="#F4F7FA">
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
    <v-sheet class="notice-sheet" height="65">
      <v-container class="notice-container" style="width: 50%; height: 100%;">
        <v-row no-gutters>
          <i class="material-icons mr-5" style="font-size: 30px;">campaign</i>
          <v-col cols="11" class="d-flex align-center">
            <vue-marquee-slider
              id="marquee-slider-text"
              :space="150"
              :speed="30000"
              :width="150"
              :paused="isPaused"
              @mouseover="pauseMarquee"
              @mouseleave="resumeMarquee"
            >
              <span class="flow-text">공지사항 테스트</span>
              <span class="flow-text">공지사항 테스트2</span>
              <span class="flow-text">공지사항 테스트3</span>
              <span class="flow-text">공지사항 테스트4</span>
            </vue-marquee-slider>
          </v-col>
          <i class="menu-icon material-icons ml-5">
            menu
          </i>
        </v-row>
      </v-container>
    </v-sheet>
    <!-- 하단  -->
    <v-container class="main-container">
      <v-row justify="space-between">
        <v-col cols="3">
          <v-card
            class="rank-info-container1 mx-auto"
            width="280"
            variant="outlined"
            elevation="0"
            
          >
            <template v-slot:title>
              This is a title
            </template>
            <v-divider/>
            <v-card-item> 
              <v-row justify="center">
                <v-col cols="auto" class="d-flex align-center">
                  <v-avatar color="white" size="160" style="border: 3px solid #fdbb2d;"></v-avatar>
                </v-col>
              </v-row>
              <v-row justify="center" class="mb-1">
                <v-col cols="auto" class="d-flex align-center">
                  <div style="text-align: center;">
                    <div class="text-h5" style="font-weight: 500;">
                      80층
                    </div>
                    <div style="font-size: 15px; color: grey;">14분23초</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
            <router-link to="/about" class="rank-detail-info-router">
              <v-card-actions class="rank-detail-info-container1">
                <v-row justify="center">
                  <v-col cols="auto" class="d-flex align-center">
                    <div class="rank-detail-info-text">
                      상세보기
                    </div>
                  </v-col>
                </v-row>
              </v-card-actions>
            </router-link>
          </v-card> 
        </v-col>
        <v-col cols="3">
          <v-card
            class="rank-info-container2 mx-auto"
            width="280"
            variant="outlined"
            elevation="0"
            
          >
            <template v-slot:title>
              This is a title
            </template>
            <v-divider/>
            <v-card-item> 
              <v-row justify="center">
                <v-col cols="auto" class="d-flex align-center">
                  <v-avatar color="white" size="160" style="border: 3px solid #5CB85C;"></v-avatar>
                </v-col>
              </v-row>
              <v-row justify="center" class="mb-1">
                <v-col cols="auto" class="d-flex align-center">
                  <div style="text-align: center;">
                    <div class="text-h5" style="font-weight: 500;">
                      80층
                    </div>
                    <div style="font-size: 15px; color: grey;">14분23초</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
            <router-link to="/about" class="rank-detail-info-router">
              <v-card-actions class="rank-detail-info-container2">
                <v-row justify="center">
                  <v-col cols="auto" class="d-flex align-center">
                    <div class="rank-detail-info-text">
                      상세보기
                    </div>
                  </v-col>
                </v-row>
              </v-card-actions>
            </router-link>
          </v-card> 
        </v-col>
        <v-col cols="3">
          <v-card
            class="rank-info-container3 mx-auto"
            width="280"
            variant="outlined"
            elevation="0"
            
          >
            <template v-slot:title>
              This is a title
            </template>
            <v-divider/>
            <v-card-item> 
              <v-row justify="center">
                <v-col cols="auto" class="d-flex align-center">
                  <v-avatar color="white" size="160" style="border: 3px solid #5393CA;"></v-avatar>
                </v-col>
              </v-row>
              <v-row justify="center" class="mb-1">
                <v-col cols="auto" class="d-flex align-center">
                  <div style="text-align: center;">
                    <div class="text-h5" style="font-weight: 500;">
                      80층
                    </div>
                    <div style="font-size: 15px; color: grey;">14분23초</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
            <router-link to="/about" class="rank-detail-info-router">
              <v-card-actions class="rank-detail-info-container3">
                <v-row justify="center">
                  <v-col cols="auto" class="d-flex align-center">
                    <div class="rank-detail-info-text">
                      상세보기
                    </div>
                  </v-col>
                </v-row>
              </v-card-actions>
            </router-link>
          </v-card> 
        </v-col>
        <v-col cols="3">
          <v-card
            class="rank-info-container4 mx-auto"
            width="280"
            variant="outlined"
            elevation="0"
            
          >
            <template v-slot:title>
              This is a title
            </template>
            <v-divider/>
            <v-card-item> 
              <v-row justify="center">
                <v-col cols="auto" class="d-flex align-center">
                  <v-avatar color="white" size="160" style="border: 3px solid #6D62A1;"></v-avatar>
                </v-col>
              </v-row>
              <v-row justify="center" class="mb-1">
                <v-col cols="auto" class="d-flex align-center">
                  <div style="text-align: center;">
                    <div class="text-h5" style="font-weight: 500;">
                      80층
                    </div>
                    <div style="font-size: 15px; color: grey;">14분23초</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
            <router-link to="/about" class="rank-detail-info-router">
              <v-card-actions class="rank-detail-info-container4">
                <v-row justify="center">
                  <v-col cols="auto" class="d-flex align-center">
                    <div class="rank-detail-info-text">
                      상세보기
                    </div>
                  </v-col>
                </v-row>
              </v-card-actions>
            </router-link>
          </v-card> 
        </v-col>        
      </v-row>
      <v-row justify="start">

      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { getText } from '@/api/main/main.js';
import { ref } from 'vue';
import { VueMarqueeSlider } from 'vue3-marquee-slider';
import '/node_modules/vue3-marquee-slider/dist/style.css';
export default {
  mounted() {

  },
  components: {
    VueMarqueeSlider
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
    const isPaused = ref(false);

    const searchInfo = () => {
      console.log(searchInfoValue.value)
    };

    const pauseMarquee = () => {
      isPaused.value = true;
    };

    const resumeMarquee = () => {
      isPaused.value = false;
    };
    return {
        searchInfoValue,
        searchInfo,
        isPaused,
        pauseMarquee,
        resumeMarquee
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
    background: rgb(244,247,250);
    background: linear-gradient(0deg, rgba(244,247,250,1) 0%, rgba(253,187,45,1) 100%); 
    position: relative; 
    bottom: 6px;
  }

  .notice-container {
    overflow: hidden;
    white-space: nowrap;
  }

  .flow-text {
    font-weight: bold;
  }

  .flow-text:hover {
    animation-play-state: paused;
    text-decoration: underline;
    cursor: pointer;
    
  }

  .menu-icon {
    cursor: pointer;
    margin-top: 2px;
  }

  .main-container {
    width: 50%;
  }

  .rank-info-container1 {
    border-radius: 10px;
    background-color: white;
    border: 1px solid #fdbb2d;
  }

  .rank-info-container2 {
    border-radius: 10px;
    background-color: white;
    border: 1px solid #5CB85C ;
  }

  .rank-info-container3 {
    border-radius: 10px;
    background-color: white;
    border: 1px solid #5393CA ;
  }

  .rank-info-container4 {
    border-radius: 10px;
    background-color: white;
    border: 1px solid #6D62A1 ;
  }

  .rank-detail-info-router {
    text-decoration: none;
  }

  .rank-detail-info-container1 {
    background-color: #fdbb2d;
  }
  .rank-detail-info-container1:hover {
    filter: brightness(95%);
  }

  .rank-detail-info-container2 {
    background-color: #5CB85C ;
  }
  .rank-detail-info-container2:hover {
    filter: brightness(95%);
  }

  .rank-detail-info-container3 {
    background-color: #5393CA ;
  }
  .rank-detail-info-container3:hover {
    filter: brightness(95%);
  }

  .rank-detail-info-container4 {
    background-color: #6D62A1;
  }
  .rank-detail-info-container4:hover {
    filter: brightness(95%);
  }

  .rank-detail-info-text {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
</style>