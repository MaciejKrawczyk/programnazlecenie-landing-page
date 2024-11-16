<script setup lang="ts">
import IconButton from "~/components/custom/IconButton.vue";
import {Factory, Gem, HandCoins, KeySquare, Scale, Truck} from "lucide-vue-next";
import TeamPerson from "~/components/custom/TeamPerson.vue";
import {Carousel, CarouselContent, CarouselItem} from "~/components/ui/carousel";
import {Card, CardContent} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
</script>

<template>
    <div class="flex justify-center items-center">
        <main class="flex flex-col w-screen max-w-screen-xl items-center">
            <!---->
            <h1 class="text-5xl font-semibold">Pomagamy stworzyć Twój system Lepiej</h1>
            <div class="my-6">
                <p class="text-2xl text-center">
                    Jesteśmy programistami z wieloletnim doświadczeniem.
                </p>
                <p class="text-2xl text-center">
                    Tworzymy rozwiązania IT, które wspierają rozwój i usprawniają procesy.
                </p>
            </div>
            <div class="w-1/3 flex justify-around">
                <Button>Umów spotkanie</Button>
                <Button variant="outline">Poznaj nas</Button>
            </div>
            <!---->

            <div class="my-6">
                <div class="sm:grid sm:grid-cols-4 mb-3">
                    <IconButton text="Produkcja">
                        <Factory class="w-4 h-4"/>
                    </IconButton>

                    <IconButton text="Tranport">
                        <Truck class="w-4 h-4"/>
                    </IconButton>

                    <IconButton text="Systemy ERP i CRM">
                        <HandCoins class="w-4 h-4"/>
                    </IconButton>

                    <IconButton text="Złotnictwo">
                        <Gem class="w-4 h-4"/>
                    </IconButton>
                </div>
                <div class="sm:grid sm:grid-cols-2">
                    <IconButton text="Przemysł Motoryzacyjny">
                        <KeySquare class="w-4 h-4"/>
                    </IconButton>

                    <IconButton text="Kancelaria Prawna">
                        <Scale class="w-4 h-4"/>
                    </IconButton>
                </div>
            </div>

            <!---->
            <h2 class="text-4xl font-semibold my-6 mt-16">Zespół</h2>
            <div>
                <div class="grid sm:grid-cols-2 gap-10 grid-cols-1">
                    <TeamPerson />
                    <TeamPerson />
                </div>
            </div>
            <!---->
            <h2 class="text-4xl font-semibold my-6 mt-16">Dlaczego my?</h2>
            <p class="text-xl text-center">
                Jesteśmy programistami z wieloletnim doświadczeniem.
            </p>
            <Carousel
                class="relative w-full max-w-sm"
                :opts="{
                    align: 'start',
                }"
            >
                <CarouselContent>
                    <CarouselItem v-for="(_, index) in 5">
                        <div class="p-1">
                            <Card>
                                <CardContent class="flex flex-col items-center justify-center p-4">
                                    <img src="public/logo-stelmach.svg" alt="PZ Stelmach logo" width="165">
                                    <span class="my-2 text-md">PZ Stelmach, Opole</span>
                                    <h6 class="text-xl font-semibold text-center my-2">Automatyzacja pracy
                                        pracowników i zarządzanie zasobami</h6>
                                    <p class="text-center text-lg">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Donec id iaculis quam. Aliquam aliquam lacus efficitur,
                                        consequat metus sit amet, sollicitudin nunc. Nunc augue lorem</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselNext/>
                <CarouselPrevious/>
            </Carousel>
            <!---->
            <div>
                <h3 class="text-3xl font-semibold mt-16">Umów się na bezpłatną konsultację</h3>
                <p class="text-xl text-center">
                    Jesteśmy programistami z wieloletnim doświadczeniem.
                </p>
            </div>
        </main>
    </div>
</template>

<style scoped>

</style>
