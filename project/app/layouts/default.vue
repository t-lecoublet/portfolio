<template>
    <div class="fixed">
        <div class="background-effect">
            <img class="v1" src="/layout/Vector 1.svg" />
            <img class="v2" src="/layout/Vector 2.svg" />
            <img class="v3" src="/layout/Vector 3.svg" />
            <img class="v4" src="/layout/Vector 4.svg" />
            <img class="v6" src="/layout/Vector 6.svg" />
        </div>
    </div>

    <svg class="svgFilter">
        <filter id="nnnoise-filter">
            <feTurbulence type="turbulence" baseFrequency="0.2" numOctaves="4" seed="15" stitchTiles="stitch" x="0%"
                y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
            <feSpecularLighting surfaceScale="18" specularConstant="0.4" specularExponent="20" lighting-color="#111e38"
                x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
                <feDistantLight azimuth="3" elevation="200"></feDistantLight>
            </feSpecularLighting>
        </filter>
    </svg>

    <slot />

</template>

<style>

.svgFilter {
    height: 0;
}

.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -3;

    /* background-color: #080C14; */
}

.background-effect {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: -3;
    overflow: clip;

    background-color: #080C14;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: hsla(220, 43%, 5%, 0.50);
        backdrop-filter: blur(20px);

        z-index: -2;
    }

    &::before {
        z-index: 1;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #111e38;
        filter: url(#nnnoise-filter);
    }
}

.v1 {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    filter: brightness(2);
    z-index: -3;

    @media (max-width: 768px) {
        height: 50vh;
        top: -10vw
    }
}

.v2 {
    position: absolute;
    bottom: -25%;
    left: 0;
    width: 50vw;
    filter: brightness(2);
    z-index: -3;

    @media (max-width: 768px) {
        width: 100vw;
        bottom: -10vw;
    }
}

.v3 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    filter: brightness(2);
    z-index: -3;

}

.v4 {
    position: absolute;
    top: 0px;
    right: -50vw;

    filter: brightness(2);
    z-index: -3;

}

.v6 {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 50vh;
    z-index: -3;

    filter: brightness(2);
}
</style>