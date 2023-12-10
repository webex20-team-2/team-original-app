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
          <option hidden="hidden" class="option-word">選択してください</option>
          <option>1人</option>
          <option>2人</option>
          <option>3人</option>
          <option>4人</option>
          <option>5人</option>
          <option>その他</option>
        </select>
      </div>
      <div class="Form-date">
        <h3 class="Date-title">日時</h3>
        <div class="date-flex">
          <input type="date" class="input-size" /><input
            type="time"
            class="input-size right-time"
          />
        </div>
      </div>
    </div>
    <div class="Form-title">
      <h3 class="Title-title">見出し</h3>
      <input type="text" class="block-title" />
    </div>
    <div class="Form-text">
      <h3 class="Text-title">感想</h3>
      <textarea type="text" class="block-title"></textarea>
    </div>
    <button class="Form-button" v-on:click="toukou">追加する</button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
