<script setup lang="ts">
import { computed, onBeforeMount, ref, watch } from "vue";
import Header from "@/components/Header/Header.vue";
import Tabs from "@/components/Tabs/Tabs.vue";
import type { Tabs as TabsType } from "@/components/Tabs/Tabs.type";

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
          OPEN
        </template>
        <template #close>
          CLOSE
        </template>
      </Tabs>
    </div>
  </div>
</template>
