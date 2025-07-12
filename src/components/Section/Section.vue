<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import Card from './components/Card/Card.vue';
import type { SectionProps } from './types/Section'
withDefaults(defineProps<SectionProps>(), {
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
        <div class="mb-3">
            <span font-bold class="text-[#334155]">{{ totalTasks }} <span font-normal>tarefas </span></span>
        </div>
    </div>
    <Card v-for="(item) of tasks" :key="item.id" v-bind="item" class="mb-4" />
</template>