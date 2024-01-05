<template>
  <v-sheet class="fill-height pb-15" color="#F4F7FA">
    <div class="parent-container" style="position: relative;">
      <img src="@/assets/main/main-background.jpg" cover height="500" style="position: relative; width: 100%"/>
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
    </div>
    <v-sheet class="notice-sheet" height="65">
      <v-container class="notice-container" style="width: 60%; height: 100%;">
        <v-row no-gutters>
          <v-col cols="12" class="d-flex align-center">
            <i class="material-icons mr-5" style="font-size: 30px;">campaign</i>
            <vue-marquee-slider
              id="marquee-slider-text"
              :space="150"
              :speed="30000"
              :width="150"
              :paused="isPaused"

            >
              <!-- @mouseover="pauseMarquee"
              @mouseleave="resumeMarquee" -->
              <span class="flow-text">공지사항 테스트</span>
              <span class="flow-text">공지사항 테스트2</span>
              <span class="flow-text">공지사항 테스트3</span>
              <span class="flow-text">공지사항 테스트4</span>
            </vue-marquee-slider>
            <i class="menu-icon material-icons ml-5">
              menu
            </i>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <!-- 하단  -->
    <v-container class="main-container">
      <v-row justify="space-between">
        <v-col cols="3">
          <v-card
            class="rank-info-container mx-auto"
            variant="outlined"
            elevation="0"
            style="border: 1px solid #fdbb2d"
          >
            <v-card-title class="pa-1">
              <div style="color: #fdbb2d; font-weight: bold; text-align: center; font-size: 14px;">
                이번 주 랭킹 1위
              </div>
            </v-card-title>
            <v-divider/>
            <v-card-item> 
              <v-row justify="center" style="font-size: 13px">
                <v-col cols="auto" class="d-flex align-center">
                  <img :src="worldIcon(baseRankingInfo.worldName)"/>
                  <span class="ml-1" style="font-family: 'Noto Sans KR', sans-serif;">
                    {{ baseRankingInfo.characterName }}
                  </span>
                  <span class="ml-1" style="font-family: 'Noto Sans KR', sans-serif;">
                    Lv.{{ baseRankingInfo.characterLevel }}
                  </span>
                  <span class="ml-1" style="color: #848999; font-family: 'Noto Sans KR', sans-serif;">
                    {{ baseRankingInfo.characterClass }}
                  </span>
                </v-col>
              </v-row>
              <v-row class="mt-0" justify="center">
                <v-col cols="auto" class="d-flex align-center">
                  <v-avatar color="white" size="160" style="border: 2px solid #fdbb2d">
                    <img :src="baseRankingInfo.characterImage"/>
                  </v-avatar>
                </v-col>
              </v-row>
              <v-row justify="center" class="mt-0">
                <v-col cols="auto" class="d-flex align-center">
                  <div style="text-align: center;">
                    <div class="text-h5" style="font-weight: 500; font-size: 20px !important;">
                      Lv.{{ baseRankingInfo.characterLevel }}
                    </div>
                    <div style="font-size: 13px; color: grey;">Exp {{ Number(baseRankingInfo.characterExp).toLocaleString() }}</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
            <router-link to="/about" class="rank-detail-info-router">
              <v-card-item class="rank-detail-info-container" style="background-color: #fdbb2d;">
                <v-row justify="center">
                  <v-col cols="auto" class="d-flex align-center">
                    <div class="rank-detail-info-text">
                      상세보기
                    </div>
                  </v-col>
                </v-row>
              </v-card-item>
            </router-link>
          </v-card> 
        </v-col>   
        <v-col cols="3">
          <v-card
            class="rank-info-container mx-auto"
            variant="outlined"
            elevation="0"
            style="border: 1px solid #5CB85C"
          >
            <v-card-title class="pa-1">
              <div style="color: #5CB85C; font-weight: bold; text-align: center; font-size: 14px;">
                이번 주 무릉도장 1위
              </div>
            </v-card-title>
            <v-divider/>
            <v-card-item> 
              <v-row justify="center" style="font-size: 13px">
                <v-col cols="auto" class="d-flex align-center">
                  <img :src="worldIcon(dojangRankingInfo.worldName)"/>
                  <span class="ml-1" style="font-family: 'Noto Sans KR', sans-serif;">
                    {{ dojangRankingInfo.characterName }}
                  </span>
                  <span class="ml-1" style="font-family: 'Noto Sans KR', sans-serif;">
                    Lv.{{ dojangRankingInfo.characterLevel }}
                  </span>
                  <span class="ml-1" style="color: #848999; font-family: 'Noto Sans KR', sans-serif;">
                    {{ dojangRankingInfo.characterClass }}
                  </span>
                </v-col>
              </v-row>
              <v-row class="mt-0" justify="center">
                <v-col cols="auto" class="d-flex align-center">
                  <v-avatar color="white" size="160" style="border: 2px solid #5CB85C">
                    <img :src="dojangRankingInfo.characterImage"/>
                  </v-avatar>
                </v-col>
              </v-row>
              <v-row justify="center" class="mt-0">
                <v-col cols="auto" class="d-flex align-center">
                  <div style="text-align: center;">
                    <div class="text-h5" style="font-weight: 500; font-size: 20px !important;">
                      {{ dojangRankingInfo.dojangFloor }}층
                    </div>
                    <div style="font-size: 13px; color: grey;">{{ parseInt((dojangRankingInfo.dojangTimeRecord%3600)/60) }}분{{ dojangRankingInfo.dojangTimeRecord%60 }}초</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
            <router-link to="/about" class="rank-detail-info-router">
              <v-card-item class="rank-detail-info-container" style="background-color: #5CB85C;">
                <v-row justify="center">
                  <v-col cols="auto" class="d-flex align-center">
                    <div class="rank-detail-info-text">
                      상세보기
                    </div>
                  </v-col>
                </v-row>
              </v-card-item>
            </router-link>
          </v-card> 
        </v-col>   
        <v-col cols="3">
          <v-card
            class="rank-info-container mx-auto"
            variant="outlined"
            elevation="0"
            style="border: 1px solid #5393CA"
          >
            <v-card-title class="pa-1">
              <div style="color: #5393CA; font-weight: bold; text-align: center; font-size: 14px;">
                이번 주 업적 1위
              </div>
            </v-card-title>
            <v-divider/>
            <v-card-item> 
              <v-row justify="center" style="font-size: 13px">
                <v-col cols="auto" class="d-flex align-center">
                  <img :src="worldIcon(acheivementRankingInfo.worldName)"/>
                  <span class="ml-1" style="font-family: 'Noto Sans KR', sans-serif;">
                    {{ acheivementRankingInfo.characterName }}
                  </span>
                  <span class="ml-1" style="font-family: 'Noto Sans KR', sans-serif;">
                    Lv.{{ acheivementRankingInfo.characterLevel }}
                  </span>
                  <span class="ml-1" style="color: #848999; font-family: 'Noto Sans KR', sans-serif;">
                    {{ acheivementRankingInfo.characterClass }}
                  </span>
                </v-col>
              </v-row>
              <v-row class="mt-0" justify="center">
                <v-col cols="auto" class="d-flex align-center">
                  <v-avatar color="white" size="160" style="border: 2px solid #5393CA">
                    <img :src="acheivementRankingInfo.characterImage"/>
                  </v-avatar>
                </v-col>
              </v-row>
              <v-row justify="center" class="mt-0">
                <v-col cols="auto" class="d-flex align-center">
                  <div style="text-align: center;">
                    <div class="text-h5" style="font-weight: 500; font-size: 20px !important;">
                      <img :src="achievementIcon(acheivementRankingInfo.trophyGrade)" style="width: 18px;"/>
                      {{ acheivementRankingInfo.trophyGrade }}
                    </div>
                    <div style="font-size: 13px; color: grey;">{{ Number(acheivementRankingInfo.trophyScore).toLocaleString() }}점</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
            <router-link to="/about" class="rank-detail-info-router">
              <v-card-item class="rank-detail-info-container" style="background-color: #5393CA;">
                <v-row justify="center">
                  <v-col cols="auto" class="d-flex align-center">
                    <div class="rank-detail-info-text">
                      상세보기
                    </div>
                  </v-col>
                </v-row>
              </v-card-item>
            </router-link>
          </v-card> 
        </v-col>   
        <v-col cols="3">
          <v-card
            class="rank-info-container mx-auto"
            variant="outlined"
            elevation="0"
            style="border: 1px solid #6D62A1"
          >
            <v-card-title class="pa-1">
              <div style="color: #6D62A1; font-weight: bold; text-align: center; font-size: 14px;">
                이번 주 유니온 1위
              </div>
            </v-card-title>
            <v-divider/>
            <v-card-item> 
              <v-row justify="center" style="font-size: 13px">
                <v-col cols="auto" class="d-flex align-center">
                  <img :src="worldIcon(unionRankingInfo.worldName)"/>
                  <span class="ml-1" style="font-family: 'Noto Sans KR', sans-serif;">
                    {{ unionRankingInfo.characterName }}
                  </span>
                  <span class="ml-1" style="font-family: 'Noto Sans KR', sans-serif;">
                    Lv.{{ unionRankingInfo.characterLevel }}
                  </span>
                  <span class="ml-1" style="color: #848999; font-family: 'Noto Sans KR', sans-serif;">
                    {{ unionRankingInfo.characterClass }}
                  </span>
                </v-col>
              </v-row>
              <v-row class="mt-0" justify="center">
                <v-col cols="auto" class="d-flex align-center">
                  <v-avatar color="white" size="160" style="border: 2px solid #6D62A1">
                    <img :src="unionRankingInfo.characterImage"/>
                  </v-avatar>
                </v-col>
              </v-row>
              <v-row justify="center" class="mt-0">
                <v-col cols="auto" class="d-flex align-center">
                  <div style="text-align: center;">
                    <div class="text-h5" style="font-weight: 500; font-size: 20px !important;">
                      Lv.{{ unionRankingInfo.unionLevel }}
                    </div>
                    <div style="font-size: 13px; color: grey;">전투력 {{ Number(unionRankingInfo.unionPower).toLocaleString() }}</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
            <router-link to="/about" class="rank-detail-info-router">
              <v-card-item class="rank-detail-info-container" style="background-color: #6D62A1;">
                <v-row justify="center">
                  <v-col cols="auto" class="d-flex align-center">
                    <div class="rank-detail-info-text">
                      상세보기
                    </div>
                  </v-col>
                </v-row>
              </v-card-item>
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
                  <span style="color: white;">{{ currentDate }}</span> 일반 월드 랭킹
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
              <thead style="background-color: #E6EAF3; font-size: 13px;">
                <tr>
                  <th class="text-center">
                    순위
                  </th>
                  <th class="text-left">
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
                <tr v-for="item in baseRankings" :key="item.ranking" style="font-size: 12px;">
                  <td class="text-center">
                    <span   
                      :class="{
                        'gold-bg': item.ranking === 1,
                        'silver-bg': item.ranking === 2,
                        'brown-bg': item.ranking === 3
                      }"
                    >
                      {{ item.ranking }}
                    </span>
                  </td>
                  <td class="text-left">
                    <div style="display: flex; align-items: center;">
                      <img :src="worldIcon(item.world_name)" class="mr-1"/>
                      <span class="enable-click-text">
                        {{ item.character_name }}
                      </span>
                    </div>
                  </td>
                  <td class="text-center"><span>{{ item.character_level }}</span></td>
                  <td class="text-center"><span>{{ item.character_popularity }}</span></td>
                  <td class="text-center"><span class="enable-click-text">{{ item.character_guildname }}</span></td>
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
                  <span style="color: white;">{{ currentDate }}</span> 리부트 월드 랭킹
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
              <thead style="background-color: #E6EAF3; font-size: 13px;">
                <tr>
                  <th class="text-center">
                    순위
                  </th>
                  <th class="text-left">
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
                <tr v-for="item in rebootRankings" :key="item.rank" style="font-size: 12px;">
                  <td class="text-center">
                    <span   
                      :class="{
                        'gold-bg': item.ranking === 1,
                        'silver-bg': item.ranking === 2,
                        'brown-bg': item.ranking === 3
                      }"
                    >
                      {{ item.ranking }}
                    </span>
                  </td>
                  <td class="text-left">
                    <div style="display: flex; align-items: center;">
                      <img :src="worldIcon(item.world_name)" class="mr-1"/>
                      <span class="enable-click-text">
                        {{ item.character_name }}
                      </span>
                    </div>
                  </td>
                  <td class="text-center"><span>{{ item.character_level }}</span></td>
                  <td class="text-center"><span>{{ item.character_popularity }}</span></td>
                  <td class="text-center"><span class="enable-click-text">{{ item.character_guildname }}</span></td>
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
                  <span style="color: white;">{{ currentDate }}</span> 무릉도장 랭킹
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
              <thead style="background-color: #E6EAF3; font-size: 13px;">
                <tr>
                  <th class="text-center">
                    순위
                  </th>
                  <th class="text-left">
                    캐릭터 정보
                  </th>
                  <th class="text-center">
                    레벨
                  </th>
                  <th class="text-center">
                    층수
                  </th>
                  <th class="text-center">
                    기록
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in dojangRankings" :key="item.rank" style="font-size: 12px;">
                  <td class="text-center">
                    <span   
                      :class="{
                        'gold-bg': item.ranking === 1,
                        'silver-bg': item.ranking === 2,
                        'brown-bg': item.ranking === 3
                      }"
                    >
                      {{ item.ranking }}
                    </span>
                  </td>
                  <td class="text-left">
                    <div style="display: flex; align-items: center;">
                      <img :src="worldIcon(item.world_name)" class="mr-1"/>
                      <span class="enable-click-text">
                        {{ item.character_name }}
                      </span>
                    </div>
                  </td>
                  <td class="text-center"><span>{{ item.character_level }}</span></td>
                  <td class="text-center"><span>{{ item.dojang_floor }}층</span></td>
                  <td class="text-center"><span>{{ parseInt((item.dojang_time_record%3600)/60) }}분{{ item.dojang_time_record%60 }}초</span></td>
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
                  <span style="color: white; ">{{ currentDate }}</span> 길드 지하 수로 랭킹
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
              <thead style="background-color: #E6EAF3; font-size: 13px;">
                <tr>
                  <th class="text-center">
                    순위
                  </th>
                  <th class="text-left">
                    길드명
                  </th>
                  <th class="text-center">
                    길드레벨
                  </th>
                  <th class="text-center">
                    길드마스터
                  </th>
                  <th class="text-center">
                    수로점수
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in guildRankings" :key="item.rank" style="font-size: 12px;">
                  <td class="text-center">{{ item.ranking }}</td>
                  <td class="text-left">
                    <div style="display: flex; align-items: center;">
                      <img :src="worldIcon(item.world_name)" class="mr-1"/>
                      <span class="enable-click-text">
                        {{ item.guild_name }}
                      </span>
                    </div>
                  </td>
                  <td class="text-center"><span>{{ item.guild_level }}</span></td>
                  <td class="text-center"><span class="enable-click-text">{{ item.guild_master_name }}</span></td>
                  <td class="text-center"><span>{{ Number(item.guild_point).toLocaleString() }}</span></td>
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
import { getCharacterOverall } from '@/api/main/main.js';
import getAchievementIcon from '@/common/achievementIcon.js';
import getWorldIcon from '@/common/worldIcon.js';
import { computed, reactive, ref } from 'vue';
import { VueMarqueeSlider } from 'vue3-marquee-slider';
import '/node_modules/vue3-marquee-slider/dist/style.css';
export default {
  mounted() {
    this.top10RankingList()
  },
  components: {
    VueMarqueeSlider
  },
  setup(props, context) {
    const searchInfoValue = ref('');
    const isPaused = ref(false);
    // Top1 일반월드 랭킹 정보
    const baseRankingInfo = reactive({});
    const dojangRankingInfo = reactive({});
    const acheivementRankingInfo = reactive({});
    const unionRankingInfo = reactive({});
    // Top10 랭킹 리스트
    const baseRankings = reactive({});
    const rebootRankings = reactive({});
    const dojangRankings = reactive({}); 
    const guildRankings = reactive({});

    const searchInfo = () => {
      console.log(searchInfoValue.value)
    };

    // const pauseMarquee = () => {
    //   isPaused.value = true;
    // };

    // const resumeMarquee = () => {
    //   isPaused.value = false;
    // };

    const currentDate = computed(() => {
      const date = new Date();
      const months = [
        '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'
      ];
      const month = months[date.getMonth()];
      const day = date.getDate();

      return `${month} ${day}일`;
    });

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

    const top10RankingList = async () => {
      try {
        const response = await getCharacterOverall();
        Object.assign(baseRankingInfo, response.data.data.top1LevelRanking);
        Object.assign(dojangRankingInfo, response.data.data.top1DojangRanking);
        Object.assign(acheivementRankingInfo, response.data.data.top1AchievementRanking);
        Object.assign(unionRankingInfo, response.data.data.top1UnionRanking);

        Object.assign(baseRankings, response.data.data.baseRankings);
        Object.assign(rebootRankings, response.data.data.rebootRankings);
        Object.assign(dojangRankings, response.data.data.dojangRankings);
        Object.assign(guildRankings, response.data.data.guildRankings);

        // console.log(baseRankingInfo);
        // console.log(dojangRankingInfo);
        // console.log(acheivementRankingInfo);
        // console.log(unionRankingInfo);
        // console.log(baseRankings);
        // console.log(rebootRankings);
        // console.log(dojangRankings);
        // console.log(guildRankings);
      } catch (error) {
        console.log(error)
      }
    };

    const worldIcon = (worldName) => { 
      return getWorldIcon(worldName);
    };

    const achievementIcon = (trophyGrade) => {
      return getAchievementIcon(trophyGrade);
    }

    return {
        searchInfoValue,
        searchInfo,
        isPaused,
        //pauseMarquee,
        //resumeMarquee,
        worldRankInfo,
        top10RankingList,
        baseRankings,
        rebootRankings,
        dojangRankings,
        guildRankings,
        baseRankingInfo,
        dojangRankingInfo,
        acheivementRankingInfo,
        unionRankingInfo,
        worldIcon,
        achievementIcon,
        currentDate
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
    top: 100px;
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
    top: 250px;
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
    font-size: 14px;
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
    width: 60%;
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
    font-size: 16px;
    font-weight: bold;
  }
  .list-container {
    border-radius: 10px;
  }
  .rank-card-title {
    background-color: #323337;
    color: #fdbb2d;
  }
  .gold-bg {
    background-color: gold;
    border-radius: 3px;
    padding: 2px 7px 2px 7px;
    color: white;
  }
  .silver-bg {
    background-color: silver;
    border-radius: 3px;
    padding: 2px 7px 2px 7px;
    color: #666A7A;
  }
  .brown-bg {
    background-color: brown;
    border-radius: 3px;
    padding: 2px 7px 2px 7px;
    color: white;
  }
  .enable-click-text {
    cursor: pointer;
  }
  .enable-click-text:hover {
    text-decoration: underline;
  }
</style>