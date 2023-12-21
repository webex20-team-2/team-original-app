<template>
  <body>
    <div>
      <div class="top_box">
        <div>
          <p class="top_daimei">
            行きたい飲食店が見つかる！
            <br />
            遊びに行ける場所の提供も！？
          </p>
        </div>
      </div>
      <div class="site_content">
        <div class="anoy">
          <div class="rai_box">
            <div class="anoy_daimei">おすすめの飲食店を共有しよう！！</div>
            <div class="anoy_text">
              自分がおすすめのお店を、メモとして誰にでも共有できるぞ！
            </div>
            <router-link to="/post-memo" class="navigation__link1"
              >PostMemo</router-link
            >
          </div>
          <img
            class="resize1"
            src="@/assets/restaurant.jpg"
            alt="レストラン１"
          />
        </div>
        <div class="jiko_box">
          <img
            class="resize2"
            src="@/assets/restaurant2.jpg"
            alt="レストラン2"
          />
          <div class="syou_box">
            <div class="jiko_daimei">手軽に遊べる場所を提供するよ！</div>
            <div class="jiko_text">
              場所を入力することで、近くのお店や遊べる場所を検索できるよ！
            </div>
            <router-link to="/map-view" class="navigation__link1"
              >MapView</router-link
            >
          </div>
        </div>
        <div class="company_box">
          <div class="iwa_box">
            <div class="company_daimei">気に入ったお店を忘れないように！</div>

            <div class="company_text">
              自分が気に入ったお店を登録しておける自分専用メモ！
            </div>
            <router-link to="/my-memo" class="navigation__link1"
              >MyMemo</router-link
            >
          </div>
          <img
            class="resize3"
            src="@/assets/restaurant3.jpg"
            alt="レストラン3"
          />
        </div>
      </div>
    </div>
  </body>
</template>

<style>
.top_daimei {
  font-size: 2.5rem;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 80px;
  margin-bottom: 80px;
  font-family: Yu Gothic, 游ゴシック, YuGothic, 游ゴシック体;
  padding: 2rem 2rem;
  border-top: 6px double #000;
  border-bottom: 6px double #000;
}

.anoy {
  position: relative;
}

.rai_box {
  position: absolute;
  top: 27%;
  left: 30%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  width: 600px;
  background-color: khaki;
  padding: 20px;
  border-radius: 50px;
  font-weight: bold; /*太字に*/
  font-size: 2em; /*サイズ2倍*/
  font-family: Quicksand, sans-serif;
}

.resize1 {
  width: 100%;
  height: 550px;
}

.resize2 {
  width: 30%;
  border-radius: 30px;
  margin: 10%;
}

.resize3 {
  width: 40%;
  border-radius: 30px;
  margin: 5%;
}

.syou_box {
  width: 600px;
  background-color: khaki;
  padding: 20px;
  border-radius: 50px;
  font-weight: bold; /*太字に*/
  font-size: 2em; /*サイズ2倍*/
  font-family: Quicksand, sans-serif;
}

.iwa_box {
  width: 600px;
  background-color: khaki;
  padding: 20px;
  border-radius: 50px;
  font-weight: bold; /*太字に*/
  font-size: 2em; /*サイズ2倍*/
  font-family: Quicksand, sans-serif;
}

.jiko_box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  margin-bottom: 10%;
  position: relative;
  padding: 1rem 0.5rem;
}

.company_box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10%;
  margin-bottom: 10%;
  position: relative;
  padding: 1rem 0.5rem;
}

.jiko_box :before,
.jiko_box :after {
  position: absolute;
  left: 0;
  width: 100%;
  height: 20px;
  content: "";
  border-radius: 3px;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#2af598),
    to(#009efd)
  );
  background-image: -webkit-linear-gradient(right, #2af598 0%, #009efd 100%);
  background-image: linear-gradient(to left, #2af598 0%, #009efd 100%);
}

.jiko_box :before {
  top: 0;
}

.jiko_box :after {
  bottom: 0;
}

.company_box :after {
  position: absolute;
  bottom: -10%;
  left: 0;
  width: 100%;
  height: 20px;
  content: "";
  border-radius: 3px;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#2af598),
    to(#009efd)
  );
  background-image: -webkit-linear-gradient(right, #2af598 0%, #009efd 100%);
  background-image: linear-gradient(to left, #2af598 0%, #009efd 100%);
}

.company_daimei {
  position: relative;
  padding: 1.5rem 1rem;
}

.company_daimei:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  content: "";
  background-image: -webkit-repeating-linear-gradient(
    135deg,
    #000,
    #000 1px,
    transparent 2px,
    transparent 5px
  );
  background-image: repeating-linear-gradient(
    -45deg,
    #000,
    #000 1px,
    transparent 2px,
    transparent 5px
  );
  background-size: 7px 7px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.jiko_daimei {
  padding: 1rem 2rem;
  border: 6px double #000;
}

.anoy_daimei {
  position: relative;
  padding: 1.5rem 1rem;
}

.anoy_daimei:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  content: "";
  background-image: -webkit-repeating-linear-gradient(
    135deg,
    #000,
    #000 1px,
    transparent 2px,
    transparent 5px
  );
  background-image: repeating-linear-gradient(
    -45deg,
    #000,
    #000 1px,
    transparent 2px,
    transparent 5px
  );
  background-size: 7px 7px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
</style>
