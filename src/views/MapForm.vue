<template>
  <section class="nyuryokuran">
    <h2>入力フォーム</h2>
    場所：
    <input class="MapPlace" type="text" v-model="mapplace" />
    滞在時間：
    <select class="StayingTime" v-model="stayingtime">
      <option>10分</option>
      <option>20分</option>
      <option>30分</option>
      <option>40分</option>
      <option>50分</option>
      <option>1時間</option>
      <option>2時間</option>
      <option>3時間</option>
    </select>
    移動方法：
    <select class="MovingMethod" v-model="movingmethod">
      <option>徒歩</option>
      <option>自転車</option>
      <option>電車</option>
      <option>車</option>
      <option>船</option>
      <option>新幹線</option>
      <option>飛行機</option>
    </select>
    <div>
      <button v-on:click="tuika">追加</button>
    </div>
  </section>
  <section>
    <h2>追加記録</h2>
    <div v-if="logs.length > 0">
      <div v-for="(log, index) in logs" v-bind:key="index">
        <div>
          場所: {{ log.place }} 滞在時間: {{ log.time }} 移動方法:
          {{ log.method }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      logs: [],
    }
  },
  methods: {
    tuika: function () {
      this.logs.push({
        place: this.mapplace,
        time: this.stayingtime,
        method: this.movingmethod,
      })
    },
  },
}
</script>

<style scoped>
.nyuryokuran {
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: beige;
  margin: 100px;
  border-radius: 20px;
  border: solid;
}
.MapPlace {
  padding: 20px;
  width: 10%;
  padding-top: 4rem rem;
  padding-left: 5rem;
}
</style>
