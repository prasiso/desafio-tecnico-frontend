<script setup lang="ts">
import type { HeaderProps } from '../types';

withDefaults(defineProps<HeaderProps>(), {
    title: 'Área de tarefas Abertas',
    description: `Quando um fluxo iniciado por você ou por outra pessoa alcançar etapas sob sua responsabilidade, as tarefas
            serão exibidas aqui.`
})
</script>
<template>
    <div class="bg-[#F8FAFC] px-3 py-4 flex-nowrap items-center rounded-md">
        <h2 w-full font-semibold>{{ title }}</h2>
        <p class="text-[#64748B]"> {{ description }}</p>
    </div>
</template>