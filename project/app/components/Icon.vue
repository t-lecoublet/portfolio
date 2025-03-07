<script setup lang="ts">

const props = defineProps<{
  name: string,
  link?: string,
  type?: string
}>()

</script>

<template>
    <NuxtLink v-if="props.link" :to="props.link">
        <NuxtImg :src="`/icons/${props.name}.${props.type ?? 'svg'}`" :alt="props.name+' Icon'" />
    </NuxtLink>
    <NuxtImg :src="`/icons/${props.name}.${props.type ?? 'svg'}`" :alt="props.name+' Icon'" />

</template>