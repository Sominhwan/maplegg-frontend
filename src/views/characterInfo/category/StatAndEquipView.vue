<template>
    <v-row>
        <v-col cols="auto">
            <v-card flat style="bottom: 70px" width="445">
                <v-card-title style="font-size: 18px; font-weight: bold; color: #666A7A;">장비</v-card-title>
                <v-card-item class="equip-container">
                    <div class="ma-5" style="display: flex;">
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                    </div>
                    <div class="ma-5" style="display: flex;">
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
                        <img class="equip" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIAHJ.png"/>
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

<style lang="scss" scoped>
    .equip-container {
        background-color: #5393CA23;
        //grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); /* 필요에 따라 조정 */
        //gap: 10px; /* 간격 조정 */
    }
    .equip {
        border: 1px solid #00FF00;
        background-color: rgba(0, 0, 0, 0.25);
        height: 60px;
        width: 60px;
        margin-right: 20px;
    }
    .blank {
        display: inline-block;
        height: 70px;
        width: 70px;
    }
</style>

