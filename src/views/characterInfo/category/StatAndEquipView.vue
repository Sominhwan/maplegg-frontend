<template>
    <v-row>
        <v-col cols="auto">
            <v-card flat style="bottom: 70px" width="410">
                <v-card-title style="font-size: 18px; font-weight: bold; color: #666A7A;">장비</v-card-title>
                <v-card-item class="equip-container">
                    <div class="ma-5" style="display: bottom;">        
                        <v-tooltip location="bottom" content-class='custom-tooltip' transition="false">
                            <template v-slot:activator="{ props }">
                                <img class="equip" v-bind="props" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>   
                            </template>
                            <v-card id="item-container" width="300" height="550" flat>
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
                                            <span class="ml-2" style="color:#F7D300; font-size: 11px;">· REQ LEV:250</span>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-tooltip>                
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 80px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 160px;"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 10px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 20px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 100px;"/>
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
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 140px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 150px;"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png" style="position: relative; left: 160px;"/>
                    </div>
                </v-card-item>
            </v-card>
        </v-col>
        <v-col cols="auto">
            <v-card flat style="bottom: 70px">
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
        height: 60px;
        width: 60px;
        cursor: pointer;
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
        border-top: 1px dotted rgba(128, 128, 128, 0.7);
        border-bottom: 1px dotted rgba(128, 128, 128, 0.7);
    }
    #item-image {
        border: 1px solid #00FF00;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.25);
        height: 45px;
        width: 45px;
    }
</style>

