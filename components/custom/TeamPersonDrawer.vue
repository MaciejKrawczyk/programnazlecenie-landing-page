<script setup lang="ts">

import {DrawerContent} from "~/components/ui/drawer";
import {Github, Linkedin, SquareArrowOutUpRight} from "lucide-vue-next";
import CarrierJobListItem from "~/components/custom/CarrierJobListItem.vue";
import TechnologyListItem from "~/components/custom/TechnologyListItem.vue";
import EducationListItem from "~/components/custom/EducationListItem.vue";
</script>

<template>
    <DrawerContent class="bg-gray-100 h-dvh sm:h-screen">
        <div class="flex justify-center items-center h-full pb-10">
            <div class="flex flex-col w-screen max-w-screen-xl items-center h-full">
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

                <div class="sm:grid sm:grid-cols-2 overflow-auto flex-grow">
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
                            <div class="flex my-2 gap-10">
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
</template>

<style scoped>

</style>
