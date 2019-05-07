<template>
  <div class="container" :style="{backgroundColor: randomColor()}">
    <div @mousedown.once="wasClicked" v-if="pokazLitere">{{letter[0]}}</div>
  </div>
</template>
<script>
export default {
  name: "ClickableLetter",
  methods: {
    randomColor() {
      const r = () => Math.floor(256 * Math.random());

      return `rgb(${r()}, ${r()}, ${r()})`;
    },
    wasClicked() {
      this.stillUnclicked = false;
      this.$emit("clickedletter", [this.letter, this.index]);
    }
  },
  props: ["letter", "index", "revealed"],
  data: function() {
    return {
      stillUnclicked: true
    };
  },
  computed: {
    pokazLitere: function() {
      if (this.revealed.indexOf(this.letter[1]) > -1) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  color: white;
  font-size: 40px;
  width: 50px;
  height: 50px;
}

#centered {
  display: table;
  line-height: 45px;
  margin: 0 auto;
}
</style>