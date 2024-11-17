<script setup lang="ts">
import IconButton from "~/components/custom/IconButton.vue";
import {Factory, Gavel, Gem, GraduationCap, HandCoins, KeySquare, Scale, Truck} from "lucide-vue-next";
import TeamPerson from "~/components/custom/TeamPerson.vue";
import {Carousel, CarouselContent, CarouselItem} from "~/components/ui/carousel";
import {Card, CardContent} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import TeamPersonDrawer from "~/components/custom/TeamPersonDrawer.vue";
import ShortInfoItem from "~/components/custom/ShortInfoItem.vue";
import CarrierJobListItem from "~/components/custom/CarrierJobListItem.vue";
import EducationListItem from "~/components/custom/EducationListItem.vue";
import TechnologyListItem from "~/components/custom/TechnologyListItem.vue";
import {
    IconBrandCSharp,
    IconBrandCss3,
    IconBrandDjango,
    IconBrandHtml5,
    IconBrandNextjs,
    IconBrandNodejs,
    IconBrandNuxt,
    IconBrandReact,
    IconBrandVue,
    IconDatabase,
    IconSql,
    IconBrandPython,
} from "@tabler/icons-vue";
</script>

<template>
    <div class="flex justify-center items-center bg-background-image pt-20">
        <main class="flex flex-col w-screen max-w-screen-xl items-center">
            <!---->
            <h1 class="text-5xl font-semibold text-center">Pomagamy stworzyć Twój system Lepiej</h1>
            <div class="my-6">
                <p class="text-2xl text-center">
                    Jesteśmy programistami z wieloletnim doświadczeniem.
                </p>
                <p class="text-2xl text-center">
                    Tworzymy rozwiązania IT, które wspierają rozwój i usprawniają procesy.
                </p>
            </div>
            <div class="flex justify-around gap-7">
                <Button>Umów spotkanie</Button>
                <Button variant="outline">Poznaj nas</Button>
            </div>
            <!---->

            <div class="my-6">
                <div class="flex flex-wrap justify-center gap-4 mb-3">
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
                <div class="flex flex-wrap justify-center gap-4">
                    <IconButton text="Przemysł Motoryzacyjny">
                        <KeySquare class="w-4 h-4"/>
                    </IconButton>

                    <IconButton text="Kancelaria Prawna">
                        <Scale class="w-4 h-4"/>
                    </IconButton>
                </div>
            </div>

            <!---->
            <h2 class="text-4xl text-center font-semibold my-6 mt-16">Zespół</h2>
            <div>
                <div class="grid sm:grid-cols-2 gap-10 grid-cols-1">
                    <TeamPerson
                        description="Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych, CRM, ERP"
                        full-name="Maciej Krawczyk"
                        github-link="https://github.com/MaciejKrawczyk"
                        job-title="Full stack developer"
                        linked-in-link="https://www.linkedin.com/in/maciej-krawczyk-the-programmer/"
                    >
                        <template #short-info>
                            <ShortInfoItem
                                company="Prosperitas"
                                job-title="Full stack developer"
                                location="Kraków"
                                year-from="2024"
                                year-to="obecnie"
                            >
                                <template #icon>
                                    <Gavel class="w-4 h-4"/>
                                </template>
                            </ShortInfoItem>
                            <hr class="my-4 border-gray-600">
                            <ShortInfoItem
                                company="Uniwersytet Jagielloński"
                                job-title="Informatyka Stosowana, Mgr"
                                location="Kraków"
                                year-from="2024"
                                year-to="2026"
                            >
                                <template #icon>
                                    <GraduationCap class="w-4 h-4"/>
                                </template>
                            </ShortInfoItem>
                        </template>
                        <template #drawer>
                            <TeamPersonDrawer
                                description="Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych, CRM, ERP"
                                full-name="Maciej Krawczyk"
                                github-link="https://github.com/MaciejKrawczyk"
                                job-title="Full stack developer"
                                linked-in-link="https://www.linkedin.com/in/maciej-krawczyk-the-programmer/"
                                location="Kraków"
                            >
                                <template #carrier>
                                    <CarrierJobListItem
                                        class="my-2"
                                        company="Prosperitas"
                                        description="jakiś opis..."
                                        job-title="Full stack Developer"
                                        location="Kraków"
                                        year-from="2024"
                                        year-to="obecnie"
                                    >
                                        <template #icon>
                                            <Gavel class="w-4 h-4"/>
                                        </template>
                                        <template #contribution>
                                            <ul class="list-disc ml-8">
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                            </ul>
                                        </template>
                                    </CarrierJobListItem>
                                    <CarrierJobListItem
                                        class="my-2"
                                        company="Prosperitas"
                                        description="jakiś opis..."
                                        job-title="Full stack Developer"
                                        location="Kraków"
                                        year-from="2024"
                                        year-to="obecnie"
                                    >
                                        <template #icon>
                                            <Gavel class="w-4 h-4"/>
                                        </template>
                                        <template #contribution>
                                            <ul class="list-disc ml-8">
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                            </ul>
                                        </template>
                                    </CarrierJobListItem>
                                    <CarrierJobListItem
                                        class="my-2"
                                        company="Prosperitas"
                                        description="jakiś opis..."
                                        job-title="Full stack Developer"
                                        location="Kraków"
                                        year-from="2024"
                                        year-to="obecnie"
                                    >
                                        <template #icon>
                                            <Gavel class="w-4 h-4"/>
                                        </template>
                                        <template #contribution>
                                            <ul class="list-disc ml-8">
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                            </ul>
                                        </template>
                                    </CarrierJobListItem>
                                </template>
                                <template #education>
                                    <EducationListItem
                                        class="my-2"
                                        description="jakiś opis school..."
                                        location="Opole"
                                        school="Politechnika Opolska"
                                        title="Automatyka i Robotyka, inż"
                                        year-from="2020"
                                        year-to="2024"
                                    />
                                    <EducationListItem
                                        class="my-2"
                                        description="jakiś opis school 2..."
                                        location="Kraków"
                                        school="Uniwersytet Jagielloński"
                                        title="Informatyka Stosowana, Mgr"
                                        year-from="2024"
                                        year-to="2026"
                                    />
                                </template>
                                <template #technology>
                                    <div>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandDjango size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandReact size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandNextjs size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandNodejs size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandHtml5 size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandCSharp size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                    </div>
                                    <div>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandCss3 size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandNuxt size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconDatabase size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconSql size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandVue size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandPython size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                    </div>
                                </template>
                            </TeamPersonDrawer>
                        </template>
                    </TeamPerson>
                    <!---->
                    <TeamPerson
                        description="Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych, CRM, ERP"
                        full-name="Maciej Krawczyk"
                        github-link="https://github.com/MaciejKrawczyk"
                        job-title="Full stack developer"
                        linked-in-link="https://www.linkedin.com/in/maciej-krawczyk-the-programmer/"
                    >
                        <template #short-info>
                            <ShortInfoItem
                                company="Prosperitas"
                                job-title="Full stack developer"
                                location="Kraków"
                                year-from="2024"
                                year-to="obecnie"
                            >
                                <template #icon>
                                    <Gavel class="w-4 h-4"/>
                                </template>
                            </ShortInfoItem>
                            <hr class="my-4 border-gray-600">
                            <ShortInfoItem
                                company="Uniwersytet Jagielloński"
                                job-title="Informatyka Stosowana, Mgr"
                                location="Kraków"
                                year-from="2024"
                                year-to="2026"
                            >
                                <template #icon>
                                    <GraduationCap class="w-4 h-4"/>
                                </template>
                            </ShortInfoItem>
                        </template>
                        <template #drawer>
                            <TeamPersonDrawer
                                description="Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych, CRM, ERP"
                                full-name="Maciej Krawczyk"
                                github-link="https://github.com/MaciejKrawczyk"
                                job-title="Full stack developer"
                                linked-in-link="https://www.linkedin.com/in/maciej-krawczyk-the-programmer/"
                                location="Kraków"
                            >
                                <template #carrier>
                                    <CarrierJobListItem
                                        class="my-2"
                                        company="Prosperitas"
                                        description="jakiś opis..."
                                        job-title="Full stack Developer"
                                        location="Kraków"
                                        year-from="2024"
                                        year-to="obecnie"
                                    >
                                        <template #icon>
                                            <Gavel class="w-4 h-4"/>
                                        </template>
                                        <template #contribution>
                                            <ul class="list-disc ml-8">
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                            </ul>
                                        </template>
                                    </CarrierJobListItem>
                                    <CarrierJobListItem
                                        class="my-2"
                                        company="Prosperitas"
                                        description="jakiś opis..."
                                        job-title="Full stack Developer"
                                        location="Kraków"
                                        year-from="2024"
                                        year-to="obecnie"
                                    >
                                        <template #icon>
                                            <Gavel class="w-4 h-4"/>
                                        </template>
                                        <template #contribution>
                                            <ul class="list-disc ml-8">
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                            </ul>
                                        </template>
                                    </CarrierJobListItem>
                                    <CarrierJobListItem
                                        class="my-2"
                                        company="Prosperitas"
                                        description="jakiś opis..."
                                        job-title="Full stack Developer"
                                        location="Kraków"
                                        year-from="2024"
                                        year-to="obecnie"
                                    >
                                        <template #icon>
                                            <Gavel class="w-4 h-4"/>
                                        </template>
                                        <template #contribution>
                                            <ul class="list-disc ml-8">
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                                <li>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych,
                                                    CRM, ERP
                                                </li>
                                            </ul>
                                        </template>
                                    </CarrierJobListItem>
                                </template>
                                <template #education>
                                    <EducationListItem
                                        class="my-2"
                                        description="jakiś opis school..."
                                        location="Opole"
                                        school="Politechnika Opolska"
                                        title="Automatyka i Robotyka, inż"
                                        year-from="2020"
                                        year-to="2024"
                                    />
                                    <EducationListItem
                                        class="my-2"
                                        description="jakiś opis school 2..."
                                        location="Kraków"
                                        school="Uniwersytet Jagielloński"
                                        title="Informatyka Stosowana, Mgr"
                                        year-from="2024"
                                        year-to="2026"
                                    />
                                </template>
                                <template #technology>
                                    <div>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandDjango size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandReact size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandNextjs size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandNodejs size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandHtml5 size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandCSharp size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                    </div>
                                    <div>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandCss3 size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandNuxt size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconDatabase size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconSql size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandVue size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                        <TechnologyListItem main-text="Django" sub-text="1 rok">
                                            <template #icon>
                                                <IconBrandPython size="20" :strokeWidth="1"/>
                                            </template>
                                        </TechnologyListItem>
                                    </div>
                                </template>
                            </TeamPersonDrawer>
                        </template>
                    </TeamPerson>
                </div>
            </div>
            <!---->
            <h2 class="text-4xl text-center font-semibold my-6 mt-16">Dlaczego my?</h2>
            <p class="text-xl text-center">
                Jesteśmy programistami z wieloletnim doświadczeniem.
            </p>
            <Carousel
                class="w-[80vw] max-w-screen-xl"
                :opts="{
                    align: 'start',
                }"
            >
                <CarouselContent>
                    <CarouselItem v-for="(_, index) in 5" class="md:basis-1/2 lg:basis-1/3">
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
                <h3 class="text-3xl text-center font-semibold mt-16">Umów się na bezpłatną konsultację</h3>
                <p class="text-xl text-center">
                    Jesteśmy programistami z wieloletnim doświadczeniem.
                </p>
            </div>
        </main>
    </div>
</template>

<style scoped>

</style>
