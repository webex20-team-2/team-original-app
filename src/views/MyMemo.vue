<template>
  <section class="PostForm">
    <h1 class="PostForm-title">入力フォーム</h1>
    <div class="Form-detail">
      <div class="Form">
        <h3 class="Place-title">店名</h3>
        <input class="namebox" type="text" v-model="shopname" />
        <h3 class="Member-title">人数</h3>
        <select class="namebox" v-model="membernumber">
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
    </div>
    <div class="Form">
      <h3 class="Date-title">日時</h3>
      <div class="date-flex">
        <input type="date" class="namebox" v-model="hiniti" /><input
          type="time"
          class="namebox"
          v-model="zikan"
        />
      </div>
    </div>
    <div class="Form-detail">
      <div class="Form">
        <h3 class="Title-title">見出し</h3>
        <input type="text" class="namebox" v-model="shorttitle" />

        <h3 class="Text-title">感想</h3>
        <textarea type="text" class="namebox" v-model="kansou"></textarea>
      </div>
    </div>
    <button class="Form-button" v-on:click="touroku">追加する</button>
  </section>
  <section>
    <h1 class="PostForm-title">追加記録</h1>
    <div v-if="logs.length > 0">
      <div v-for="(log, index) in logs" v-bind:key="index" class="PostForm">
        <div class="wordsize">
          店名: {{ log.place }} &emsp;人数: {{ log.member }}
        </div>
        <div class="wordsize">日時: {{ log.day }} {{ log.time }}</div>
        <div class="wordsize">見出し: {{ log.midasi }}</div>
        <div class="kansou">感想</div>
        <div class="words">{{ log.thoughts }}</div>
        <button v-on:click="deleteMemo(index)" class="Form-button">削除</button>
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
      this.shopname = ""
      this.membernumber = ""
      this.hiniti = ""
      this.zikan = ""
      this.shorttitle = ""
      this.kansou = ""
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

<style scoped>
.PostForm {
  background-color: beige;
  justify-content: space-around;
  align-items: center;
  width: 1000px;
  height: 560px;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: 20px;
  border-radius: 50px;
  border: solid;
}

.Form-detail {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: 20px;
}

.Form {
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: 20px;
}

.Form-button {
  margin: 10px /*0 auto*/;
  width: 15rem;
  height: 4rem;
  border-radius: 10px 10px 10px 10px;
  background-color: mediumaquamarine;
  font-size: 1.8rem;
}
.option-word {
  margin: 0 auto;
  width: 200px;
  height: 50px;
  border-radius: 3px 3px 3px 3px;
  background-color: white;
  margin: 1rem;
}
.namebox {
  margin: 0 auto;
  width: 260px;
  height: 60px;
  border-radius: 3px 3px 3px 3px;
  background-color: #e1e8e0;
  margin: 1rem;
}
.wordsize {
  margin: 0 auto;
  font-size: 250%;
  border-bottom: 1px dotted #000;
}
.kansou {
  margin: 0 auto;
  font-size: 250%;
  padding: 1rem 2rem;
  border-bottom: 6px double #000;
  background: #f4f4f4;
}
.words {
  margin: 0 auto;
  font-size: 200%;
}
.PostForm-title {
  position: relative;
  display: inline-block;
  padding: 0 65px;
  text-align: center;
}

.PostForm-title:before,
.PostForm-title:after {
  position: absolute;
  top: calc(50% - 3px);
  width: 50px;
  height: 6px;
  content: "";
  border-top: solid 2px #000;
  border-bottom: solid 2px #000;
}

.PostForm-title:before {
  left: 0;
}

.PostForm-title:after {
  right: 0;
}
</style>
