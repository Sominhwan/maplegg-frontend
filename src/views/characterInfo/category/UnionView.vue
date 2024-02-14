<template>
    <v-row v-if="loading" justify="space-between">
        <v-col>
            <v-card class="union-artifact-card" flat>
                <v-card-title style="font-size: 16px; font-weight: bold;">유니온 아티팩트</v-card-title>
                <v-card-item class="equip-container" style="border-top: 1px solid #EEE;">
                    <v-row>
                        <v-col cols="8">
                            유니온 아티팩트 이미지
                        </v-col>
                        <v-col cols="4">
                            유니온 등급 
                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
    <v-row v-if="loading" justify="space-between">
        <v-col>
            <v-card class="union-raider-card" flat>
                <v-card-title style="font-size: 16px; font-weight: bold;">유니온 공격대</v-card-title>
                <v-card-item class="equip-container" style="border-top: 1px solid #EEE;">
                    <v-row>
                        <v-col cols="8">
                            유니온 공격대 이미지
                        </v-col>
                        <v-col cols="4">
                            유니온 등급 
                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
</script>

<style scoped>
    .union-artifact-card {
        border: 1px solid #EEE;
    }
    .union-raider-card {
        border: 1px solid #EEE;
    }
</style>