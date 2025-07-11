<script setup lang="ts">
import { ref } from 'vue';
import { type HeaderProps } from './Header.type';
const props = withDefaults(defineProps<HeaderProps>(), {
    tabsOpen: 'Abertas'
})
const opts = ref([
    'Fluxo',
    'Tarefas',
    props.tabsOpen
])
</script>
<template>
    <div class="p4 border-b border-t-0 border-l-0 border-r-0 border-solid border-[#CBD5E1]" flex items-center>
        <div flex font-semibold items-center :class="{ 'text-[#64748B]': opt !== tabsOpen }" v-for="(opt, index) of opts"
            :key="index">
            {{ opt }}
            <div v-if="opts.length - 1 > index" i-mdi:keyboard-arrow-right size-6 />
        </div>
    </div>
</template>