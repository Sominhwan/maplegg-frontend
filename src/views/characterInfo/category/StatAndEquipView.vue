<template>
    <v-row v-if="loading">
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
                <v-card-title class="cody-card" style="font-size: 16px; font-weight: bold; color: white; background-color: rgba(50, 51, 55, 0.975);">
                    <v-row justify="space-between">
                        <v-col cols="auto">
                        <span style="color: white;">{{ changeCodyText }}</span>
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
            <v-card class="equip-card" flat>
                <v-card-title class="cody-card" style="font-size: 16px; font-weight: bold; color: white; background-color: rgba(50, 51, 55, 0.975);">펫</v-card-title>
                <v-card-item>

                </v-card-item>
            </v-card>
        </v-col>
        <v-col cols="auto">
            <v-card class="equip-card" flat>
                <v-card-title class="cody-card" style="font-size: 16px; font-weight: bold; color: white; background-color: rgba(50, 51, 55, 0.975);">안드로이드</v-card-title>
                <v-card-item>

                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { getCharacterEquipment } from '@/api/characterInfo/statAndEquip.js';
import { getPotentialImageOptionGradeColor, getPotentialImageOptionGradeText, getPotentialOptionGradeColor } from '@/common/potentialOptionGradeColor.js';
import getStarforceMaxEnhancement from '@/common/starforceMaxEnhancement.js';
import AndroidToolTip from '@/components/characterInfo/AndroidToolTip.vue';
import CashItemEquipmentToolTip from '@/components/characterInfo/CashItemEquipmentToolTip.vue';
import CodyPresetEquipmentToolTip from '@/components/characterInfo/CodyPresetEquipmentToolTip.vue';
import ItemEquipmentToolTip from '@/components/characterInfo/ItemEquipmentToolTip.vue';
import { computed, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    components: {
        ItemEquipmentToolTip,
        AndroidToolTip,
        CashItemEquipmentToolTip,
        CodyPresetEquipmentToolTip
    },
    setup() {
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
        const characterPetEquipment = reactive({});

        onMounted(() => {
            characterEquipment();
        });
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

        const characterEquipment = async () => {
            const params = { 'characterName': characterName.name };
            try {
                const response = await getCharacterEquipment(params);
                Object.assign(characterItemEquipment, response.data.data.characterItemEquipment.item_equipment);
                Object.assign(characterAndroidEquipment, response.data.data.characterAndroidEquipment);
                Object.assign(characterCashItemEquipment, response.data.data.characterCashitemEquipment.cash_item_equipment_base);
                Object.assign(characeterCashItemEquipmentPreset1, response.data.data.characterCashitemEquipment.cash_item_equipment_preset_1);
                Object.assign(characeterCashItemEquipmentPreset2, response.data.data.characterCashitemEquipment.cash_item_equipment_preset_2);
                Object.assign(characeterCashItemEquipmentPreset3, response.data.data.characterCashitemEquipment.cash_item_equipment_preset_3);
                Object.assign(characterPetEquipment, response.data.data.characterPetEquipment);
                console.log(response.data.data.characterPetEquipment);
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
                // 펫
                
            } catch(error) {
                console.log(error);
            } finally {
                loading.value = true;
            }   
        };

        return {
            loading,
            characterItemEquipment,
            item1,
            item1Location,
            item2,
            item2Location,
            item3,
            item3Location,
            item4,
            item4Location,
            item5,
            item5Location,
            item6,
            item6Location,
            characterAndroidEquipment,
            androidItemLocation,
            characterCashItemEquipment,
            cashItem1,
            cashItem1Location,
            cashItem2,
            cashItem2Location,
            cashItem3,
            cashItem3Location,
            cashItem4,
            cashItem4Location,
            cashItem5,
            cashItem5Location,
            cashItem6,
            cashItem6Location,
            potentialOptionGradeColor,
            potentialImageOptionGradeColor,
            potentialImageOptionGradeText,
            starforceMaxEnhancement,
            changeCodyText,
            changeText,
            changeBtnText,
            codyTextFlag,
            presetBtn1Flag,
            presetBtn2Flag,
            presetBtn3Flag,
            selectPresetBtn1Flag,
            selectPresetBtn2Flag,
            selectPresetBtn3Flag,
            persetItem1,
            presetItem1Location,
            persetItem2,
            presetItem2Location,
            persetItem3,
            presetItem3Location,
            persetItem4,
            presetItem4Location,
            persetItem5,
            presetItem5Location,
            persetItem6,
            presetItem6Location,
        }
    }
}
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

