<script setup lang="ts">
import type { ButtonEvent, ButtonProps } from '../types';
const props = withDefaults(defineProps<ButtonProps>(), {})
const emits = defineEmits<ButtonEvent>()
</script>
<template>
    <button @click="emits('click', props)" :style="{ border, backgroundColor }"
        class="px-4 py-2 font-bold rounded-md text-md">{{
            label }}</button>
</template>
<style>
</style>