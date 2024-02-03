<template>
    <div style="display: flex;">
        <v-tooltip location="bottom" content-class='custom-tooltip' transition="false">
        <template v-slot:activator="{ props }">
            <div v-bind="props" class="equip-container" :style="{ position: 'relative', left: `${itemLocation}px`}">
                <img v-if="item != null" :src="item.pet_1_appearance_icon"/>  
            </div> 
        </template>
        <v-card v-if="item != null" id="item-container" width="300" flat>
            <v-row justify="center" no-gutters class="mt-2">
                <v-col cols="auto" class="text-center">
                    <div style="color: white">
                        {{ item.pet_1_nickname }} ({{ item.pet_1_name }})
                    </div>
                    <div class="mt-0" style="color:#F7D300; font-size: 12px;">
                        <span>
                            교환 불가
                        </span>
                        <div v-if="item.pet_1_date_expire != null" style="color: white;">
                            마법의 시간: {{ expireTimeFormat(item.pet_1_date_expire) }}까지
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row id="item-image-container" class="mt-2" no-gutters>
                <v-col cols="auto" class="ma-3">
                    <div class="mr-2" style="display: flex;">
                        <div class="item-image-wrapper mr-2">
                            <img id="item-image" :src="item.pet_1_appearance_icon"/>
                        </div>     
                        <span class="mr-2" style="font-size: 11px; color:white">
                            <span style="color:#F7D300;">
                                description
                            </span>
                        </span>               
                    </div>
                </v-col>
            </v-row>
            <!-- <v-row class="equip-option" no-gutters>
                <v-col class="ml-3 mt-1 mb-1" style="font-size: 12px; color:white">
                    <div>장비분류 : 안드로이드</div>
                    <div>등급 : {{ item.android_grade }}</div>
                    <div>잠재능력 설정 불가</div>
                </v-col>
            </v-row>
            <v-row class="potential_option" no-gutters>
                <v-col class="mt-3 mb-3" style="font-size: 12px; color: white;">
                    <div class="ml-3 mr-3" style="display: flex; align-items: center;">
                        {{ item. android_description }}
                    </div>
                </v-col>
            </v-row> -->
        </v-card>
        </v-tooltip>    
        <v-tooltip location="bottom" content-class='custom-tooltip' transition="false">
            <template v-slot:activator="{ props }">
                <div v-bind="props" class="equip-container" :style="{ position: 'relative', left: '10px'}">
                    <img v-if="item != null" :src="item.pet_1_equipment.item_icon"/>  
                </div> 
            </template>
            <v-card v-if="item != null" id="item-container" width="300" flat>
                <v-row justify="center" no-gutters class="mt-2">
                    <v-col cols="auto" class="text-center">
                        <div style="color: white">
                            {{ item.pet_1_name }}
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-tooltip> 
        <!-- 버프 스킬 자동 -->
        <div class="equip-container" :style="{ position: 'relative', left: '20px'}">
            <img style="width: 80%;" v-if="item != null" :src="item.pet_1_auto_skill.skill_1_icon"/>  
        </div> 
        <div class="equip-container" :style="{ position: 'relative', left: '30px'}">
            <img style="width: 80%;" v-if="item != null" :src="item.pet_1_auto_skill.skill_2_icon"/>  
        </div> 
    </div>
</template>

<script>
import { getPotentialImageOptionGradeColor, getPotentialImageOptionGradeText, getPotentialOptionGradeColor } from '@/common/potentialOptionGradeColor.js';
import getStarforceMaxEnhancement from '@/common/starforceMaxEnhancement.js';
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        itemLocation: {
            type: Object,
            required: false
        }
    },
    setup() {
        const potentialOptionGradeColor = (grade) => {
            return getPotentialOptionGradeColor(grade);
        };
        
        const potentialImageOptionGradeColor = (grade) => {
            return getPotentialImageOptionGradeColor(grade);
        };

        const potentialImageOptionGradeText = (grade) => {
            return getPotentialImageOptionGradeText(grade);
        };

        const starforceMaxEnhancement = (baseEquipmentLevel, kind) => {
            return getStarforceMaxEnhancement(baseEquipmentLevel, kind);
        };

        const expireTimeFormat =  (date) => {
            const dateoObject = new Date(date);
            const year = dateoObject.getFullYear();
            const month = dateoObject.getMonth() + 1; 
            const day = dateoObject.getDate();
            const hours = dateoObject.getHours();
            // 포맷된 문자열 생성
            const formattedExpireDate = `${year}년 ${month}월 ${day}일 0${hours}시`;
            return formattedExpireDate;
        };

        return {
            potentialOptionGradeColor,
            potentialImageOptionGradeColor,
            potentialImageOptionGradeText,
            starforceMaxEnhancement,
            expireTimeFormat
        }
    }
}
</script>

<style lang="scss" scoped>
    .equip-container {
        position: relative;
        background-color: rgba(136, 136, 136, 0.5);
        height: 50px;
        width: 50px;
        display: flex;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    #item-container {
        border: 1px solid #F5F5F5;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.8);
    }
    .item-image-wrapper {
        border-radius: 5px;
        background: rgb(244,247,250);
        background: linear-gradient(0deg, rgba(244,247,250,1) 0%, rgba(83,83,83,1) 100%);
        height: 60px;
        width: 60px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    #item-image {
        height: 60px;
        width: 60px;
        padding: 5px;
    }
    .equip-class {
        border: 1px solid rgba(128, 128, 128, 0.7);
        border-radius: 5px;
        color:white; 
        font-size: 10px; 
        position: relative; 
        width: 275px;
        display: flex;
        justify-content: space-around;
    }
    .equip-option {
        border-bottom: 1px dashed rgba(128, 128, 128, 0.7);
    }
    .potential_option {
        border-bottom: 1px dashed rgba(128, 128, 128, 0.7);
    }
</style>

