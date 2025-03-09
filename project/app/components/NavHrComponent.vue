<template>
    <div class="hr">
        <img src="/layout/UnderHeader.svg" class="underHeader" />
    </div>

</template>

<style scoped>
    .hr {
        @apply w-full mx-auto;
        position: relative;
        height: 0;
        /* background-color: #080C14; */
        border-top: 1px solid;
        border-image-source: linear-gradient(90deg,transparent 0%,#4F0562 15%, #4F0562 85%, transparent 100%);
        filter: none;
        border-image-slice: 1;
        max-width: 1545px;

        & img {
            @apply absolute top-0 left-1/2 -translate-x-1/2;
            /* top: 0;
            right: 0; */
            /* transform: translateX(-50%); */
            /* width: 100%; */
            max-width: 1140px;
            height: 519px;
        }
    }
</style>