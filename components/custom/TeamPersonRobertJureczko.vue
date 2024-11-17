<script setup lang="ts">

import {Gavel, GraduationCap} from "lucide-vue-next";
import {
    IconBrandCSharp,
    IconBrandCss3,
    IconBrandDjango,
    IconBrandHtml5,
    IconBrandNextjs,
    IconBrandNodejs,
    IconBrandNuxt,
    IconBrandPython,
    IconBrandReact,
    IconBrandVue,
    IconDatabase,
    IconSql
} from "@tabler/icons-vue";
import TeamPerson from "~/components/custom/TeamPerson.vue";
import CarrierJobListItem from "~/components/custom/CarrierJobListItem.vue";
import TechnologyListItem from "~/components/custom/TechnologyListItem.vue";
import TeamPersonDrawer from "~/components/custom/TeamPersonDrawer.vue";
import EducationListItem from "~/components/custom/EducationListItem.vue";
import ShortInfoItem from "~/components/custom/ShortInfoItem.vue";
</script>


<template>
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
</template>


<style scoped>

</style>
