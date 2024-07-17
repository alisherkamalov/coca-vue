<template>
<div>
    <TheHeader></TheHeader>
    <TheOverview></TheOverview>
</div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheOverview from "../components/TheOverview.vue";
export default {
    name: "HomeView",
    components: {TheHeader, TheOverview},
};
</script>
