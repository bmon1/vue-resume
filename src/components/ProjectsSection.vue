<template>
   <div>
      <v-col cols="12" class="mt-16" id="about">
         <div>
            <v-row>
               <v-col cols="12">
                  <h2 class="mt-16 mb-4" align="center">Projects</h2>
                  <v-row>
                     <v-col cols="4">
                        <v-img class="project_pic" src="Movie_Database_Project_Picture.png"></v-img>
                     </v-col>
                     <v-col cols="4">
                        <v-img class="project_pic mt-6" src="Dash_Project_Picture.png"></v-img>
                     </v-col>
                     <v-col cols="4">
                        <v-img class="project_pic mt-6" src="Dash_Project_Picture_US.png"></v-img>
                     </v-col>
                  </v-row>
                  <v-row>
                     <v-col cols="4" align="center" >
                        <v-btn id="movie_button" @click="showHiddenMovie()">Movie Database</v-btn>
                        <p id="movie_details" class="mt-6">Python, HTML, CSS, JavaScript, SQLite, Flask, Jinja, and Bootstrap were used 
                           to build this dynamic application. The user must sign in or register an account 
                           before using the app. Once inside, the user can search a database of movies. 
                           Any movie that is clicked is considered "watched". Watched movies are put into 
                           a database where they are used to recommend more movies based on genre.</p>
                     </v-col>
                     <v-col cols="4" align="center">
                        <v-btn id="covid_world_button" @click="showHiddenWorld()">Covid World Map</v-btn>
                        <p id="covid_world_details" class="mt-6">
                           Python, Dash, Pandas, and Plotly were used to build this project which reads from a csv file 
                           to determine the areas of the world hit the hardest by Covid-19 at specific times since the 
                           beginning of the pandemic. The total death count by country is the metric used to edit the 
                           color of each country on the map. Statistics such as total cases, new cases, and new deaths 
                           are shown for each day chosen by the user.
                        </p>
                     </v-col>
                     <v-col cols="4" align="center">
                        <v-btn id="covid_us_button" @click="showHiddenUS()">Covid US Map</v-btn>
                        <p id="covid_us_details" class="mt-6">
                           Python, Dash, Pandas, and Plotly were used to build this project which reads from a csv file 
                           to determine the areas of the United States hit the hardest by Covid-19 at specific times 
                           since the beginning of the pandemic. The total death count by state is the metric used to edit 
                           the color of each state on the map. Statistics such as total cases, new cases, and new deaths 
                           are shown for each day chosen by the user.
                        </p>
                     </v-col>
                  </v-row>
               </v-col>
            </v-row>
         </div>
      </v-col>
   </div>
   </template>
   
   <script>
   export default {
      methods: {
      showHiddenMovie() {
      var x = document.getElementById("movie_details");
      if (x.style.display === "none") {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
      }
    },
    showHiddenWorld() {
      var x = document.getElementById("covid_world_details");
      if (x.style.display === "none") {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
      }
    },
    showHiddenUS() {
      var x = document.getElementById("covid_us_details");
      if (x.style.display === "none") {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
      }
    },
   },
   }
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
   .project_description {
      margin-top: 16px;
   }

   </style>