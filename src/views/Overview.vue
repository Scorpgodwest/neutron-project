<template>
<v-app id="inspire">
  <v-app-bar
      app
      color="#2F3136"
      dark
  >
    <div class="d-flex align-center">
      <v-btn color="white" height="55px">
        <img style="display: inline" src="../../public/img/icons/IconSmall.png" width="50" height="50">
        <h1 style="display: inline; color: black">Neutron</h1>
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <v-btn color="white" class="menuList">
      <h2 style="color: black">Why Neutron</h2>
    </v-btn>
    <v-btn color="white" class="menuList">
      <h2 style="color: black">FAQ</h2>
    </v-btn>
    <v-btn color="white">
      <h2 style="color: black">Join</h2>
    </v-btn>
  </v-app-bar>
  <v-main>
    <v-row justify="center">
      <div style="margin: 40px">
        <v-card color="#2F3136" width="1100" class="rounded-xl" elevation="10">
          <v-row justify="center">
            <img src="../../public/img/icons/icon.png" height="300" width="300"  style="margin: 30px">
          </v-row>
          <v-row justify="center">
            <h1 style="color: white; font-size: 50px">New Development for Developers</h1>
          </v-row>
          <v-row justify="center">
            <v-btn color="white" width="280" height="70" style="margin: 25px" class="rounded-lg">
                 <div style="font-size: 30px">
                     Registration
                 </div>
            </v-btn>
          </v-row>
        </v-card>
      </div>
    </v-row>
    <div class="description">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2D2D2D" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,192C384,203,480,149,576,128C672,107,768,117,864,106.7C960,96,1056,64,1152,69.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div style="background: #2D2D2D; color: white">
        <h1 style="text-align: center; margin-bottom: 40px;">Build your project with Neutron</h1>
        <v-row justify="center">
          <v-card width="350" style="margin: 30px" class="rounded-xl" height="200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra turpis mollis ultrices semper.
            Aliquam cursus dolor felis, id iaculis diam egestas a. Donec ex neque, placerat at scelerisque id.
          </v-card>
          <div style="background: white; color: black; margin: 50px">Image</div>
        </v-row>
      </div>
    </div>
    <div class="description2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#36393F" fill-opacity="1" d="M0,0L40,21.3C80,43,160,85,240,128C320,171,400,213,480,213.3C560,213,640,171,720,138.7C800,107,880,85,960,90.7C1040,96,1120,128,1200,128C1280,128,1360,96,1400,80L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <div style="background: #36393F; color: white">
        <h1 style="text-align: center; margin-bottom: 40px;">Recruit people to the team to implement it</h1>
        <v-row justify="center">
          <v-card width="350" style="margin: 30px" class="rounded-xl" height="200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra turpis mollis ultrices semper.
            Aliquam cursus dolor felis, id iaculis diam egestas a. Donec ex neque, placerat at scelerisque id.
          </v-card>
          <div style="background: white; color: black; margin: 50px">Image</div>
        </v-row>
      </div>
    </div>
    <div class="description" style="margin-bottom: 50px">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2D2D2D" fill-opacity="1" d="M0,0L40,37.3C80,75,160,149,240,160C320,171,400,117,480,117.3C560,117,640,171,720,192C800,213,880,203,960,176C1040,149,1120,107,1200,85.3C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <div style="background: #2D2D2D; color: white">
        <h1 style="text-align: center; margin-bottom: 40px;">Build your project with Neutron</h1>
        <v-row justify="center">
          <v-card width="350" style="margin: 30px" class="rounded-xl" height="200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra turpis mollis ultrices semper.
            Aliquam cursus dolor felis, id iaculis diam egestas a. Donec ex neque, placerat at scelerisque id.
          </v-card>
          <div style="background: white; color: black; margin: 50px">Image</div>
        </v-row>
      </div>
        <v-footer
            color="#1B2224"
            absolute
            class="font-weight-medium"
        >
          <v-col
              class="text-center"
              cols="12"
          >
            {{ new Date().getFullYear() }} — <strong style="color: white">Made by Scorpgodwest</strong>
          </v-col>
        </v-footer>
    </div>
  </v-main>
</v-app>
</template>

<script>
export default {
name: "Overview"
}
</script>

<style scoped>
#inspire {
  background: #36393F;
}
.menuList {
  margin: 15px;
}
.description {
  background: #36393F;
}
.description > svg {
  display: block;
}
.description2 {
  background: #2D2D2D;
}
.description2 > svg {
  display: block;
}
</style>