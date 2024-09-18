<template>&euro; {{ parseFloat(value).toFixed(2) }}</template>

<script>
export default {
  name: 'Curr',
  props: ['value']
}
</script>
