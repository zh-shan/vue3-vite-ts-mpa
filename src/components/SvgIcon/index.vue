<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="symbolId "></use>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'SvgIcon'
})

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  prefix: {
    type: String,
    default: 'svg'
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
