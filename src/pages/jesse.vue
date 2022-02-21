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
      <v-toolbar-title>{{ cousin }} -- Stats </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="pl-0 ml-2 mt-5 mr-0 pr-0">
        <ClientOnly>
        <v-row class="hidden-sm-and-down">
          <v-col>
            <apexchart width="100%" type="line" height="400px" :options="points.options" :series="points.series"></apexchart>
          </v-col>
          <v-col>
            <apexchart width="100%" type="bar" height="400px" :options="df.options" :series="df.series"></apexchart>
          </v-col>
        </v-row>
        <v-row class="hidden-md-and-up">
          <v-col>
            <apexchart width="100%" type="line" height="400px" :options="points.options" :series="points.series"></apexchart>
          </v-col>
        </v-row>
        <v-row class="hidden-md-and-up">
          <v-col>
            <apexchart width="100%" type="bar" height="400px" :options="df.options" :series="df.series"></apexchart>
          </v-col>
        </v-row>
        </ClientOnly>
        <v-row>
          <v-col>
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
          </v-col>
        </v-row>
      </v-container>

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
    const id = 'jesse';
    let cousin = id[0].toUpperCase() + id.substr(1)
    let lastRace = races[0]
    let points = {
      options: {
        title: { text: "Points Earned"},
        tooltip: {
          theme: 'dark',
        },
        chart: {
          toolbar: { show: false },
          id: 'points',
          foreColor: '#fff'
        },
        dataLabels: {
          position: 'bottom'
        },
        legend: {
          position: 'top'
        },
        xaxis: {
          type: 'category'
        }
      },
      series: []
    }

    let df = {
      options: {
        title: { text: "Driver Picks"},
        tooltip: {
          theme: 'dark',
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        chart: {
          id: 'picks',
          toolbar: { show: false },
          foreColor: '#fff'
        },
        dataLabels: {
          position: 'bottom'
        },
        legend: {
          position: 'top'
        },
        xaxis: {
          type: 'category'
        }
      },
      series: []
    }
    let cousins = lastRace.picks.map((pick) => {
      let cousin = pick.cousin

      return {
        name: cousin,
        icon: 'mdi-link',
        link: process.env.GRIDSOME_BASE_URL + '/' + cousin.toLowerCase()
      }
    })

    let driverFrequency = {}

    let items = races.map((race) => {
      let cousinPick = race.picks.find((pick) => {
        return pick.cousin.toLowerCase() === id
      }) || {}

      driverFrequency[cousinPick.driver] = (driverFrequency[cousinPick.driver] + 1) || 1;
      points.series.push({
        x: race.date,
        y: cousinPick.points
      })

      return {
        track: race.track,
        driver: cousinPick.driver,
        points: cousinPick.points || 0,
        position: cousinPick.position,
        date: race.date
      }
    })

    let dfData = []
    let dfKeys = Object.keys(driverFrequency)
    dfKeys.forEach((k) => {
      if (k !== 'undefined') {
        dfData.push({
          x: k,
          y: driverFrequency[k]
        })
      }
    })
    df.series = [{ data: dfData }]

    points.series = [{ data: points.series }]
    const home = [{ name: 'Home', link: process.env.GRIDSOME_BASE_URL, icon: 'mdi-home' }]
    cousins = home.concat(cousins)

    return {
      cousin,
      cousins,
      points,
      driverFrequency,
      df,
      headers: [
          { text: 'Race Points', value: 'points' },
          { text: 'Driver', value: 'driver' },
          { text: 'Position', value: 'position' },
          { text: 'Track', value: 'track' },
          { text: 'Date', value: 'date' },
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
