<template>
    <svg>
        <filter id="noiseFilter">
            <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="4" seed="15" stitchTiles="stitch" x="0%"
                y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
            <feSpecularLighting surfaceScale="40" specularConstant="1" specularExponent="20" lighting-color="#080c14"
                x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
                <feDistantLight azimuth="3" elevation="200"></feDistantLight>
            </feSpecularLighting>

        </filter>
    </svg>
    <div class="yellow blob"></div>
    <div class="red blob"></div>
    <div class="green blob"></div>
    <slot />

</template>

<style>
:root {
    --bg: #152032;
    --text: #151515;
    --yellow: #152032;
    --red: #4F0562;
    --green: #152032;
}


body {
    height: 100vh;
    margin: 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3em;

    background-color: var(--bg);
    font-family: "Recoleta";

    margin: 0 10em;
}

h1 {
    font-size: 60px;
    font-weight: normal;
    margin: 0;
}

h2 {
    font-size: 32px;
}

p {
    font-size: 20px;
}

a {
    text-decoration: none;
    color: inherit;
}

body::before,
body::after {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;

    opacity: 40%;
}

body::before {
    background: #8C8C8C;
    filter: url(#noiseFilter);
}




.blob {
    border-radius: 100px;
    filter: blur(60px);
}

.yellow {
    background-color: var(--yellow);
    position: absolute;
    top: 200px;
    left: 100px;
    height: 200px;
    width: 200px;

    animation: yellow 8s infinite ease;
}

.green {
    background-color: var(--green);
    position: absolute;
    top: 80px;
    right: -20px;
    height: 200px;
    width: 250px;

    animation: green 8s infinite ease;
}

.red {
    background-color: var(--red);
    position: absolute;
    right: 0;
    top: 300px;
    height: 250px;
    width: 200px;

    animation: red 8s infinite linear;
}

@keyframes yellow {
    0% {
        top: 200px;
        left: 100px;
        transform: scale(1);
    }

    30% {
        top: 300px;
        left: 150px;
        transform: scale(1.2);
    }

    60% {
        top: 100px;
        left: 200px;
        transform: scale(1.3);
    }

    100% {
        top: 200px;
        left: 100px;
        transform: scale(1);
    }
}

@keyframes green {
    0% {
        top: 80px;
        right: -20px;
        transform: scale(1.2);
    }

    30% {
        top: 300px;
        right: -20px;
        transform: scale(1);
    }

    60% {
        top: 200px;
        right: 100px;
        transform: scale(1);
    }

    100% {
        top: 80px;
        right: -20px;
        transform: scale(1.2);
    }
}

@keyframes red {
    0% {
        top: 250px;
        right: 0px;
        transform: scale(1);
    }

    30% {
        top: 150px;
        right: 150px;
        transform: scale(1.4);
    }

    60% {
        top: 250px;
        right: 100px;
        transform: scale(1);
    }

    100% {
        top: 250px;
        right: 0px;
        transform: scale(1);
    }
}
</style>