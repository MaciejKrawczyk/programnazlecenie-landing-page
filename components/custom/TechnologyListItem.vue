<script setup lang="ts">

import {GraduationCap} from "lucide-vue-next";

const props = defineProps<{
    mainText: string
    subText: string
}>()
</script>

<template>
    <div class="flex justify-center items-center">
        <Button size="icon" class="mr-3">
            <GraduationCap class="w-4 h-4"/>
        </Button>
        <div class="flex flex-col">
            <p class="font-medium">{{ props.mainText }}</p>
            <span class="font-light">{{ props.subText }}</span>
        </div>
    </div>
</template>

<style scoped>

</style>
