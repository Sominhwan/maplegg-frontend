<template>
    <v-row v-if="loading" justify="space-between">
        <v-col>
            <v-card class="union-artifact-card" flat>
                <v-card-title style="font-size: 16px; border-bottom: 1px solid #EEE; font-weight: bold;">유니온 아티팩트</v-card-title>
                <v-card-item class="ma-5">
                    <v-row>
                        <v-col cols="6">
                            <UnionArtifactToolTip :union-artifact="unionArtifact.union_artifact_crystal"/>
                        </v-col>
                        <v-col cols="6">
                            <div class="union-grade">{{ unionGrade(union.union_level) }}</div>
                            <div style="display: flex; justify-content: space-between;">
                                <img class="mt-5" :src="unionIcon(union.union_level)" style="width: 110px; height: 110px;"/>
                                <div class="mt-5">
                                    <div style="font-size: 18px; text-align: right;">TOTAL LEVEL</div>
                                    <div style="text-align: right;">{{ union.union_level }}</div>
                                    <div class="mt-2" style="font-size: 18px; text-align: right;">ARTIFACT LEVEL</div>
                                    <div style="text-align: right;">{{ union.union_artifact_level }}</div>
                                </div>
                            </div>
                            <div class="mt-6">
                                <div class="union-grade">아티팩트 효과</div>
                                <div class="union-artifact-effect-content mt-5">
                                    <div v-for="(item) in unionArtifact.union_artifact_effect" :key="item">
                                       <span style="font-weight: bold;">
                                        Lv. {{ item.level }}
                                       </span>
                                        {{ item.name }}
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
    <v-row v-if="loading" justify="space-between">
        <v-col>
            <v-card class="union-raider-card" flat>
                <v-card-title style="font-size: 16px; border-bottom: 1px solid #EEE; font-weight: bold;">유니온 공격대</v-card-title>
                <v-card-item class="ma-5">
                    <v-row>
                        <v-col cols="6">
                            <div>
                                <div class="union-grade">유니온 캐릭터</div>
                                <div class="union-raider-character-container mt-5">
                                    <div v-for="(item, index) in sortUnionRaiderBlock" :key="index" style="display: flex; align-items: center;">
                                        <img :src="characterIcon(item.block_class)" width="90"/>
                                        <div class="item-details">
                                            <div v-if="item.block_class !== '모바일 캐릭터'">{{ item.block_class }}</div>
                                            <div v-if="item.block_class === '모바일 캐릭터'">메이플M</div>
                                            <div>Lv.{{ item.block_level }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div>
                                <div class="union-grade">공격대 효과</div>
                                <div style="display: flex;">
                                    <div>
                                        <div class="mt-5" style="font-weight: bold; font-size: 17px;">공격대원 효과</div>
                                        <div class="union-raider-stat-content mt-3 mr-3 mb-3">
                                        <div class="mr-3" v-for="(item) in unionRaider.union_raider_stat" :key="item">
                                            {{ item }}
                                        </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="mt-5" style="font-weight: bold; font-size: 17px;">공격대 점령 효과</div>
                                        <div class="union-occupied-stat-content mt-3 mr-3 mb-3">
                                            <div class="mr-3" v-for="(item) in unionRaider.union_occupied_stat" :key="item">
                                                {{ item }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { getCharacterUnion } from '@/api/characterInfo/union.js';
import getCharacterIcon from '@/common/characterIcon.js';
import getUnionGrade from '@/common/unionGrade';
import getUnionIcon from '@/common/unionIcon.js';
import UnionArtifactToolTip from '@/components/union/UnionArtifactToolTip.vue';
import { computed, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

    const route = useRoute();
    const characterName = route.params;
    const loading = ref(false);
    // 유니온 
    const union = reactive({});
    // 유니온 아티팩트
    const unionArtifact = reactive({});
    // 유니온 공격대
    const unionRaider = reactive({});
    // 유니온 레이드 정렬
    const sortUnionRaiderBlock = computed(() => {
        const sortedUnionRaiderBlock = [...unionRaider.union_block].sort((a, b) => b.block_level - a.block_level);
        return sortedUnionRaiderBlock;
    });

    onMounted(() => {
        console.log(characterName);
        characterUnion();
    });
    // 유니온 등급 아이콘
    const unionIcon = (unionLevel) => {
      return getUnionIcon(unionLevel);
    } ;
    const unionGrade = (unionLevel) => {
      return getUnionGrade(unionLevel);
    };
    // 캐릭터 아이콘
    const characterIcon = (characterClass) => {
        return getCharacterIcon(characterClass);
    }

    const characterUnion = async () => {
        const params = { 'characterName': characterName.name };
        try{
            const response = await getCharacterUnion(params);
            console.log(response.data.data);
            Object.assign(union, response.data.data.union);
            Object.assign(unionArtifact, response.data.data.unionArtifact);
            Object.assign(unionRaider, response.data.data.unionRaider);
        } catch (error) {
            console.log(error); 
        } finally {
            loading.value = true;
        }
    };
</script>

<style scoped>
    .union-artifact-card {
        border: 1px solid #EEE;
    }
    .union-raider-card {
        border: 1px solid #EEE;
    }
    .union-grade {
        font-size: 25px;
        text-align: center;
        color: #FFF;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 10px #110B02, 0 0 10px #110B02, 0 0 10px #110B02, 0 0 10px #110B02, 0 0 3px #110B02;
    }
    .union-artifact-effect-content::-webkit-scrollbar {
        width: 6px; /* 스크롤바의 너비 */
    }
    .union-artifact-effect-content::-webkit-scrollbar-thumb {
        background: rgba(185, 185, 185, 0.3); /* 스크롤바의 색상 */
        border-radius: 50px;
    }
    .union-artifact-effect-content {
        overflow: hidden; 
        overflow-y: auto;
    }
    .union-raider-stat-content::-webkit-scrollbar {
        width: 6px; /* 스크롤바의 너비 */
    }
    .union-raider-stat-content::-webkit-scrollbar-thumb {
        background: rgba(185, 185, 185, 0.3); /* 스크롤바의 색상 */
        border-radius: 50px;
    }
    .union-raider-stat-content {
        /* height: 355px; */
        overflow: hidden; 
        overflow-y: auto;
    }
    .union-occupied-stat-content::-webkit-scrollbar {
        width: 6px; /* 스크롤바의 너비 */
    }
    .union-occupied-stat-content::-webkit-scrollbar-thumb {
        background: rgba(185, 185, 185, 0.3); /* 스크롤바의 색상 */
        border-radius: 50px;
    }
    .union-occupied-stat-content {
        height: 355px;
        overflow: hidden; 
        overflow-y: auto;
    }
    .item-details {
        margin-left: 10px; /* 이미지와 세부 사항 사이 간격 */
        display: flex;
        flex-direction: column; /* 세부 사항을 세로로 나열 */
    }
    .union-raider-character-container {
        align-items: center;  
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 3개의 컬럼으로 구성 */
        grid-gap: 10px; /* 그리드 아이템 사이의 간격 */
    }
</style>