<template>
    <v-row v-if="loading" justify="space-between">
        <v-col>
            <v-card class="hexamatrix-card" flat>
                <v-card-title style="font-size: 16px; border-bottom: 1px solid #EEE; font-weight: bold;">6차 스킬</v-card-title>
                <v-card-item class="ma-5">
                    <v-row>
                        <v-col cols="6">
                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
    <v-row v-if="loading" justify="space-between">
        <v-col>
            <v-card class="vmatrix-card" flat>
                <v-card-title style="font-size: 16px; border-bottom: 1px solid #EEE; font-weight: bold;">5차 스킬</v-card-title>
                <v-card-item class="ma-5">
                    <v-row>
                        <v-col cols="6">

                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { getCharacterSkillAndSymbol } from '@/api/characterInfo/skillAndSymbol.js';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
    const route = useRoute();
    const characterName = route.params;
    const loading = ref(true);


    onMounted(() => {
        console.log(characterName);
        characterUnion();
    });


    const characterUnion = async () => {
        const params = { 'characterName': characterName.name };
        try{
            const response = await getCharacterSkillAndSymbol(params);
            console.log(response.data);

        } catch (error) {
            console.log(error); 
        } finally {
            loading.value = true;
        }
    };
</script>

<style scoped>
    .hexamatrix-card {
        border: 1px solid #EEE;
    }
    .vmatrix-card {
        border: 1px solid #EEE;
    }

</style>