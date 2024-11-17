<script setup lang="ts">

import {Card, CardContent} from "~/components/ui/card";
import {Carousel, CarouselContent, CarouselItem} from "~/components/ui/carousel";

const props = defineProps<{
    carouselData: any[],
}>()
</script>

<template>
    <Carousel
        class="w-[80vw] max-w-screen-xl"
        :opts="{
                    align: 'start',
                }"
    >
        <CarouselContent>
            <CarouselItem v-for="data in carouselData" class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <Card>
                        <CardContent class="flex flex-col items-center justify-center p-4 prevent-select">
                            <img :src="data.image" :alt="data.alt" width="165">
                            <span class="my-2 text-md">{{ data.company }}</span>
                            <h6 class="text-xl font-semibold text-center my-2">{{ data.title }}</h6>
                            <p class="text-center text-lg">{{ data.description }}</p>
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselNext/>
        <CarouselPrevious/>
    </Carousel>
</template>

<style scoped>
.prevent-select {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
}
</style>
