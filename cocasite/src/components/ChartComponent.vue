<template>
  <Chart
    :size="{ width: 330, height: 166 }"
    :data="data"
    :margin="margin"
    :direction="direction"
    :axis="axis">

    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Area :dataKeys="['name', 'pl']" type="monotone" :areaStyle="{ fill: 'url(#grad)' }" />
      <Line
        :dataKeys="['name', 'pl']"
        type="monotone"
        :lineStyle="{
          stroke: 'red'
        }"
      />
      <Line
        :dataKeys="['name', 'avg']"
        type="monotone"
        :lineStyle="{
          stroke: 'blue'
        }"
      />
      <Marker v-if="marker" :value="1000" label="Mean." color="red" strokeWidth="2" strokeDasharray="6 6" />
      <defs>
        <linearGradient id="grad" gradientTransform="rotate(90)">
          <stop offset="0%" stop-color="red" stop-opacity="1" />
          <stop offset="100%" stop-color="red" stop-opacity="0.4" />
        </linearGradient>
      </defs>
    </template>

    <template #widgets>
      <Tooltip
        borderColor="red"
        :config="{
          pl: { color: 'red' },
          avg: { color: 'blue' },
          inc: { hide: true }
        }"
      />
    </template>

  </Chart>
</template>

<script lang="ts">
export const plByMonth = [
  { name: 'Jan', pl: 450, avg: 400, inc: 300 },
  { name: 'Feb', pl: 500, avg: 600, inc: 400 },
  { name: 'Apr', pl: 600, avg: 610, inc: 500 },
  { name: 'Mar', pl: 750, avg: 800, inc: 700 },
  { name: 'May', pl: 400, avg: 550, inc: 200 },
  { name: 'Jun', pl: 600, avg: 650, inc: 300 },
  { name: 'Jul', pl: 400, avg: 290, inc: 100 }
]
import { defineComponent, ref } from 'vue'
import { Chart, Grid, Line } from 'vue3-charts'

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Grid, Line },
  setup() {
    const data = ref(plByMonth)
    const direction = ref('horizontal')
    const margin = ref({
      left: 0,
      top: 20,
      right: 35,
      bottom: 0
    })

    const axis = ref({
      primary: {
        type: 'band'
      },
      secondary: {
        domain: ['dataMin', 'dataMax + 100'],
        type: 'linear',
        ticks: 8
      }
    })

    return { data, direction, margin, axis }
  }
})
</script>
