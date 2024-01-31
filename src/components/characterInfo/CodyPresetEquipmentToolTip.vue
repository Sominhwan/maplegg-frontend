<template>
    <v-tooltip v-for="(item, index) in item" :key="index" location="bottom" content-class='custom-tooltip' transition="false">
        <template v-slot:activator="{ props }">
            <div v-bind="props" class="equip-container" :style="{ position: 'relative', left: `${itemLocation[index]}px`}">
                <img v-if="item != null" :src="item.cash_item_icon"/>  
            </div> 
        </template>
        <v-card v-if="item != null" id="item-container" width="300" flat>
            <v-row justify="center" no-gutters class="mt-2">
                <v-col cols="auto" class="text-center">
                    <div style="color: white">
                        {{ item.cash_item_name }}
                    </div>
                    <div class="mt-1" style="color:#F7D300; font-size: 12px;">
                        <span>
                            교환 불가
                        </span>
                        <span v-if="item.date_option_expire != null">
                            , 기간 한정 능력치, 유효기간 연장 불가
                        </span>
                        <div v-if="item.date_option_expire != null" style="color: white;">
                            {{ expireTimeFormat(item.date_option_expire) }}까지 사용가능
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row id="item-image-container" class="mt-2" no-gutters>
                <v-col cols="auto" class="ma-3">
                    <div style="display: flex; align-items: center;">
                        <div class="item-image-wrapper">
                            <img id="item-image" :src="item.cash_item_icon"/>
                        </div>
                        <span class="ml-2" style="font-size: 11px; color:white">
                            <span style="color:#F7D300;">
                                · REQ LEV : 0
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
                    <div>장비분류 : {{ item.cash_item_equipment_part }}</div>
                    <div v-if="(item.cash_item_option).length != 0">
                        <div v-for="(subItem, index) in item.cash_item_option" :key="index">
                            <div>
                                <span class="item-total-option">{{ subItem.option_type }} : +{{ subItem.option_value }}</span> 
                                <span> (0 </span>
                                <span class="item-etc-option">+{{ subItem.option_value }}</span>
                                <span>)</span>
                            </div>
                        </div>
                    </div>              
                </v-col>
            </v-row>
            <v-row class="mb-3">
            </v-row>
        </v-card>
    </v-tooltip>      
</template>

<script>
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
        const expireTimeFormat =  (date) => {
            const dateoObject = new Date(date);
            const year = dateoObject.getFullYear();
            const month = dateoObject.getMonth() + 1; 
            const day = dateoObject.getDate();
            const hours = dateoObject.getHours();
            const minutes = dateoObject.getMinutes();
            // 포맷된 문자열 생성
            const formattedExpireDate = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
            return formattedExpireDate;
        };

        return {
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
    #item-image-container {
        border-top: 1px dashed rgba(128, 128, 128, 0.7);
        border-bottom: 1px dashed rgba(128, 128, 128, 0.7);
    }
    .item-image-wrapper {
        border-radius: 5px;
        background: rgb(244,247,250);
        background: linear-gradient(0deg, rgba(244,247,250,1) 0%, rgba(83,83,83,1) 100%);
        height: 60px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    #item-image {
        height: 55%;
        width: auto;
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

    }
    .item-total-option {
        color: #62F1F1;
    }
    .item-etc-option {
        color: #9696E0;
    }
</style>

