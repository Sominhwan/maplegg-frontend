<template>
  <header>
    <nav id="nav">
        <ul>
            <li v-for="item in items" :key="item" class="header-list">
                <router-link
                    :class="{ 'header-color': item.name == '홈' }"
                    id="header-text"
                    :to="item.url"
                    v-if="!item.children">
                    {{ item.name }}
                </router-link>
                <span
                    v-else
                    v-on:mouseover="mouseover"
                    v-on:mouseleave="mouseleave"
                    id="header-text"
                >
                    {{ item.name }}
                    <v-card
                        class="dropdown rounded-0"
                        :class="{ isOpen }"
                        id="header-container-list"       
                    >
                        <v-list class="rounded-0" nav density="compact" width="300" bg-color="#323337">
                            <v-list-item 
                                class="header-child-container-list"
                                :href="child.url" 
                                :active="false" 
                                v-for="child in item.children" :value="child" :key="child.id" 
                                color="white"
                            >
                                <!-- <router-link :to="child.url" id="header-sub-text">
                                </router-link> -->
                                {{ child.name }}                          
                            </v-list-item>     
                        </v-list>
                    </v-card>
                </span>
            </li>
        </ul>
        <v-card
            class="ml-15"
            color="#17181E"
            width="350"
            elevation="0"
            flat
        >
            <v-text-field
                density="compact"
                variant="solo"
                bg-color="#323337"
                rounded
                label="캐릭터 또는 길드명을 입력하세요."
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                maxlength="30"
                v-model="searchInfoValue"
                @click:append-inner="searchInfo()"
                @keyup.enter="searchInfo()"
            ></v-text-field>
        </v-card>
    </nav>
  </header>
</template>
<script>
import { ref } from 'vue';
export default {
  data: () => ({
    isOpen: false,
    items: [
            {
                url: '#home',
                name: '홈'
            },
            {
                url: '#about',
                name: '가이드'
            },
            {
                url: '#service',
                name: '서비스',
                children: [
                    {
                        url: '#service1',
                        name: 'Service1',
                        id: 1
                    },
                    {
                        url: '#service2',
                        name: 'Service2',
                        id: 2
                    },
                    {
                        url: '#service3',
                        name: 'Service3',
                        id: 3
                    },
                ]
            },
            {
                url: '#contact',
                name: 'Contact'
            }
        ]    
  }),
  methods: {
        mouseover: function () {
            this.isOpen = true;
        },
        mouseleave: function () {
            this.isOpen = false;
        }
  },
  setup(props, context) {
    const searchInfoValue = ref('');
    const searchInfo = () => {
        console.log(searchInfoValue.value)
    };

    return {
        searchInfoValue,
        searchInfo
    }
  }
}
</script>
<style scoped>
  header {
      width: 100%;
      position: relative;
      z-index: 1000 !important;
      background-color: #17181E;
  }

  #nav {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 auto;
  }

  #nav > ul {
      display: flex;
      margin: 0;
      padding: 0;
      list-style-type: none;
  }

  #nav > ul > li > a {
      display: block;
      height: auto;
      padding: 20px;
      color: #fff;
      text-decoration: none;
  }

  #nav > ul > li > span {
      position: relative;
      display: block;
      height: auto;
      padding: 20px;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
  }

  #nav > ul > li > span:after {
      content: '▼';
      display: inline-block;
  }

  #header-text {
    transition: color 0.25s ease;
    text-decoration: none;
    color: white;
  }

  #header-text:hover {
    color: #F7A600 !important;
  }

  #header-sub-text {
    text-decoration: none;
    color: white;
  }

  .header-color {
    color: #F7A600 !important;
  }

  .header-list:hover {
    background-color: #323337;
  }
  
  #header-container-list {
    border-bottom-left-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
  }

  .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      display: none;
      padding: 0;
      list-style-type: none;
      background-color: #17181E;
  }

  .dropdown li {
      width: 150px;
      border-bottom: 1px solid #fff;
  }

  .dropdown li a {
      display: block;
      padding: 10px;
      color: #fff;
      text-decoration: none;
  }

  .isOpen {
      display: block;
  }
</style>