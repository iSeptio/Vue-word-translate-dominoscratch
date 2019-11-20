<template>
  <div id="app">
    <h1>Wordscratch</h1>

    <div class="input">
      <translate v-on:formSubmit="translateText"/>
    </div>

    <div class="scraper">
      <div class="miniscraper">
        <outputtext
          :revealed="whatToReveal"
          v-on:scratchletter="letterScratched"
          :translated-text="translatedText"
        />
        <unorderedtext
          class="text2"
          :revealed="whatToReveal"
          v-on:clickedletter="letterClicked"
          :translated-text="translatedText"
        />
        <div class="scoreboard">{{score}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "underscore";
import translate from "./components/Translate";
import outputtext from "./components/Ordered/Outputtext";
import unorderedtext from "./components/Unordered/Unorderedtext";

export default {
  name: "App",
  components: {
    translate,
    outputtext,
    unorderedtext
  },
  data: function() {
    return {
      translatedText: "",
      revealedText: 0,
      score: 0,
      whatToReveal: [],
      howManyRevealedFromLeft: 0
    };
  },
  methods: {
    translateText: function(text) {
      this.translatedText = "";
      this.revealedText = 0;
      this.score = 0;
      this.whatToReveal = [];
      this.howManyRevealedFromLeft = 0;
      this.$http
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190411T104042Z.5b35200f74382d8c.9c1a3d11208245c8d78bffdfe24c49dac6fd7450&lang=pl-de&text=" +
            text
        )
        .then(response => {
          this.translatedText = response.body.text[0];
        });
    },
    letterScratched: function(letter) {
      this.whatToReveal.push(letter[1]);
      this.whatToReveal.sort();

      this.revealedText += 1;
      this.score -= 1;
    },
    letterClicked: function(letter) {
      if (
        _.isEqual(this.whatToReveal.sort().slice(0, letter[0][1]), [
          ...Array(letter[0][1]).keys()
        ])
      ) {
        this.score += 2;
      } else {
        this.score -= 1;
      }
      this.whatToReveal.push(letter[0][1]);
      this.whatToReveal.sort();

      //if whatToRe
    }
  },
  computed: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #a64bf4;
  background: -webkit-linear-gradient(right, #00dbde, #fc00ff);
  background: -o-linear-gradient(right, #00dbde, #fc00ff);
  background: -moz-linear-gradient(right, #00dbde, #fc00ff);
  background: linear-gradient(right, #00dbde, #fc00ff);
  color: white;
  height: 1000px;
}
.scraper {
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
  color: black;
  height: 250px;
  align-content: center;
  justify-content: center;
  background-color: white;
  width: 400px;
  margin-top: 20px;

  border-radius: 25px;
}

.scoreboard {
  font-size: 50px;
  color: black;
  line-height: 1.2;
  padding-left: 5px;
  padding-top: 10px;
  background-color: transparent;
}

.text2 {
  margin-top: 50px;
}

h1 {
  margin-top: 50px;
}
</style>
