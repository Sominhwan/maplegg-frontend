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
                                            <span v-for="index in 5" :key="index">
                                                <v-icon size="12" color="#F7D300">mdi-star</v-icon>
                                            </span>
                                            <span class="mr-2"></span>
                                            <span v-for="index in 5" :key="index">
                                                <v-icon size="12" color="#F7D300">mdi-star</v-icon>
                                            </span>
                                            <span class="mr-2"></span>
                                            <span v-for="index in 5" :key="index">
                                                <v-icon size="12" color="#F7D300">mdi-star</v-icon>
                                            </span>
                                        </div>
                                        <div style="position: relative; bottom: 5px;">
                                            <span v-for="index in 5" :key="index">
                                                <v-icon size="12" color="#F7D300">mdi-star</v-icon>
                                            </span>
                                            <span class="mr-2"></span>
                                            <span v-for="index in 5" :key="index">
                                                <v-icon size="12" color="#F7D300">mdi-star</v-icon>
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
                                        <div>장비분류 : 눈장식</div>
                                        <div>STR : +82 (7 + 75)</div>
                                        <div>DEX : +82 (7 + 75)</div>
                                        <div>INT : +82 (7 + 75)</div>
                                        <div>LUK : +82 (7 + 75)</div>
                                        <div>공격력 : +82 (7 + 75)</div>
                                        <div>마력 : +82 (7 + 75)</div>
                                        <div>방어력 : +82 (7 + 75)</div>
                                        <div>올스탯 : +5% (0% + 5%)</div>
                                        <div>업그레이드 가능 횟수 : 0 (복구 가능 횟수: 0)</div>
                                        <div>황금망치 제련 적용</div>
                                        <div>가위 사용 가능 횟수 : 10회</div>
                                    </v-col>
                                </v-row>
                                <v-row class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" style="color:#CCFF00">잠재옵션</div>
                                        <div class="ml-3">올스텟 : +9%</div>
                                        <div class="ml-3">올스텟 : +6%</div>
                                        <div class="ml-3">INT : +9%</div>
                                    </v-col>
                                </v-row>
                                <v-row class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" style="color: #9966FF;">에디셔널 잠재옵션</div>
                                        <div class="ml-3">INT : +4%</div>
                                        <div class="ml-3">INT : +2%</div>
                                        <div class="ml-3">INT : +2%</div>
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
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span class="mr-2">
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span>
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                        </div>
                                        <div style="position: relative; bottom: 5px;">
                                            <span class="mr-2">
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span>
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
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
                                        <div>장비분류 : 눈장식</div>
                                        <div>STR : +82 (7 + 75)</div>
                                        <div>DEX : +82 (7 + 75)</div>
                                        <div>INT : +82 (7 + 75)</div>
                                        <div>LUK : +82 (7 + 75)</div>
                                        <div>공격력 : +82 (7 + 75)</div>
                                        <div>마력 : +82 (7 + 75)</div>
                                        <div>방어력 : +82 (7 + 75)</div>
                                        <div>올스탯 : +5% (0% + 5%)</div>
                                        <div>업그레이드 가능 횟수 : 0 (복구 가능 횟수: 0)</div>
                                        <div>황금망치 제련 적용</div>
                                        <div>가위 사용 가능 횟수 : 10회</div>
                                    </v-col>
                                </v-row>
                                <v-row class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" style="color:#CCFF00">잠재옵션</div>
                                        <div class="ml-3">올스텟 : +9%</div>
                                        <div class="ml-3">올스텟 : +6%</div>
                                        <div class="ml-3">INT : +9%</div>
                                    </v-col>
                                </v-row>
                                <v-row class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" style="color: #9966FF;">에디셔널 잠재옵션</div>
                                        <div class="ml-3">INT : +4%</div>
                                        <div class="ml-3">INT : +2%</div>
                                        <div class="ml-3">INT : +2%</div>
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
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span class="mr-2">
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span>
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                        </div>
                                        <div style="position: relative; bottom: 5px;">
                                            <span class="mr-2">
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span>
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
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
                                        <div>장비분류 : 눈장식</div>
                                        <div>STR : +82 (7 + 75)</div>
                                        <div>DEX : +82 (7 + 75)</div>
                                        <div>INT : +82 (7 + 75)</div>
                                        <div>LUK : +82 (7 + 75)</div>
                                        <div>공격력 : +82 (7 + 75)</div>
                                        <div>마력 : +82 (7 + 75)</div>
                                        <div>방어력 : +82 (7 + 75)</div>
                                        <div>올스탯 : +5% (0% + 5%)</div>
                                        <div>업그레이드 가능 횟수 : 0 (복구 가능 횟수: 0)</div>
                                        <div>황금망치 제련 적용</div>
                                        <div>가위 사용 가능 횟수 : 10회</div>
                                    </v-col>
                                </v-row>
                                <v-row class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" style="color:#CCFF00">잠재옵션</div>
                                        <div class="ml-3">올스텟 : +9%</div>
                                        <div class="ml-3">올스텟 : +6%</div>
                                        <div class="ml-3">INT : +9%</div>
                                    </v-col>
                                </v-row>
                                <v-row class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" style="color: #9966FF;">에디셔널 잠재옵션</div>
                                        <div class="ml-3">INT : +4%</div>
                                        <div class="ml-3">INT : +2%</div>
                                        <div class="ml-3">INT : +2%</div>
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
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span class="mr-2">
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span>
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                        </div>
                                        <div style="position: relative; bottom: 5px;">
                                            <span class="mr-2">
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span>
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
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
                                        <div>장비분류 : 눈장식</div>
                                        <div>STR : +82 (7 + 75)</div>
                                        <div>DEX : +82 (7 + 75)</div>
                                        <div>INT : +82 (7 + 75)</div>
                                        <div>LUK : +82 (7 + 75)</div>
                                        <div>공격력 : +82 (7 + 75)</div>
                                        <div>마력 : +82 (7 + 75)</div>
                                        <div>방어력 : +82 (7 + 75)</div>
                                        <div>올스탯 : +5% (0% + 5%)</div>
                                        <div>업그레이드 가능 횟수 : 0 (복구 가능 횟수: 0)</div>
                                        <div>황금망치 제련 적용</div>
                                        <div>가위 사용 가능 횟수 : 10회</div>
                                    </v-col>
                                </v-row>
                                <v-row class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" style="color:#CCFF00">잠재옵션</div>
                                        <div class="ml-3">올스텟 : +9%</div>
                                        <div class="ml-3">올스텟 : +6%</div>
                                        <div class="ml-3">INT : +9%</div>
                                    </v-col>
                                </v-row>
                                <v-row class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" style="color: #9966FF;">에디셔널 잠재옵션</div>
                                        <div class="ml-3">INT : +4%</div>
                                        <div class="ml-3">INT : +2%</div>
                                        <div class="ml-3">INT : +2%</div>
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
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span class="mr-2">
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span>
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                        </div>
                                        <div style="position: relative; bottom: 5px;">
                                            <span class="mr-2">
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span>
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
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
                                        <div>장비분류 : 눈장식</div>
                                        <div>STR : +82 (7 + 75)</div>
                                        <div>DEX : +82 (7 + 75)</div>
                                        <div>INT : +82 (7 + 75)</div>
                                        <div>LUK : +82 (7 + 75)</div>
                                        <div>공격력 : +82 (7 + 75)</div>
                                        <div>마력 : +82 (7 + 75)</div>
                                        <div>방어력 : +82 (7 + 75)</div>
                                        <div>올스탯 : +5% (0% + 5%)</div>
                                        <div>업그레이드 가능 횟수 : 0 (복구 가능 횟수: 0)</div>
                                        <div>황금망치 제련 적용</div>
                                        <div>가위 사용 가능 횟수 : 10회</div>
                                    </v-col>
                                </v-row>
                                <v-row class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" style="color:#CCFF00">잠재옵션</div>
                                        <div class="ml-3">올스텟 : +9%</div>
                                        <div class="ml-3">올스텟 : +6%</div>
                                        <div class="ml-3">INT : +9%</div>
                                    </v-col>
                                </v-row>
                                <v-row class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" style="color: #9966FF;">에디셔널 잠재옵션</div>
                                        <div class="ml-3">INT : +4%</div>
                                        <div class="ml-3">INT : +2%</div>
                                        <div class="ml-3">INT : +2%</div>
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
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span class="mr-2">
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span>
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                        </div>
                                        <div style="position: relative; bottom: 5px;">
                                            <span class="mr-2">
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
                                            </span>
                                            <span>
                                            <v-icon size="12" color="#F7D300" v-for="index in 5" :key="index">mdi-star</v-icon>
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
                                        <div>장비분류 : 눈장식</div>
                                        <div>STR : +82 (7 + 75)</div>
                                        <div>DEX : +82 (7 + 75)</div>
                                        <div>INT : +82 (7 + 75)</div>
                                        <div>LUK : +82 (7 + 75)</div>
                                        <div>공격력 : +82 (7 + 75)</div>
                                        <div>마력 : +82 (7 + 75)</div>
                                        <div>방어력 : +82 (7 + 75)</div>
                                        <div>올스탯 : +5% (0% + 5%)</div>
                                        <div>업그레이드 가능 횟수 : 0 (복구 가능 횟수: 0)</div>
                                        <div>황금망치 제련 적용</div>
                                        <div>가위 사용 가능 횟수 : 10회</div>
                                    </v-col>
                                </v-row>
                                <v-row class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" style="color:#CCFF00">잠재옵션</div>
                                        <div class="ml-3">올스텟 : +9%</div>
                                        <div class="ml-3">올스텟 : +6%</div>
                                        <div class="ml-3">INT : +9%</div>
                                    </v-col>
                                </v-row>
                                <v-row class="potential_option" no-gutters>
                                    <v-col class="mt-1 mb-1" style="font-size: 12px; color: white;">
                                        <div class="ml-3" style="color: #9966FF;">에디셔널 잠재옵션</div>
                                        <div class="ml-3">INT : +4%</div>
                                        <div class="ml-3">INT : +2%</div>
                                        <div class="ml-3">INT : +2%</div>
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
            return getPotentialOptionGradeColor(grade)
        };

        const characterEquipment = async () => {
            const params = { 'characterName': characterName.name };
            try {
                const response = await getCharacterEquipment(params);
                console.log(response.data.data.characterItemEquipment);
                Object.assign(characterItemEquipment, response.data.data.characterItemEquipment.item_equipment);

                item1.push(characterItemEquipment[11]);
                item1.push(characterItemEquipment[0]);
                item1.push(characterItemEquipment[22]);

                item2.push(characterItemEquipment[12]);
                item2.push(characterItemEquipment[23]);
                item2.push(characterItemEquipment[1]);
                item2.push(characterItemEquipment[21]);

                item3.push(characterItemEquipment[13]);
                item3.push(characterItemEquipment[15]);
                item3.push(characterItemEquipment[2]);
                item3.push(characterItemEquipment[3]);
                item3.push(characterItemEquipment[16]);

                item4.push(characterItemEquipment[14]);
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
            potentialOptionGradeColor
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

    .cody-card {
        border: 1px solid rgba(50, 51, 55, 0.975) !important;   
    }
</style>

