<script setup lang="ts">
import { ref, watch } from 'vue';
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import Card from './components/Card/Card.vue';
import type { SectionProps } from './types/Section'
import { filterSearchTask } from '@/helper';
const props = withDefaults(defineProps<SectionProps>(), {
    title: '',
    description: '',
    totalTasks: 0,
    tasks: () => []
})

const timer = ref<number>(0)

const search = ref('')
const tasks = ref(props.tasks)

watch(() => props.tasks, () => {
    tasks.value = props.tasks
})


watch(() => search.value, (value) => {
    if (timer.value)
        clearTimeout(timer.value)
    timer.value = setTimeout(() => {
        if (!value)
            tasks.value = props.tasks
        const taskSearch = filterSearchTask(props.tasks, value, ['str_automation_name', 'str_step_label', 'str_step_name'])
        tasks.value = taskSearch

    }, 500)

})
</script>
<template>
    <div flex flex-wrap items-center justify-end>
        <Header :title="title" :description="description" class="mb-3 w-full" />
        <Search v-model="search" class="mb-3 w-full" />
        <div class="mb-3">
            <span font-bold class="text-[#334155]">{{ tasks.length }} <span font-normal>tarefas </span></span>
        </div>
    </div>
    <Card v-for="(item) of tasks" :key="item.id" v-bind="item" class="mb-4" />
</template>