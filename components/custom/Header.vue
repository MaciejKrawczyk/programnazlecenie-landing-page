<script setup lang="ts">

import IconButton from "~/components/custom/IconButton.vue";
import {Copy, Factory, Gem, HandCoins, KeySquare, Scale, Truck, Check} from "lucide-vue-next";
import {Button} from "~/components/ui/button";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "~/components/ui/dialog";
import {DialogClose} from "radix-vue";
import {useClipboard} from "@vueuse/core";

const source = ref('kontakt@programnazlecenie.pl')
const { text, copy, copied } = useClipboard({ source })
</script>

<template>
    <h1 class="text-5xl font-semibold text-center">Pomagamy stworzyć Twój system Lepiej</h1>
    <div class="my-6">
        <p class="text-2xl text-center">
            Jesteśmy programistami z wieloletnim doświadczeniem.
        </p>
        <p class="text-2xl text-center">
            Tworzymy rozwiązania IT, które wspierają rozwój i usprawniają procesy.
        </p>
    </div>
    <Dialog>
        <div class="flex justify-around gap-7">
            <DialogTrigger as-child>
                <Button>Umów spotkanie</Button>
            </DialogTrigger>
            <Button variant="outline">Poznaj nas</Button>
        </div>
        <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle class="text-center">Napisz na naszego Emaila:</DialogTitle>
                <div class="flex justify-center items-center gap-4">
                    <p class="text-xl font-bold">{{source}}</p>
                    <Button variant="secondary" @click="copy(source)">
                        <Copy class="w-4 h-4" v-if="!copied"/>
                        <Check v-if="copied" class="w-4 h-4" />
                    </Button>
                </div>
            </DialogHeader>
            <div class="grid gap-4 py-4">
                <p>
                    Umówimy się wówczas na 15-to minutowe spotkanie, na którym porozmawiamy o Twoich oczekiwaniach.
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

</template>

<style scoped>

</style>
