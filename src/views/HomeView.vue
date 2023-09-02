<template>
   <v-app id="home" style="background-color: lightgray;">
      <NavBar @change-component="changeComponent" />
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
               <v-col cols="2">
                  <div style="position: absolute; z-index: 10; bottom:0; left:0; right:0">
                     <v-icon>fas fa-angle-double-down</v-icon>
                  </div>
               </v-col>
               <v-col cols="5">
                  <div style="position: relative; z-index: 10;" class="mt-16">
                     <v-img src="me.jpg" contain max-height="300"></v-img>
                  </div>
               </v-col>
            </v-row>
         </div>
         <div>
            <AboutSection v-if="currentComponent === 'AboutSection'" />
            <EducationSection v-if="currentComponent === 'EducationSection'" />
            <ProjectsSection v-if="currentComponent === 'ProjectsSection'" />
            <WorkExperienceSection v-if="currentComponent === 'WorkExperienceSection'" />
            <ResumeSection v-if="currentComponent === 'ResumeSection'" />
            <ContactSection v-if="currentComponent === 'ContactSection'" />
         </div>
      </v-container>
   </v-app>
</template>

<script>
import { defineComponent } from 'vue';

import NavBar from '../components/NavBar.vue';
import AboutSection from '../components/AboutSection.vue';
import EducationSection from '../components/EducationSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import WorkExperienceSection from '../components/WorkExperienceSection.vue';
import ResumeSection from '../components/ResumeSection.vue';
import ContactSection from '../components/ContactSection.vue';

export default defineComponent ({
   name: 'HomeView',
   components: {
      NavBar,
      AboutSection,
      EducationSection,
      ProjectsSection,
      WorkExperienceSection,
      ResumeSection,
      ContactSection,
   },
   data() {
    return {
      currentComponent: null,
    };
  },
  methods: {
    changeComponent(componentName) {
      this.currentComponent = componentName;
    },
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