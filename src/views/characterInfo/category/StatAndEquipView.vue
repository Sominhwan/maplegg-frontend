<template>
    <v-row v-if="loading">
        <v-col cols="auto">
            <v-card class="equip-card" flat width="360">
                <v-card-title style="font-size: 16px; font-weight: bold; color: white; background-color: rgba(50, 51, 55, 0.975);">장비</v-card-title>
                <v-card-item class="equip-container">
                    <div class="ma-5" style="display: flex;">        
                        <v-tooltip v-for="(item, index) in item1" :key="item.item_equipment_slot" location="bottom" content-class='custom-tooltip' transition="false">
                            <template v-slot:activator="{ props }">
                                <img class="equip" 
                                    v-bind="props" 
                                    :src="item.item_icon" 
                                    :style="{ position: 'relative', left: `${index *70}px`, border: `1px solid ${potentialOptionGradeColor(item.potential_option_grade)}` }"
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
                                            <img id="item-image" :src="item.item_icon" :style="{ border: `1px solid ${potentialOptionGradeColor(item.potential_option_grade)}` }"/>
                                            <span class="ml-2" style="color:#F7D300; font-size: 11px;">· REQ LEV : {{ item.item_base_option.base_equipment_level }}</span>                                          
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
                                        <div>공격력 : +82 (7 + 75)</div>
                                        <div>마력 : +82 (7 + 75)</div>
                                        <div>방어력 : +82 (7 + 75)</div>
                                        <div>올스탯 : +5% (0% + 5%)</div>
                                        <div>업그레이드 가능 횟수 : 0 (복구 가능 횟수: 0)</div>
                                        <div v-if="item.golden_hammer_flag === '적용'">황금망치 제련 적용</div>
                                        <div v-if="parseInt(item.cuttable_count) !== 255">가위 사용 가능 횟수 : {{ item.cuttable_count }}회</div>
                                    </v-col>
                                </v-row>
                                <v-row v-if="item.potential_option_1 && item.potential_option_2 && item.potential_option_3 !== null" class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" style="display: flex; align-items: center;">
                                            <div class="item-grade-container mr-1">
                                                <div class="item-grade-octagon">
                                                </div>
                                                <div class="item-grade-small-octagon">
                                                <div class="item-grade-text">z</div>
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
                                        <div class="ml-3" :style="{ color: `${potentialOptionGradeColor(item.additional_potential_option_grade)}` }">에디셔널 잠재옵션</div>
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
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <v-tooltip v-for="(item, index) in item2" :key="item.item_equipment_slot" location="bottom" content-class='custom-tooltip' transition="false">
                            <template v-slot:activator="{ props }">
                                <img class="equip" 
                                    v-bind="props" 
                                    :src="item.item_icon" 
                                    :style="{ position: 'relative', left: `${item2Location[index]}px`, border: `1px solid ${potentialOptionGradeColor(item.potential_option_grade)}` }"
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
                                            <img id="item-image" :src="item.item_icon" :style="{ border: `1px solid ${potentialOptionGradeColor(item.potential_option_grade)}` }"/>
                                            <span class="ml-2" style="color:#F7D300; font-size: 11px;">· REQ LEV : {{ item.item_base_option.base_equipment_level }}</span>                                          
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
                                        <div>공격력 : +82 (7 + 75)</div>
                                        <div>마력 : +82 (7 + 75)</div>
                                        <div>방어력 : +82 (7 + 75)</div>
                                        <div>올스탯 : +5% (0% + 5%)</div>
                                        <div>업그레이드 가능 횟수 : 0 (복구 가능 횟수: 0)</div>
                                        <div v-if="item.golden_hammer_flag === '적용'">황금망치 제련 적용</div>
                                        <div v-if="parseInt(item.cuttable_count) !== 255">가위 사용 가능 횟수 : {{ item.cuttable_count }}회</div>
                                    </v-col>
                                </v-row>
                                <v-row v-if="item.potential_option_1 && item.potential_option_2 && item.potential_option_3 !== null" class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" :style="{ color: `${potentialOptionGradeColor(item.potential_option_grade)}` }">잠재옵션</div>
                                        <div v-if="item.potential_option_1 !== null" class="ml-3">{{ item.potential_option_1 }}</div>
                                        <div v-if="item.potential_option_2 !== null" class="ml-3">{{ item.potential_option_2 }}</div>
                                        <div v-if="item.potential_option_3 !== null" class="ml-3">{{ item.potential_option_3 }}</div>
                                    </v-col>
                                </v-row>
                                <v-row v-if="item.additional_potential_option_1 && item.additional_potential_option_2 && item.additional_potential_option_3 !== null" class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" :style="{ color: `${potentialOptionGradeColor(item.additional_potential_option_grade)}` }">에디셔널 잠재옵션</div>
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
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <v-tooltip v-for="(item, index) in item3" :key="item.item_equipment_slot" location="bottom" content-class='custom-tooltip' transition="false">
                            <template v-slot:activator="{ props }">
                                <img class="equip" 
                                    v-bind="props" 
                                    :src="item.item_icon" 
                                    :style="{ position: 'relative', left: `${index *10}px`, border: `1px solid ${potentialOptionGradeColor(item.potential_option_grade)}` }"
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
                                            <img id="item-image" :src="item.item_icon" :style="{ border: `1px solid ${potentialOptionGradeColor(item.potential_option_grade)}` }"/>
                                            <span class="ml-2" style="color:#F7D300; font-size: 11px;">· REQ LEV : {{ item.item_base_option.base_equipment_level }}</span>                                          
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
                                        <div>공격력 : +82 (7 + 75)</div>
                                        <div>마력 : +82 (7 + 75)</div>
                                        <div>방어력 : +82 (7 + 75)</div>
                                        <div>올스탯 : +5% (0% + 5%)</div>
                                        <div>업그레이드 가능 횟수 : 0 (복구 가능 횟수: 0)</div>
                                        <div v-if="item.golden_hammer_flag === '적용'">황금망치 제련 적용</div>
                                        <div v-if="parseInt(item.cuttable_count) !== 255">가위 사용 가능 횟수 : {{ item.cuttable_count }}회</div>
                                    </v-col>
                                </v-row>
                                <v-row v-if="item.potential_option_1 && item.potential_option_2 && item.potential_option_3 !== null" class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" :style="{ color: `${potentialOptionGradeColor(item.potential_option_grade)}` }">잠재옵션</div>
                                        <div v-if="item.potential_option_1 !== null" class="ml-3">{{ item.potential_option_1 }}</div>
                                        <div v-if="item.potential_option_2 !== null" class="ml-3">{{ item.potential_option_2 }}</div>
                                        <div v-if="item.potential_option_3 !== null" class="ml-3">{{ item.potential_option_3 }}</div>
                                    </v-col>
                                </v-row>
                                <v-row v-if="item.additional_potential_option_1 && item.additional_potential_option_2 && item.additional_potential_option_3 !== null" class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" :style="{ color: `${potentialOptionGradeColor(item.additional_potential_option_grade)}` }">에디셔널 잠재옵션</div>
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
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <v-tooltip v-for="(item, index) in item4" :key="item.item_equipment_slot" location="bottom" content-class='custom-tooltip' transition="false">
                            <template v-slot:activator="{ props }">
                                <img class="equip" 
                                    v-bind="props" 
                                    :src="item.item_icon" 
                                    :style="{ position: 'relative', left: `${index *10}px`, border: `1px solid ${potentialOptionGradeColor(item.potential_option_grade)}` }"
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
                                            <img id="item-image" :src="item.item_icon" :style="{ border: `1px solid ${potentialOptionGradeColor(item.potential_option_grade)}` }"/>
                                            <span class="ml-2" style="color:#F7D300; font-size: 11px;">· REQ LEV : {{ item.item_base_option.base_equipment_level }}</span>                                          
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
                                        <div>공격력 : +82 (7 + 75)</div>
                                        <div>마력 : +82 (7 + 75)</div>
                                        <div>방어력 : +82 (7 + 75)</div>
                                        <div>올스탯 : +5% (0% + 5%)</div>
                                        <div>업그레이드 가능 횟수 : 0 (복구 가능 횟수: 0)</div>
                                        <div v-if="item.golden_hammer_flag === '적용'">황금망치 제련 적용</div>
                                        <div v-if="parseInt(item.cuttable_count) !== 255">가위 사용 가능 횟수 : {{ item.cuttable_count }}회</div>
                                    </v-col>
                                </v-row>
                                <v-row v-if="item.potential_option_1 && item.potential_option_2 && item.potential_option_3 !== null" class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" :style="{ color: `${potentialOptionGradeColor(item.potential_option_grade)}` }">잠재옵션</div>
                                        <div v-if="item.potential_option_1 !== null" class="ml-3">{{ item.potential_option_1 }}</div>
                                        <div v-if="item.potential_option_2 !== null" class="ml-3">{{ item.potential_option_2 }}</div>
                                        <div v-if="item.potential_option_3 !== null" class="ml-3">{{ item.potential_option_3 }}</div>
                                    </v-col>
                                </v-row>
                                <v-row v-if="item.additional_potential_option_1 && item.additional_potential_option_2 && item.additional_potential_option_3 !== null" class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" :style="{ color: `${potentialOptionGradeColor(item.additional_potential_option_grade)}` }">에디셔널 잠재옵션</div>
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
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <v-tooltip v-for="(item, index) in item5" :key="item.item_equipment_slot" location="bottom" content-class='custom-tooltip' transition="false">
                            <template v-slot:activator="{ props }">
                                <img class="equip" 
                                    v-bind="props" 
                                    :src="item.item_icon" 
                                    :style="{ position: 'relative', left: `${index *10}px`, border: `1px solid ${potentialOptionGradeColor(item.potential_option_grade)}` }"
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
                                            <img id="item-image" :src="item.item_icon" :style="{ border: `1px solid ${potentialOptionGradeColor(item.potential_option_grade)}` }"/>
                                            <span class="ml-2" style="color:#F7D300; font-size: 11px;">· REQ LEV : {{ item.item_base_option.base_equipment_level }}</span>                                          
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
                                        <div>공격력 : +82 (7 + 75)</div>
                                        <div>마력 : +82 (7 + 75)</div>
                                        <div>방어력 : +82 (7 + 75)</div>
                                        <div>올스탯 : +5% (0% + 5%)</div>
                                        <div>업그레이드 가능 횟수 : 0 (복구 가능 횟수: 0)</div>
                                        <div v-if="item.golden_hammer_flag === '적용'">황금망치 제련 적용</div>
                                        <div v-if="parseInt(item.cuttable_count) !== 255">가위 사용 가능 횟수 : {{ item.cuttable_count }}회</div>
                                    </v-col>
                                </v-row>
                                <v-row v-if="item.potential_option_1 && item.potential_option_2 && item.potential_option_3 !== null" class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" :style="{ color: `${potentialOptionGradeColor(item.potential_option_grade)}` }">잠재옵션</div>
                                        <div v-if="item.potential_option_1 !== null" class="ml-3">{{ item.potential_option_1 }}</div>
                                        <div v-if="item.potential_option_2 !== null" class="ml-3">{{ item.potential_option_2 }}</div>
                                        <div v-if="item.potential_option_3 !== null" class="ml-3">{{ item.potential_option_3 }}</div>
                                    </v-col>
                                </v-row>
                                <v-row v-if="item.additional_potential_option_1 && item.additional_potential_option_2 && item.additional_potential_option_3 !== null" class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" :style="{ color: `${potentialOptionGradeColor(item.additional_potential_option_grade)}` }">에디셔널 잠재옵션</div>
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
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <v-tooltip v-for="(item, index) in item6" :key="item.item_equipment_slot" location="bottom" content-class='custom-tooltip' transition="false">
                            <template v-slot:activator="{ props }">
                                <img class="equip" 
                                    v-bind="props" 
                                    :src="item.item_icon" 
                                    :style="{ position: 'relative', left: `${item6Location[index]}px`, border: `1px solid ${potentialOptionGradeColor(item.potential_option_grade)}` }"
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
                                            <img id="item-image" :src="item.item_icon" :style="{ border: `1px solid ${potentialOptionGradeColor(item.potential_option_grade)}` }"/>
                                            <span class="ml-2" style="color:#F7D300; font-size: 11px;">· REQ LEV : {{ item.item_base_option.base_equipment_level }}</span>                                          
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
                                        <div>공격력 : +82 (7 + 75)</div>
                                        <div>마력 : +82 (7 + 75)</div>
                                        <div>방어력 : +82 (7 + 75)</div>
                                        <div>올스탯 : +5% (0% + 5%)</div>
                                        <div>업그레이드 가능 횟수 : 0 (복구 가능 횟수: 0)</div>
                                        <div v-if="item.golden_hammer_flag === '적용'">황금망치 제련 적용</div>
                                        <div v-if="parseInt(item.cuttable_count) !== 255">가위 사용 가능 횟수 : {{ item.cuttable_count }}회</div>
                                    </v-col>
                                </v-row>
                                <v-row v-if="item.potential_option_1 && item.potential_option_2 && item.potential_option_3 !== null" class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" :style="{ color: `${potentialOptionGradeColor(item.potential_option_grade)}` }">잠재옵션</div>
                                        <div v-if="item.potential_option_1 !== null" class="ml-3">{{ item.potential_option_1 }}</div>
                                        <div v-if="item.potential_option_2 !== null" class="ml-3">{{ item.potential_option_2 }}</div>
                                        <div v-if="item.potential_option_3 !== null" class="ml-3">{{ item.potential_option_3 }}</div>
                                    </v-col>
                                </v-row>
                                <v-row v-if="item.additional_potential_option_1 && item.additional_potential_option_2 && item.additional_potential_option_3 !== null" class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" :style="{ color: `${potentialOptionGradeColor(item.additional_potential_option_grade)}` }">에디셔널 잠재옵션</div>
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
                    </div>
                </v-card-item>
            </v-card>
        </v-col>
        <v-col cols="auto">
            <v-card class="equip-card" flat>
                <v-card-title class="cody-card" style="font-size: 16px; font-weight: bold; color: white; background-color: rgba(50, 51, 55, 0.975);">코디</v-card-title>
                <v-card-item>

                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { getCharacterEquipment } from '@/api/characterInfo/statAndEquip.js';
import getPotentialOptionGradeColor from '@/common/potentialOptionGradeColor.js';
import getStarforceMaxEnhancement from '@/common/starforceMaxEnhancement.js';
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        const characterName = route.params;
        const characterItemEquipment = reactive({});
        const loading = ref(false);
        // 저장할 아이템 리스트
        const item1 = reactive([]);
        const item2 = reactive([]);
        const item2Location = ref([0, 10, 20, 90]);
        const item3 = reactive([]);
        const item4 = reactive([]);
        const item5 = reactive([]);
        const item6 = reactive([]);
        const item6Location = ref([120, 130, 140]);

        onMounted(() => {
            characterEquipment();
        });

        const potentialOptionGradeColor = (grade) => {
            return getPotentialOptionGradeColor(grade);
        };

        const starforceMaxEnhancement = (baseEquipmentLevel, kind) => {
            return getStarforceMaxEnhancement(baseEquipmentLevel, kind);
        };

        const characterEquipment = async () => {
            const params = { 'characterName': characterName.name };
            try {
                const response = await getCharacterEquipment(params);
                console.log(response.data.data.characterItemEquipment);
                Object.assign(characterItemEquipment, response.data.data.characterItemEquipment.item_equipment);

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
                item6.push(characterItemEquipment[17]); // 수정하기 안드로이드로 
                item6.push(characterItemEquipment[20]);
            } catch(error) {
                console.log(error);
            } finally {
                loading.value = true;
            }   
        };

        return {
            characterItemEquipment,
            loading,
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            item2Location,
            item6Location,
            potentialOptionGradeColor,
            starforceMaxEnhancement
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
    .equip {

        background-color: rgba(136, 136, 136, 0.5);
        height: 50px;
        width: 50px;
        cursor: pointer;
        padding:7px;
        border-radius: 5px;
    }
    .custom-tooltip {
        opacity: var(--v-tooltip-opacity, 1) !important;
        background: var(--v-tooltip-bg, none) !important;
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
      background-color: #FFF;
      position: relative;
      clip-path: polygon(29% 0%, 71% 0%, 100% 29%, 100% 71%, 71% 100%, 29% 100%, 0% 71%, 0% 29%);
    }
    .item-grade-small-octagon {
      position: absolute;
      background: black;
      width: 11px;
      height: 11px;
      left: 1.2px;
      top: 1px;
      clip-path: polygon(29% 0%, 71% 0%, 100% 29%, 100% 71%, 71% 100%, 29% 100%, 0% 71%, 0% 29%);
    }
    .item-grade-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 4px;
    }
    .cody-card {
        border: 1px solid rgba(50, 51, 55, 0.975) !important;   
    }
</style>

