<template>
    <v-tooltip v-for="(item, index) in equipItem" :key="item.item_equipment_slot" location="bottom" content-class='custom-tooltip' transition="false">
        <template v-slot:activator="{ props }">
            <img class="equip" 
                v-bind="props" 
                :src="item.item_icon" 
                :style="{ position: 'relative', left: `${index *70}px`, border: `1px solid ${potentialImageOptionGradeColor(item.potential_option_grade)}` }"
            />   
        </template>
        <v-card id="item-container" width="300" flat>
            <v-row justify="center" no-gutters>
                <v-col cols="auto" class="mt-1 text-center">
                    <div>
                        <span class="mr-2">
                            <span v-for="index in 5" :key="index">
                                <v-icon v-if="parseInt(item.starforce) > index - 1" size="12" color="#F7D300">mdi-star</v-icon>
                                <v-icon v-else size="12" color="#778087">mdi-star</v-icon>
                            </span>
                        </span>
                        <span class="mr-2">
                            <span v-for="index in 5" :key="index">
                                <v-icon v-if="parseInt(item.starforce) > index + 4" size="12" color="#F7D300">mdi-star</v-icon>
                                <v-icon v-else size="12" color="#778087">mdi-star</v-icon>
                            </span>
                        </span>
                        <span>
                            <span v-for="index in 5" :key="index">
                                <v-icon v-if="parseInt(item.starforce) > index + 9" size="12" color="#F7D300">mdi-star</v-icon>
                                <v-icon v-else size="12" color="#778087">mdi-star</v-icon>
                            </span>
                        </span>
                    </div>
                    <div style="position: relative; bottom: 5px;">
                        <span class="mr-2">
                            <span v-for="index in 5" :key="index">
                                <v-icon v-if="parseInt(item.starforce) > index + 14" size="12" color="#F7D300">mdi-star</v-icon>
                                <v-icon v-else size="12" color="#778087">mdi-star</v-icon>
                            </span>
                        </span>
                        <span>
                            <span v-for="index in 5" :key="index">
                                <v-icon v-if="parseInt(item.starforce) > index + 19" size="12" color="#F7D300">mdi-star</v-icon>
                                <v-icon v-else size="12" color="#778087">mdi-star</v-icon>      
                            </span>
                        </span>
                    </div>
                </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
                <v-col cols="auto" class="text-center">
                    <div style="color: white">
                        {{ item.item_name }} <span v-if="item.scroll_upgrade !== '0'">(+{{ item.scroll_upgrade }})</span>
                    </div>
                    <div v-if="item.potential_option_grade !== null" style="color: white; font-size: 11px;">
                        ({{ item.potential_option_grade }} 아이템)
                    </div>
                </v-col>
            </v-row>
            <v-row id="item-image-container" class="mt-2" no-gutters>
                <v-col cols="auto" class="ma-3">
                    <div style="display: flex; align-items: center;">
                        <img id="item-image" :src="item.item_icon" :style="{ border: `1px solid ${potentialImageOptionGradeColor(item.potential_option_grade)}` }"/>
                        <span class="ml-2" style="font-size: 11px; color:white">
                            <span style="color:#F7D300;">
                                · REQ LEV : {{ parseInt(item.item_base_option.base_equipment_level) - parseInt(item.item_total_option.equipment_level_decrease) }}
                            </span>
                            <span v-if="item.item_total_option.equipment_level_decrease !== '0'">
                                <span>
                                    ({{ item.item_base_option.base_equipment_level }}
                                </span>
                                <span style="color:#F7D300;">
                                    -{{ item.item_total_option.equipment_level_decrease }}
                                </span>
                                <span>)</span>
                            </span>
                        </span>                                           
                    </div>
                    <div class="equip-class mt-3 pa-1">
                        <span>초보자</span>
                        <span>전사</span>
                        <span>마법사</span>
                        <span>궁수</span>
                        <span>도적</span>
                        <span>해적</span>
                    </div>
                </v-col>
            </v-row>
            <v-row class="equip-option" no-gutters>
                <v-col class="ml-3 mt-1 mb-1" style="font-size: 12px; color:white">
                    <div>장비분류 : {{ item.item_equipment_part }}</div>
                    <div v-if="item.item_total_option.str !== '0'">
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.str) + parseInt(item.item_etc_option.str) + parseInt(item.item_starforce_option.str) !== 0 }">
                            STR : +{{ item.item_total_option.str }} 
                        </span>
                        <span v-if="parseInt(item.item_add_option.str) + parseInt(item.item_etc_option.str) + parseInt(item.item_starforce_option.str) !== 0">
                        (<span>{{ item.item_base_option.str }}</span>
                            <span class="item-add-option" v-if="item.item_add_option.str !== '0'"> +{{ item.item_add_option.str }}</span>
                            <span class="item-etc-option" v-if="item.item_etc_option.str !== '0'"> +{{ item.item_etc_option.str }}</span>
                            <span class="item-starforce-option" v-if="item.item_starforce_option.str !== '0'"> +{{ item.item_starforce_option.str }}</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.dex !== '0'">
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.dex) + parseInt(item.item_etc_option.dex) + parseInt(item.item_starforce_option.dex) !== 0 }">
                            DEX : +{{ item.item_total_option.dex }} 
                        </span>
                        <span v-if="parseInt(item.item_add_option.dex) + parseInt(item.item_etc_option.dex) + parseInt(item.item_starforce_option.dex) !== 0">
                        (<span>{{ item.item_base_option.dex }}</span>
                            <span class="item-add-option" v-if="item.item_add_option.dex !== '0'"> +{{ item.item_add_option.dex }}</span>
                            <span class="item-etc-option" v-if="item.item_etc_option.dex !== '0'"> +{{ item.item_etc_option.dex }}</span>
                            <span class="item-starforce-option" v-if="item.item_starforce_option.dex !== '0'"> +{{ item.item_starforce_option.dex }}</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.int !== '0'">
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.int) + parseInt(item.item_etc_option.int) + parseInt(item.item_starforce_option.int) !== 0 }">
                            INT : +{{ item.item_total_option.int }} 
                        </span>
                        <span v-if="parseInt(item.item_add_option.int) + parseInt(item.item_etc_option.int) + parseInt(item.item_starforce_option.int) !== 0">
                        (<span>{{ item.item_base_option.int }}</span>
                            <span class="item-add-option" v-if="item.item_add_option.int !== '0'"> +{{ item.item_add_option.int }}</span>
                            <span class="item-etc-option" v-if="item.item_etc_option.int !== '0'"> +{{ item.item_etc_option.int }}</span>
                            <span class="item-starforce-option" v-if="item.item_starforce_option.int !== '0'"> +{{ item.item_starforce_option.int }}</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.luk !== '0'">
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.luk) + parseInt(item.item_etc_option.luk) + parseInt(item.item_starforce_option.luk) !== 0 }">
                            LUK : +{{ item.item_total_option.luk }} 
                        </span>
                        <span v-if="parseInt(item.item_add_option.luk) + parseInt(item.item_etc_option.luk) + parseInt(item.item_starforce_option.luk) !== 0">
                        (<span>{{ item.item_base_option.luk }}</span>
                            <span class="item-add-option" v-if="item.item_add_option.luk !== '0'"> +{{ item.item_add_option.luk }}</span>
                            <span class="item-etc-option" v-if="item.item_etc_option.luk !== '0'"> +{{ item.item_etc_option.luk }}</span>
                            <span class="item-starforce-option" v-if="item.item_starforce_option.luk !== '0'"> +{{ item.item_starforce_option.luk }}</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.max_hp !== '0'">
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.max_hp) + parseInt(item.item_etc_option.max_hp) + parseInt(item.item_starforce_option.max_hp) !== 0 }">
                            최대 HP : +{{ item.item_total_option.max_hp }} 
                        </span>
                        <span v-if="parseInt(item.item_add_option.max_hp) + parseInt(item.item_etc_option.max_hp) + parseInt(item.item_starforce_option.max_hp) !== 0">
                        (<span>{{ item.item_base_option.max_hp }}</span>
                            <span class="item-add-option" v-if="item.item_add_option.max_hp !== '0'"> +{{ item.item_add_option.max_hp }}</span>
                            <span class="item-etc-option" v-if="item.item_etc_option.max_hp !== '0'"> +{{ item.item_etc_option.max_hp }}</span>
                            <span class="item-starforce-option" v-if="item.item_starforce_option.max_hp !== '0'"> +{{ item.item_starforce_option.max_hp }}</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.max_mp !== '0'">
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.max_mp) + parseInt(item.item_etc_option.max_mp) + parseInt(item.item_starforce_option.max_mp) !== 0 }">
                            최대 MP : +{{ item.item_total_option.max_mp }} 
                        </span>
                        <span v-if="parseInt(item.item_add_option.max_mp) + parseInt(item.item_etc_option.max_mp) + parseInt(item.item_starforce_option.max_mp) !== 0">
                        (<span>{{ item.item_base_option.max_mp }}</span>
                            <span class="item-add-option" v-if="item.item_add_option.max_mp !== '0'"> +{{ item.item_add_option.max_mp }}</span>
                            <span class="item-etc-option" v-if="item.item_etc_option.max_mp !== '0'"> +{{ item.item_etc_option.max_mp }}</span>
                            <span class="item-starforce-option" v-if="item.item_starforce_option.max_mp !== '0'"> +{{ item.item_starforce_option.max_mp }}</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.max_hp_rate !== '0'">
                        최대 HP : +{{ item.item_total_option.max_hp_rate }}%
                    </div>
                    <div v-if="item.item_total_option.max_mp_rate !== '0'">
                        최대 MP : +{{ item.item_total_option.max_mp_rate }}%
                    </div>
                    <div v-if="item.item_total_option.attack_power !== '0'">
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.attack_power) + parseInt(item.item_etc_option.attack_power) + parseInt(item.item_starforce_option.attack_power) !== 0 }">
                            공격력 : +{{ item.item_total_option.attack_power }} 
                        </span>
                        <span v-if="parseInt(item.item_add_option.attack_power) + parseInt(item.item_etc_option.attack_power) + parseInt(item.item_starforce_option.attack_power) !== 0">
                        (<span>{{ item.item_base_option.attack_power }}</span>
                            <span class="item-add-option" v-if="item.item_add_option.attack_power !== '0'"> +{{ item.item_add_option.attack_power }}</span>
                            <span class="item-etc-option" v-if="item.item_etc_option.attack_power !== '0'"> +{{ item.item_etc_option.attack_power }}</span>
                            <span class="item-starforce-option" v-if="item.item_starforce_option.attack_power !== '0'"> +{{ item.item_starforce_option.attack_power }}</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.magic_power !== '0'">
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.magic_power) + parseInt(item.item_etc_option.magic_power) + parseInt(item.item_starforce_option.magic_power) !== 0 }">
                            마력 : +{{ item.item_total_option.magic_power }} 
                        </span>
                        <span v-if="parseInt(item.item_add_option.magic_power) + parseInt(item.item_etc_option.magic_power) + parseInt(item.item_starforce_option.magic_power) !== 0">
                        (<span>{{ item.item_base_option.magic_power }}</span>
                            <span class="item-add-option" v-if="item.item_add_option.magic_power !== '0'"> +{{ item.item_add_option.magic_power }}</span>
                            <span class="item-etc-option" v-if="item.item_etc_option.magic_power !== '0'"> +{{ item.item_etc_option.magic_power }}</span>
                            <span class="item-starforce-option" v-if="item.item_starforce_option.magic_power !== '0'"> +{{ item.item_starforce_option.magic_power }}</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.armor !== '0'">
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.armor) + parseInt(item.item_etc_option.armor) + parseInt(item.item_starforce_option.armor) !== 0 }">
                            방어력 : +{{ item.item_total_option.armor }} 
                        </span>
                        <span v-if="parseInt(item.item_add_option.armor) + parseInt(item.item_etc_option.armor) + parseInt(item.item_starforce_option.armor) !== 0">
                        (<span>{{ item.item_base_option.armor }}</span>
                            <span class="item-add-option" v-if="item.item_add_option.armor !== '0'"> +{{ item.item_add_option.armor }}</span>
                            <span class="item-etc-option" v-if="item.item_etc_option.armor !== '0'"> +{{ item.item_etc_option.armor }}</span>
                            <span class="item-starforce-option" v-if="item.item_starforce_option.armor !== '0'"> +{{ item.item_starforce_option.armor }}</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.speed !== '0'">
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.speed) + parseInt(item.item_etc_option.speed) + parseInt(item.item_starforce_option.speed) !== 0 }">
                            이동속도 : +{{ item.item_total_option.speed }} 
                        </span>
                        <span v-if="parseInt(item.item_add_option.speed) + parseInt(item.item_etc_option.speed) + parseInt(item.item_starforce_option.speed) !== 0">
                        (<span>{{ item.item_base_option.speed }}</span>
                            <span class="item-add-option" v-if="item.item_add_option.speed !== '0'"> +{{ item.item_add_option.speed }}</span>
                            <span class="item-etc-option" v-if="item.item_etc_option.speed !== '0'"> +{{ item.item_etc_option.speed }}</span>
                            <span class="item-starforce-option" v-if="item.item_starforce_option.speed !== '0'"> +{{ item.item_starforce_option.speed }}</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.jump !== '0'">
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.jump) + parseInt(item.item_etc_option.jump) + parseInt(item.item_starforce_option.jump) !== 0 }">
                            점프력 : +{{ item.item_total_option.jump }} 
                        </span>
                        <span v-if="parseInt(item.item_add_option.jump) + parseInt(item.item_etc_option.jump) + parseInt(item.item_starforce_option.jump) !== 0">
                        (<span>{{ item.item_base_option.jump }}</span>
                            <span class="item-add-option" v-if="item.item_add_option.jump !== '0'"> +{{ item.item_add_option.jump }}</span>
                            <span class="item-etc-option" v-if="item.item_etc_option.jump !== '0'"> +{{ item.item_etc_option.jump }}</span>
                            <span class="item-starforce-option" v-if="item.item_starforce_option.jump !== '0'"> +{{ item.item_starforce_option.jump }}</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.boss_damage !== '0'">
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.boss_damage) !== 0 }">
                            보스 몬스터 공격 시 데미지 : +{{ item.item_total_option.boss_damage }}%
                        </span>
                        <span v-if="parseInt(item.item_add_option.boss_damage) !== 0">
                        (<span>{{ item.item_base_option.boss_damage }}%</span>
                            <span class="item-add-option" v-if="item.item_add_option.boss_damage !== '0'"> +{{ item.item_add_option.boss_damage }}%</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.ignore_monster_armor !== '0'">
                        몬스터 방어율 무시 : +{{ item.item_total_option.ignore_monster_armor }}%
                    </div>
                    <div v-if="item.item_total_option.damage !== '0'">                                         
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.damage) !== 0 }">
                            데미지 : +{{ item.item_total_option.damage }}%
                        </span>
                        <span>
                            (0%<span class="item-add-option"> +{{ item.item_add_option.damage }}%</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.all_stat !== '0'">
                        <span :class="{ 'item-total-option': parseInt(item.item_add_option.all_stat) !== 0 }">
                            올스텟 : +{{ item.item_total_option.all_stat }}%
                        </span>
                        <span v-if="parseInt(item.item_add_option.all_stat) !== 0">
                        (<span>{{ item.item_base_option.all_stat }}%</span>
                            <span class="item-add-option" v-if="item.item_add_option.all_stat !== '0'"> +{{ item.item_add_option.all_stat }}%</span>)
                        </span>
                    </div>
                    <div v-if="item.item_total_option.equipment_level_decrease !== '0'">
                        <span class="item-level-decrease">
                            착용 레벨 감소 : - {{ item.item_total_option.equipment_level_decrease }}
                        </span>
                    </div>
                    <div>업그레이드 가능 횟수 : 0 (복구 가능 횟수: 0)</div>
                    <div v-if="item.golden_hammer_flag === '적용'">황금망치 제련 적용</div>
                    <div class="item-cuttable-count" v-if="parseInt(item.cuttable_count) !== 255">가위 사용 가능 횟수 : {{ item.cuttable_count }}회</div>
                </v-col>
            </v-row>
            <v-row v-if="item.potential_option_1 && item.potential_option_2 && item.potential_option_3 !== null" class="potential_option" no-gutters>
                <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                    <div class="ml-3" style="display: flex; align-items: center;">
                        <div class="item-grade-container mr-1">
                            <div class="item-grade-octagon"></div>
                            <div class="item-grade-small-octagon" :style="{ 'background-color': `${potentialImageOptionGradeColor(item.potential_option_grade)}`}">
                                <div class="item-grade-text">{{ potentialImageOptionGradeText(item.potential_option_grade) }}</div>
                            </div>
                        </div>
                        <span :style="{ color: `${potentialOptionGradeColor(item.potential_option_grade)}` }">잠재옵션</span>
                    </div>
                    <div v-if="item.potential_option_1 !== null" class="ml-3">{{ item.potential_option_1 }}</div>
                    <div v-if="item.potential_option_2 !== null" class="ml-3">{{ item.potential_option_2 }}</div>
                    <div v-if="item.potential_option_3 !== null" class="ml-3">{{ item.potential_option_3 }}</div>
                </v-col>
            </v-row>
            <v-row v-if="item.additional_potential_option_1 && item.additional_potential_option_2 && item.additional_potential_option_3 !== null" class="potential_option" no-gutters>
                <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                    <div class="ml-3" style="display: flex; align-items: center;">
                        <div class="item-grade-container mr-1">
                            <div class="item-grade-octagon"></div>
                            <div class="item-grade-small-octagon" :style="{ 'background-color': `${potentialImageOptionGradeColor(item.additional_potential_option_grade)}`}">
                                <div class="item-grade-text">{{ potentialImageOptionGradeText(item.additional_potential_option_grade) }}</div>
                            </div>
                        </div>
                        <span :style="{ color: `${potentialOptionGradeColor(item.additional_potential_option_grade)}` }">에디셔널 잠재옵션</span>
                    </div>
                    <div v-if="item.additional_potential_option_1 !== null" class="ml-3">{{ item.additional_potential_option_1 }}</div>
                    <div v-if="item.additional_potential_option_2 !== null" class="ml-3">{{ item.additional_potential_option_2 }}</div>
                    <div v-if="item.additional_potential_option_3 !== null" class="ml-3">{{ item.additional_potential_option_3 }}</div>
                </v-col>
            </v-row>
            <v-row class="potential_option" no-gutters>
                <v-col class="mt-1 mb-6" style="font-size: 12px; color: white;">
                    <div class="ml-3 mr-3" style="color:#FFAA00">플래티넘 카르마의 가위를 사용하면 1회 교환이 가능하게 할 수 있습니다.</div>
                </v-col>
            </v-row>
        </v-card>
    </v-tooltip>      
</template>

<script>
import { getPotentialImageOptionGradeColor, getPotentialImageOptionGradeText, getPotentialOptionGradeColor } from '@/common/potentialOptionGradeColor.js';
import getStarforceMaxEnhancement from '@/common/starforceMaxEnhancement.js';
import { ref } from 'vue';
export default {
    props: {
        equipItem: {
            type: Array,
            required: true
        }
    },
    setup() {
        const item2Location = ref([0, 10, 20, 90]);
        const item6Location = ref([120, 130, 140]);

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

        return {
            potentialOptionGradeColor,
            potentialImageOptionGradeColor,
            potentialImageOptionGradeText,
            starforceMaxEnhancement,
            item2Location,
            item6Location
        }
    }
}
</script>

<style lang="scss" scoped>
    .equip {

        background-color: rgba(136, 136, 136, 0.5);
        height: 50px;
        width: 50px;
        cursor: pointer;
        padding:7px;
        border-radius: 5px;
    }
    #item-container {
        border: 1px solid #F5F5F5;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.8);
    }
    #item-image-container {
        border-top: 1px dashed rgba(128, 128, 128, 0.7);
        border-bottom: 1px dashed rgba(128, 128, 128, 0.7);
    }
    #item-image {
        padding: 5px;
        border-radius: 5px;
        background: rgb(244,247,250);
        background: linear-gradient(0deg, rgba(244,247,250,1) 0%, rgba(83,83,83,1) 100%);
        height: 60px;
        width: 60px;
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
    .item-total-option {
        color: #62F1F1;
    }
    .item-add-option {
        color: #C4F402;
    }
    .item-etc-option {
        color: #9696E0;
    }
    .item-starforce-option {
        color: #F4C402;
    }
    .item-grade-container {
        position: relative;
        display: flex; 
        align-items: center;
    }
    .item-grade-octagon {
        width: 14px;
        height: 14px;
        background-color: #888889;
        position: relative;
        clip-path: polygon(29% 0%, 71% 0%, 100% 29%, 100% 71%, 71% 100%, 29% 100%, 0% 71%, 0% 29%);
    }
    .item-grade-small-octagon {
        position: absolute;
        width: 11.5px;
        height: 11.5px;
        left: 1.2px;
        top: 1.2px;
        clip-path: polygon(29% 0%, 71% 0%, 100% 29%, 100% 71%, 71% 100%, 29% 100%, 0% 71%, 0% 29%);
    }
    .item-grade-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 8px;
        font-weight: bold;
    }
    .item-cuttable-count {
        color: #F1C101;
    }
    .item-level-decrease {
        color: #CCFF00;
    }
</style>

