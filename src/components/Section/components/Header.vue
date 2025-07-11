<script setup lang="ts">
import type { HeaderProps } from '../types';
import BackGround from './BackGround.vue';


withDefaults(defineProps<HeaderProps>(), {
    title: 'Área de tarefas Abertas',
    description: `Quando um fluxo iniciado por você ou por outra pessoa alcançar etapas sob sua responsabilidade, as tarefas
            serão exibidas aqui.`
})
</script>
<template>
    <BackGround>
        <h2 w-full font-semibold>{{ title }}</h2>
        <p class="text-[#64748B]"> {{ description }}</p>
    </BackGround>

</template>