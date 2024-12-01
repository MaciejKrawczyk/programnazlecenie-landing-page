<script setup lang="ts">
import StelmachLogo from "/public/logo-stelmach.svg";
import ProsperitasLogo from "/public/prosperitas.svg";
import CertusoftLogo from "/public/certusoft-logo.webp";

import TeamPersonMaciejKrawczyk from "~/components/custom/TeamPersonMaciejKrawczyk.vue";
import TeamPersonRobertJureczko from "~/components/custom/TeamPersonRobertJureczko.vue";
import CompanyProjectsCarousel from "~/components/custom/CompanyProjectsCarousel.vue";
import Header from "~/components/custom/Header.vue";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "~/components/ui/dialog";
import {Check, Copy} from "lucide-vue-next";
import {Button} from "~/components/ui/button";
import {DialogClose} from "radix-vue";
import {useClipboard} from "@vueuse/core";


const carouselData = [
    {
        company: "PZ Stelmach, Opole",
        title: "Automatyzacja pracy pracowników",
        description: "Oprogramowanie ułatwiający rozliczanie się pracowników ze swojej pracy, zliczanie ilości elementów, pomiar wydajności i integracja z wagami czy skanerami",
        image: StelmachLogo,
        alt: "PZ Stelmach logo",
    },
    {
        company: "Kancelaria Prosperitas, Kraków",
        title: "Usprawnienie pracy prawników w kancelarii",
        description: "Rozwój oprogramowania wewnątrzfirmowego do zarządzania sprawami i automatycznego generowania dokumentów tj. pozwy, reklamacje, pisma procesowe",
        image: ProsperitasLogo,
        alt: "Prosperitas logo",
    },
    {
        company: "Certusoft, Warszawa",
        title: "Rozwój systemu ERP",
        description: "Utrzymanie i wdrażanie najnowszych rozwiązań w istniejącym systemie ERP i integracja z nim innych serwisów",
        image: CertusoftLogo,
        alt: "Certusoft logo",
    },
    {
        company: "Kancelaria Prosperitas, Kraków",
        title: "Automatyzacja rozliczeń finansowych z klientami",
        description: "Automatyczne wystawianie faktur, wysyłania przypomnień, proformy, paragony",
        image: ProsperitasLogo,
        alt: "Prosperitas logo",
    },
    {
        company: "PZ Stelmach, Opole",
        title: "Zarządzanie zasobami",
        description: "Oprogramowanie stworzone na podstawie instniejącej szafy narzędzi, służące do przetrzymywania i sortowania i ogólnego zarządzania zasobami.",
        image: StelmachLogo,
        alt: "PZ Stelmach logo",
    },
    {
        company: "Kancelaria Prosperitas, Kraków",
        title: "Rozwój i utrzymanie systemu CRM",
        description: "Rozwój istniejące systemu oraz zarządzanie bazą setek tysięcy leadów.",
        image: ProsperitasLogo,
        alt: "Prosperitas logo",
    },
]

const source = ref('kontakt@programnazlecenie.pl')
const {text, copy, copied} = useClipboard({source})
</script>

<template>
    <div class="flex justify-center items-center bg-background-image pt-20">
        <main class="flex flex-col w-screen max-w-screen-xl items-center">
            <!---->
            <Header/>
            <!---->
            <h2 class="text-4xl text-center font-semibold my-6 mt-16">Zespół</h2>
            <div>
                <div class="grid sm:grid-cols-2 gap-10 grid-cols-1">
                    <TeamPersonMaciejKrawczyk/>
                    <!---->
                    <TeamPersonRobertJureczko/>
                </div>
            </div>
            <!---->
            <h2 class="text-4xl text-center font-semibold my-6 mt-16">Nasza Praca</h2>
            <p class="text-xl text-center mb-6">
                W takich projektach braliśmy udział i aktywnie rozwijaliśmy
            </p>
            <CompanyProjectsCarousel :carousel-data="carouselData"/>
            <!---->
            <div>
                <h3 class="text-3xl text-center font-semibold my-6 mt-16">Umów się na bezpłatną konsultację</h3>
                <p class="text-xl text-center mb-6">
                    Porozmawiajmy o wdrożeniu Twojego systemu już dzisiaj
                </p>
                <Dialog>
                    <div class="flex justify-around gap-7 my-6 mb-20">
                        <DialogTrigger as-child>
                            <Button>Umów spotkanie</Button>
                        </DialogTrigger>
                        <!--                        <Button variant="outline">Poznaj nas</Button>-->
                    </div>
                    <DialogContent class="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle class="text-center">Napisz na naszego Emaila:</DialogTitle>
                            <div class="flex justify-center items-center gap-4">
                                <p class="text-xl font-bold">{{ source }}</p>
                                <Button variant="secondary" @click="copy(source)">
                                    <Copy class="w-4 h-4" v-if="!copied"/>
                                    <Check v-if="copied" class="w-4 h-4"/>
                                </Button>
                            </div>
                        </DialogHeader>
                        <div class="grid gap-4 py-4">
                            <p>
                                Umówimy się wówczas na 15-to minutowe spotkanie, na którym porozmawiamy o Twoich
                                oczekiwaniach.
                                W treści maila zamieść takie informacje jak:
                            </p>
                            <ul class="list-disc ml-8">
                                <li>Twoje imię i nazwę firmy</li>
                                <li>Rodzaj branży</li>
                                <li>Po krótce funkcjonalności systemu jakie chciałbyś wdrożyć</li>
                                <li>Wygodny dla Ciebie termin naszego spotkania</li>
                            </ul>
                            <p>
                                Odezwiemy się jak naszybciej w celu rezerwacji czasu spotkania. Do zobaczenia!
                            </p>
                        </div>
                        <DialogFooter>
                            <DialogClose
                                class="absolute right-4 bottom-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent"
                            >
                                <Button>Okej!</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </main>
    </div>
</template>
