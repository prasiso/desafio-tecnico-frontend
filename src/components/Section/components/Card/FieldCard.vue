<script setup lang="ts">
withDefaults(defineProps<{ label: string, value: string | Date | null, icon?: string }>(), {})
</script>
<template>
    <div>
        <label text-sm class="text-[#64748B]">{{ label }}</label>
        <p> {{ value }} </p>
    </div>
</template>