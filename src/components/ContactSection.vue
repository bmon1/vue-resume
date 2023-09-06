<template>
   <div style="background-color: black; margin: 0 16px 0">
      <v-alert
         v-model="alertVisible"
         type="success"
         class="mt-16"
         closable
         color="green"
         variant="outlined"
         title="Message Sent"
         text="Thank you for checking out the site. Branden will respond to your message ASAP"
      ></v-alert>
   </div>
   <div class="container  mt-16">
      <v-row  class="d-flex-col">
         <v-col class="contact_input" justify="center" align="center">
            <h2>Contact Me</h2>
            <h3 style="color: black; font-weight: normal; margin-top: 4px;">monroebranden1@gmail.com</h3>

            <form ref="form" class="mt-6">
               <div>
                  <input type="text" name="name" placeholder="Your Name" required>
               </div>
               <div>
                  <input type="email" name="email" placeholder="E-mail" required>
               </div>
               <div>
                  <input type="text" name="subject" placeholder="Subject" required>
               </div>
               <div>
                  <textarea name="message" rows="4" placeholder="Send me a message"></textarea>
               </div>
               <div>
                  <v-btn type="button" @click="sendEmail($event)">Send Message</v-btn>
               </div>
            </form>
         </v-col>
         <v-col>
            <div class="socials">
               <ul style="list-style-type: none; margin-top: 8rem;">
                  <li><a href="https://www.linkedin.com/in/branden-monroe-b75543102/"><v-img class="linkedin icon" src="linkedin.png" alt="Linkedin png" /></a></li>
                  <li><a href="https://github.com/bmon1"><v-img class="github icon" src="github.png" alt="Github png" /></a></li>
                  <li><a href="resume.jpg"><v-img class="resume-icon icon" src="resume-icon.png" alt="Resume png" /></a></li>
               </ul>
            </div>
         </v-col>
      </v-row>
   </div>
</template>
   
<script>
import emailjs from 'emailjs-com';

export default {
 
  methods: {
      sendEmail(event) {
         event.preventDefault();
         emailjs.sendForm('service_m1o5f1l', 'template_rj2gxg7', this.$refs.form, 'latW17PX1RK2FmGR_')
         .then(() => {
            alert('Message sent!');
         })
         .catch((error) => {
            alert('Message not sent: ' + error);
         }); 
         this.showAlert();
      },
      showAlert() {
         this.alertVisible = true; // Set alertVisible to true to show the alert
         setTimeout(() => {
         this.alertVisible = false; // After 5 seconds, hide the alert
         }, 5000); // 5000 milliseconds = 5 seconds
      }
   },
  data () {
   return {
      alertVisible: false,
   }
  }
}
</script>

<style>
.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  padding: 20px;
  width: 65%;
}

.icon {
   height: 5rem;
   margin-top: 1rem;
}

.contact_input {
   background-color: #f2f2f2;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
</style>