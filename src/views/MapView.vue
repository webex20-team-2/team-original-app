<template>
  <GoogleMap
    :api-promise="apiPromise"
    v-bind:api-key="api"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
  <button @click="calcTime">時間を測る</button>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map"
import { Loader } from "@googlemaps/js-api-loader"

export default {
  components: { GoogleMap, Marker },
  data() {
    return {
      center: { lat: 40.689247, lng: -74.044502 },
      api: process.env.VUE_APP_API_KEY,
      apiPromise: "",
      google: "",
    }
  },
  beforeMount: function () {
    const loader = new Loader({
      apiKey: process.env.VUE_APP_API_KEY,
      libraries: ["routes"],
    })
    this.apiPromise = loader.load()
    this.apiPromise.then((google) => {
      this.google = google
    })
  },
  methods: {
    calcTime: function () {
      // 出発地・到着地を定義 (今回は2つの出発-到着ペアについて調べる)
      var origin1 = new this.google.maps.LatLng(55.930385, -3.118425)
      var origin2 = "Greenwich, England"
      var destinationA = "Stockholm, Sweden"
      var destinationB = new this.google.maps.LatLng(50.087692, 14.42115)

      // DistanceMatrixService を定義
      var service = new this.google.maps.DistanceMatrixService()

      // API 後に動く callback 関数を先に定義。今回は単純に console に表示させた
      const callback = function (response, status) {
        console.log(response)
        console.log(status)
      }
      // API にリクエストする
      service.getDistanceMatrix(
        {
          origins: [origin1, origin2],
          destinations: [destinationA, destinationB],
          travelMode: "DRIVING",
          // 以下必須でないため省略
          // transitOptions: TransitOptions,
          // drivingOptions: DrivingOptions,
          // unitSystem: UnitSystem,
          // avoidHighways: Boolean,
          // avoidTolls: Boolean,
        },
        callback
      )
    },
  },
}
</script>
