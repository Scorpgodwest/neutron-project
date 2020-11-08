<template>
<v-app id="registration">
  <v-row justify="center">
    <v-card width="1000" height="700" id="card" class="rounded-lg">
      <div style="text-align: center;">
        <h1>Register your Account</h1>
        <h1>Input your Email</h1>
        <input type="text" class="registrationInput" placeholder="Email">
        <h1>Input your Password</h1>
        <input type="password" class="registrationInput" placeholder="Password"><br>
        <div class="checkboxNews">
          <input type="checkbox" class="checkboxRegistration">
          <div style="display: inline; font-size: 25px">Присылать уведомленя об обновлениях на почту</div>
        </div><br>
        <v-btn width="250px" height="50px" color="#2F3136">
          <div style="color: white">
            Create Account
          </div>
        </v-btn>
      </div>
    </v-card>
  </v-row>
</v-app>
</template>

<script>
export default {
name: "Registration"
}
</script>

<style scoped>
#registration {
  background: #2F3136;
}
.registrationInput {
  background: #D9D9D9;
  border-radius: 7px;
  width: 400px;
  padding: 10px;
  font-size: 25px;
  margin: 20px;
}
#card {
  margin: 50px;
}
.checkboxRegistration {
  display: inline;
  width: 20px;
  height: 20px;
  margin: 5px;
}
</style>