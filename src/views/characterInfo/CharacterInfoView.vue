<template>
    <v-sheet class="fill-height pb-15" color="#F4F7FA">
        <div>
            캐릭터 정보: {{ characterName.name }}
        </div>
    </v-sheet>

</template>

<script>
import { useRoute } from 'vue-router';
export default {
    setup() {
        const route = useRoute();
        const characterName = route.params;

        return {
            characterName
        }
    }
}
</script>

<style>

</style>