<script setup lang="ts">

import {DrawerContent, DrawerClose} from "~/components/ui/drawer";
import {Github, Linkedin, SquareArrowOutUpRight, X} from "lucide-vue-next";

const props = defineProps<{
    linkedInLink: string,
    githubLink: string,
    fullName: string,
    location: string,
    jobTitle: string,
    description: string,
}>()
</script>

<template>
    <DrawerContent class="bg-gray-100 h-dvh sm:h-screen">
        <div class="flex justify-center items-center h-full pb-10">
            <div class="flex flex-col w-screen max-w-screen-xl items-center h-full">
                <div class="p-3">
                    <DrawerClose as-child>
                        <Button variant="outline" class="absolute right-4 top-4">
                            <X class="w-4 h-4"/>
                        </Button>
                    </DrawerClose>
                    <div class="flex justify-center items-center flex-col">
                        <h4 class="text-2xl">{{ props.fullName }}</h4>
                        <p class="text-lg text-gray-600">{{ props.jobTitle }}, {{ props.location }}</p>
                        <p class="my-2 w-11/12 text-center">
                            {{ props.description }}
                        </p>
                        <div class="flex gap-4 my-4 w-auto justify-center">
                            <Button class="flex justify-between flex-nowrap items-center">
                                <a :href="props.githubLink" target="_blank">
                                    <div class="flex">
                                        <Github class="w-4 h-4 mr-2"/>
                                        @Github
                                        <SquareArrowOutUpRight class="w-4 h-4 ml-1"/>
                                    </div>
                                </a>
                            </Button>
                            <Button class="flex justify-between flex-nowrap items-center">
                                <a :href="props.linkedInLink" target="_blank">
                                    <div class="flex">
                                        <Linkedin class="w-4 h-4 mr-2"/>
                                        @Linkedin
                                        <SquareArrowOutUpRight class="w-4 h-4 ml-1"/>
                                    </div>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                <div class="sm:grid sm:grid-cols-2 overflow-auto flex-wrap w-10/12">
                    <div class="border-r-2 border-gray-200 pl-6 pr-6">
                        <h5 class="text-2xl font-semibold">Kariera</h5>
                        <div>
                            <slot name="carrier"></slot>
                        </div>
                    </div>
                    <!---->
                    <div>
                        <div class="pr-6 pl-6">
                            <h5 class="text-2xl font-semibold">Wykształcenie</h5>
                            <div>
                                <slot name="education"></slot>
                            </div>
                        </div>

                        <div class="pr-6 pl-6">
                            <h5 class="text-2xl font-semibold">Technologia</h5>
                            <div class="flex my-2 gap-10">
                                <slot name="technology"></slot>
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
