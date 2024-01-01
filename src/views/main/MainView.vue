<template>
  <v-sheet class="pb-15" width="100%" height="100%" color="#F4F7FA">
    <img src="@/assets/main/main-background.jpg"  cover height="500" style="position: relative; width: 100%"/>
    <div class="overlay-text">
      <div class="main-title">Maple.gg</div>
    </div>
    <v-card
      class="main-search-input"
      width="400"
      style="background-color: rgba(0, 0, 0, 0.0);"
    >
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
          @keyup.enter="searchInfo()"
          autofocus
      ></v-text-field>
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
        <v-col cols="3" v-for="item in rankInfo" :key="item">
          <v-card
            class="rank-info-container mx-auto"
            variant="outlined"
            elevation="0"
            :style="{ border: '1px solid' + item.color }"
          >
            <template v-slot:title>
              <div :style="{ color: item.color, 'font-weight': 'bold', 'text-align': 'center', 'font-size': '16px' }">
                {{ item.title }}
              </div>
            </template>
            <v-divider/>
            <v-card-item> 
              <v-row class="mt-2" justify="center">
                <v-col cols="auto" class="d-flex align-center">
                  <v-avatar color="white" size="160" :style="{ border: '3px solid' + item.color }"></v-avatar>
                </v-col>
              </v-row>
              <v-row justify="center" class="mb-1">
                <v-col cols="auto" class="d-flex align-center">
                  <div style="text-align: center;">
                    <div class="text-h5" style="font-weight: 500;">
                      {{ item.subtitle }}
                    </div>
                    <div style="font-size: 15px; color: grey;">{{ item.record }}</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
            <router-link :to="item.url" class="rank-detail-info-router">
              <v-card-actions class="rank-detail-info-container" :style="{ 'background-color': item.color }">
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
      <v-row justify="space-between">
        <v-col cols="6">
          <v-card
            class="list-container mx-auto"

            variant="outlined"
            elevation="0"
            style="border: 1px solid #eee; background-color: #fff;"
          >
            <v-card-item class="rank-card-title">
              <v-row justify="space-between">
                <v-col cols="auto">
                  <span style="color: white;">12월 31일</span> 일반 월드 랭킹
                </v-col>
                <v-col cols="auto">
                    <v-btn
                      density="compact"
                      class="text-none"
                      color="white"
                      min-width="80"
                      rounded
                      variant="outlined"
                    >
                      더보기
                    </v-btn>
                </v-col>
              </v-row>
            </v-card-item>
            <v-table density="compact" hover style="border-radius: 0px;">
              <thead style="background-color: #E6EAF3;">
                <tr>
                  <th class="text-center">
                    순위
                  </th>
                  <th class="text-center">
                    캐릭터 정보
                  </th>
                  <th class="text-center">
                    레벨
                  </th>
                  <th class="text-center">
                    인기도
                  </th>
                  <th class="text-center">
                    길드
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in worldRankInfo" :key="item.rank">
                  <td class="text-center">{{ item.rank }}</td>
                  <td class="text-center">{{ item.characterInfo }}</td>
                  <td class="text-center">{{ item.level }}</td>
                  <td class="text-center">{{ item.popular }}</td>
                  <td class="text-center">{{ item.guild }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            class="list-container mx-auto"
            variant="outlined"
            elevation="0"
            style="border: 1px solid #eee; background-color: #fff;"
          >
            <v-card-item class="rank-card-title">
              <v-row justify="space-between">
                <v-col cols="auto">
                  <span style="color: white;">12월 31일</span> 리부트 월드 랭킹
                </v-col>
                <v-col cols="auto">
                    <v-btn
                      density="compact"
                      class="text-none"
                      color="white"
                      min-width="80"
                      rounded
                      variant="outlined"
                    >
                      더보기
                    </v-btn>
                </v-col>
              </v-row>
            </v-card-item>
            <v-table density="compact" hover style="border-radius: 0px;">
              <thead style="background-color: #E6EAF3;">
                <tr>
                  <th class="text-center">
                    순위
                  </th>
                  <th class="text-center">
                    캐릭터 정보
                  </th>
                  <th class="text-center">
                    레벨
                  </th>
                  <th class="text-center">
                    인기도
                  </th>
                  <th class="text-center">
                    길드
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in worldRankInfo" :key="item.rank">
                  <td class="text-center">{{ item.rank }}</td>
                  <td class="text-center">{{ item.characterInfo }}</td>
                  <td class="text-center">{{ item.level }}</td>
                  <td class="text-center">{{ item.popular }}</td>
                  <td class="text-center">{{ item.guild }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="6">
          <v-card
            class="list-container mx-auto"
            variant="outlined"
            elevation="0"
            style="border: 1px solid #eee; background-color: #fff;"
          >
            <v-card-item class="rank-card-title">
              <v-row justify="space-between">
                <v-col cols="auto">
                  <span style="color: white;">12월 31일</span> 무릉도장 랭킹
                </v-col>
                <v-col cols="auto">
                    <v-btn
                      density="compact"
                      class="text-none"
                      color="white"
                      min-width="80"
                      rounded
                      variant="outlined"
                    >
                      더보기
                    </v-btn>
                </v-col>
              </v-row>
            </v-card-item>
            <v-table density="compact" hover style="border-radius: 0px;">
              <thead style="background-color: #E6EAF3;">
                <tr>
                  <th class="text-center">
                    순위
                  </th>
                  <th class="text-center">
                    캐릭터 정보
                  </th>
                  <th class="text-center">
                    레벨
                  </th>
                  <th class="text-center">
                    인기도
                  </th>
                  <th class="text-center">
                    길드
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in worldRankInfo" :key="item.rank">
                  <td class="text-center">{{ item.rank }}</td>
                  <td class="text-center">{{ item.characterInfo }}</td>
                  <td class="text-center">{{ item.level }}</td>
                  <td class="text-center">{{ item.popular }}</td>
                  <td class="text-center">{{ item.guild }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            class="list-container mx-auto"
            variant="outlined"
            elevation="0"
            style="border: 1px solid #eee; background-color: #fff;"
          >
            <v-card-item class="rank-card-title">
              <v-row justify="space-between">
                <v-col cols="auto">
                  <span style="color: white;">12월 31일</span> 일반 월드 랭킹
                </v-col>
                <v-col cols="auto">
                    <v-btn
                      density="compact"
                      class="text-none"
                      color="white"
                      min-width="80"
                      rounded
                      variant="outlined"
                    >
                      더보기
                    </v-btn>
                </v-col>
              </v-row>
            </v-card-item>
            <v-table density="compact" hover style="border-radius: 0px;">
              <thead style="background-color: #E6EAF3;">
                <tr>
                  <th class="text-center">
                    순위
                  </th>
                  <th class="text-center">
                    캐릭터 정보
                  </th>
                  <th class="text-center">
                    레벨
                  </th>
                  <th class="text-center">
                    인기도
                  </th>
                  <th class="text-center">
                    길드
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in worldRankInfo" :key="item.rank">
                  <td class="text-center">{{ item.rank }}</td>
                  <td class="text-center">{{ item.characterInfo }}</td>
                  <td class="text-center">{{ item.level }}</td>
                  <td class="text-center">{{ item.popular }}</td>
                  <td class="text-center">{{ item.guild }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
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
    this.test()
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

    const rankInfo = ref([
      { title: '이번 주 무릉도장 1위', color: '#fdbb2d', subtitle: '80층', record: '14분 30초', url: '/about' },
      { title: '이번 주 무릉도장 1위', color: '#5CB85C', subtitle: '80층', record: '14분 30초', url: '/about' },
      { title: '이번 주 무릉도장 1위', color: '#5393CA', subtitle: '80층', record: '14분 30초', url: '/about' },
      { title: '이번 주 무릉도장 1위', color: '#6D62A1', subtitle: '80층', record: '14분 30초', url: '/about' }
    ]);

    const worldRankInfo = ref([
      { rank: 1, characterInfo: '번개의신(베라/신궁)', level: 285, popular: 1444, guild: '지존' },
      { rank: 2, characterInfo: '번개의신(베라/신궁)', level: 285, popular: 1444, guild: '지존' },
      { rank: 3, characterInfo: '번개의신(베라/신궁)', level: 285, popular: 1444, guild: '지존' },
      { rank: 4, characterInfo: '번개의신(베라/신궁)', level: 285, popular: 1444, guild: '지존' },
      { rank: 5, characterInfo: '번개의신(베라/신궁)', level: 285, popular: 1444, guild: '지존' },
      { rank: 6, characterInfo: '번개의신(베라/신궁)', level: 285, popular: 1444, guild: '지존' },
      { rank: 7, characterInfo: '번개의신(베라/신궁)', level: 285, popular: 1444, guild: '지존' },
      { rank: 8, characterInfo: '번개의신(베라/신궁)', level: 285, popular: 1444, guild: '지존' },
      { rank: 9, characterInfo: '번개의신(베라/신궁)', level: 285, popular: 1444, guild: '지존' },
      { rank: 10, characterInfo: '번개의신(베라/신궁)', level: 285, popular: 1444, guild: '지존' },
    ]);

    return {
        searchInfoValue,
        searchInfo,
        isPaused,
        pauseMarquee,
        resumeMarquee,
        rankInfo,
        worldRankInfo
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

  .rank-info-container {
    border-radius: 10px;
    background-color: white;
  }

  .rank-detail-info-router {
    text-decoration: none;
  }

  .rank-detail-info-container {

  }
  .rank-detail-info-container:hover {
    filter: brightness(95%);
  }

  .rank-detail-info-text {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }

  .list-container {
    border-radius: 10px;
  }

  .rank-card-title {
    background-color: #323337;
    color: #fdbb2d;
  }
</style>