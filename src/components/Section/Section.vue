<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import type { SectionProps } from './types/Section'
const props = withDefaults(defineProps<SectionProps>(), {
    title: '',
    description: '',
    totalTasks: 0,
    tasks: () => []
})

const search = ref('')
</script>
<template>
    <div flex flex-wrap items-center justify-end>
        <Header :title="title" :description="description" class="mb-3 w-full" />
        <Search v-model="search" class="mb-3 w-full" />
    </div>
</template>