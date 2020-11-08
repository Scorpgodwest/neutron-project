<template>
  <v-row justify="center">
    <v-card class="findProjectsCard rounded-xl" width="1200" color="#202225" elevation="20">
      <h1 class="findProjectsH1">Find Projects</h1>
      <v-toolbar color="#303543" class="rounded-pill">
        <v-btn class="rounded-pill">Find</v-btn>
        <input type="text" class="findProjectsInput" placeholder="Name of Project">
      </v-toolbar>
    </v-card>
  </v-row>
</template>

<script>
export default {
name: "FindProjectsCard"
}
</script>

<style scoped>
.findProjectsCard {
  margin: 30px;
  padding: 15px;
}
.findProjectsInput {
  background: #D9D9D9;
  width: 1050px;
  height: 35px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 8px;
  font-size: 20px;
  padding: 5px;
}
.findProjectsH1 {
  color: white;
  text-align: center;
  margin-bottom: 10px;
}
* {
  outline: none;
}
input::-webkit-input-placeholder {
  font-size: 18px;
}
@media screen and (max-width: 400px) {
  .findProjectsInput {
    width: 150px;
  }
  input::-webkit-input-placeholder {
    font-size: 15px
  }
}
</style>