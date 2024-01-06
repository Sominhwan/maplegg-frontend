<template>
    <v-btn class="chat-btn" :color="flag ? '#FFFFFF' : '#5393CA'" icon="mdi-chat-processing" size="x-large" @click="openChat()">
        <v-tooltip activator="parent" location="start" open-delay="500">채팅</v-tooltip>
        <v-badge content="2" color="error">
            <v-icon size="large">mdi-chat-processing</v-icon>
        </v-badge>
    </v-btn>
    <v-card
      v-if="flag"
      class="chat-container"
      elevation="7"
      width="400"
      height="550"
      color="white"
    >
        <v-card-title>
            <v-row justify="space-between" style="align-items: center;">
                <v-col cols="auto">
                    채팅
                </v-col>
                <v-col cols="auto">
                    <div class="me-n2">
                        <v-btn
                            icon="$close"
                            density="comfortable"
                            variant="plain"
                            @click="flag = false"
                        ></v-btn>
                </div>
                </v-col>
            </v-row>
        </v-card-title>
        <v-divider/>
        <v-sheet class="chat-content-sheet" style="height: 440px; overflow-y: auto;" color="#FEFEFE">
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
            <div>테스트</div>
        </v-sheet>
        <v-card-actions>
            <v-row justify="space-between">
                <v-col cols="12">
                    <v-text-field
                        variant="solo"
                        bg-color="#F4F7FA"
                        placeholder="채팅을 입력하세요."
                        append-icon="mdi-chevron-right"
                        v-model="chattingContent"
                        @click:append="searchInfo()"
                        @keyup.enter="searchInfo()"
                        rounded
                        density="compact"
                        single-line
                        hide-details
                        maxlength="30"
                        autofocus
                        flat
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const flag = ref(false);
        const chattingContent = ref('');

        const openChat = () => {
            flag.value = !flag.value
        };

        const searchInfo = () => {
            console.log(chattingContent.value);
        };

        return {
            flag,
            openChat,
            searchInfo,
            chattingContent
        };
    }
}
</script>

<style lang="scss" scoped>
    .chat-btn {
        position: fixed !important;
        bottom: 20px;
        right: 20px;
    }
    .chat-container {
        position: fixed !important;
        z-index: 1001;
        bottom: 20px; 
        right: 100px; 
    }
    .chat-content-sheet::-webkit-scrollbar {
        width: 10px; /* 스크롤바의 너비 */
 
    }
    .chat-content-sheet::-webkit-scrollbar-thumb {
        background: #eeeeee; /* 스크롤바의 색상 */
        border-radius: 50px;
    }
    .chat-content-sheet::-webkit-scrollbar-track {
        background: #fff; /*스크롤바 뒷 배경 색상*/
    }

</style>