<template>
  <v-navigation-drawer
      color="#202225"
      v-model="drawer"
      app
  >
    <v-sheet
        color="grey lighten-4"
        class="pa-4"
    >
      <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
      ></v-avatar>

      <div>john@vuetifyjs.com</div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
      >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <div style="color: white">
              {{ text }}
            </div>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data: () => ({
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
  }),
}
</script>

<style scoped>

</style>