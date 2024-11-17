<script setup lang="ts">

import {Gavel} from "lucide-vue-next";
import {Button} from "~/components/ui/button";

const props = defineProps<{
    company: string,
    jobTitle: string,
    location: string,
    yearFrom: string,
    yearTo: string,
}>()
</script>

<template>
    <div class="flex justify-between items-center">
        <div class="flex justify-center items-center">
            <Button size="icon" class="mr-3">
                <slot name="icon"/>
            </Button>
            <div class="flex flex-col">
                <p class="font-medium">{{ props.company }}, {{ props.location }}</p>
                <span class="font-light">{{ props.jobTitle }}</span>
            </div>
        </div>
        <span>{{ yearFrom }} - {{ yearTo }}</span>
    </div>
</template>

<style scoped>

</style>
