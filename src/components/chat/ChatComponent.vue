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
        <v-sheet v-chat-scroll ref="chatContentSheet" class="chat-content-sheet" style="height: 440px; overflow-y: auto;" color="#FEFEFE">
            <v-list>
                <v-list-item
                    v-for="chat in chatList"
                    prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg"
                    :key="chat"
                >
                    <div class="user-info-container">
                        <span class="user-nickname">{{ chat.sender }}</span>
                        <span class="chat-time"><v-icon size="13" class="mr-1">mdi-clock-outline</v-icon>{{ chat.time }}</span> 
                    </div>
                    <div class="chat-content-text">
                        {{ chat.message }}
                    </div>
                </v-list-item>
                <div v-if="socketExitFlag" class="mt-5 mb-5" style="font-size: 12px;">
                    --------------------- 서버와의 연결이 끊어졌습니다. --------------------
                </div>
            </v-list>
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
                        @click:append="insertChat()"
                        @keyup.enter="insertChat()"
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
// import { createChatRoom } from '@/api/chat/chat.js';
import { nextTick, reactive, ref } from 'vue';
export default {
    setup() {
        const flag = ref(false);
        const chattingContent = ref('');
        const chatContentSheet = ref(null);
        const roomId = ref('');
        const socketExitFlag = ref(false);
        const connectSocket = new WebSocket("ws://localhost:9000/ws/chat");

        connectSocket.onopen = (obj) => {
            // connectSocket.send(
            //     JSON.stringify(chatList)
            // );
            console.log(obj);
            console.log('WS connection is stable! zzz')
        };

        connectSocket.onmessage = async (message) => {
            console.log("Zz");
            console.log('Got a message from the WS: ', message.data)
            try {
                const data = JSON.parse(message.data);
                // JSON 형식으로 성공적으로 파싱된 경우
                console.log('메시지', data)
                if(data.type === 'TALK') {
                    const newChatItem = {
                        sender: data.sender,
                        time: data.time,
                        message: data.message,
                    };
                    chatList.push(newChatItem);
                }
                if(data.type == 'EXIT') {
                    console.log(data.type);
                    socketExitFlag.value = true;
                }

                await nextTick();
                let messages = document.querySelector('.chat-content-sheet');
                messages.scrollTo({ top: messages.scrollHeight });
            } catch (error) {
                console.log('오류')
            }

        };


        const formatTime = () => {
            const options = { hour: 'numeric', minute: 'numeric', hour12: true };
            return new Intl.DateTimeFormat('kr', options).format(new Date());
        };
        const chatList = reactive([
            {
                sender: '홍길동',
                time: 'Jan 9, 2014',
                message: '안녕1'
            },
            {
                sender: '홍길동',
                time: 'Jan 17, 2014',
                message: '안녕2'
            },
            {
                sender: '홍길동',
                time: 'Jan 28, 2014',
                message: '안녕3'
            }
        ]);

        const openChat = async () => {
            flag.value = !flag.value;
            chattingContent.value = '';
            // const data = { 'name': '민환'}
            // try {
            //     const response = await createChatRoom(data);
            //     console.log('결과 ', response.data);
            //     const chatList = {
            //         type : 'ENTER',
            //         roomId : response.data.roomId,
            //         sender : new Date(),
            //         message : ""
            //     }
            //     roomId.value = response.data.roomId;
            //     connectSocket.send(
            //         JSON.stringify(chatList)
            //     );
            // } catch (error) {
            //     console.log(error)
            // }
        };

   
        const insertChat = async () => {
            console.log(chattingContent.value);
            const newChatItem = {
                type: 'TALK',
                roomId: roomId.value,
                sender: new Date(),
                message: chattingContent.value,
                time: formatTime(), // You can replace this with the actual date logic
            };
            chatList.push(newChatItem);
            console.log(newChatItem);
            connectSocket.send(
                JSON.stringify(newChatItem)
            );

            chattingContent.value = '';
            await nextTick();
            let messages = document.querySelector('.chat-content-sheet');
            messages.scrollTo({ top: messages.scrollHeight });
        };

        return {
            flag,
            openChat,
            insertChat,
            chattingContent,
            chatList,
            chatContentSheet,
            socketExitFlag
        };
    }
}
</script>

<style lang="scss" scoped>
    @media (max-width: 960px) {
        .chat-container {
            width: 350px !important; // 화면 너비가 600px 이하일 때, 원하는 값으로 조정
        }
    }
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
        width: 8px; /* 스크롤바의 너비 */
    }
    .chat-content-sheet::-webkit-scrollbar-thumb {
        background: #eeeeee; /* 스크롤바의 색상 */
        border-radius: 50px;
    }
    .chat-content-sheet::-webkit-scrollbar-track {
        background: #fff; /*스크롤바 뒷 배경 색상*/
    }
    .user-info-container {
        display: flex; 
        justify-content: space-between;
        padding-bottom: 0px;
    }
    .user-nickname {
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 2px;
    }
    .chat-time {
        color: grey;
        font-size: 12px;
        align-items: center;
    }
    .chat-content-text {
        white-space: nowrap;
        display: inline-block;
        white-space: inherit;
        max-width: 400px;
        background-color: #0073E633;
        padding: 6px 14px;
        margin: 0px 0px ;
        border-radius: 20px;
        font-size: 14px;
        flex-shrink: 0; /* 크기가 줄어들지 않도록 설정 */
        word-break: break-all;
    }
</style>