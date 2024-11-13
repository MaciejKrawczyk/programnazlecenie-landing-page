<script setup lang="ts">
import IconButton from "~/components/custom/IconButton.vue";
import {
    Factory,
    Gavel,
    Gem,
    Github,
    GraduationCap,
    HandCoins,
    KeySquare,
    Linkedin,
    Scale,
    Truck
} from "lucide-vue-next";
</script>

<template>
    <div class="flex justify-center items-center">
        <main class="flex flex-col w-screen max-w-screen-2xl">

            <div>
                <h1>Pomagamy stworzyć Twój system Lepiej</h1>
                <p>
                    Jesteśmy programistami z wieloletnim doświadczeniem.
                    Tworzymy rozwiązania IT, które wspierają rozwój i usprawniają procesy.
                </p>
                <div>
                    <Button>Umów spotkanie</Button>
                    <Button>Poznaj nas</Button>
                </div>
            </div>

            <div>
                <IconButton text="Produkcja">
                    <Factory class="w-4 h-4"/>
                </IconButton>

                <IconButton text="Tranport">
                    <Truck class="w-4 h-4"/>
                </IconButton>

                <IconButton class="Systemy ERP i CRM">
                    <HandCoins class="w-4 h-4"/>
                </IconButton>

                <IconButton text="Złotnictwo">
                    <Gem class="w-4 h-4"/>
                </IconButton>

                <IconButton text="Przemysł Motoryzacyjny">
                    <KeySquare class="w-4 h-4"/>
                </IconButton>

                <IconButton text="Kancelaria Prawna">
                    <Scale class="w-4 h-4"/>
                </IconButton>
            </div>

            <div>
                <h2>Zespół</h2>
                <div class="grid grid-cols-2">
                    <div>
                        <img src="public/user-photo.jpg" alt="Maciej Krawczyk foto">
                        <div class="flex">
                            <h4>Maciej Krawczyk</h4>
                            <Button size="icon">
                                <Linkedin class="w-4 h-4"/>
                            </Button>
                            <Button size="icon">
                                <Github class="w-4 h-4"/>
                            </Button>
                        </div>
                        <h5>Full stack developer</h5>
                        <p>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych, CRM, ERP</p>

                        <div>
                            <div class="flex justify-between items-center">
                                <div class="flex justify-center items-center">
                                    <Button size="icon">
                                        <Gavel class="w-4 h-4"/>
                                    </Button>
                                    <div class="flex flex-col">
                                        <p>Prosperitas, Kraków</p>
                                        <span>Full stack developer</span>
                                    </div>
                                </div>
                                <span>
                                        2024 - obecnie
                                </span>
                            </div>

                            <Separator class="my-4"/>

                            <div class="flex justify-between items-center">
                                <div class="flex justify-center items-center">
                                    <Button size="icon">
                                        <GraduationCap class="w-4 h-4"/>
                                    </Button>
                                    <div class="flex flex-col">
                                        <p>Prosperitas, Kraków</p>
                                        <span>Full stack developer</span>
                                    </div>
                                </div>
                                <span>
                                        2024 - obecnie
                                </span>
                            </div>

                        </div>
                    </div>

                    <div>
                        <img src="public/user-photo.jpg" alt="Robert Jureczko foto">
                        <div class="flex">
                            <h4>Maciej Krawczyk</h4>
                            <Button size="icon">
                                <Linkedin class="w-4 h-4"/>
                            </Button>
                            <Button size="icon">
                                <Github class="w-4 h-4"/>
                            </Button>
                        </div>
                        <h5>Full stack developer</h5>
                        <p>Złotnictwo, systemy produkcyjne, systemy dla kancelarii prawnych, CRM, ERP</p>

                        <div>
                            <div class="flex justify-between items-center">
                                <div class="flex justify-center items-center">
                                    <Button size="icon">
                                        <Gavel class="w-4 h-4"/>
                                    </Button>
                                    <div class="flex flex-col">
                                        <p>Prosperitas, Kraków</p>
                                        <span>Full stack developer</span>
                                    </div>
                                </div>
                                <span>
                                        2024 - obecnie
                                </span>
                            </div>

                            <Separator class="my-4"/>

                            <div class="flex justify-between items-center">
                                <div class="flex justify-center items-center">
                                    <Button size="icon">
                                        <GraduationCap class="w-4 h-4"/>
                                    </Button>
                                    <div class="flex flex-col">
                                        <p>Prosperitas, Kraków</p>
                                        <span>Full stack developer</span>
                                    </div>
                                </div>
                                <span>
                                        2024 - obecnie
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2>Dlaczego my?</h2>
            </div>

            <div>
                <h3>Umów się na bezpłatną konsultację</h3>
            </div>

        </main>
    </div>
</template>

<style scoped>

</style>
