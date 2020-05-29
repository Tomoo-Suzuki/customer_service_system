<template>
  <div class="progressTrackerBox">
    <div
      v-for="(text, index) in txtArray"
      class="progressTracker"
      :key="`pt` + index"
    >
      <span class="text">{{ text }}</span>
      <span :class="`progressPointer ` + trackerStatus(index)">
        <span class="pointerInner"></span>
        <span class="progressBar"></span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    trackerStatus() {
      return (index: number) => {
        if (index === this.status) {
          return "current";
        } else if (index < this.status) {
          return "done";
        } else {
          return;
        }
      };
    }
  },
  props: {
    txtArray: {
      type: Array,
      default: () => ({})
    },
    status: {
      type: Number,
      default: null
    }
  }
});
</script>

<style lang="scss" scoped>
@charset "utf-8";
@import "../../scss/_color.scss";
.progressTrackerBox {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 7rem;

  .progressTracker {
    position: relative;
    width: 15rem;
    height: 5rem;
    text-align: center;
    // border: solid 1px #cfcfcf;

    .text {
      color: $upload_blue_dark;
    }

    .progressPointer {
      position: absolute;
      top: 45%;
      left: calc(50% - 0.65rem);
      background: $upload_blue_dark;
      border-radius: 50%;
      width: 1.3rem;
      height: 1.3rem;

      .pointerInner {
        position: absolute;
        top: 0.4rem;
        left: 0.4rem;
        background: #ffffff;
        border-radius: 50%;
        width: 0.5rem;
        height: 0.5rem;
      }

      .progressBar {
        position: absolute;
        top: 50%;
        left: 1rem;
        display: block;
        width: 14rem;
        height: 0.2rem;
        border-radius: 0;
        background: $upload_blue_dark;
      }

      &.current {
        background: #ffffff;
        border: solid 2px $upload_blue_dark;
        width: 0.9rem;
        height: 0.9rem;

        .pointerInner {
          background: $read_orange_light;
          top: 0.2rem;
          left: 0.2rem;
        }
      }

      &.done {
        opacity: 0.5;
        background: $sell_green_dark;
        border: solid 2px $sell_green_dark;
        width: 0.9rem;
        height: 0.9rem;

        .pointerInner {
          background: $sell_green_dark;
          top: 0.2rem;
          left: 0.2rem;
        }
      }
    }

    &:last-of-type {
      .progressBar {
        display: none;
      }
    }
  }
}
</style>
