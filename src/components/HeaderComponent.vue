<template>
  <header>
    <nav id="nav">
        <ul>
            <li v-for="item in items" :key="item" class="header-list">
                <router-link
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
                            <v-list-item v-for="child in item.children" :value="child" :key="child" color="white">
                                <router-link :to="child.url" id="header-sub-text">
                                    <v-list-item-title>{{ child.name }}</v-list-item-title>
                                </router-link>
                            </v-list-item>     
                        </v-list>
                    </v-card>
                </span>
            </li>
        </ul>
    </nav>
  </header>
</template>
<script>
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
                        name: 'Service1'
                    },
                    {
                        url: '#service2',
                        name: 'Service2'
                    },
                    {
                        url: '#service3',
                        name: 'Service3'
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