<script setup lang="ts">
withDefaults(defineProps<{ label?: string, value?: string | Date | null, icon?: string }>(), {})
</script>
<template>
    <div>
        <slot name="header"></slot>
        <p m-0 v-if="!$slots.header" text-sm class="text-[#64748B]" text-lg>{{ label }}</p>
        <p m-0 class="text-ellipsis truncate" v-if="!$slots.value" font-semibold> {{ value }} </p>
        <slot name="value"></slot>
    </div>
</template>