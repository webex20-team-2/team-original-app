<template>
  <div>Post memoだよ</div>
  <div class="memo-list">
    <ul class="memo-list__container">
      <li v-for="(memo, index) in memos" v-bind:key="index" class="memo">
        <div class="memo__checkbox">
          <input type="checkbox" v-model="memo.isDone" />
        </div>
        <div v-if="memo.isDone" class="memo__text memo__text--done">
          {{ index }}:{{ memo.text }}
        </div>
        <div v-else class="memo__text">{{ index }}:{{ memo.text }}</div>
      </li>
    </ul>
    <div class="add-memo-field">
      <input class="add-memo-field__input" type="text" v-model="inputMemo" />
      <button class="add-memo-field__button" v-on:click="postMome">追加</button>
    </div>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
// firebase.js で db として export したものを import
import { db } from "../firebase.js"
export default {
  data() {
    return {
      inputMemo: "",
      memos: [],
    }
  },
  methods: {
    postMome() {
      const memo = { text: this.inputMemo, isDone: false }
      addDoc(collection(db, "memos"), memo).then((ref) => {
        this.memos.push({
          id: ref.id,
          ...memo,
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
