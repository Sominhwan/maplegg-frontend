<template>
    <v-row v-if="loading" justify="space-between">
        <v-col>
            <v-card class="hexamatrix-card" flat>
                <v-card-title style="font-size: 16px; border-bottom: 1px solid #EEE; font-weight: bold;">6차 스킬</v-card-title>
                <v-card-item class="ma-5">
                    <v-row>
                        <v-col cols="6">
                            <div class="wrap">
                                <div v-for="i in 7" :key="i" class="hex">
                                    <div class="hex-inner">
                                    <div class="content">
                                        <div class="hexa-skill-container">
                                            <img class="hexa-img" src="@/assets/skill/hexaSkill/adventurer/archMage-ice/adventurer-archMage-brizard.png" style="width: 50px;"/>  
                                            <div class="skill-level">13</div>
                                        </div>               
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div class="wrap">
                                <v-list>
                                    <v-list-item class="mb-1" width="350" style="background-color: #E8EDEF;">
                                        <v-list-item-subtitle>MAIN STAT</v-list-item-subtitle>
                                        <v-list-item-title v-if="hexamatrixStat.character_hexa_stat_core && hexamatrixStat.character_hexa_stat_core.length > 0">
                                            <span>Lv.{{ hexamatrixStat.character_hexa_stat_core[0].main_stat_level }}</span>
                                            {{ hexamatrixStat.character_hexa_stat_core[0].main_stat_name }}
                                        </v-list-item-title>
                                        <v-list-item-title v-else>
                                            -
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item class="mb-1" width="350" style="background-color: #E8EDEF;">
                                        <v-list-item-subtitle>ADDITIONAL STAT</v-list-item-subtitle>
                                        <v-list-item-title v-if="hexamatrixStat.character_hexa_stat_core && hexamatrixStat.character_hexa_stat_core.length > 0">
                                            <span>Lv.{{ hexamatrixStat.character_hexa_stat_core[0].sub_stat_level_1 }}</span>
                                            {{ hexamatrixStat.character_hexa_stat_core[0].sub_stat_name_1 }}
                                        </v-list-item-title>
                                        <v-list-item-title v-else>
                                            -
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item width="350" style="background-color: #E8EDEF;">
                                        <v-list-item-subtitle>ADDITIONAL STAT</v-list-item-subtitle>
                                        <v-list-item-title v-if="hexamatrixStat.character_hexa_stat_core && hexamatrixStat.character_hexa_stat_core.length > 0">
                                            <span>Lv.{{ hexamatrixStat.character_hexa_stat_core[0].sub_stat_level_2 }}</span>
                                            {{ hexamatrixStat.character_hexa_stat_core[0].sub_stat_name_2 }}
                                        </v-list-item-title>
                                        <v-list-item-title v-else>
                                            -
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
    <v-row v-if="loading" justify="space-between">
        <v-col>
            <v-card class="vmatrix-card" flat>
                <v-card-title style="font-size: 16px; border-bottom: 1px solid #EEE; font-weight: bold;">5차 스킬</v-card-title>
                <v-card-item class="ma-5">
                    <v-row>
                        <v-col cols="12">
                            <div class="vmatrix-wrap">
                                <div v-for="i in 19" :key="i" class="vmatrix ">
                                    <div class="vmatrix-inner">
                                    <div class="vmatrix-content">
                                        <div class="hexa-skill-container">
                                            <img class="hexa-img" src="@/assets/skill/hexaSkill/adventurer/archMage-ice/adventurer-archMage-brizard.png" style="width: 50px;"/>  
                                            <div class="skill-level">13</div>
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
import { getCharacterSkillAndSymbol } from '@/api/characterInfo/skillAndSymbol.js';
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
    const route = useRoute();
    const characterName = route.params;
    const loading = ref(false);
    // 6차 스킬
    const hexamatrix = reactive({});
    // 6차 스텟
    const hexamatrixStat = reactive({});

    onMounted(() => {
        console.log(characterName);
        characterUnion();
    });


    const characterUnion = async () => {
        const params = { 'characterName': characterName.name };
        try{
            const response = await getCharacterSkillAndSymbol(params);
            Object.assign(hexamatrix, response.data.data.hexamatrix);
            Object.assign(hexamatrixStat, response.data.data.hexamatrixStat);
            console.log(response.data.data);
        } catch (error) {
            console.log(error); 
        } finally {
            loading.value = true;
        }
    };
</script>

<style scoped>
    .hexamatrix-card {
        border: 1px solid #EEE;
    }
    .vmatrix-card {
        border: 1px solid #EEE;
    }
    .wrap {
        width: 60%;
        margin:40px auto;
        display: flex;
        flex-wrap: wrap;
    }
    .hex {
        width: 25%;
        margin-bottom: 1.8%;
        position: relative;
        visibility: hidden;
    }
    .hex:nth-of-type(7n+5) {
        margin-left: 12.5%;
    }
    .hex::after {
        content: '';
        display: block;
        padding-top: 30%;
        padding-bottom: 50%;
    }
    .hex-inner {
        position: absolute;
        width: 99%;
        padding-bottom: 114.6%;
        overflow: hidden;
        visibility: hidden;
        transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    }
    .hex-inner * {
        position: absolute;
        visibility: visible;
    }
    .content {
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        transform: skewY(-30deg) rotate3d(0,0,1,60deg);
        background: #02b4cd80;
        justify-content: center;
        align-items: center;
    }
    .content p {
        font-size: 3vw;
        text-align: center;
        color: #fff;
    }
    .hexa-skill-container {
        display: flex; 
        align-items: center; 
        justify-content: center;
    }
    @media (max-width: 1920px) {
        .hexa-img {  
            width: 30px !important; 
        }
    }
    @media (max-width: 1280px) {
        .hexa-img {
            width: 20px !important;
        }
    }
    @media (max-width: 720px) {
        .hexa-img {
            width: 10px !important; 
        }
    }
    .skill-level {
        background-color: #000;
        text-align: center;
        width: 30px;
        border-radius: 20%;
        color: #FFF;
        top: 13px;
        font-size: 12px;
    }
    @media (max-width: 1920px) {
        .skill-level {  
            width: 20px !important;
            top: 5px;
            font-size: 8px;
        }
    }
    @media (max-width: 1280px) {
        .skill-level {
            width: 15px !important;
            top: 5px;
            font-size: 6px;
        }
    }
    @media (max-width: 720px) {
        .skill-level {
            width: 10px !important;
            top: 0px;
            font-size: 4px;
        }
    }
    .vmatrix-wrap {
        width: 70%;
        margin:40px auto;
        display: flex;
        flex-wrap: wrap;
    }
    .vmatrix {
        width: 10%;
        margin-bottom: 0.8%;
        position: relative;
        visibility: hidden;
    }
    .vmatrix:nth-of-type(0n+11) {
        margin-left: 5.0%;
    }
    .vmatrix::after {
        content: '';
        display: block;
        padding-top: 30%;
        padding-bottom: 50%;
    }
    .vmatrix-inner {
        position: absolute;
        width: 99%;
        padding-bottom: 114.6%;
        overflow: hidden;
        visibility: hidden;
        transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    }
    .vmatrix-inner * {
        position: absolute;
        visibility: visible;
    }
    .vmatrix-content {
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        transform: skewY(-30deg) rotate3d(0,0,1,60deg);
        background: #02b4cd80;
        justify-content: center;
        align-items: center;
    }
    .vmatrix-content p {
        font-size: 3vw;
        text-align: center;
        color: #fff;
    }
</style>