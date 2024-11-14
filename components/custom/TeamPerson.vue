<script setup lang="ts">
import {Gavel, Github, GraduationCap, Linkedin, SquareArrowOutUpRight} from "lucide-vue-next";
import {DrawerContent, DrawerHeader, DrawerTrigger} from "~/components/ui/drawer";
import CarrierJobListItem from "~/components/custom/CarrierJobListItem.vue";
import EducationListItem from "~/components/custom/EducationListItem.vue";
import TechnologyListItem from "~/components/custom/TechnologyListItem.vue";

const props = defineProps<{
    key: number
}>()

</script>

<template>
    <Drawer>
        <div class="flex flex-col items-center justify-center">
            <img src="public/user-photo.jpg" alt="Maciej Krawczyk foto" class="w-full">
            <div class="mt-3">
                <div class="flex">
                    <h4 class="text-2xl font-semibold mr-4">Maciej Krawczyk</h4>
                    <div class="flex gap-2">
                        <Button size="icon">
                            <Linkedin class="w-4 h-4"/>
                        </Button>
                        <Button size="icon">
                            <Github class="w-4 h-4"/>
                        </Button>
                    </div>
                </div>
                <h5 class="text-xl">Full stack developer</h5>
                <p class="size-lg font-light text-gray-600 w-5/6 my-3">Złotnictwo, systemy produkcyjne, systemy dla
                    kancelarii prawnych, CRM, ERP</p>

                <div>
                    <div class="flex justify-between items-center">
                        <div class="flex justify-center items-center">
                            <Button size="icon" class="mr-3">
                                <Gavel class="w-4 h-4"/>
                            </Button>
                            <div class="flex flex-col">
                                <p class="font-medium">Prosperitas, Kraków</p>
                                <span class="font-light">Full stack developer</span>
                            </div>
                        </div>
                        <span>2024 - obecnie</span>
                    </div>

                    <hr class="my-4">

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

                    <DrawerTrigger as-child :key="props.key" class="my-6">
                        <Button>Zobacz wszystko</Button>
                    </DrawerTrigger>
                </div>
            </div>
            <!---->
            <DrawerContent class="bg-white" :key="props.key">
                <DrawerHeader>
                    <div class="flex">
                        <div class="flex w-1/3 flex-col">
                            <h4 class="text-3xl">Maciej Krawczyk</h4>
                            <p class="text-xl">Full stack developer, Kraków</p>
                            <p>
                                Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych, CRM, ERP.
                                Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych, CRM, ERP
                            </p>
                            <Button class="flex justify-between">
                                <div class="flex">
                                    <Github class="w-4 h-4 mr-2"/>
                                    @MaciejKrawczyk
                                </div>
                                <SquareArrowOutUpRight class="w-4 h-4"/>
                            </Button>
                            <Button class="flex justify-between">
                                <div class="flex">
                                    <Linkedin class="w-4 h-4 mr-2"/>
                                    @maciej-krawczyk-the-programmer
                                </div>
                                <SquareArrowOutUpRight class="w-4 h-4"/>
                            </Button>
                        </div>
                        <div class="flex flex-1 h-64">
<!--                            <img src="public/user-photo.jpg" alt="Maciej Krawczyk foto1" class="h-64 object-fill">-->
                        </div>
                    </div>
                </DrawerHeader>
                <div class="grid grid-cols-2">
                    <div class="border-r-2 border-gray-200 p-4">
                        <h5 class="text-2xl">Kariera</h5>
                        <CarrierJobListItem class="my-2"/>
                        <CarrierJobListItem class="my-2"/>
                        <CarrierJobListItem class="my-2"/>
                    </div>
                    <!---->
                    <div>
                        <h5 class="text-2xl">Wykształcenie</h5>
                        <div>
                            <EducationListItem class="my-2"/>
                            <EducationListItem class="my-2"/>
                        </div>

                        <h5 class="text-2xl">Technologia</h5>
                        <div class="flex">
                            <div>
                                <TechnologyListItem main-text="Django" sub-text="1 rok"/>
                                <TechnologyListItem main-text="Django" sub-text="1 rok"/>
                                <TechnologyListItem main-text="Django" sub-text="1 rok"/>
                                <TechnologyListItem main-text="Django" sub-text="1 rok"/>
                                <TechnologyListItem main-text="Django" sub-text="1 rok"/>
                                <TechnologyListItem main-text="Django" sub-text="1 rok"/>
                            </div>
                            <div>
                                <TechnologyListItem main-text="Django" sub-text="1 rok"/>
                                <TechnologyListItem main-text="Django" sub-text="1 rok"/>
                                <TechnologyListItem main-text="Django" sub-text="1 rok"/>
                                <TechnologyListItem main-text="Django" sub-text="1 rok"/>
                                <TechnologyListItem main-text="Django" sub-text="1 rok"/>
                                <TechnologyListItem main-text="Django" sub-text="1 rok"/>
                            </div>

                        </div>
                    </div>
                </div>
            </DrawerContent>
            <!---->
        </div>
    </Drawer>
</template>

<style scoped>

</style>
