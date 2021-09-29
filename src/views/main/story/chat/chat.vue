<template>
  <div class="chat">
    <dx-editor v-model:value="htmlString" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DxEditor from '@/base-ui/editor'

export default defineComponent({
  name: 'chat',
  components: {
    DxEditor
  },
  setup() {
    const htmlString = ref<string>('')
    return {
      htmlString
    }
  }
})
</script>

<style scoped></style>
