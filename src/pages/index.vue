<template>
    <RouterView v-slot="{ Component, route }">
        <template v-if="Component">
            <Transition :name="getTransitionName(route.meta)">
                <Suspense>
                    <template #default>
                        <component :is="Component" />
                    </template>
                    <template #fallback>Loading...</template>
                </Suspense>
            </Transition>
        </template>
        <template v-if="isLoading">Loading...</template>
    </RouterView>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoading = ref(false);

const getTransitionName = (transitionMeta) => {
    if (
        transitionMeta &&
        typeof transitionMeta === "object" &&
        transitionMeta.transition &&
        typeof transitionMeta.transition === "string"
    ) {
        return transitionMeta.transition;
    }
    return "fade";
};

router.beforeEach(() => {
    isLoading.value = true;
});
router.afterEach(() => {
    isLoading.value = false;
});
</script>

<style lang="scss">
.fade-leave-active {
    transition: 0.2s ease;
}
.fade-enter-active {
    transition: 0.2s ease;
    transition-delay: 0.2s;
}
.fade-enter-from {
    opacity: 0;
    transform: translateX(-100px);
}
.fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>
