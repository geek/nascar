<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="cousin in cousins"
          :key="cousin.name"
          :href="cousin.link"
          link
        >
          <v-list-item-icon>
            <v-icon>
              {{ cousin.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ cousin.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Nascar Racing {{ $route.params.cousin }} </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
      >
        <template v-slot:item.points="{ item }">
          <v-chip
            :color="getColor(item.points)"
            dark
          >
            {{ item.points }}
          </v-chip>
        </template>
      </v-data-table>
    </v-main>
  </v-app>

</template>

<script>
import races from '@/data/races.json'

export default {
  metaInfo: {
    title: 'Stats'
  },
  data() {
    const { id } = this.$route.params
    let lastRace = races[0]
    let cousins = lastRace.picks.map((pick) => {
      let cousin = pick.cousin

      return {
        name: cousin,
        icon: 'mdi-link',
        link: '/stats/' + cousin
      }
    })

    let items = races.map((race) => {
      let cousinPick = race.picks.find((pick) => {
        return pick.cousin === id
      })

      return {
        track: race.track,
        driver: cousinPick.driver,
        points: cousinPick.points
      }
    })

    console.log(races)
    console.log(id)

    const home = [{ name: 'home', link: "/", icon: 'mdi-link' }]
    cousins = home.concat(cousins)

    return {
      cousins,
      headers: [
          { text: 'Race Points', value: 'points' },
          { text: 'Driver', value: 'driver' },
          { text: 'Track', value: 'track' },
        ],
      items,
      drawer: null
    }
  },
  methods: {
      getColor (points) {
        if (points > 60) return 'red'
        else if (points > 50) return 'orange'
        else if (points > 30) return 'yellow'
        else if (points > 20) return 'purple'
        else return 'brown'
      },
    },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
