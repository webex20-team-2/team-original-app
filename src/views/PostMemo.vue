<template>
  <div class="memo-list">
    <div class="add-memo-field">
      <h3>店名</h3>
      <input class="add-memo-field__input" type="text" v-model="nameMemo" />
      <h3>来店の状況</h3>
      <div id="app">
        <select v-model="stMemo">
          <option>女子会</option>
          <option>新歓</option>
          <option>遊び</option>
          <option>散歩</option>
          <option>同窓会</option>
          <option>デート</option>
          <option>合コン</option>
          <option>打ち上げ</option>
          <option>その他</option>
        </select>
      </div>

      <h3>日付</h3>
      <input type="date" name="date" v-model="dayMemo" />
      <h3>見出し</h3>
      <input class="add-memo-field__input" type="text" v-model="MdMemo" />
      <h3>感想</h3>
      <input class="add-memo-field__input" type="text" v-model="kaMemo" />

      <button class="add-memo-field__button" v-on:click="postMome">追加</button>
    </div>
    <ul class="memo-list__container">
      <li v-for="(memo, index) in memos" v-bind:key="index" class="memo">
        <div class="memo__checkbox">
          <input type="checkbox" v-model="memo.isDone" />
        </div>
        <div v-if="memo.isDone" class="memo__text memo__text--done">
          {{ memo.text1 }}
          {{ memo.text2 }}
          {{ memo.date }}
          {{ memo.text3 }}
          {{ memo.text4 }}
        </div>
        <div v-else class="memo__text">
          <h1>{{ memo.text1 }}</h1>
          <h2>{{ memo.text2 }}</h2>
          <h2>{{ memo.date }}</h2>
          <h1>{{ memo.text3 }}</h1>
          <p>{{ memo.text4 }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore"
// firebase.js で db として export したものを import
import { db } from "../firebase.js"

export default {
  data() {
    return {
      kaMemo: "",
      MdMemo: "",
      dayMemo: "",
      stMemo: "",
      nameMemo: "",
      memos: [],
    }
  },
  methods: {
    postMome() {
      const memo = {
        text4: this.kaMemo,
        text3: this.MdMemo,
        date: this.dayMemo,
        text1: this.nameMemo,
        isDone: false,
        text2: this.stMemo,
      }
      addDoc(collection(db, "memos"), memo).then((ref) => {
        this.memos.push({
          id: ref.id,
          ...memo,
        })
      })
    },
  },
  created() {
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.tweets.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
}
</script>

<style scoped>
.memo-list {
  color: blue;
  background-color: aqua;
}
</style>
