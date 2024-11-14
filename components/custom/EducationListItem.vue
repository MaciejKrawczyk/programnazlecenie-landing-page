<script setup lang="ts">

import {GraduationCap} from "lucide-vue-next";
</script>

<template>
    <div class="my-2">
        <div class="flex justify-between items-center">
            <div class="flex justify-center items-center">
                <Button size="icon" class="mr-3">
                    <GraduationCap class="w-4 h-4"/>
                </Button>
                <div class="flex flex-col">
                    <p class="font-medium">Prosperitas, Kraków</p>
                    <span class="font-light">Full stack developer</span>
                </div>
            </div>
            <span>2024 - obecnie</span>
        </div>
        <p class="italic text-gray-600 mb-3 mt-1">Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych, CRM, ERP</p>
    </div>
</template>

<style scoped>

</style>
