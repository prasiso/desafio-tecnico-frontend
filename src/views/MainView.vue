<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";
import Header from "@/components/Header/Header.vue";
import Tabs from "@/components/Tabs/Tabs.vue";
import Section from "@/components/Section/Section.vue";
import type { Tabs as TabsType } from "@/components/Tabs/Tabs.type";
import type { SectionProps } from "@/components/Section/types";

const API_URL = import.meta.env.VITE_API_URL;

const mockServerError = ref();
const mockServerResp = ref();

const tabs = ref<TabsType[]>(
  [
    {
      name: 'Abertas',
      slot: 'open'
    },
    {
      name: 'Finalizadas',
      slot: 'close'
    }
  ]
)
const tabValue = ref<TabsType>(tabs.value[0])

const propsConfigOpen = ref<SectionProps>({
  description: `Quando um fluxo iniciado por você ou por outra pessoa alcançar etapas sob sua responsabilidade, as tarefas
            serão exibidas aqui.`,
  title: 'Área de tarefas Abertas',
  tasks: []
})
const propsConfigClosed = ref<SectionProps>({
  description: `Aqui vão aparecer as tarefas finalizadas por você.`,
  title: 'Área de tarefas finalizadas',
  tasks: []
})

const testMockServer = async () => {
  try {
    const req = await fetch(`${API_URL}/tasks?_page=1&per_page=10`);
    mockServerResp.value = await req.json();
  } catch (e: unknown) {
    mockServerError.value = e;
  }
};

onBeforeMount(async () => {
  await testMockServer();
});
</script>

<template>
  <div class=" w-full">
    <Header :tabs-open="tabValue.name" />
    <div class="bg-[#F7F9FC] h-screen p-4">
      <Tabs :tabs="tabs" v-model="tabValue">
        <template #open>
          <Section v-bind="propsConfigOpen" />
        </template>
        <template #close>
          <Section v-bind="propsConfigClosed" />
        </template>
      </Tabs>
    </div>
  </div>
</template>
