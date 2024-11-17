<script setup lang="ts">
const props = defineProps<{
    company: string,
    location: string,
    jobTitle: string,
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
                    <slot name="icon"/>
                </Button>
                <div class="flex flex-col">
                    <p class="font-medium">{{ props.company }}, {{ props.location }}</p>
                    <span class="font-light">{{ props.jobTitle }}</span>
                </div>
            </div>
            <span>{{ props.yearFrom }} - {{ props.yearTo }}</span>
        </div>
        <p class="italic text-gray-600 mb-3 mt-1">{{ props.description }}</p>
        <slot name="contribution"/>
<!--        <ul class="list-disc ml-8">-->
<!--            <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych, CRM, ERP</li>-->
<!--            <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych, CRM, ERP</li>-->
<!--            <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych, CRM, ERP</li>-->
<!--        </ul>-->
    </div>
</template>

<style scoped>

</style>
