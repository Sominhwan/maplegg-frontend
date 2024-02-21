<template>
    <v-row>
        <v-col v-for="(item, index) in unionArtifact" :key="index" cols="4">
            <v-tooltip location="bottom" content-class='custom-tooltip' transition="false">
                <template v-slot:activator="{ props }">
                    <v-card v-bind="props" class="union-artifact-container mx-auto" flat :style="{ backgroundColor: item.level === 5 ? '#EDECFB' : '#ECF5FC' }" width="170" height="170">
                        <v-card-title class="pa-2">
                            <div class="mt-3" style="display: flex; justify-content: center;">
                                <div v-for="index in item.level" :key="index" style="display: flex; margin: 1px;">
                                    <v-icon size="10" color="#303030">mdi-rhombus</v-icon>
                                </div>
                            </div>
                        </v-card-title>
                        <v-card-item> 
                            <v-row justify="center">
                                <v-col cols="auto" class="d-flex align-center">
                                    <img :src="unionArtifactCrystalIcon(item.name, item.level)" width="100"/>
                                </v-col>
                            </v-row>
                        </v-card-item>
                    </v-card>
                </template>
                <v-card id="item-container" width="300" flat>
                    <v-row justify="start" no-gutters class="ma-2">
                        <v-col cols="auto">
                            <div style="color: white">{{ item.name }}</div>
                            <div class="mt-2" style="color: white">
                                <div>(Lv. {{ item.level }}) {{ item.crystal_option_name_1 }}</div>
                                <div>(Lv. {{ item.level }}) {{ item.crystal_option_name_2 }}</div>
                                <div>(Lv. {{ item.level }}) {{ item.crystal_option_name_3 }}</div>
                            </div>
                            <div class="mt-2" style="color: white">
                                {{ expireTimeFormat(item.date_expire) }}까지 능력치 적용
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-tooltip> 
        </v-col>            
    </v-row>  
</template>

<script setup>
import getUnionArtifactCrystalIcon from '@/common/unionArtifactCrystalIcon.js';
    defineProps({
        unionArtifact: Object
    })
    // 유니온 아티팩트 아이콘
    const unionArtifactCrystalIcon = (unionArtifactCrystalName, level) => {
        return getUnionArtifactCrystalIcon(unionArtifactCrystalName, level);
    }
    // 유니온 유효기간 시간 포맷
    const expireTimeFormat =  (date) => {
        const dateoObject = new Date(date);
        const year = dateoObject.getFullYear();
        const month = dateoObject.getMonth() + 1; 
        const day = dateoObject.getDate();
        const hours = dateoObject.getHours();
        const minutes= dateoObject.getMinutes();
        // 포맷된 문자열 생성
        const formattedExpireDate = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
        return formattedExpireDate;
    };
</script>

<style lang="scss" scoped>
    .union-artifact-container {
        cursor: pointer;
    }
    #item-container {
        border: 1px solid #F5F5F5;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.8);
    }
</style>

