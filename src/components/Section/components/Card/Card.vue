<script setup lang="ts">
import type { Task } from '@/types';
import Id from './Id.vue';
import FieldCard from './FieldCard.vue';

const props = withDefaults(defineProps<Task>(), {})
</script>
<template>
    <div
        class="flex flex-col items-center justify-between p-5 bg-[#FAFAF9] border border-solid border-[#CBD5E1] rounded-md gap-4  md:flex-row md:items-center md:justify-between">
        <Id :id="id" />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 flex-1">
            <FieldCard label="Fluxo" :value="str_automation_name" />
            <FieldCard label="Nome da etapa" :value="str_step_name" />
            <FieldCard label="Status da tarefa" :value="str_task_status" />
            <FieldCard label="Tipo" :value="str_step_type" />
            <FieldCard label="Tarefa disponível desde" :value="ts_created_at" />
            <FieldCard label="Etiqueta" :value="str_step_label" />
        </div>
    </div>
</template>