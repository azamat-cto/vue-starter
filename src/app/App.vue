<template>
    <div>
        <header>
            <nav>
                <ul class="flex gap-x-4">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                </ul>
            </nav>
        </header>

        <main class="overflow-x-hidden">
            <Routing />
        </main>
    </div>
</template>

<script setup>
import { Routing } from "@/pages";
</script>
