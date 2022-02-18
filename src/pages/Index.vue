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
      <v-toolbar-title>Nascar Racing</v-toolbar-title>
    </v-app-bar>

    <v-main class="mt-10">
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
      >
        <template v-slot:item.total="{ item }">
          <v-chip
            :color="getColor(item.total)"
            dark
          >
            {{ item.total }}
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
    title: 'Hello, world!'
  },
  data() {
    let lastRace = races[0]
    let items = []
    let cousins = lastRace.picks.map((pick) => {
      let cousin = pick.cousin
      let total = 0

      races.forEach((race) => {
        race.picks.forEach((p) => {
          if (p.cousin == cousin) {
            total += p.points
          }
        })
      })

      items.push({
        cousin,
        total,
        points: pick.points,
        current_pick: pick.driver,
        track: lastRace.track
      })

      return {
        name: cousin,
        icon: 'mdi-link'
      }
    })


    return {
      cousins,
      headers: [
          {
            text: 'Cousin',
            align: 'start',
            value: 'cousin',
          },
          { text: 'Cumulative Points', value: 'total' },
          { text: 'Race Points', value: 'points' },
          { text: 'Driver', value: 'current_pick' },
          { text: 'Track', value: 'track' },
        ],
      items,
      drawer: null
    }
  },
  methods: {
      getColor (points) {
        if (points > 800) return 'red'
        else if (points > 400) return 'orange'
        else if (points > 200) return 'yellow'
        else if (points > 100) return 'purple'
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
