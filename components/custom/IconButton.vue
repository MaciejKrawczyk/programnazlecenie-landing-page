<script setup lang="ts">
const props = defineProps<{
    text?: string
}>()
</script>

<template>
    <div class="flex items-center justify-center gap-3">
        <Button size="icon">
            <slot></slot>
        </Button>
        <p>{{ props.text }}</p>
    </div>
</template>

<style scoped>

</style>
