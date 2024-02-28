<template>
    <v-row v-if="loading" justify="space-between">
        <v-col>
            <v-card class="hexamatrix-card" flat>
                <v-card-title style="font-size: 16px; border-bottom: 1px solid #EEE; font-weight: bold;">6차 스킬</v-card-title>
                <v-card-item class="ma-5">
                    <v-row>
                        <v-col cols="6">
                            <div class="wrap">
                                <div class="hex">
                                    <div class="hex-inner">
                                    <div class="content">
                                        <div>HEXA 1</div>
                                    </div>
                                    </div>
                                </div>
                                <div class="hex">
                                    <div class="hex-inner">
                                    <div class="content">
                                        <div>HEXA 2</div>
                                    </div>
                                    </div>
                                </div>
                                <div class="hex">
                                    <div class="hex-inner">
                                    <div class="content">
                                        <div>HEXA 3</div>
                                    </div>
                                    </div>
                                </div>
                                <div class="hex">
                                    <div class="hex-inner">
                                    <div class="content">
                                        <div>HEXA 4</div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div class="wrap">
                                <v-list>
                                    <v-list-item class="mb-1" width="250" style="background-color: #E8EDEF;">
                                        테스트
                                    </v-list-item>
                                    <v-list-item class="mb-1" width="250" style="background-color: #E8EDEF;">
                                        테스트
                                    </v-list-item>
                                    <v-list-item width="250" style="background-color: #E8EDEF;">
                                        테스트
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
                        <v-col cols="6">

                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { getCharacterSkillAndSymbol } from '@/api/characterInfo/skillAndSymbol.js';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
    const route = useRoute();
    const characterName = route.params;
    const loading = ref(true);


    onMounted(() => {
        console.log(characterName);
        characterUnion();
    });


    const characterUnion = async () => {
        const params = { 'characterName': characterName.name };
        try{
            const response = await getCharacterSkillAndSymbol(params);
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
        width: 100%;
        margin: 30px auto;
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
        padding-top: 50%;
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
</style>