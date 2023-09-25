<template>
<div> 
   <v-col cols="12" class="mt-16" id="about">
      <div>
         <h1 class="mt-16 mb-16" justify="center" align="center">About Branden</h1>
         <v-divider :thickness="4" class="border-opacity-60" inset></v-divider>
            <v-row>
               <v-col class="" cols="6">
                  <row>
                     <div class="about_egg">
                        <v-img src="fam1.jpg" style=""></v-img>
                     </div>
                  </row>
                  <row>
                     <div class="d-flex mt-12 ml-16">
                        <div class="chief_egg">
                           <v-img src="Chief.png"></v-img>
                        </div>
                        <div class="simba_egg">
                           <v-img src="Simba.png"></v-img>
                        </div>
                     </div>
                  </row>
               </v-col>
               <v-col cols="5" class="mt-16 mb-16">
                  <p>
                     &emsp; In my personal life, I have a pitbull named Chief and a cat named Simba. I enjoy traveling and 
                     attending music festivals with a close group of friends. I'm always interested in learning new things. Recently, I've
                     been pushing myself to learn how to play the piano and speak Japanese. These are new hobbies, so I'm not very
                     good at them yet, but we all have to start somewhere. 
                  </p>
                  <br />
                  <p>
                     &emsp; I've been interested in computer science and technology in general as long as I can remember.
                     In middle school we were told to journal about a subject we wished we understood better.
                     I wished I had a better understanding of how hardware was controlled by software and never
                     lost that interest. 
                  </p>
                  <br />
                  <p>
                     &emsp; Now that I've graduated with a computer science degree and have experience with large 
                     applications in a professional setting, I want to continue togrow my skill set in software 
                     development. Being able to find real world meaning in a pile of unreadable or unrecognizable 
                     data to the human eye is both extremely necessary in todays climate as well as personally rewarding.
                  </p>
                  <br />
                  <div class="blockquote">
                     <p>
                        &emsp; “Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate,
                        and brilliant. Together they are powerful beyond imagination.”- Albert Einstein </p>
                  </div>
                  <br />
                  <p>
                     &emsp; I look forward to playing a small piece in the machine that connects humans and
                     computers into something powerful beyond imagination. 
                  </p>
               </v-col>
            </v-row>
      </div>
   </v-col>
</div>
</template>

<script>

</script>

<style>
blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
.about_egg {
   display: block;
   margin-left: 220px;
   margin-top: 50px;
   width: 356px;
   height: 300px;
   background:  #58d68d;
   border-radius: 50% 50% 50% 50% / 60% 60% 40% 0%;
}
.simba_egg {
   display: block;
   margin: 0 15px 15px 0;
   width: 300px;
   height: 300px;
   background:  #58d68d;
   border-radius: 50% 50% 50% 50% / 60% 60% 0% 40%;
}
.chief_egg {
   display: block;
   margin: 0 15px 15px 0;
   width: 300px;
   height: 300px;
   background:  #58d68d;
   border-radius: 50% 50% 50% 50% / 60% 60% 40% 0%;
}
</style>