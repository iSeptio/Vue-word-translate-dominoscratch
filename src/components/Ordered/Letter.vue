<template>
  <div class="container" :style="{backgroundColor: randomColor()}">
    <div v-if="pokazLitere" id="centered">{{letter}}</div>
    <div v-else id="centered" @mouseover="najechanie">?</div>
  </div>
</template>
<script>
export default {
  name: "Letter",
  methods: {
    randomColor() {
      const r = () => Math.floor(256 * Math.random());

      return `rgb(${r()}, ${r()}, ${r()})`;
    },
    najechanie() {
      this.zostaloNajechane = true;
      this.$emit("scratchedletter", [this.letter, this.index]);
    }
  },
  props: ["letter", "index", "revealed"],
  data: function() {
    return {
      pokazacLitere: false,
      zostaloNajechane: false
    };
  },
  computed: {
    pokazLitere: function() {
      if (this.zostaloNajechane) {
        return true;
      }
      if (this.revealed.indexOf(this.index) > -1) {
        return true;
      } else {
        return false;
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
