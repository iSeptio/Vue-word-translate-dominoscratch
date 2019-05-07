<template>
  <div id="app">
    <translate v-on:formSubmit="translateText"/>
    <outputtext
      :revealed="whatToReveal"
      v-on:scratchletter="letterScratched"
      :translated-text="translatedText"
    />
    <unorderedtext
      :revealed="whatToReveal"
      v-on:clickedletter="letterClicked"
      :translated-text="translatedText"
    />
    Potential Points:{{potentialPoints}}
    Score:{{score}}
    whatToReveal: {{whatToReveal}}
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
  computed: {
    potentialPoints() {
      return (
        2 * (this.translatedText.length - this.revealedText) - this.revealedText
      );
    }
  }
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
}
</style>
