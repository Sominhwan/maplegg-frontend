/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';
import VueChatScroll from 'vue3-chat-scroll';
// Components
import socket from 'vue3-websocket';
import App from './App.vue';
// Composables
import { createApp } from 'vue';

const app = createApp(App)

registerPlugins(app)

app.use(VueChatScroll);
app.use(socket, 'ws://localhost:9000/ws/chat')
app.mount('#app')
