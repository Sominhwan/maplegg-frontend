<template>
        <v-app-bar dense elevation="0" height="65px" color="#363636" style="position: fixed; ">
            <v-app-bar-nav-icon @click.stop="mini = !mini" class="drawer-icon" color="white"></v-app-bar-nav-icon>
            <v-toolbar-title class="header-main-icon pa-1" @click="$router.push({name: 'home'})" style="color:white;">메인2</v-toolbar-title>
            <v-spacer/>
              <v-text-field class="search-input shrink mx-4" flat hide-details solo dense label="검색" prepend-inner-icon="mdi-magnify"></v-text-field>    
            <v-btn icon>
                <v-icon color="white">mdi-heart</v-icon>
            </v-btn>


          <!-- 텍스트에 마우스를 호버할 때 v-list 나타나기 -->
          <div @mouseover="showList = true" @mouseleave="showList = false" style="position: absolute; z-index: 10;">
            <v-btn>
              Hover me
            </v-btn>
            <!-- v-list -->
            <v-list v-show="showList"  style="position: absolute; z-index: 11 !important;">
              <v-list-item v-for="item in listItems" :key="item.id">
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
          <div>zzz</div>

           <!--  <span v-if="!authState" class="header-login" @click="$router.push({name: 'login'})">로그인</span> -->
            <!-- nav 우측 메뉴 -->
            <!-- <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-if="authState" icon v-bind="attrs" v-on="on">
                        <v-icon color="white">mdi-dots-vertical</v-icon>
                    </v-btn> 
                </template>
                <v-card>
                    <v-list>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-icon v-if="userInfoData.profileUrl == null" size="50">account_circle</v-icon>
                                <v-img 
                                    :src="userInfoData.profileUrl"                                         
                                    height="50"
                                    max-width="50"
                                    style="border-radius: 50%;"
                                ></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>{{ userInfoData.nickname }}</v-list-item-title>
                                <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                            <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                        <v-divider/>
                        <v-list-item v-for="item in items" :key="item.title" link @click="headerListEvent(item.title)">
                            <v-list-item-icon>
                            <v-icon class="material-icons" color="">
                                {{ item.icon }}
                            </v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu> -->
        </v-app-bar>    
</template>
<script setup>
  import { reactive, ref } from 'vue';
  
  // const items = reactive([
  //   { title: 'Click Me' },
  //   { title: 'Click Me' },
  //   { title: 'Click Me' },
  //   { title: 'Click Me 2' }
  // ]);

  const showList = ref(false);

  const listItems = reactive([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 10' }
  ])
</script>