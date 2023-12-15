<template>
  <div class="PostForm">
    <h1 class="PostForm-title">入力フォーム</h1>
    <div class="Form-detail">
      <div class="category-parts">
        <div class="Form-place">
          <h3 class="Place-title">店名</h3>
          <input class="shopnamebox" type="text" v-model="shopname" />
        </div>
      </div>
      <div class="Form-member">
        <h3 class="Member-title">人数</h3>
        <select class="Category-select" v-model="membernumber">
          <option value hidden="hidden" class="option-word">
            選択してください
          </option>
          <option value="1人">1人</option>
          <option value="2人">2人</option>
          <option value="3人">3人</option>
          <option value="4人">4人</option>
          <option value="5人">5人</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <div class="Form-date">
        <h3 class="Date-title">日時</h3>
        <div class="date-flex">
          <input type="date" class="input-size" v-model="hiniti" /><input
            type="time"
            class="input-size right-time"
            v-model="zikan"
          />
        </div>
      </div>
    </div>
    <div class="Form-title">
      <h3 class="Title-title">見出し</h3>
      <input type="text" class="block-title" v-model="shorttitle" />
    </div>
    <div class="Form-text">
      <h3 class="Text-title">感想</h3>
      <textarea type="text" class="block-title" v-model="kansou"></textarea>
    </div>
    <button class="Form-button" v-on:click="touroku">追加する</button>
  </div>
  <section>
    <h2>追加記録</h2>
    <div v-if="logs.length > 0">
      <div v-for="(log, index) in logs" v-bind:key="index">
        <div>店名: {{ log.place }}</div>
        <div>人数: {{ log.member }}</div>
        <div>日時: {{ log.day }} {{ log.time }}</div>
        <div>見出し: {{ log.midasi }}</div>
        <div>感想: {{ log.thoughts }}</div>
        <button v-on:click="deleteMemo(index)" class="memo__delete">
          削除
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      logs: [],
      shopname: "",
      membernumber: "",
      hiniti: "",
      zikan: "",
      shorttitle: "",
      kansou: "",
    }
  },
  mounted() {
    this.logs = JSON.parse(localStorage.getItem("logs")) || []
  },
  methods: {
    touroku() {
      this.logs.push({
        place: this.shopname,
        member: this.membernumber,
        day: this.hiniti,
        time: this.zikan,
        midasi: this.shorttitle,
        thoughts: this.kansou,
      })
      this.set()
    },
    set() {
      localStorage.setItem("logs", JSON.stringify(this.logs))
    },
    deleteMemo(index) {
      this.logs.splice(index, 1)
      this.set()
    },
  },
}
</script>

<style lang="scss" scoped></style>
