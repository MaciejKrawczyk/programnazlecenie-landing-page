<script setup lang="ts">

import {CodeXml, Gavel, GraduationCap} from "lucide-vue-next";
import {
    IconArrowDownCircle,
    IconBrandCSharp,
    IconBrandCss3,
    IconBrandHtml5,
    IconBrandPython,
    IconBrandVue,
    IconComponents,
    IconDatabase,
    IconSql
} from "@tabler/icons-vue";
import TeamPerson from "~/components/custom/TeamPerson.vue";
import CarrierJobListItem from "~/components/custom/CarrierJobListItem.vue";
import TechnologyListItem from "~/components/custom/TechnologyListItem.vue";
import TeamPersonDrawer from "~/components/custom/TeamPersonDrawer.vue";
import EducationListItem from "~/components/custom/EducationListItem.vue";
import ShortInfoItem from "~/components/custom/ShortInfoItem.vue";
import RobertFoto from "/public/robert1.jpg";
</script>


<template>
    <TeamPerson
        :img="RobertFoto"
        description="Tworzenie aplikacji i serwisów dla sektora transportowego oraz produkcyjnego"
        full-name="Robert Jureczko"
        github-link="https://github.com/RoobyJ"
        job-title="Full stack developer"
        linked-in-link="https://www.linkedin.com/in/robert-jureczko/"
    >
        <template #short-info>
            <ShortInfoItem
                company="Codefusion"
                job-title="Programista full stack"
                location="Opole"
                year-from="2022"
                year-to="obecnie"
            >
                <template #icon>
                    <CodeXml class="w-4 h-4"/>
                </template>
            </ShortInfoItem>
            <hr class="my-4 border-gray-600">
            <ShortInfoItem
                company="Politechnika Opolska"
                job-title="Automatyka i Robotyka, Inż"
                location="Opole"
                year-from="2020"
                year-to="2024"
            >
                <template #icon>
                    <GraduationCap class="w-4 h-4"/>
                </template>
            </ShortInfoItem>
        </template>
        <template #drawer>
            <TeamPersonDrawer
                description="Tworzenie aplikacji i serwisów dla sektora transportowego oraz produkcyjnego"
                full-name="Robert Jureczko"
                github-link="https://github.com/RoobyJ"
                job-title="Programista full stack"
                linked-in-link="https://www.linkedin.com/in/robert-jureczko/"
                location="Kraków"
            >
                <template #carrier>
                    <CarrierJobListItem
                        class="my-2"
                        company="Codefusion"
                        description="Tworzenie aplikacji i serwisów dla sektora transportowego oraz produkcyjnego"
                        job-title="Programista full stack"
                        location="Opole"
                        year-from="2022"
                        year-to="obecnie"
                    >
                        <template #icon>
                            <CodeXml class="w-4 h-4"/>
                        </template>
                        <template #contribution>
                            <ul class="list-disc ml-8">
                                <li><b>Projektowanie architektury:</b> Uczestniczenie w projektowaniu architektury
                                    nowych
                                    modułów i projektów
                                </li>
                                <li><b>Automatyzacja testów:</b> Wprowadzenie Test Containers do projektów, co
                                    umożliwiło
                                    przeprowadzanie testów na bazach danych podobnych do używanych przez klienta
                                </li>
                                <li><b>Zaawansowana znajomość technologii:</b> Doskonalenie znajomości frameworków
                                    (Vue.js,
                                    Vuetify, .NET, Entity Framework Core) oraz narzędzi (SQL, Docker).
                                </li>
                                <li><b>Automatyzacja CI/CD:</b> Tworzenie pipeline'ów w Jenkinsie do budowania,
                                    testowania i
                                    wdrażania aplikacji oraz infrastruktury jako kodu (Infrastructure as Code).
                                </li>
                                <li><b>Poprawa wydajności pracy zespołu:</b> Udoskonalenie procesu deweloperskiego oraz
                                    przyspieszenie wydawania aplikacji dzięki właściwemu zarządzaniu czasem i
                                    priorytetyzacji zadań.
                                </li>
                            </ul>
                        </template>
                    </CarrierJobListItem>
                    <CarrierJobListItem
                        class="my-2"
                        company="RS Engineering"
                        description="Programowanie robotów przemysłowych dla BMW"
                        job-title="Programista robotów przemysłowych"
                        location="Strzelce Opolskie"
                        year-from="2021"
                        year-to="2022"
                    >
                        <template #icon>
                            <Gavel class="w-4 h-4"/>
                        </template>
                        <template #contribution>
                            <ul class="list-disc ml-8">
                                <li><b>Realizacja projektów dla wybranych modeli samochodów:</b> Udział w projektach
                                    związanych
                                    z modelami BMW G60, BMW G61, oraz Rolls Royce Cullinan.
                                </li>
                                <li><b>Automatyzacja operacji:</b> Tworzenie skryptów pomocniczych w celu automatyzacji
                                    powtarzalnych operacji, np. programowanie robotów.
                                </li>
                                <li><b>Tworzenie dokumentacji:</b> Opracowywanie dokumentacji dla zrealizowanych
                                    projektów,
                                    zapewniając kompletność i zgodność z wymaganiami klientów.
                                </li>
                            </ul>
                        </template>
                    </CarrierJobListItem>
                </template>
                <template #education>
                    <EducationListItem
                        class="my-2"
                        description=""
                        location="Opole"
                        school="Politechnika Opolska"
                        title="Automatyka i Robotyka, inż"
                        year-from="2020"
                        year-to="2024"
                    />
                </template>
                <template #technology>
                    <div>
                        <TechnologyListItem main-text="HTML" sub-text="2 lata">
                            <template #icon>
                                <IconBrandHtml5 size="20" :strokeWidth="1"/>
                            </template>
                        </TechnologyListItem>
                        <TechnologyListItem main-text="ASP .NET Core" sub-text="2 lata">
                            <template #icon>
                                <IconBrandCSharp size="20" :strokeWidth="1"/>
                            </template>
                        </TechnologyListItem>
                        <TechnologyListItem main-text="SQL" sub-text="2 lata">
                            <template #icon>
                                <IconSql size="20" :strokeWidth="1"/>
                            </template>
                        </TechnologyListItem>
                        <TechnologyListItem main-text="Vue.js" sub-text="2 lata">
                            <template #icon>
                                <IconBrandVue size="20" :strokeWidth="1"/>
                            </template>
                        </TechnologyListItem>
                        <TechnologyListItem main-text="Django" sub-text="2 lata">
                            <template #icon>
                                <IconBrandPython size="20" :strokeWidth="1"/>
                            </template>
                        </TechnologyListItem>
                    </div>
                    <div>
                        <TechnologyListItem main-text="CSS, SCSS" sub-text="2 lata">
                            <template #icon>
                                <IconBrandCss3 size="20" :strokeWidth="1"/>
                            </template>
                        </TechnologyListItem>
                        <TechnologyListItem main-text="Jenkins" sub-text="2 lata">
                            <template #icon>
                                <IconArrowDownCircle size="20" :strokeWidth="1"/>
                            </template>
                        </TechnologyListItem>
                        <TechnologyListItem main-text="Postgres, SQL Server" sub-text="2 lata">
                            <template #icon>
                                <IconDatabase size="20" :strokeWidth="1"/>
                            </template>
                        </TechnologyListItem>
                        <TechnologyListItem main-text="Vuetify, Devextreme" sub-text="2 lata">
                            <template #icon>
                                <IconComponents size="20" :strokeWidth="1"/>
                            </template>
                        </TechnologyListItem>
                    </div>
                </template>
            </TeamPersonDrawer>
        </template>
    </TeamPerson>
</template>


<style scoped>

</style>
