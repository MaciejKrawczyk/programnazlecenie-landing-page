<script setup lang="ts">

import {GraduationCap} from "lucide-vue-next";

const props = defineProps<{
    mainText: string
    subText: string
}>()
</script>

<template>
    <div class="flex items-center w-52">
        <Button size="icon" class="mr-3">
            <slot name="icon"></slot>
        </Button>
        <div class="flex flex-col">
            <p class="font-medium">{{ props.mainText }}</p>
            <span class="font-light">{{ props.subText }}</span>
        </div>
    </div>
</template>

<style scoped>

</style>
