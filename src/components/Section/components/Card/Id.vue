<script setup lang="ts">
withDefaults(defineProps<{ id: string }>(), { id: '' })
</script>

<template>
    <div class="bg-[#E2E8F0] py-2 px-6  rounded-lg flex flex-col justify-center items-center">
        <span class="text-[#006EE0] font-bold">ID
        </span>
        <span font-bold class="text-[#334155]"> {{ id }}</span>

    </div>
</template>