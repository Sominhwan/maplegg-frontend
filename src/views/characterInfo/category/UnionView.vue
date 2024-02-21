<template>
    <v-row v-if="loading" justify="space-between">
        <v-col>
            <v-card class="union-artifact-card" flat>
                <v-card-title style="font-size: 16px; border-bottom: 1px solid #EEE; font-weight: bold;">유니온 아티팩트</v-card-title>
                <v-card-item class="equip-container ma-5">
                    <v-row>
                        <v-col cols="7">
                            <UnionArtifactToolTip :union-artifact="unionArtifact.union_artifact_crystal"/>
                        </v-col>
                        <v-col cols="5">
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
                            <div class="mt-7">
                                아티팩트 효과
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
                <v-card-title style="font-size: 16px; font-weight: bold;">유니온 공격대</v-card-title>
                <v-card-item class="equip-container" style="border-top: 1px solid #EEE;">
                    <v-row>
                        <v-col cols="8">
                            유니온 공격대 이미지
                        </v-col>
                        <v-col cols="4">
                            유니온 등급 
                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { getCharacterUnion } from '@/api/characterInfo/union.js';
import getUnionGrade from '@/common/unionGrade';
import getUnionIcon from '@/common/unionIcon.js';
import UnionArtifactToolTip from '@/components/union/UnionArtifactToolTip.vue';
import { onMounted, reactive, ref } from 'vue';
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
</style>