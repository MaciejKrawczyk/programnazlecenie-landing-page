<script setup lang="ts">
import {Github, Linkedin} from "lucide-vue-next";
import {DrawerTrigger} from "~/components/ui/drawer";

const props = defineProps<{
    linkedInLink: string,
    githubLink: string,
    fullName: string,
    jobTitle: string,
    description: string,
    img: string,
}>()

</script>

<template>
    <Drawer>
        <div class="flex flex-col items-center justify-center">
            <img :src="props.img" alt="Foto" class="w-11/12 h-[625px] object-cover">
            <div class="mt-3 w-11/12">
                <div class="flex">
                    <h4 class="text-2xl font-semibold mr-4">{{ props.fullName }}</h4>
                    <div class="flex gap-2">
                        <Button size="icon">
                            <a :href="props.linkedInLink" target="_blank">
                                <Linkedin class="w-4 h-4"/>
                            </a>
                        </Button>
                        <Button size="icon">
                            <a :href="props.githubLink" target="_blank">
                                <Github class="w-4 h-4"/>
                            </a>
                        </Button>
                    </div>
                </div>
                <h5 class="text-xl">{{ props.jobTitle }}</h5>
                <p class="size-lg font-light text-gray-600 w-5/6 my-3">{{ props.description }}</p>
                <div>
                    <slot name="short-info"/>
                    <DrawerTrigger as-child class="my-6">
                        <Button>Zobacz cały profil</Button>
                    </DrawerTrigger>
                </div>
            </div>
            <!---->
            <slot name="drawer"/>
            <!---->
        </div>
    </Drawer>
</template>

<style scoped>

</style>
