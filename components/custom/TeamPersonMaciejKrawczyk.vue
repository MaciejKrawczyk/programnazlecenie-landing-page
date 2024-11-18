<script setup lang="ts">

import {Gavel, GraduationCap, HandCoins, Gem} from "lucide-vue-next";
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
                        description="Rozwój oprogramowania wewnątrzfirmowego do zarządzania finansami, sprzedażą, klientami i ich sprawami"
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
                                <li><b>Rozwój systemu CRM firmy:</b> Praca nad modułami wspierającymi kluczowe obszary
                                    działalności, takie jak sprzedaż, finanse oraz telemarketing.
                                </li>
                                <li><b>Wsparcie dla działu prawnego:</b> Wdrażanie nowych funkcjonalności usprawniających
                                    codzienną pracę działu prawnego, dostosowanych do specyficznych wymagań organizacji
                                    tj. tworzenie dokumentów i wyliczeń.
                                </li>
                                <li><b>Stworzenie i rozwój architektury frontendu:</b> Projektowanie oraz rozwój architektury
                                    frontendu aplikacji, co przyczyniło się do poprawy wydajności i czytelności kodu.
                                </li>
                                <li><b>Implementacja modułu finansowego:</b> Udział w procesie wdrażania funkcjonalności takich
                                    jak faktury, faktury korekcyjne, paragony oraz zarządzanie kontami SIMP.
                                </li>
                            </ul>
                        </template>
                    </CarrierJobListItem>
                    <CarrierJobListItem
                        class="my-2"
                        company="Certusoft"
                        description="Wdrażanie stron internetowych Hipper, Platon i funckjonalność ERP"
                        job-title="Programista"
                        location="Warszawa"
                        year-from="2024"
                        year-to="2024"
                    >
                        <template #icon>
                            <HandCoins class="w-4 h-4"/>
                        </template>
                        <template #contribution>
                            <ul class="list-disc ml-8">
                                <li><b>Utrzymanie i rozwiązywanie problemów systemu ERP:</b> Zapewnienie ciągłości działania systemu ERP, kluczowego dla sprawnego funkcjonowania procesów biznesowych.</li>
                                <li><b>Aktualizacje i monitoring stron internetowych:</b> Regularne aktualizowanie i monitorowanie stron internetowych klientów w celu zapewnienia bezpieczeństwa i pełnej funkcjonalności.</li>
                                <li><b>Współpraca nad ulepszaniem systemów:</b> Ścisła współpraca z członkami zespołu przy wdrażaniu ulepszeń i aktualizacji systemów ERP.</li>
                            </ul>
                        </template>
                    </CarrierJobListItem>
                    <CarrierJobListItem
                        class="my-2"
                        company="PZ Stelmach"
                        description="Tworzenie i utrzymanie środowiska produkcyjnego oraz automatyzacja procesów"
                        job-title="Full stack Developer"
                        location="Opole"
                        year-from="2019"
                        year-to="2024"
                    >
                        <template #icon>
                            <Gavel class="w-4 h-4"/>
                        </template>
                        <template #contribution>
                            <ul class="list-disc ml-8">
                                <li><b>Tworzenie i utrzymanie serwera produkcyjnego:</b> Zarządzanie środowiskiem produkcyjnym w celu zapewnienia stabilności i dostępności systemów.</li>
                                <li><b>Zarządzanie bazą danych:</b> Utrzymanie, optymalizacja i administracja bazami danych dla zapewnienia wydajności oraz bezpieczeństwa danych.</li>
                                <li><b>Projektowanie i wdrażanie nowych rozwiązań:</b> Tworzenie, rozwój i wdrażanie nowych funkcjonalności oraz rozwiązań wspierających procesy biznesowe.</li>
                                <li><b>Automatyzacja procesów produkcyjnych:</b> Opracowanie narzędzi i skryptów automatyzujących kluczowe procesy, zwiększających wydajność i redukujących błędy operacyjne.</li>
                            </ul>
                        </template>
                    </CarrierJobListItem>
                    <CarrierJobListItem
                        class="my-2"
                        company="Praca własna"
                        description="Rozwój kompleksowego rozwiązania do tworzenia modeli 3D i konfiguratorów dla personalizowanej biżuterii"
                        job-title="Full stack Developer"
                        location="Opole"
                        year-from="2023"
                        year-to="2024"
                    >
                        <template #icon>
                            <Gem class="w-4 h-4"/>
                        </template>
                        <template #contribution>
                            <ul class="list-disc ml-8">
                                <li><b>Tworzenie wysokiej jakości modeli 3D:</b> Projektowanie precyzyjnych i realistycznych modeli 3D, które przedstawiają personalizowaną biżuterię, dbając o szczegóły i estetykę.</li>
                                <li><b>Wdrożenie wizualizacji w czasie rzeczywistym:</b> Integracja technologii umożliwiającej użytkownikom oglądanie i interakcję z projektami biżuterii w czasie rzeczywistym, zapewniając wciągające doświadczenie zakupowe.</li>
                                <li><b>Rozwój responsywnych stron internetowych:</b> Budowa responsywnych i intuicyjnych stron internetowych z narzędziami do personalizacji biżuterii, dostosowanymi do specyficznych potrzeb użytkowników.</li>
                                <li><b>Integracja z platformami e-commerce:</b> Płynne połączenie rozwiązania z platformami e-commerce w celu usprawnienia procesów zakupowych i poprawy doświadczenia użytkownika.</li>
                                <li><b>Ulepszenie doświadczenia zakupów online:</b> Wykorzystanie zaawansowanych technologii w celu zrewolucjonizowania sposobu projektowania i zakupu biżuterii, łącząc personalizację z wygodą.</li>
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
                    <EducationListItem
                        class="my-2"
                        description=""
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
