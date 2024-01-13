<template>
  <div>
    <v-col cols="12" class="mt-16" id="about">
      <div>
        <v-row>
          <v-col cols="12">
            <h1 class="mt-16 mb-16" align="center">Projects</h1>
            <v-divider
              :thickness="4"
              class="border-opacity-60"
              inset
            ></v-divider>
            <v-row>
              <v-col cols="3"></v-col>
              <v-col cols="6">
                <v-row class="my-12 justify-center">
                  <h3>Parking Management App (In Progress)</h3>
                </v-row>

                <v-row class="justify-center">
                  <video controls width="600">
                    <source
                      src="Parking-Garage-Project-Video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </v-row>
                <v-row>
                  <p class="mt-16 text-center">
                    This parking management application is an SPA that runs on a
                    Laravel PHP backend and a Vue.js frontend as well as uses
                    tailwind CSS for styling. It allows users to add, update,
                    and delete vehicles. Users can also "park" and "drive out"
                    their vehicle from a selected garage which decrements or
                    increments the number of open parking spots in that garage.
                    Parking history is recorded each time a vehicle enters or
                    leaves a garage and is displayed on the profile page (all
                    user's parking history) and the vehicle page (only the
                    specified vehicle's parking history).
                  </p>
                </v-row>
                <v-row class="flex mt-8 justify-center">
                  <a
                    href="https://github.com/bmon1/Parking-Garage-Frontend"
                    class="mx-4"
                    >Fronend GitHub Link</a
                  >
                  <a
                    href="https://github.com/bmon1/Parking-Garage-Project-Backend"
                    class="mx-4"
                    >Backend GitHub Link</a
                  >
                </v-row>
              </v-col>
              <v-col cols="3"></v-col>
            </v-row>
            <v-row class="mt-16">
              <v-col cols="4">
                <v-img
                  class="project_pic"
                  src="Movie_Database_Project_Picture.png"
                ></v-img>
              </v-col>
              <v-col cols="4">
                <v-img
                  class="project_pic mt-6"
                  src="Dash_Project_Picture.png"
                ></v-img>
              </v-col>
              <v-col cols="4">
                <v-img
                  class="project_pic mt-6"
                  src="Dash_Project_Picture_US.png"
                ></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4" align="center">
                <v-btn id="movie_button" @click="showHiddenMovie()"
                  >Movie Database</v-btn
                >
                <p id="movie_details" class="mt-6">
                  Python, HTML, CSS, JavaScript, SQLite, Flask, Jinja, and
                  Bootstrap were used to build this dynamic application. The
                  user must sign in or register an account before using the app.
                  Once inside, the user can search a database of movies. Any
                  movie that is clicked is considered "watched". Watched movies
                  are put into a database where they are used to recommend more
                  movies based on genre.
                </p>
              </v-col>
              <v-col cols="4" align="center">
                <v-btn id="covid_world_button" @click="showHiddenWorld()"
                  >Covid World Map</v-btn
                >
                <p id="covid_world_details" class="mt-6">
                  Python, Dash, Pandas, and Plotly were used to build this
                  project which reads from a csv file to determine the areas of
                  the world hit the hardest by Covid-19 at specific times since
                  the beginning of the pandemic. The total death count by
                  country is the metric used to edit the color of each country
                  on the map. Statistics such as total cases, new cases, and new
                  deaths are shown for each day chosen by the user.
                </p>
              </v-col>
              <v-col cols="4" align="center">
                <v-btn id="covid_us_button" @click="showHiddenUS()"
                  >Covid US Map</v-btn
                >
                <p id="covid_us_details" class="mt-6">
                  Python, Dash, Pandas, and Plotly were used to build this
                  project which reads from a csv file to determine the areas of
                  the United States hit the hardest by Covid-19 at specific
                  times since the beginning of the pandemic. The total death
                  count by state is the metric used to edit the color of each
                  state on the map. Statistics such as total cases, new cases,
                  and new deaths are shown for each day chosen by the user.
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
};
</script>

<style>
.project_description {
  margin-top: 16px;
}
</style>
