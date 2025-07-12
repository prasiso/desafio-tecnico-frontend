<script setup lang="ts">
import { statusTaskEnum } from '@/enums';

withDefaults(defineProps<{ value: statusTaskEnum }>(), { value: statusTaskEnum.pending })
</script>
<template>
    <!-- FIZ DESSA FORMA DEVIDO A NAO CONSEGUIR CLASS DINAMICAS, DO UNO CSS E NAO PODE INSTALAR O VISUALIZADO DO MATERIAL ICONS -->
    <span v-if="value == statusTaskEnum.pending" i-mdi:account-clock size-6 class="text-[#FB7185]"></span>
    <span v-if="value == statusTaskEnum.canceled" i-mdi:warning-outline size-6 class="text-[#FB7185]"></span>
    <span v-if="value == statusTaskEnum.finished" i-mdi:check size-6 class="text-[#409EFF]"></span>
    <span v-if="value == statusTaskEnum.waiting" i-mdi:clock size-6 class="text-[#EAAA08]"></span>
</template>