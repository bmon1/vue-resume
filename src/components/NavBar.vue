<template>
   <v-app-bar app color="black" dark flat class="px-10">
      <v-row justify="space-between">
         <v-btn >Branden</v-btn>
         <v-btn text @click="scroll('home')" class="text-green">Home</v-btn>
         <v-btn text @click="showAbout" class="text-green">About</v-btn>
         <v-btn text @click="showEducation" class="text-green">Education</v-btn>
         <v-btn text @click="showProjects" class="text-green">Projects</v-btn>
         <v-btn text @click="showWorkExperience" class="text-green">Work Experience</v-btn>
         <v-btn text @click="showResume" class="text-green">Resume</v-btn>
         <v-btn text @click="showContact" class="text-green">Contact Me</v-btn>
      </v-row>
   </v-app-bar>
   
</template>


<script>
export default {
   methods: {
      scroll(refName) {
         const element = document.getElementById(refName);
         element.scrollIntoView({behavior: "smooth"});
      },
      showAbout() {
         console.log('AboutSection');
         this.$emit('change-component', 'AboutSection');
         console.log('AboutSection2');
      },
      showEducation() {
         this.$emit('change-component', 'Education');
      },
      showProjects() {
         this.$emit('change-component', 'Projects');
      },
      showWorkExperience() {
         this.$emit('change-component', 'WorkExperience');
      },
      showResume() {
         this.$emit('change-component', 'Resume');
      },
      showContact() {
         this.$emit('change-component', 'Contact');
      },
   }
}
</script>


<style>

</style>