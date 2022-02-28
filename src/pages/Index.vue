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
      <v-toolbar-title>Nascar Racing Pool</v-toolbar-title>
    </v-app-bar>

    <v-main>
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
        <template v-slot:item.cousin="{ item }">
          <g-link :to="item.cousin.toLowerCase()">{{ item.cousin }}</g-link>
        </template>
      </v-data-table>

      <v-divider></v-divider>

      <v-list>
      <v-list-item
          v-for="item in itemsSorted"
          :key="item.cousin"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.cousin }} - {{ item.total }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <p class="pa-5">
        <h4>Rules</h4>
        <p>
          <ol>
            <li>Pick driver who gets official first - 75 points</li>
            <li>Pick driver who gets higher than other picks - 60 points</li>
            <li>2nd - 40 points</li>
            <li>3rd - 25 points</li>
            <li>Driver is in last 2 positions - 10 points</li>
          </ol>
        </p>
      </p>
    </v-main>
  </v-app>

</template>

<script>
import races from '@/data/races.json'

export default {
  metaInfo: {
    title: 'Nascar Pool'
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
        track: lastRace.track,
        date: lastRace.date
      })

      return {
        name: cousin,
        icon: 'mdi-link',
        link: process.env.GRIDSOME_BASE_URL + '/' + cousin.toLowerCase()
      }
    })

    const home = [{ name: 'Home', link: process.env.GRIDSOME_BASE_URL, icon: 'mdi-link' }]
    cousins = home.concat(cousins)

    const itemsSorted = items.sort((x, y) => {
      if (x.total > y.total) {
        return -1
      } else if (x.total < y.total) {
        return 1
      }

      return 0
    });

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
          { text: 'Date', value: 'date' },
        ],
      items,
      itemsSorted,
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
