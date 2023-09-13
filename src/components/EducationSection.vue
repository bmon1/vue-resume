<template>
   <div>
      <v-col cols="12" class="mt-16" id="about">
         <div>
            <div class="education-title">
               <h1 class="mt-16 mb-16" align="center">Education</h1>
            </div>
            <v-divider :thickness="4" class="border-opacity-60" inset></v-divider>
            <v-row class="mt-16 ml-16 mr-16"  justify="center" align="center">
               <v-col cols="12" sm="6">
                  <div class="egg">
                     <v-img src="fam1.jpg"></v-img>
                  </div>
               </v-col>
               <v-col cols="12" sm="6" justify="center" align="center" class="mb-16">
                  <div class="education-experience">
                     <div class="mt-16">
                        <h3>Texas State University</h3>
                        <p>B.S. in Computer Science from Texas State University</p>
                        <p>(3.11 GPA) May 2022</p>
                     </div>
                     <div class="mt-16">
                        <h3>ATP Flight School</h3>
                        <p>Private and Instrument Pilot's Licenses</p>
                        <p>April 2013</p>
                     </div>
                  </div>
               </v-col>
            </v-row>
         </div>
      </v-col>
   </div>
   </template>
   
   <script>
   
   </script>
   
   <style>
   .egg {
      display: block;
      margin-left: 100px;
      margin-top: 50px;
      width: 356px;
      height: 300px;
      background:  #58d68d;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 0%;
   }
   </style>