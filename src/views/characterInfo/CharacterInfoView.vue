<template>
    <v-sheet class="fill-height pb-15" color="#F4F7FA">
        <div class="parent-container" style="position: relative;">
            <img src="https://cdn.dak.gg/maple/images/bg/guide-top-bg.jpg" cover height="500" style="position: relative; width: 100%"/>
            <v-container class="character-info-container">
                <div class="ranking-container">
                    <div v-if="loading" class="ranking-wrapper">
                        <v-row justify="center" no-gutters="">
                            <div style="width: 25%;">
                                <v-card height="100%" flat color="transparent">
                                    <div class="ranking-title mt-5 ml-5" style="color: #fdbb2d;">
                                        종합랭킹
                                    </div>
                                    <div class="ranking-content mt-2 ml-5">
                                        {{ Number(characterOverallRanking.ranking).toLocaleString() }} 위
                                    </div>
                                </v-card>
                            </div>
                            <div style="width: 25%;">
                                <v-card height="100%" flat color="transparent">
                                    <div class="ranking-title mt-5 ml-5" style="color: #5CB85C;">
                                        월드랭킹
                                    </div>
                                    <div class="ranking-content mt-2 ml-5">
                                        {{ Number(characterWorldRanking.ranking).toLocaleString() }} 위
                                    </div>
                                </v-card>
                            </div>
                            <div style="width: 25%;">
                                <v-card height="100%" flat color="transparent">
                                    <div class="ranking-title mt-5 ml-5" style="color: #5393CA;">
                                        직업랭킹(월드)
                                    </div>
                                    <div class="ranking-content mt-2 ml-5">
                                        {{ Number(characterWorldClassRanking.ranking).toLocaleString() }} 위
                                    </div>
                                </v-card>
                            </div>
                            <div style="width: 25%;">
                                <v-card height="100%" flat color="transparent">
                                    <div class="ranking-title mt-5 ml-5" style="color: #6D62A1;">
                                        직업랭킹(전체)
                                    </div>
                                    <div class="ranking-content mt-2 ml-5">
                                        {{ Number(characterTotalClassRanking.ranking).toLocaleString() }} 위
                                    </div>
                                </v-card>
                            </div>
                        </v-row>
                    </div>
                </div>
                <v-row v-if="loading" class="mt-0">
                    <v-col class="mt-16" cols="6">
                        <v-list-item class="mt-5">
                            <template v-slot:prepend>
                                <img :src="characterBasicInfo.character_image" style="width: 170px;"/>
                            </template>
                            <div class="ml-2">
                                <div>
                                    <span class="character-name">{{ characterBasicInfo.character_name }}</span>
                                    <span class="world-name ml-3">
                                        <img class="ml-1" :src="worldIcon(characterBasicInfo.world_name)" style="height: 18px; position: relative; top: 4px;"/>
                                        {{ characterBasicInfo.world_name }}
                                    </span>
                                </div>
                                <div class="character-sub-info mt-2">
                                    <span>LV.{{ characterBasicInfo.character_level }}</span>
                                    <span class="divider"></span>
                                    <span>{{ characterBasicInfo.character_class }}</span>
                                    <span class="divider"></span>
                                    <span>인기도 {{ Number(characterPopularityInfo.popularity).toLocaleString() }}</span>
                                    <span v-if="characterBasicInfo.character_guild_name != null" class="divider"></span>
                                    <span>{{ characterBasicInfo.character_guild_name }}</span>
                                </div>
                                <div class="btn-wrapper mt-5" style="width: 300px;">
                                    <v-btn color="primary">최신 정보</v-btn>
                                    <v-btn class="ml-3" color="#323337" prepend-icon="mdi-star-outline">즐겨찾기</v-btn>
                                </div>
                            </div>
                        </v-list-item>
                    </v-col>
                    <v-col cols="6">
                        <div class="character-info-wrapper mt-0">
                            <div class="title">캐릭터 정보</div>
                            <div class="character-info-content pr-3">
                                <div class="row">
                                    <div class="col">전투력</div>
                                    <div class="col text-right">{{ powerLevel(characterStatInfo[42].stat_value) }}</div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col">HP</div>
                                    <div class="col text-right mr-6">{{ Number(characterStatInfo[20].stat_value).toLocaleString() }}</div>
                                    <div class="col">MP</div>
                                    <div class="col text-right">{{ Number(characterStatInfo[21].stat_value).toLocaleString() }}</div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col">STR</div>
                                    <div class="col text-right mr-6">{{ Number(characterStatInfo[16].stat_value).toLocaleString() }}</div>
                                    <div class="col">DEX</div>
                                    <div class="col text-right">{{ Number(characterStatInfo[17].stat_value).toLocaleString() }}</div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col">INT</div>
                                    <div class="col text-right mr-6">{{ Number(characterStatInfo[18].stat_value).toLocaleString() }}</div>
                                    <div class="col">LUK</div>
                                    <div class="col text-right">{{ Number(characterStatInfo[19].stat_value).toLocaleString() }}</div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col">스탯 공격력</div>
                                    <div class="col text-right mr-6">{{ Number(characterStatInfo[1].stat_value).toLocaleString() }}</div>
                                    <div class="col">데미지</div>
                                    <div class="col text-right">{{ characterStatInfo[2].stat_value }}%</div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col">최종 데미지</div>
                                    <div class="col text-right mr-6">{{ characterStatInfo[4].stat_value }}%</div>
                                    <div class="col">보스 몬스터 데미지</div>
                                    <div class="col text-right">{{ characterStatInfo[3].stat_value }}%</div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col">방어력 무시</div>
                                    <div class="col text-right mr-6">{{ characterStatInfo[5].stat_value }}%</div>
                                    <div class="col">일반 몬스터 데미지</div>
                                    <div class="col text-right">{{ characterStatInfo[32].stat_value }}%</div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col">공격력</div>
                                    <div class="col text-right mr-6">{{ Number(characterStatInfo[40].stat_value).toLocaleString() }}</div>
                                    <div class="col">크리티컬 확률</div>
                                    <div class="col text-right">{{ characterStatInfo[6].stat_value }}%</div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col">마력</div>
                                    <div class="col text-right mr-6">{{ Number(characterStatInfo[41].stat_value).toLocaleString() }}</div>
                                    <div class="col">크리티컬 데미지</div>
                                    <div class="col text-right">{{ characterStatInfo[7].stat_value }}%</div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col">재사용 대기시간 감소</div>
                                    <div class="col text-right mr-6">{{ characterStatInfo[33].stat_value }}초 / {{ characterStatInfo[34].stat_value }}%</div>
                                    <div class="col">버프 지속시간</div>
                                    <div class="col text-right">{{ characterStatInfo[30].stat_value }}%</div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col">재시용 대기시간 미적용</div>
                                    <div class="col text-right mr-6">{{ characterStatInfo[35].stat_value }}%</div>
                                    <div class="col">속성내성 무시</div>
                                    <div class="col text-right">{{ characterStatInfo[36].stat_value }}%</div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col">상태이상 추가 데미지</div>
                                    <div class="col text-right mr-6">{{ characterStatInfo[37].stat_value }}%</div>
                                    <div class="col">소환수 지속시간 증가</div>
                                    <div class="col text-right">{{ characterStatInfo[43].stat_value }}%</div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col">메소 획득량</div>
                                    <div  class="col text-right mr-6">{{ characterStatInfo[29].stat_value }}%</div>
                                    <div class="col">스타포스</div>
                                    <div class="col text-right">{{ characterStatInfo[13].stat_value }}</div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col">아이템 드롭률</div>
                                    <div class="col text-right mr-6">{{ characterStatInfo[28].stat_value }}%</div>
                                    <div class="col">아케인포스</div>
                                    <div class="col text-right">{{ Number(characterStatInfo[14].stat_value).toLocaleString() }}</div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col">추가 경험치 획득</div>
                                    <div class="col text-right mr-6">{{ characterStatInfo[39].stat_value }}%</div>
                                    <div class="col">어센틱포스</div>
                                    <div class="col text-right">{{ characterStatInfo[15].stat_value }}</div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col">방어력</div>
                                    <div class="col text-right mr-6">{{ Number(characterStatInfo[10].stat_value).toLocaleString() }}</div>
                                    <div class="col">상태이상 내성</div>
                                    <div class="col text-right">{{ characterStatInfo[8].stat_value }}</div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col">이동속도</div>
                                    <div class="col text-right mr-6">{{ characterStatInfo[11].stat_value }}%</div>
                                    <div class="col">점프력</div>
                                    <div class="col text-right">{{ characterStatInfo[12].stat_value }}%</div>
                                </div>
                                <div class="row mt-1">
                                    <div class="col">스탠스</div>
                                    <div class="col text-right mr-6">{{ characterStatInfo[9].stat_value }}%</div>
                                    <div class="col">공격 속도</div>
                                    <div class="col text-right">{{ characterStatInfo[31].stat_value }}단계</div>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- 하단 -->
        <v-container class="character-info-content-container xl">
            <div class="mb-6" style="width: 100%; background-color: white; border-radius: 5px; border: 1px solid #EEE;">
                <div class="category-btn" :class="{'active-categeory-btn' : routeUrl == 'StatAndEquip'}" id="equip-btn" @click="changeRoute('StatAndEquip')">
                    스탯/장비
                </div>
                <div class="category-btn" :class="{'active-categeory-btn' : routeUrl == 'Union'}" id="union-btn" @click="changeRoute('Union')">
                    유니온
                </div>
                <div class="category-btn" :class="{'active-categeory-btn' : routeUrl == 'SkillAndSymbol'}" id="skill-btn" @click="changeRoute('SkillAndSymbol')">
                    스킬 및 심볼
                </div>
                <div class="category-btn" :class="{'active-categeory-btn' : routeUrl == 'SubCharacter'}" id="sub-character-btn" @click="changeRoute('SubCharacter')">
                    부캐
                </div>
            </div>
            <router-view/>
        </v-container>
    </v-sheet>
</template>

<script setup>
import { getCharacterStat } from '@/api/characterInfo/characterInfo.js';
import getNumberFormat from '@/common/numberFormat.js';
import getWorldIcon from '@/common/worldIcon.js';
import { onMounted, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    const characterName = route.params;
    const routeUrl = ref('');
    // 캐릭터 기본 정보
    const characterBasicInfo = reactive({});
    // 캐릭터 인기도 정보
    const characterPopularityInfo = reactive({});
    // 캐릭터 증합 능력 정보
    const characterStatInfo = reactive({});
    // 캐릭터 종합 랭킹 정보
    const characterOverallRanking = reactive({});
    // 캐릭터 월드 랭킹 정보
    const characterWorldRanking = reactive({});
    // 캐릭터 직업 랭킹(월드)정보 
    const characterWorldClassRanking = reactive({});
    // 캐릭터 직업 랭킹(전체)정보
    const characterTotalClassRanking = reactive({});

    const loading = ref(false);

    onMounted(() => {
        routeUrl.value = route.name;
        router.push({ 
            name: route.name,
            params: {
                name: characterName.name
            }
        });
        getCharaterInfo();
    });

    watch(route,() => {
        routeUrl.value = route.name
    });

    const changeRoute = (routeName) => {
        router.push({ 
            name: routeName,
            params: {
                name: characterName.name
            } 
        })
    };

    const worldIcon = (worldName) => { 
        return getWorldIcon(worldName);
    };

    const powerLevel = (number) => {
        return getNumberFormat(number);
    }

    const getCharaterInfo = async () => {
        const params = {'characterName': characterName.name};
        try {
            const response = await getCharacterStat(params);
            Object.assign(characterBasicInfo, response.data.data.characterBasicInfo);
            Object.assign(characterPopularityInfo, response.data.data.characterPopularityInfo);
            Object.assign(characterStatInfo, response.data.data.characterStatInfo.final_stat); 

            Object.assign(characterOverallRanking, response.data.data.characterOverallRanking); 
            Object.assign(characterWorldRanking, response.data.data.characterWorldRanking); 
            Object.assign(characterWorldClassRanking, response.data.data.characterWorldClassRanking); 
            Object.assign(characterTotalClassRanking, response.data.data.characterTotalClassRanking); 
        } catch(error) {
            console.log(error);
        } finally {
            loading.value = true;
        }
    };
</script>

<style lang="scss" scoped>
    .character-info-container {
        position: absolute;
        top: 0px;
        left: 50%;
        height: 500px;
        transform: translate(-50%, 0);
        width: 55%;
    }
    .character-name {
        font-size: 30px;
        color: white;
        font-weight: bold;
    }
    .world-name {
        position: relative;
        font-size: 16px;
        bottom: 0px;
        color: white;
    }
    .character-sub-info {
        font-size: 16px;
        color: #E9EAED;
    }
    .divider {
        display: inline-block;
        height: 10px;
        width: 1px; /* 세로 선의 두께 */
        background-color: rgba(255, 255, 255, 0.5);
        margin: 0 8px; /* 세로 선과 다른 콘텐츠 사이의 간격 */
    }
    .character-info-wrapper {
        margin: 20px auto;
        height: 440px;
        background-color: rgba(0, 0, 0, 0.44);
        border-radius: 7px;
        padding: 20px;
        box-sizing: border-box;
        color: white;
    }
    .character-info-content::-webkit-scrollbar {
        width: 6px; /* 스크롤바의 너비 */
    }
    .character-info-content::-webkit-scrollbar-thumb {
        background: rgba(185, 185, 185, 0.3); /* 스크롤바의 색상 */
        border-radius: 50px;
    }
    .character-info-content {
        height: 355px; 
        overflow: hidden; 
        overflow-y: auto;
    }
    .title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        font-size: 13px;
    }
    .row:last-child {
        margin-bottom: 0;
    }
    .col {
        flex: 1;
    }
    .text-right {
        text-align: right;
    }
    .character-info-content-container {
        width: 55%;
    }
    .category-btn {
        display: inline-block;
        background-color: white; 
        padding: 10px 33.8px 10px 33.8px;
        cursor: pointer;
        color: #666A7A;
        font-weight: 600;
    }
    .active-categeory-btn {
        background-color: #5393CA;
        color: white;
    }
    .category-btn:hover {
        filter: brightness(95%);
    }
    #equip-btn {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-right: 1px solid #EEE;
    }
    #union-btn {
        border-right: 1px solid #EEE;
    }
    #skill-btn {
        border-right: 1px solid #EEE;
    }
    #sub-character-btn {
        border-right: 1px solid #EEE;
    }
    .ranking-container {
        position: absolute;
        bottom: 0px;
        width: 47.5%;
        height: 30%;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        background-color: #F4F7FA;
    }
    .ranking-wrapper {
        position: relative;
        border-radius: 5px;
        border: 1px solid #EEE;
        width: 95%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 70%;
        background-color: #FFF;
    }
    .ranking-title {
        font-size: 16px;
        font-weight: 600;
        position: relative;
    }
    .ranking-content {
        font-weight: 600;
    }
</style>

