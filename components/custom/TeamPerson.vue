<script setup lang="ts">
import {Gavel, Github, GraduationCap, Linkedin, SquareArrowOutUpRight} from "lucide-vue-next";
import {DrawerContent, DrawerTrigger} from "~/components/ui/drawer";
import CarrierJobListItem from "~/components/custom/CarrierJobListItem.vue";
import EducationListItem from "~/components/custom/EducationListItem.vue";
import TechnologyListItem from "~/components/custom/TechnologyListItem.vue";

const props = defineProps<{}>()

</script>

<template>
    <Drawer>
        <div class="flex flex-col items-center justify-center">
            <img src="public/user-photo.jpg" alt="Maciej Krawczyk foto" class="w-11/12">
            <div class="mt-3 w-11/12">
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

                    <hr class="my-4 border-gray-600">

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

                    <DrawerTrigger as-child class="my-6">
                        <Button>Zobacz wszystko</Button>
                    </DrawerTrigger>
                </div>
            </div>
            <!---->
            <DrawerContent class="bg-gray-100">
                <div class="flex justify-center items-center">
                    <div class="flex flex-col w-screen max-w-screen-xl items-center">
                        <div class="p-3">
                            <div class="flex justify-center items-center flex-col">
                                <h4 class="text-2xl">Maciej Krawczyk</h4>
                                <p class="text-lg text-gray-600">Full stack developer, Kraków</p>
                                <p class="my-2 w-11/12 text-center">
                                    Złotnictwo, systemy produkcyjne, systemy dla
                                    kancelarii prawnych, CRM, ERP.
                                    Złotnictwo, systemy produkcyjne, systemy dla
                                    kancelarii prawnych, CRM, ERP
                                </p>
                                <div class="flex gap-4 my-4 w-11/12 justify-center">
                                    <Button class="flex justify-between">
                                        <div class="flex">
                                            <Github class="w-4 h-4 mr-2"/>
                                            @Github
                                        </div>
                                        <SquareArrowOutUpRight class="w-4 h-4 ml-1"/>
                                    </Button>
                                    <Button class="flex justify-between">
                                        <div class="flex">
                                            <Linkedin class="w-4 h-4 mr-2"/>
                                            @Linkedin
                                        </div>
                                        <SquareArrowOutUpRight class="w-4 h-4 ml-1"/>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 h-[50vh] overflow-auto">
                            <div class="border-r-2 border-gray-200 pl-6 pr-6">
                                <h5 class="text-2xl font-semibold">Kariera</h5>
                                <CarrierJobListItem class="my-2"/>
                                <CarrierJobListItem class="my-2"/>
                                <CarrierJobListItem class="my-2"/>
                            </div>
                            <!---->
                            <div>
                                <div class="pr-6 pl-6">
                                    <h5 class="text-2xl font-semibold">Wykształcenie</h5>
                                    <EducationListItem class="my-2"/>
                                    <EducationListItem class="my-2"/>
                                </div>

                                <div class="pr-6 pl-6">
                                    <h5 class="text-2xl font-semibold">Technologia</h5>
                                    <div class="flex my-2">
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
