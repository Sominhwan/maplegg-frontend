<template>
    <v-row>
        <v-col cols="auto">
            <v-card flat width="360">
                <v-card-title style="font-size: 16px; font-weight: bold; color: #666A7A;">장비</v-card-title>
                <v-card-item class="equip-container">
                    <div class="ma-5" style="display: flex;">        
                        <v-tooltip location="bottom" content-class='custom-tooltip' transition="false">
                            <template v-slot:activator="{ props }">
                                <img class="equip" v-bind="props" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>   
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
                                            에테르넬 파이렛햇 (+12)
                                        </div>
                                        <div style="color: white; font-size: 11px;">
                                            (레전드리 아이템)
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row id="item-image-container" class="mt-2" justify="left" no-gutters>
                                    <v-col cols="auto" class="ma-3">
                                        <div style="display: flex; align-items: center;">
                                            <img id="item-image" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                                            <span class="ml-2" style="color:#F7D300; font-size: 11px;">· REQ LEV : 250</span>                                          
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
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 70px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 140px;"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 10px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 20px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 90px;"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 10px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 20px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 30px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 40px;"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 10px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 20px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 30px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 40px;"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 10px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 20px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 30px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 40px;"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 120px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 130px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 140px;"/>
                    </div>
                </v-card-item>
            </v-card>
        </v-col>
        <v-col cols="auto">
            <v-card flat>
                스탯
            </v-card>
        </v-col>
    </v-row>

</template>

<script>
export default {

}
</script>

<style>
    .equip-container {
        background-color: #5393CA23;
    }
    .equip {
        border: 1px solid #00FF00;
        background-color: rgba(0, 0, 0, 0.25);
        height: 50px;
        width: 50px;
        cursor: pointer;
        padding: 5px;
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
        border: 1px solid #00BB88;
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
</style>

