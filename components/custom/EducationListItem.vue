<script setup lang="ts">

import {GraduationCap} from "lucide-vue-next";

const props = defineProps<{
    school: string,
    location: string,
    title: string,
    yearFrom: string,
    yearTo: string,
    description: string,
}>()
</script>

<template>
    <div class="my-2">
        <div class="flex justify-between items-center">
            <div class="flex justify-center items-center">
                <Button size="icon" class="mr-3">
                    <GraduationCap class="w-4 h-4"/>
                </Button>
                <div class="flex flex-col">
                    <p class="font-medium">{{ props.school }}, {{ props.location }}</p>
                    <span class="font-light">{{ props.title }}</span>
                </div>
            </div>
            <span>{{ props.yearFrom }} - {{ props.yearTo }}</span>
        </div>
        <p class="italic text-gray-600 mb-3 mt-1">{{ props.description }}</p>
    </div>
</template>

<style scoped>

</style>
