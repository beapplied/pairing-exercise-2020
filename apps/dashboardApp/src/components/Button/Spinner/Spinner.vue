<template>
  <div
    v-show="loading"
    class="v-spinner"
  >
    <div
      class="v-clip"
      :style="spinnerStyle"
    />
  </div>
</template>

<script>
export default {
  name: 'ClipLoader',

  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#fff'
    },
    size: {
      type: String,
      default: '12px'
    },
    radius: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    spinnerStyle() {
      return {
        height: this.size,
        width: this.size,
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: `${this.color} ${this.color} transparent`,
        borderRadius: this.radius,
        background: 'transparent'
      }
    }
  }
}
</script>

<style>
.v-spinner {
  /*	  font-size: 10px;

    width: 60px;
    height: 40px;*/
  /*margin: 25px auto;*/
  text-align: center;
}

.v-spinner .v-clip {
  -webkit-animation: v-clipDelay 0.75s 0s infinite linear;
  animation: v-clipDelay 0.75s 0s infinite linear;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  display: inline-block;
}

@-webkit-keyframes v-clipDelay {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes v-clipDelay {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
