<script setup lang="ts">
import { ref } from 'vue';
import type { Tabs, TabsEmit, TabsProps, } from './Tabs.type';

const props = withDefaults(defineProps<TabsProps>(), {
    modelValue: () => ({ name: '', slot: '' }),
    tabs: () => []
})

const emits = defineEmits<TabsEmit>()
const value = ref<Tabs>(props.modelValue)

//METHODS
const changeTabs = (tab: Tabs) => {
    value.value = tab
    emits('update:modelValue', tab)
}
</script>
<template>
    <div>
        <div flex items-center>
            <span @click="changeTabs(props)" v-for="(props, index) of tabs" :key="index" px-2 py-3 m-0 font-semibold
                class="text-[#64748B] border-label cursor-pointer
 bg-white" :class="{ 'border-active': props.slot === value.slot, }">
                {{ props.name }}
            </span>

        </div>
        <div class="border-solid border border-[#CBD5E1] p-5 bg-[#FFFFFF] rounded-tr-md rounded-br-md rounded-bl-md">
            <slot :name="value.slot"></slot>
        </div>
    </div>
</template>

<style scoped>
.border-label {
    border-top: 1px solid #CBD5E1;
    border-bottom: 1px solid #CBD5E1;
}

.border-label:first-child {
    border-left: 1px solid #CBD5E1;
    border-top-left-radius: 5px;
}

.border-label:last-child {
    border-right: 1px solid #CBD5E1;
    border-top-right-radius: 5px;

}

.border-active {
    border-bottom: 1px solid #409EFF;
    color: #409EFF
}
</style>