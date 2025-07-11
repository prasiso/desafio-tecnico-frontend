<script setup lang="ts">
import Header from './components/Header.vue';
import type { SectionProps } from './types/Section'
withDefaults(defineProps<SectionProps>(), {
    title: '',
    description: ''
})
</script>
<template>
    <Header :title="title" :description="description"></Header>
</template>