<template>
  <section class="nyuryokuran">
    <h2 class="nyuryoku">入力フォーム</h2>
    場所：
    <input class="textbox" type="text" v-model="mapplace" />
    滞在時間：
    <select class="textbox" v-model="stayingtime">
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
    <select class="textbox" v-model="movingmethod">
      <option>徒歩</option>
      <option>自転車</option>
      <option>電車</option>
      <option>車</option>
      <option>船</option>
      <option>新幹線</option>
      <option>飛行機</option>
    </select>
  </section>
  <div>
    <button class="tuika-button" v-on:click="tuika">追加</button>
  </div>
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
  background-color: beige;
  justify-content: space-around;
  align-items: center;
  width: 1000px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: 20px;
  border-radius: 50px;
  border: solid;
}
.tuika-button {
  margin: 20px /*0 auto*/;
  width: 15rem;
  height: 4rem;
  border-radius: 10px 10px 10px 10px;
  background-color: beige;
  font-size: 1.8rem;
}
.textbox {
  margin: 0 auto;
  width: 200px;
  height: 50px;
  border-radius: 3px 3px 3px 3px;
  background-color: white;
  margin: 1rem;
}
</style>
