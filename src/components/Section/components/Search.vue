<script setup lang="ts">
import { ref, watch } from 'vue';
import type { SearchEmit, SearchProps } from '../types';
import BackGround from './BackGround.vue'
const props = withDefaults(defineProps<SearchProps>(), { modelValue: '' })
const emits = defineEmits<SearchEmit>()

const value = ref(props.modelValue)
watch(() => value.value, (value) => emits('update:modelValue', value))
</script>
<template>
    <BackGround>
        <div class="w-full">
            <div class="relative text-gray-400 focus-within:text-gray-600 items-center flex">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z" />
                    </svg>
                </span>
                <input v-model="value" name="search" type="search"
                    placeholder="Busque por nome do fluxo, nome da etapa ou etiqueta"
                    class="block w-full h-10 rounded-md border-input bg-white py-2 pl-10 pr-3 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition duration-150 ease-in-out" />
            </div>
        </div>
    </BackGround>
</template>
<style scoped>
.border-input {
    border: 1px #CBD5E1 solid;
}
</style>