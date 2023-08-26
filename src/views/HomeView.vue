<template>
   <v-app id="home">
      <NavBar />
      <v-container fluid>
         <div class="head">
            <v-row>
               <v-col cols="5">
                  <div class="intro mt-16" style="position: relative">
                     <h1 class="text-green">Hello,</h1>
                     <h1 class="text-white">I'm Branden Monroe</h1>
                     <h2 class="text-white">Software Developer with QA Experience</h2>
                     <v-btn tile dark class="text-green mt-8" variant="outlined">Contact Me</v-btn>
                  </div>
               </v-col>
               <v-col cols="7">

               </v-col>
            </v-row>
         </div>
      </v-container>
   </v-app>
</template>

<script>
import { defineComponent } from 'vue';

import NavBar from '@/components/NavBar.vue'

export default defineComponent ({
   name: 'HomeView',
   components: {
      NavBar,
   },
});
</script>

<style scoped>
.v-container {
   padding: 16px 0;
}
.head {
   position: relative;
   text-align: center;
   padding: 12px;
   margin-bottom: 6px;
   height: 400px;
   width: 100%;
   color: white;
}
.head:before {
   content: " ";
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 50%;
   background: black;
   transform: skew(0deg, 6deg)
}
.head:after {
   content: " ";
   position: absolute;
   top: 0;
   right: 0;
   height: 100%;
   width: 50%;
   background: black;
   transform: skew(0deg, -6deg)
}
</style>