<script setup lang="ts">
import { statusTaskEnum, statuTask } from '@/enums';
import { computed } from 'vue';
import IconStatus from './IconStatus.vue';

const props = withDefaults(defineProps<{ status: statusTaskEnum }>(), {
  status: statusTaskEnum.pending
})
const currentStatus = computed(() => {
  return statuTask[props.status]
})



</script>
<template>
  <div>

    <span :style="{ backgroundColor: currentStatus.config.color }"
      class="rounded-md px-2 py-1 text-[#64748B] inline-flex items-center gap-2">
      <IconStatus :value="currentStatus.value" />
      {{ currentStatus.name }}
    </span>
  </div>

</template>