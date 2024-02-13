<template>
    <v-row v-if="loading" justify="space-between">
        <v-col cols="auto">
            <v-card class="equip-card" flat width="360">
                <v-card-title style="font-size: 16px; font-weight: bold; color: white; background-color: rgba(50, 51, 55, 0.975);">장비</v-card-title>
                <v-card-item class="equip-container">
                    <div class="ma-5" style="display: flex;"> 
                        <ItemEquipmentToolTip :item="item1" :itemLocation="item1Location"/> 
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <ItemEquipmentToolTip :item="item2" :itemLocation="item2Location"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <ItemEquipmentToolTip :item="item3" :itemLocation="item3Location"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <ItemEquipmentToolTip :item="item4" :itemLocation="item4Location"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <ItemEquipmentToolTip :item="item5" :itemLocation="item5Location"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <ItemEquipmentToolTip :item="item6" :itemLocation="item6Location"/>
                        <AndroidToolTip :item="characterAndroidEquipment" :itemLocation="androidItemLocation"/>                   
                    </div>
                </v-card-item>
            </v-card>
        </v-col>
        <v-col cols="auto">
            <v-card class="equip-card" flat width="360">
                <v-card-title class="cody-card" style="font-size: 16px; background-color: rgba(50, 51, 55, 0.975);">
                    <v-row justify="space-between">
                        <v-col cols="auto">
                        <span style="color: white; font-weight: bold;">{{ changeCodyText }}</span>
                        </v-col>
                        <v-col cols="auto">
                            <v-btn
                                density="compact"
                                class="text-none"
                                color="white"
                                min-width="80"
                                rounded
                                variant="outlined"
                                @click="changeText()"
                            >
                                {{ changeBtnText }}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-card-item class="equip-container">
                    <div v-if="codyTextFlag">
                        <div class="ma-5" style="display: flex;"> 
                            <CashItemEquipmentToolTip :item="cashItem1" :itemLocation="cashItem1Location"/> 
                        </div>
                        <div class="ma-5" style="display: flex;">
                            <CashItemEquipmentToolTip :item="cashItem2" :itemLocation="cashItem2Location"/>
                        </div>
                        <div class="ma-5" style="display: flex;">
                            <CashItemEquipmentToolTip :item="cashItem3" :itemLocation="cashItem3Location"/>
                        </div>
                        <div class="ma-5" style="display: flex;">
                            <CashItemEquipmentToolTip :item="cashItem4" :itemLocation="cashItem4Location"/>
                        </div>
                        <div class="ma-5" style="display: flex;">
                            <CashItemEquipmentToolTip :item="cashItem5" :itemLocation="cashItem5Location"/>
                        </div>
                        <div class="ma-5" style="display: flex;">
                            <CashItemEquipmentToolTip :item="cashItem6" :itemLocation="cashItem6Location"/>               
                        </div>
                    </div>
                    <div v-else>
                        <div class="ma-5" style="display: flex;"> 
                            <CodyPresetEquipmentToolTip :item="persetItem1" :itemLocation="presetItem1Location"/> 
                        </div>
                        <div class="ma-5" style="display: flex;">
                            <CodyPresetEquipmentToolTip :item="persetItem2" :itemLocation="presetItem2Location"/>
                        </div>
                        <div class="ma-5" style="display: flex;">
                            <CodyPresetEquipmentToolTip :item="persetItem3" :itemLocation="presetItem3Location"/>
                        </div>
                        <div class="ma-5" style="display: flex;">
                            <CodyPresetEquipmentToolTip :item="persetItem4" :itemLocation="presetItem4Location"/>
                        </div>
                        <div class="ma-5" style="display: flex;">
                            <CodyPresetEquipmentToolTip :item="persetItem5" :itemLocation="presetItem5Location"/>
                        </div>
                        <div class="ma-5" style="display: flex;">
                            <CodyPresetEquipmentToolTip :item="persetItem6" :itemLocation="presetItem6Location"/>               
                        </div>
                    </div>
                    <div v-if="!codyTextFlag" class="preset-btn-wrapper">
                        <div :class="[ presetBtn1Flag ? 'preset-custom-btn' : 'preset-btn1' ]" @click="selectPresetBtn1Flag()">1</div>
                        <div :class="[ presetBtn2Flag ? 'preset-custom-btn' : 'preset-btn2' ]" @click="selectPresetBtn2Flag()">2</div>
                        <div :class="[ presetBtn3Flag ? 'preset-custom-btn' : 'preset-btn3' ]" @click="selectPresetBtn3Flag()">3</div>
                    </div>
                </v-card-item>
            </v-card>
        </v-col>
        <v-col cols="auto">
            <v-card class="equip-card" flat width="300">
                <v-card-title class="cody-card" style="font-size: 16px; font-weight: bold; color: white; background-color: rgba(50, 51, 55, 0.975);">펫</v-card-title>
                <v-card-item>
                    <div class="ma-5"> 
                    <PetEquipmentToolTip :item="characterPetEquipment"/>
                    </div>
                </v-card-item>
            </v-card>
        </v-col>
        <v-col cols="auto">
            <v-card class="equip-card" flat width="240">
                <v-card-title class="cody-card" style="font-size: 16px; font-weight: bold; color: white; background-color: rgba(50, 51, 55, 0.975);">안드로이드</v-card-title>
                <v-card-item>
                    <div class="ma-5" style="display: flex;"> 
                        <AndroidCashItemEquipmentToolTipVue :item="androidCashItem1" :itemLocation="androidCashItem1Location"/> 
                    </div>
                    <div class="ma-5" style="display: flex;"> 
                        <AndroidCashItemEquipmentToolTipVue :item="androidCashItem2" :itemLocation="androidCashItem2Location"/> 
                    </div>
                    <div class="ma-5" style="display: flex;"> 
                        <AndroidCashItemEquipmentToolTipVue :item="androidCashItem3" :itemLocation="androidCashItem3Location"/> 
                    </div>
                    <div class="ma-5" style="display: flex;"> 
                        <AndroidCashItemEquipmentToolTipVue :item="androidCashItem4" :itemLocation="androidCashItem4Location"/> 
                    </div>
                    <div class="ma-5" style="display: flex;"> 
                        <AndroidCashItemEquipmentToolTipVue :item="androidCashItem5" :itemLocation="androidCashItem5Location"/> 
                    </div>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
    <v-row v-if="loading" justify="space-between">
        <v-col>
          <v-card
            class="rank-info-container mx-auto"
            variant="outlined"
            elevation="0"
            style="border: 1px solid #fdbb2d"
          >
            <v-card-title class="pa-1" style="background-color: #fdbb2d;">
              <div style="color: #FFF; font-weight: bold; text-align: center; font-size: 14px;">
                무릉도장 최고기록
              </div>
            </v-card-title>
            <v-card-item style=" background-color: #F6A7301A; "> 
              <v-row justify="center" style="font-size: 13px" no-gutters>
                <v-col cols="auto" class="d-flex align-center ma-2" style="height: 60px;">
                    <div style="text-align: center;">
                      <div v-if="characterDojang.dojang_best_time !== 0">
                        <div style="font-family: 'Noto Sans KR', sans-serif; font-size: 24px; font-weight: 600;">
                            {{ characterDojang.dojang_best_floor }}층
                        </div>
                        <div style="color: #848999; font-family: 'Noto Sans KR', sans-serif; font-size: 16px;">
                          {{ parseInt((characterDojang.dojang_best_time%3600)/60) }}분{{ characterDojang.dojang_best_time%60 }}초
                        </div>   
                      </div> 
                      <div v-else>
                        <div style="color: #848999; font-family: 'Noto Sans KR', sans-serif; font-size: 18px; font-weight: bold;">
                          기록 없음
                        </div>
                      </div>
                    </div>
                </v-col>
              </v-row>
            </v-card-item>
            <v-card-item style="background-color: #FFF;">
              <v-row justify="center">
                <v-col cols="auto" class="d-flex align-center" style="height: 135px;">
                  <div style="text-align: center;">
                    <div v-if="characterDojang.dojang_best_time !== 0" class="ma-2" style="font-size: 16px !important;">
                      Lv.{{ characterBasic.character_level }} / {{ characterBasic.character_class }} 
                    </div>
                    <div v-if="characterDojang.dojang_best_time !== 0" class="mt-2" style="font-size: 13px; color: grey;">기준일: {{ recordDateFormat(characterDojang.date) }}</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card> 
        </v-col> 
        <v-col>
          <v-card
            class="rank-info-container mx-auto"
            variant="outlined"
            elevation="0"
            style="border: 1px solid #5CB85C"
          >
            <v-card-title class="pa-1" style="background-color: #5CB85C;">
              <div style="color: #FFF; font-weight: bold; text-align: center; font-size: 14px;">
                더 시드 최고기록
              </div>
            </v-card-title>
            <v-card-item style=" background-color: #5CB85C1A; "> 
              <v-row justify="center" style="font-size: 13px" no-gutters>
                <v-col cols="auto" class="d-flex align-center ma-2" style="height: 60px;">
                    <div style="text-align: center;">
                      <div v-if="Object.keys(characterTheseed).length != 0">
                        <div style="font-family: 'Noto Sans KR', sans-serif; font-size: 24px; font-weight: 600;">
                          {{ characterTheseed.theseed_floor }}층
                        </div>
                        <div style="color: #848999; font-family: 'Noto Sans KR', sans-serif; font-size: 16px;">
                          {{ parseInt((characterTheseed.theseed_time_record%3600)/60) }}분{{ characterTheseed.theseed_time_record%60 }}초
                        </div>   
                      </div> 
                      <div v-else>
                        <div style="color: #848999; font-family: 'Noto Sans KR', sans-serif; font-size: 18px; font-weight: bold;">
                          기록 없음
                        </div>
                      </div>
                    </div>
                </v-col>
              </v-row>
            </v-card-item>
            <v-card-item style="background-color: #FFF;">
              <v-row justify="center" >
                <v-col cols="auto" class="d-flex align-center" style="height: 135px;">
                  <div style="text-align: center;">
                    <div v-if="Object.keys(characterTheseed).length != 0" class="ma-2" style="font-size: 16px !important;">
                      Lv.{{ characterBasic.character_level }} / {{ characterBasic.character_class }} 
                    </div>
                    <div v-if="Object.keys(characterTheseed).length != 0" class="mt-2" style="font-size: 13px; color: grey;">기준일: {{ recordDateFormat(characterTheseed.date) }}</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card> 
        </v-col> 
        <v-col>
          <v-card
            class="rank-info-container mx-auto"
            variant="outlined"
            elevation="0"
            style="border: 1px solid #5393CA"
          >
            <v-card-title class="pa-1" style="background-color: #5393CA;">
              <div style="color: #FFF; font-weight: bold; text-align: center; font-size: 14px;">
                업적
              </div>
            </v-card-title>
            <v-card-item style=" background-color: #5393CA1A; "> 
              <v-row justify="center" style="font-size: 13px" no-gutters>
                <v-col cols="auto" class="d-flex align-center ma-2" style="height: 60px;">
                    <div style="display: flex; align-items: center;">
                      <div v-if="characterAchievement.trophy_score != 0 && Object.keys(characterAchievement).length != 0">
                        <div style="float: left;">
                            <div style="position: relative; margin-left: 10px; display: flex; width: 35px; height: 35px;">
                              <img :src="achievementIcon(characterAchievement.trophy_grade)" style="width: 35px; height: 35px;"/>
                            </div>
                        </div>
                        <div style="font-family: 'Noto Sans KR', sans-serif; font-size: 24px; font-weight: 600;"> 
                          {{ characterAchievement.trophy_grade }}
                        </div>
                        <div style="color: #848999; font-family: 'Noto Sans KR', sans-serif; font-size: 16px;">
                          업적 점수 {{ Number(characterAchievement.trophy_score).toLocaleString() }}
                        </div>   
                      </div> 
                      <div v-else>
                        <div style="color: #848999; font-family: 'Noto Sans KR', sans-serif; font-size: 18px; font-weight: bold;">
                          기록 없음
                        </div>
                      </div>
                    </div>
                </v-col>
              </v-row>
            </v-card-item>
            <v-card-item style="background-color: #FFF;">
              <v-row justify="center" >
                <v-col cols="auto" class="d-flex align-center" style="height: 135px;">
                  <div style="text-align: center;">
                    <div v-if="characterAchievement.character_level != 0" class="ma-2" style="font-size: 16px !important;">
                      Lv.{{ characterBasic.character_level }} / {{ characterBasic.character_class }} 
                    </div>
                    <div v-if="characterAchievement.character_level != 0" class="mt-2" style="font-size: 13px; color: grey;">기준일: {{ recordDateFormat(characterBasic.date) }}</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card> 
        </v-col> 
        <v-col>
          <v-card
            class="rank-info-container mx-auto"
            variant="outlined"
            elevation="0"
            style="border: 1px solid #6D62A1"
          >
            <v-card-title class="pa-1" style="background-color: #6D62A1;">
              <div style="color: #FFF; font-weight: bold; text-align: center; font-size: 14px;">
                유니온
              </div>
            </v-card-title>
            <v-card-item style=" background-color: #6D62A11A; "> 
              <v-row justify="center" style="font-size: 13px;" no-gutters>
                <v-col cols="auto" class="d-flex text-center align-center ma-2" style="height: 60px;">
                  <div v-if="characterUnion.union_level != 0">
                    <div style="float: left;">
                      <div style="position: relative; display: flex; align-items: center;">
                        <img :src="unionIcon(characterUnion.union_level)" style="width: 25px; height: 25px;"/>
                        <div style="font-family: 'Noto Sans KR', sans-serif; font-size: 24px; font-weight: 600; margin-left: 5px;"> 
                          {{ unionGrade(characterUnion.union_level) }}
                        </div>
                      </div>
                    </div>
                    <div style="color: #848999; font-family: 'Noto Sans KR', sans-serif; font-size: 16px;">
                      Lv.{{ characterUnion.union_level }}
                    </div>   
                  </div> 
                  <div v-else>
                    <div style="color: #848999; font-family: 'Noto Sans KR', sans-serif; font-size: 18px; font-weight: bold;">
                      기록 없음
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
            <v-card-item style="background-color: #FFF;">
              <v-row justify="center" >
                <v-col cols="auto" class="d-flex align-center" style="height: 135px;">
                  <div style="text-align: center;">
                    <div v-if="characterAchievement.character_level != 0" class="ma-2" style="font-size: 16px !important;">
                      Lv.{{ characterBasic.character_level }} / {{ characterBasic.character_class }} 
                    </div>
                    <div v-if="characterAchievement.character_level != 0" class="mt-2" style="font-size: 13px; color: grey;">기준일: {{ recordDateFormat(characterBasic.date) }}</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card> 
        </v-col>
    </v-row>
    <v-row v-if="loading" justify="space-between">
      <v-col>
        <v-card
          class="list-container mx-auto"
          variant="outlined"
          elevation="0"
          style="border: 1px solid #eee; background-color: #fff;"
        >
          <v-card-item class="rank-card-title">
            <v-row justify="space-between">
              <v-col cols="auto">
                <span style="color: black;">1월</span> 리부트 월드 랭킹
              </v-col>
            </v-row>
          </v-card-item>
          <v-table density="compact" style="border-radius: 0px;">
            <thead style="background-color: #E6EAF3; font-size: 13px;">
              <tr>
                <th class="text-center">
                  날씨
                </th>
                <th class="text-left">
                  기록
                </th>
                <th class="text-center">
                  보스
                </th>
                <th class="text-center">
                  직업
                </th>
                <th class="text-center">
                  레벨
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in dojangHistory" :key="item" style="font-size: 12px;">
                <td class="text-center">
                  <span>
                    {{ item.ranking }}
                  </span>
                </td>
                <td class="text-left">
                  <div style="display: flex; align-items: center;">
                    <span class="enable-click-text">
                      {{ item.character_name }}
                    </span>
                  </div>
                </td>
                <td class="text-center"><span>{{ item.character_level }}</span></td>
                <td class="text-center"><span>{{ Number(item.character_popularity).toLocaleString() }}</span></td>
                <td class="text-center"><span class="enable-click-text">{{ item.character_guildname }}</span></td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
</template>
<script setup>
import { getCharacterEquipment } from '@/api/characterInfo/statAndEquip.js';
import getAchievementIcon from '@/common/achievementIcon.js';
import getUnionGrade from '@/common/unionGrade';
import getUnionIcon from '@/common/unionIcon.js';
import AndroidCashItemEquipmentToolTipVue from '@/components/characterInfo/AndroidCashItemEquipmentToolTip.vue';
import AndroidToolTip from '@/components/characterInfo/AndroidToolTip.vue';
import CashItemEquipmentToolTip from '@/components/characterInfo/CashItemEquipmentToolTip.vue';
import CodyPresetEquipmentToolTip from '@/components/characterInfo/CodyPresetEquipmentToolTip.vue';
import ItemEquipmentToolTip from '@/components/characterInfo/ItemEquipmentToolTip.vue';
import PetEquipmentToolTip from '@/components/characterInfo/PetEquipmentToolTip.vue';
import { computed, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

    const route = useRoute();
    const characterName = route.params;
    const loading = ref(false);
    // 저장할 아이템 리스트
    const characterItemEquipment = reactive({});
    const item1 = reactive([]);
    const item1Location = ref([0, 70 ,140]);
    const item2 = reactive([]);
    const item2Location = ref([0, 10, 20, 90]);
    const item3 = reactive([]);
    const item3Location = ref([0, 10, 20, 30 ,40]);
    const item4 = reactive([]);
    const item4Location = ref([0, 10, 20, 30 ,40]);
    const item5 = reactive([]);
    const item5Location = ref([0, 10, 20, 30 ,40]);
    const item6 = reactive([]);
    const item6Location = ref([120, 190]);
    // 저장할 안드로이드 아이템 리스트
    const characterAndroidEquipment = reactive({});
    const androidItemLocation = ref([80]);
    // 저장할 안드로이드 캐시 아이템 리스트
    const characterAndroidCashItemEquipment = reactive({});
    const androidCashItem1 = reactive([]);
    const androidCashItem1Location = ref([60]);
    const androidCashItem2 = reactive([]);
    const androidCashItem2Location = ref([60]);
    const androidCashItem3 = reactive([]);
    const androidCashItem3Location = ref([60]);
    const androidCashItem4 = reactive([]);
    const androidCashItem4Location = ref([0, 10, 20]);
    const androidCashItem5 = reactive([]);
    const androidCashItem5Location = ref([60]);
    // 저장할 캐시 아이템 리스트
    const characterCashItemEquipment = reactive({});
    const cashItem1 = reactive([]);
    const cashItem1Location = ref([0, 10, 20]);
    const cashItem2 = reactive([]);
    const cashItem2Location = ref([0, 10, 20]);
    const cashItem3 = reactive([]);
    const cashItem3Location = ref([0, 10, 20, 30]);
    const cashItem4 = reactive([]);
    const cashItem4Location = ref([0, 10 ,20, 90]);
    const cashItem5 = reactive([]);
    const cashItem5Location = ref([120, 130 ,140]);
    const cashItem6 = reactive([]);
    const cashItem6Location = ref([120]);
    // 저장할 코디 프리셋 리스트
    const characeterCashItemEquipmentPreset1 = reactive({});
    const characeterCashItemEquipmentPreset2 = reactive({});
    const characeterCashItemEquipmentPreset3 = reactive({});
    const persetItem1 = reactive([]);
    const presetItem1Location = ref([0, 10, 20]);
    const persetItem2 = reactive([]);
    const presetItem2Location = ref([0, 10, 20]);
    const persetItem3 = reactive([]);
    const presetItem3Location = ref([0, 10, 20, 30]);
    const persetItem4 = reactive([]);
    const presetItem4Location = ref([0, 10 ,20, 90]);
    const persetItem5 = reactive([]);
    const presetItem5Location = ref([120, 130 ,140]);
    const persetItem6 = reactive([]);
    const presetItem6Location = ref([120]);
    // 저장할 펫 리스트
    const characterPetEquipment = reactive([]);
    // 무릉도장 최고기록
    const characterDojang = reactive([]);
    // 더 시드 최고기록
    const characterTheseed = reactive([]);
    // 업적
    const characterAchievement = reactive([]);
    // 유니온
    const characterUnion = reactive([]);
    // 캐릭터 기본 정보
    const characterBasic = reactive([]); 
    // 무릉 히스토리
    const dojangHistory = reactive(
      [
        {'ranking': 1},
        {'ranking': 2},
        {'ranking': 3},
      ],
      [
        {'character_name': "테스트"},
        {'character_name': '테스트2'},
        {'character_name': '테스트3'},
      ],
      [
        {'character_level': 250},
        {'character_level': 250},
        {'character_level': 250},
      ],
      [
        {'character_popularity': 1200},
        {'character_popularity': 1200},
        {'character_popularity': 1200},
      ],
      [
        {'character_guildname': '화이트'},
        {'character_guildname': '화이트'},
        {'character_guildname': '화이트'},
      ],
    );

    onMounted(() => {
        characterEquipment();
    });
    // 업적 점수 아이콘
    const achievementIcon = (trophyGrade) => {
      return getAchievementIcon(trophyGrade);
    }
    // 유니온 등급 아이콘
    const unionIcon = (unionLevel) => {
      return getUnionIcon(unionLevel);
    } 
    const unionGrade = (unionLevel) => {
      return getUnionGrade(unionLevel);
    };
    // 기록 기준일 포맷
    const recordDateFormat = (value) => {
      const date = new Date(value);
      const year = date.getFullYear().toString().substr(2,2); // '2024' -> '24'
      const month = ('0' + (date.getMonth() + 1)).slice(-2); // '2' -> '02'
      const day = ('0' + date.getDate()).slice(-2); // '10' -> '10'
      return `${year}년 ${month}월 ${day}일`;
    }
    // 캐시 아이템 버튼 수정 관련 
    const cashText = ref('캐시');
    const codyText = ref('코디 프리셋');
    const codyTextFlag = ref(true);
    const changeCodyText = computed(() => {
        return codyTextFlag.value ? cashText.value : codyText.value
    });
    const changeBtnText = computed(() => {
        return codyTextFlag.value ? codyText.value :cashText.value 
    });
    const changeText = () => {
        codyTextFlag.value = !codyTextFlag.value;
        selectPresetBtn1Flag();
    };
    // 코디 프리셋 버튼 관련
    const presetBtn1Flag = ref(true);
    const presetBtn2Flag = ref(false);
    const presetBtn3Flag = ref(false);
    const selectPresetBtn1Flag = () => {
        presetBtn1Flag.value = true;
        presetBtn2Flag.value = false;
        presetBtn3Flag.value = false;

        persetItem1.length = 0;
        persetItem1.push(characeterCashItemEquipmentPreset1[12]);
        persetItem1.push(null); 
        persetItem1.push(characeterCashItemEquipmentPreset1[0]);

        persetItem2.length = 0;
        persetItem2.push(characeterCashItemEquipmentPreset1[10]);        
        persetItem2.push(null);     
        persetItem2.push(characeterCashItemEquipmentPreset1[1]);                  

        persetItem3.length = 0;
        persetItem3.push(characeterCashItemEquipmentPreset1[11]);                
        persetItem3.push(null);              
        persetItem3.push(characeterCashItemEquipmentPreset1[2]);                
        persetItem3.push(characeterCashItemEquipmentPreset1[3]);                
        
        persetItem4.length = 0;
        persetItem4.push(characeterCashItemEquipmentPreset1[9]);
        persetItem4.push(characeterCashItemEquipmentPreset1[8]);
        persetItem4.push(characeterCashItemEquipmentPreset1[4]);
        persetItem4.push(null); 

        persetItem5.length = 0;
        persetItem5.push(null); 
        persetItem5.push(characeterCashItemEquipmentPreset1[6]);
        persetItem5.push(characeterCashItemEquipmentPreset1[7]);

        persetItem6.length = 0;
        persetItem6.push(characeterCashItemEquipmentPreset1[5]);
    };
    const selectPresetBtn2Flag = () => {
        presetBtn1Flag.value = false;
        presetBtn2Flag.value = true;
        presetBtn3Flag.value = false;

        persetItem1.length = 0;
        persetItem1.push(characeterCashItemEquipmentPreset2[12]);
        persetItem1.push(null); 
        persetItem1.push(characeterCashItemEquipmentPreset2[0]);

        persetItem2.length = 0;
        persetItem2.push(characeterCashItemEquipmentPreset2[10]);        
        persetItem2.push(null);     
        persetItem2.push(characeterCashItemEquipmentPreset2[1]);                  

        persetItem3.length = 0;
        persetItem3.push(characeterCashItemEquipmentPreset2[11]);                
        persetItem3.push(null);              
        persetItem3.push(characeterCashItemEquipmentPreset2[2]);                
        persetItem3.push(characeterCashItemEquipmentPreset2[3]);                
        
        persetItem4.length = 0;
        persetItem4.push(characeterCashItemEquipmentPreset2[9]);
        persetItem4.push(characeterCashItemEquipmentPreset2[8]);
        persetItem4.push(characeterCashItemEquipmentPreset2[4]);
        persetItem4.push(null); 

        persetItem5.length = 0;
        persetItem5.push(null); 
        persetItem5.push(characeterCashItemEquipmentPreset2[6]);
        persetItem5.push(characeterCashItemEquipmentPreset2[7]);

        persetItem6.length = 0;
        persetItem6.push(characeterCashItemEquipmentPreset2[5]);
    };
    const selectPresetBtn3Flag = () => {
        presetBtn1Flag.value = false;
        presetBtn2Flag.value = false;
        presetBtn3Flag.value = true;

        persetItem1.length = 0;
        persetItem1.push(characeterCashItemEquipmentPreset3[12]);
        persetItem1.push(null); 
        persetItem1.push(characeterCashItemEquipmentPreset3[0]);

        persetItem2.length = 0;
        persetItem2.push(characeterCashItemEquipmentPreset3[10]);        
        persetItem2.push(null);     
        persetItem2.push(characeterCashItemEquipmentPreset3[1]);                  

        persetItem3.length = 0;
        persetItem3.push(characeterCashItemEquipmentPreset3[11]);                
        persetItem3.push(null);              
        persetItem3.push(characeterCashItemEquipmentPreset3[2]);                
        persetItem3.push(characeterCashItemEquipmentPreset3[3]);                
        
        persetItem4.length = 0;
        persetItem4.push(characeterCashItemEquipmentPreset3[9]);
        persetItem4.push(characeterCashItemEquipmentPreset3[8]);
        persetItem4.push(characeterCashItemEquipmentPreset3[4]);
        persetItem4.push(null); 

        persetItem5.length = 0;
        persetItem5.push(null); 
        persetItem5.push(characeterCashItemEquipmentPreset3[6]);
        persetItem5.push(characeterCashItemEquipmentPreset3[7]);

        persetItem6.length = 0;
        persetItem6.push(characeterCashItemEquipmentPreset3[5]);
    };

    const characterEquipment = async () => {
        const params = { 'characterName': characterName.name };
        try {
            const response = await getCharacterEquipment(params);
            Object.assign(characterItemEquipment, response.data.data.characterItemEquipment.item_equipment);
            Object.assign(characterAndroidEquipment, response.data.data.characterAndroidEquipment);
            Object.assign(characterAndroidCashItemEquipment, response.data.data.characterAndroidEquipment.android_cash_item_equipment);
            Object.assign(characterCashItemEquipment, response.data.data.characterCashitemEquipment.cash_item_equipment_base);
            Object.assign(characeterCashItemEquipmentPreset1, response.data.data.characterCashitemEquipment.cash_item_equipment_preset_1);
            Object.assign(characeterCashItemEquipmentPreset2, response.data.data.characterCashitemEquipment.cash_item_equipment_preset_2);
            Object.assign(characeterCashItemEquipmentPreset3, response.data.data.characterCashitemEquipment.cash_item_equipment_preset_3);
            Object.assign(characterPetEquipment, response.data.data.characterPetEquipment);
            Object.assign(characterDojang, response.data.data.characterDojangRanking);
            Object.assign(characterTheseed, response.data.data.characterTheseedRanking);
            Object.assign(characterAchievement, response.data.data.characterAchievementRanking);
            Object.assign(characterUnion, response.data.data.characterUnionRanking);
            Object.assign(characterBasic, response.data.data.characterBasic);
            console.log(response.data.data);
            // 장비 아이템
            item1.push(characterItemEquipment[14]);
            item1.push(characterItemEquipment[0]);
            item1.push(characterItemEquipment[22]);

            item2.push(characterItemEquipment[13]);
            item2.push(characterItemEquipment[23]);
            item2.push(characterItemEquipment[1]);
            item2.push(characterItemEquipment[21]);

            item3.push(characterItemEquipment[12]);
            item3.push(characterItemEquipment[15]);
            item3.push(characterItemEquipment[2]);
            item3.push(characterItemEquipment[3]);
            item3.push(characterItemEquipment[16]);

            item4.push(characterItemEquipment[11]);
            item4.push(characterItemEquipment[10]);
            item4.push(characterItemEquipment[4]);
            item4.push(characterItemEquipment[18]);
            item4.push(characterItemEquipment[9]);

            item5.push(characterItemEquipment[19]);
            item5.push(characterItemEquipment[17]);
            item5.push(characterItemEquipment[5]);
            item5.push(characterItemEquipment[7]);
            item5.push(characterItemEquipment[8]);

            item6.push(characterItemEquipment[6]);
            item6.push(characterItemEquipment[20]);
            // 캐시 아이템
            cashItem1.push(characterCashItemEquipment[12]);
            cashItem1.push(null); // 헤어 마네킹
            cashItem1.push(characterCashItemEquipment[0]);

            cashItem2.push(characterCashItemEquipment[10]);        
            cashItem2.push(null); // 얼굴 마네킹     
            cashItem2.push(characterCashItemEquipment[1]);                  

            cashItem3.push(characterCashItemEquipment[11]);                
            cashItem3.push(null); // 피부 마네킹              
            cashItem3.push(characterCashItemEquipment[2]);                
            cashItem3.push(characterCashItemEquipment[3]);                
            
            cashItem4.push(characterCashItemEquipment[9]);
            cashItem4.push(characterCashItemEquipment[8]);
            cashItem4.push(characterCashItemEquipment[4]);
            cashItem4.push(null); // 보조 무기

            cashItem5.push(null); // 바지 TODO 추가 예정
            cashItem5.push(characterCashItemEquipment[6]);
            cashItem5.push(characterCashItemEquipment[7]);

            cashItem6.push(characterCashItemEquipment[5]);   
            // 안드로이드 캐시 아이템
            androidCashItem1.push(characterAndroidCashItemEquipment[0]);
            androidCashItem2.push(characterAndroidCashItemEquipment[2]);
            androidCashItem3.push(characterAndroidCashItemEquipment[3]);
            androidCashItem4.push(characterAndroidCashItemEquipment[5]);
            androidCashItem4.push(characterAndroidCashItemEquipment[6]);
            androidCashItem4.push(characterAndroidCashItemEquipment[1]);
            androidCashItem5.push(characterAndroidCashItemEquipment[4]);
        } catch(error) {
            console.log(error);
        } finally {
            loading.value = true;
        }   
    };
</script>

<style>
    .equip-card {   
        border: 1px solid rgba(50, 51, 55, 0.975) !important;   
    }
    .equip-container {
        background-color: #FFF;
    }
    .custom-tooltip {
        opacity: var(--v-tooltip-opacity, 1) !important;
        background: var(--v-tooltip-bg, none) !important;
    }
    .cody-card {
        border: 1px solid rgba(50, 51, 55, 0.975) !important;   
    }
    .preset-btn-wrapper {
        position: absolute;
        bottom: 10px;
        right: 5px;
        display: flex;
        font-size: 12px;
        color: white;
    }
    .preset-custom-btn {
        background-color: rgba(50, 51, 55, 0.975);
        border: 1px solid rgba(50, 51, 55, 0.975);
        border-radius: 3px;
        padding: 0px 6px 2px 6px;
        cursor: pointer;
        margin-right: 5px;
    }
    .preset-btn1 {
        background-color: #E2E2E2;
        border: 1px solid #CBCBCB;
        border-radius: 3px;
        padding: 0px 6px 2px 6px;
        cursor: pointer;
        margin-right: 5px;
    }
    .preset-btn2 {
        background-color: #E2E2E2;
        border: 1px solid #CBCBCB;
        border-radius: 3px;
        padding: 0px 6px 2px 6px;
        cursor: pointer;
        margin-right: 5px;
    }
    .preset-btn3 {
        background-color: #E2E2E2;
        border: 1px solid #CBCBCB;
        border-radius: 3px;
        padding: 0px 6px 2px 6px;
        cursor: pointer;
        margin-right: 5px;
    }
</style>

