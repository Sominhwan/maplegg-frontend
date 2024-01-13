<template>
    <v-sheet class="fill-height pb-15" color="#F4F7FA">
        <div class="parent-container" style="position: relative;">
            <img src="https://cdn.dak.gg/maple/images/bg/guide-top-bg.jpg" cover height="500" style="position: relative; width: 100%"/>
            <v-container class="character-info-container">
                <v-row class="mt-16">
                    <v-col cols="auto">
                        <img :src="testImage" style="width: 200px;"/>
                    </v-col>
                    <v-col cols="auto">
                        <v-list-item class="mt-5">
                            <div class="character-name">오지환</div>
                            <div class="character-sub-info mt-2">
                                <span>LV.280</span>
                                <span class="divider"></span>
                                <span>카데나</span>
                                <span class="divider"></span>
                                <span>인기도 1,296</span>
                            </div>
                        </v-list-item>
                    </v-col>

                </v-row>
            </v-container>
        </div>
    </v-sheet>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
    setup() {
        const route = useRoute();
        const characterName = route.params;
        const testImage = ref('https://open.api.nexon.com/static/maplestory/Character/BKEPBKIPAAIKJDODOLCDJJEEGDJILJFMBNGEDPKNJNLPLOMPFNHMFDIDMCEPLNLDPONIKIGNCIKJOBAOLPLOCLKDMNIDKLMJCPAFCMHALLKJMFCEBFKHMIHKKCEOEKINHOEBHJMJFALPLKMDDNLGBGBOKLJEJBLHEGCKHEGDCAPADDLBIMOOOKCEGIFJIOBNJMMOJKAICGHJAELNCGKMNMLOENMFCLBIOOFIPEHDMLGIBFHAIMIAHDDIFPICMDGJ.png');
        onMounted(() => {
            console.log(characterName);
        });
        return {
            characterName,
            testImage
        }
    }
}
</script>

<style lang="scss" scoped>
    .character-info-container {
        position: absolute;
        top: 0px;
        left: 50%;
        height: 500px;
        transform: translate(-50%, 0);
        width: 60%;
    }
    .character-name {
        font-size: 30px;
        color: white;
        font-weight: bold;
    }
    .character-sub-info {
        font-size: 16px;
        color: #E9EAED;
    }
    .divider {
        display: inline-block;
        height: 10px;
        width: 1px; /* 세로 선의 두께 */
        background-color: rgba(255, 255, 255, 0.5);
        margin: 0 8px; /* 세로 선과 다른 콘텐츠 사이의 간격 */
    }
</style>

