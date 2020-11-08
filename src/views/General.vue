<template>
  <v-app id="inspire">
    <NavigationDrawer />
    <v-main>
      <v-app-bar color="#202225"></v-app-bar>
      <FindProjectsCard/>
    </v-main>
  </v-app>
</template>

<script>
import FindProjectsCard from "@/components/FindProjectsCard";
import NavigationDrawer from "@/components/NavigationDrawer";
export default {
  components: {
    FindProjectsCard,
    NavigationDrawer
  },
  data: () => ({

  }),
}
</script>
<style>
#inspire {
  background: #36393F;
}
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