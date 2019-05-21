<template>
  <v-app>
    <v-navigation-drawer
    fixed
    app
    dark
    v-model="drawer"
    >
    <v-list>
        <v-list-tile v-for="(item, index) in items" 
                    :key='index'
                    :to="item.to"
                    router
                    exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="blue lighten 3" app fixed dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>JD Email Builder</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-container app>
          <nuxt/>
        </v-container>
    </v-content>
    <v-footer class="pa-4 dflex justify-center" dark app fixed>
    <div>JD SPORTS. &copy; All Rights Reserved. {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      drawer: false,
      items: [
        {
          icon: 'home', 
          title: 'Home', 
          to: '/'
        },
        {
          icon: 'create', 
          title: 'Create Custom Mailer', 
          to: '/createmailer'
        },
        {
          icon: 'email', 
          title: 'All Mailers', 
          to: '/mailers'
        }, 
        {
          icon: 'list', 
          title: 'All Templates', 
          to: '/templates'
        }, 
        {
          icon: 'help', 
          title: 'Help', 
          to: '/help'
        }
      ]
    }
  }
}
</script>
