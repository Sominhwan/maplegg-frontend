<template>
    <v-row justify="space-between">
      <v-col>
        <v-card flat>
            <v-btn class="image-upload-btn" block elevation="0" color="#EBF5FF" @click="openFileInput()">
                <v-icon size="16">add</v-icon><span class="ml-1">파일 업로드</span>
            </v-btn>
            <input ref="fileInput" type="file" @change="handleFileUpload" style="display: none;"/>
            <!-- <input ref="fileInput" type="file" accept="image/*" @change="handleFileUpload" style="display: none;"/> -->
        </v-card>
        <v-card flat>
            <v-btn class="image-upload-btn2" block elevation="0" color="#EEE" @click="singleFileLoad('키오스크')">
                <v-icon size="16">add</v-icon><span class="ml-1">파일 로드</span>
            </v-btn>
        </v-card>
      </v-col>
    </v-row>
</template>

<script setup>
import { fileLoad, fileUpload } from '@/api/file/file.js';
import { ref } from 'vue';
const fileInput = ref(null);

  const openFileInput = () => {
    fileInput.value.click();
  }
  const handleFileUpload = (event) => {
    if(event.target.files.length < 2) {
      console.log(event.target.files);
        const file = event.target.files[0]
        // const fileMaxSize = 500 * 1024 // 500KB 
        const fileMaxSize = 500 * 1024 * 1000 // 500KB 
        if(file.size > fileMaxSize) {
            alert('파일 크기는 500KB 이하여야 합니다.')
            return
        }      
        if(file) {
          singleFileUpload(file);
        }
    } else {
        alert('파일 개수가 제한 되어있습니다.')
    }
  }
  // 파일 업로드 api
  const singleFileUpload = async (data) => {
    const formData = new FormData();
    formData.append('file', data);

    try {
      const response = await fileUpload(formData);
      console.log(response);
    } catch(error) {
      console.log(error); 
    }
  }
  // 파일 로드 api
  const singleFileLoad = async (data) => {
    const params = { 'fileName': data };
    try {
      const response = await fileLoad(params);
      console.log(response);
    } catch(error) {
      console.log(error); 
    }
  }
</script>

<style lang="scss" scoped>
 .image-upload-btn {
    color: #0064D1;
    font-size: 15px;
    font-weight: 600;
 }
 .image-upload-btn2 {
    color: #EEE;
    font-size: 15px;
    font-weight: 600;
 }
</style>