<template>
   <v-app-bar app color="black" dark flat class="px-10">
      <v-row justify="space-between">
         <div class="mt-1">Branden</div>
         <v-btn text @click="showAbout" class="text-green">About</v-btn>
         <v-btn text @click="showWorkExperience" class="text-green">Work Experience</v-btn>
         <v-btn text @click="showEducation" class="text-green">Education</v-btn>
         <v-btn text @click="showProjects" class="text-green">Projects</v-btn>
         <v-btn text @click="showResume" class="text-green">Resume</v-btn>
         <v-btn text @click="showContact" class="text-green">Contact Me</v-btn>
      </v-row>
   </v-app-bar>
   
</template>


<script>
export default {
   methods: {
      showAbout() {
         this.$emit('change-component', 'AboutSection');
      },
      showWorkExperience() {
         this.$emit('change-component', 'WorkExperienceSection');
      },
      showEducation() {
         this.$emit('change-component', 'EducationSection');
      },
      showProjects() {
         this.$emit('change-component', 'ProjectsSection');
      },
      showResume() {
         this.$emit('change-component', 'ResumeSection');
      },
      showContact() {
         this.$emit('change-component', 'ContactSection');
      },
      scroll(refName) {
         const element = document.getElementById(refName);
         element.scrollIntoView({behavior: "smooth"});
      },
   }
}
</script>


<style>

</style>