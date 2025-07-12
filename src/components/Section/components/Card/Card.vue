<script setup lang="ts">
import type { Task } from '@/types';
import Id from './Id.vue';
import FieldCard from './FieldCard.vue';
import Status from './Status.vue';
import Button from '../Button.vue'
import { transformDateToString } from '@/helper'
import { typeForm } from '@/enums'
const props = withDefaults(defineProps<Task>(), {})

// Methods
const accept = () => {
    alert(`Botão de assumir clicado para o id ${props.id}`)
}
const see = () => {
    alert(`Botão de visualizar clicado para o id ${props.id}`)
}
</script>
<template>
    <div
        class="flex flex-col items-center justify-between p-5 bg-[#FAFAF9] border border-solid border-[#CBD5E1] rounded-md gap-4  lg:flex-row lg:items-center lg:justify-between">
        <Id :id="id" />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 flex-1">
            <FieldCard label="Fluxo" :value="str_automation_name" />
            <FieldCard>
                <template #header>
                    <p m-0 class="text-[#64748B]" text-md>Status da tarefa</p>
                </template>
                <template #value>
                    <Status :status="str_task_status" />
                </template>
            </FieldCard>
            <FieldCard label="Tarefa disponível desde" :value="transformDateToString(ts_created_at)">
                <template #header>
                    <span class="inline-flex items-center space-x-1">
                        <span i-mdi:clock-time-four-outline size-5 color-blue></span>
                        <span class="text-[#64748B]">Tarefa disponível desde</span>
                    </span>
                </template>
            </FieldCard>
            <FieldCard label="Nome da etapa" :value="str_step_name" />
            <FieldCard label="Tipo" :value="typeForm[str_step_type]">
                <template #header>
                    <span class="inline-flex items-center space-x-1">
                        <span i-mdi:receipt-text-check-outline size-5 color-blue></span>
                        <span class="text-[#64748B]">Tipo</span>
                    </span>
                </template>
            </FieldCard>
            <FieldCard label="Etiqueta">
                <template #header>
                    <span class="inline-flex items-center space-x-1">
                        <span i-mdi:tag size-5 color-blue></span>
                        <span class="text-[#64748B]">Etiqueta</span>
                    </span>
                </template>
                <template #value>
                    <p m-0 font-semibold :class="{ 'text-[#CBD5E1]': str_step_label === 'Sem etiqueta' }">
                        {{ str_step_label  }}
                    </p>
                </template>
            </FieldCard>
        </div>
        <div class="grid grid-cols-2 gap-2">
            <Button label="Assumir" backgroundColor="#FDEAD7" border="0" @click="accept" />
            <Button label="Visualizar" backgroundColor="transparent" border="1px solid #CBD5E1" @click="see" />
        </div>
    </div>
</template>