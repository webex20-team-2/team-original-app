<template>
  <GoogleMap
    api-key="AIzaSyC3E-6jBuyvOXY3f7DAPJs7XRsg7rdoTBI"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue"
import { GoogleMap, Marker } from "vue3-google-map"

export default defineComponent({
  components: { GoogleMap, Marker },
  data() {
    return {
      center: { lat: 40.689247, lng: -74.044502 },
    }
  },
})
</script>
