<template>
   <v-app-bar app color="black" dark flat class="px-10">
      <v-row justify="space-between">
         <div class="w-1/3">
            <v-btn >Branden</v-btn>
         </div>
         <v-btn text @click="scroll('home')" class="text-green">Home</v-btn>
         <v-btn text @click="scroll('about')" class="text-green">About</v-btn>
         <v-btn text @click="scroll('education')" class="text-green">Education</v-btn>
         <v-btn text @click="scroll('projects')" class="text-green">Projects</v-btn>
         <v-btn text @click="scroll('work_experience')" class="text-green">Work Experience</v-btn>
         <v-btn text @click="scroll('resume')" class="text-green">Resume</v-btn>
         <v-btn text @click="scroll('contact')" class="text-green">Contact Me</v-btn>
      </v-row>
   </v-app-bar>
   
</template>


<script>
export default {
   methods: {
      scroll(refName) {
         const element = document.getElementById(refName);
         element.scrollIntoView({behavior: "smooth"});
      }
   }
}
</script>


<style>

</style>