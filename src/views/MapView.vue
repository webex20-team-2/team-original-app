<template>
  <section class="nyuryokuran">
    <h2 class="nyuryoku">入力フォーム</h2>
    場所：
    <input class="textbox" type="text" v-model="mapplace" />
    集合場所：(駅名でお願いします。)
    <input class="textbox" type="text" v-model="startplace" />
    滞在時間：
    <select class="textbox" v-model="stayingtime">
      <option>10分</option>
      <option>20分</option>
      <option>30分</option>
      <option>40分</option>
      <option>50分</option>
      <option>1時間</option>
      <option>1時間30分</option>
      <option>2時間</option>
      <option>2時間30分</option>
      <option>3時間</option>
    </select>
    移動方法：
    <select class="textbox" v-model="movingmethod">
      <option>徒歩</option>
      <option>自転車</option>
      <option>電車</option>
      <option>車</option>
    </select>
  </section>
  <div>
    <button class="tuika-button" v-on:click="tuika">検索</button>
  </div>

  <GoogleMap
    :api-promise="apiPromise"
    v-bind:api-key="api"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <div v-for="maker in makers" :key="maker">
      <Marker :options="{ position: maker }" />
    </div>
  </GoogleMap>
  <button @click="calcTime">時間を測る</button>
  <br />
  <select class="textbox" v-model="sug">
    <option v-for="(suggest, index) in suggests" v-bind:key="index">
      {{ suggest.displayName.text }}
    </option>
  </select>
  <div>
    {{ time }}
  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map"
import { Loader } from "@googlemaps/js-api-loader"
import axios from "axios"

export default {
  components: { GoogleMap, Marker },
  data() {
    return {
      center: { lat: 35.6764225, lng: 139.650027 },
      api: process.env.VUE_APP_API_KEY,
      suggests: [],
      keyword: "",
      apiPromise: "",
      google: "",
      makers: [{ lat: 35.6764225, lng: 139.650027 }],
      logs: [],
      mapplace: "",
      stayingtime: "",
      movingmethod: "",
      sug: "",
      time: "0",
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
    tuika: function () {
      this.logs.push({
        place: this.mapplace,
        time: this.stayingtime,
        method: this.movingmethod,
      })
      this.Search()
    },
    Search: async function () {
      const response = await axios.post(
        "https://places.googleapis.com/v1/places:searchText",
        {
          textQuery: this.logs[this.logs.length - 1].place + "レストラン",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": "AIzaSyC3E-6jBuyvOXY3f7DAPJs7XRsg7rdoTBI",
            "X-Goog-FieldMask": "places.displayName,places.location",
          },
        }
      )
      this.suggests = response.data.places
      this.makers = []
      for (let i = 0; i < this.suggests.length; i++) {
        this.makers.push({
          lat: this.suggests[i].location.latitude,
          lng: this.suggests[i].location.longitude,
        })
      }
      console.log(this.makers)
      console.log(response)
    },
    calcTime: function () {
      // 出発地・到着地を定義 (今回は2つの出発-到着ペアについて調べる)
      var origin1 = this.startplace
      var destinationA = this.sug
      // DistanceMatrixService を定義
      var service = new this.google.maps.DistanceMatrixService()
      // API 後に動く callback 関数を先に定義。今回は単純に console に表示させた
      const callback = function (response, status) {
        console.log(response)
        console.log(status)
      }
      if (this.logs[this.logs.length - 1].method === "徒歩") {
        // API にリクエストする
        service.getDistanceMatrix(
          {
            origins: [origin1],
            destinations: [destinationA],
            travelMode: "WALKING",
          },
          callback
        )
      } else if (this.logs[this.logs.length - 1].method === "自転車") {
        service.getDistanceMatrix(
          {
            origins: [origin1],
            destinations: [destinationA],
            travelMode: "BICYCLING",
          },
          callback
        )
      } else if (this.logs[this.logs.length - 1].method === "電車") {
        service.getDistanceMatrix(
          {
            origins: [origin1],
            destinations: [destinationA],
            travelMode: "DRIVING",
          },
          callback
        )
      } else if (this.logs[this.logs.length - 1].method === "車") {
        service.getDistanceMatrix(
          {
            origins: [origin1],
            destinations: [destinationA],
            travelMode: "DRIVING",
          },
          callback
        )
      }
    },
  },
}
</script>
