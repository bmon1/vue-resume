<template>
   <div class="container  mt-16">
      <div>
         
      </div>
      <v-row  class="d-flex-col">
         <v-col class="contact_input" justify="center" align="center">
            <h3>Contact Me</h3>
            <h6 style="color: black;">monroebranden1@gmail.com</h6>

            <form ref="form" @submit.prevent="sendEmail">
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
                  <button type="submit">Send Message</button>
               </div>
            </form>
         </v-col>
         <v-col>
            <div class="socials">
               <ul style="list-style-type: none;">
                  <li><a href="https://www.linkedin.com/in/branden-monroe-b75543102/"><image class="linkedin" src="linkedin.png" alt="Linkedin png" /></a></li>
                  <li><a href="https://github.com/bmon1"><image class="github" src="github.png" alt="Github png" /></a></li>
                  <li><a href="https://www.facebook.com/branden.monroe.79/"><image class="facebook" src="facebook.png" alt="Facebook png" /></a></li>
                  <li><a href="Branden-Monroe-Resume.docx"><image class="resume-icon" src="resume-icon.png" alt="Resume png" /></a></li>
               </ul>
            </div>
         </v-col>
      </v-row>
   </div>
</template>
   
<script>
import emailjs from 'emailjs-com';

export default {
   // service id: service_m1o5f1l
   // template id: template_rj2gxg7
   // user id (public key:): latW17PX1RK2FmGR_ 
  methods: {
    sendEmail() {
      emailjs.sendForm('service_m1o5f1l', 'template_rj2gxg7', this.$refs.form, 'latW17PX1RK2FmGR_')
        .then(() => {
          alert('Message sent!');
        })
        .catch((error) => {
          alert('Message not sent: ' + error);
        }); 
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
  width: 50%;
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