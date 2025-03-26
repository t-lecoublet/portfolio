<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const Ressources = [
    {
        title: 'SVG 3D Viewer',
        description: 'A tool that allows you to visualize SVG files in 3D within a web environment.',
        why: `This project aims to enable the creation of 3D plans without requiring mastery of modeling
            tools. Simple modifications to an SVG file are sufficient. This project was created as a
            foundational structure for another project, which manages classrooms linked to a database,
            allowing for the <br> management <br> and interaction with the 3D plan.`,
        tags: ['#Project', 'at LIMOS', 'in 2025'],
        links: ['Gitlab', 'LimosBold', 'Cnrs', 'VueWhite', 'Threejs'],
        preview: {
            link: '/main/previewSvgToPlan.png',
            class: ''
        },
        logo: '/main/logoSvgToPlan.svg',
        colors: ['preview-border-[#37D69E]', '#3BE8A3' , '#304467']
    },
    {
        title: 'PIXCSS',
        description: 'A component library based on TailwindCSS, focusing on the \'pixel\' aspect.',
        why: `PIXCSS was created to fill the gap in libraries and flexibility for pixel-based component design, 
            offering robust tools and customization options with TailwindCSS for precise, pixel-perfect designs. 
            This provides a robust and flexible framework that allows developers to easily create and <br> manage pixel-<br>based components, 
            enhancing both the development process and the final product's visual fidelity.`,
        tags: ['#Project', 'at Home', 'since 2024'],
        links: ['Github', 'Tailwind', 'Pixcss'],
        preview: {
            link: '/main/previewPixcss.png',
            class: '!bottom-8'
        },
        logo: '/main/logoPixcss.svg',
        colors: ['preview-border-[#CB3153]', '#421222' , '#FBC75A']

    },
    // You can add more resources here
]

const selectedRessource = ref(0)
const isTransitioning = ref(false)
const isUserInteracting = ref(false)
const autoChangeInterval = ref<number | null>(null)
const AUTO_CHANGE_DELAY = 7000 // Time in ms between auto changes

// Progress bar state
const progressValue = ref(0)
const progressInterval = ref<number | null>(null)
const PROGRESS_UPDATE_INTERVAL = 30 // Update progress bar every 30ms for smooth animation
const progressComplete = ref(false)

// Function to handle resource change with transition
const changeResource = (index: number) => {
    if (selectedRessource.value === index || isTransitioning.value) return
    
    isTransitioning.value = true
    resetProgressBar() // Reset progress bar when changing resources
    
    setTimeout(() => {
        selectedRessource.value = index
        setTimeout(() => {
            isTransitioning.value = false
            if (!isUserInteracting.value) {
                startProgressBar() // Start progress bar after transition completes
            }
        }, 300)
    }, 300)
}

// Progress bar functions
const startProgressBar = () => {
    if (progressInterval.value) return
    
    progressValue.value = 0
    progressComplete.value = false
    const startTime = Date.now()
    
    progressInterval.value = window.setInterval(() => {
        const elapsedTime = Date.now() - startTime
        const newValue = Math.min((elapsedTime / AUTO_CHANGE_DELAY) * 100, 100)
        progressValue.value = newValue
        
        // Check if the progress is complete
        if (newValue >= 100 && !progressComplete.value) {
            progressComplete.value = true
            // Give a small buffer to ensure the bar appears fully complete
            setTimeout(() => {
                if (!isUserInteracting.value && !isTransitioning.value) {
                    const nextIndex = (selectedRessource.value + 1) % Ressources.length
                    changeResource(nextIndex)
                }
            }, 50)
        }
    }, PROGRESS_UPDATE_INTERVAL)
}

const resetProgressBar = () => {
    progressValue.value = 0
    progressComplete.value = false
    if (progressInterval.value) {
        window.clearInterval(progressInterval.value)
        progressInterval.value = null
    }
}

// Auto-change resource in intervals if not interacting
const startAutoChange = () => {
    if (autoChangeInterval.value) return
    
    startProgressBar() // Start progress bar when auto-change begins
    
    // We no longer need the auto change interval since the progress bar triggers the change
    // Keep this function for API consistency, but it now just starts the progress bar
}

// Stop auto-changing when user interacts
const stopAutoChange = () => {
    isUserInteracting.value = true
    
    resetProgressBar() // Reset progress bar when user interacts
    
    if (autoChangeInterval.value) {
        window.clearInterval(autoChangeInterval.value)
        autoChangeInterval.value = null
    }
}

// Restart auto-change when user stops interacting
const resumeAutoChange = () => {
    isUserInteracting.value = false
    startAutoChange()
}

// Handle direct selection via radio buttons
const handleRadioChange = (index: number) => {
    stopAutoChange() // Stop auto-changing permanently when user makes a selection
    isUserInteracting.value = true // Make sure we stay in "user interaction" mode
    changeResource(index)
}

// Set up and clean up auto-change on mount/unmount
onMounted(() => {
    startAutoChange()
})

onUnmounted(() => {
    if (autoChangeInterval.value) {
        window.clearInterval(autoChangeInterval.value)
    }
    if (progressInterval.value) {
        window.clearInterval(progressInterval.value)
    }
})

// Get current resource for easier template access
const currentResource = computed(() => Ressources[selectedRessource.value])
</script>


<template>
    <div class="hero">
        <div class="hero__content">
            <h2 class="uppercase">Lecoublet Théo</h2>
            <h1 class="uppercase">Dev Front-end</h1>
            <span>& co</span>
            <p>Made in France since 2000s</p>
            <aside>
                Fueled by water and curiosity, always on the hunt for <br>
                the next coding adventure!
            </aside>
            <button>
                See my Adventures
            </button>
        </div>
        <div class="hero__preview">
            <article 
                class="hero__preview__content" 
                :class="{ 'switch': isTransitioning }"
                @mouseenter="stopAutoChange"
                @mouseleave="resumeAutoChange" 
            >
                <section name="logoNpreview" :style="{ '--src': `url('${currentResource.logo}')` }">
                    <div class="logo"></div>
                    <div class="logo__blur"></div>
                    <div v-if="currentResource.preview"
                     class="preview preview__border " :class="[currentResource.colors[0],currentResource.preview.class]">
                        <img :src="currentResource.preview.link" alt="">
                    </div>
                </section>
                <section name="content">
                    <hgroup>
                        <h3>
                            {{ currentResource.title }}
                        </h3>
                        <p>
                            {{ currentResource.description }}
                        </p>
                    </hgroup>

                    <hr  :style="{ '--color-start': currentResource.colors[1], '--color-end': currentResource.colors[2]}" />

                    <hgroup>
                        <h4>
                            Why ?
                        </h4>

                        <p v-html="currentResource.why">
                        </p>

                        <button class="btn">
                            Read More
                            <Icon name="ArrowRight" />
                        </button>

                    </hgroup>
                </section>
                <aside name="tagsNlinks">
                    <div class="tags">
                        <span v-for="(tag, index) in currentResource.tags" :key="index" class="tag">
                            <template v-if="tag.includes('at')">
                                <Icon name="Map" />
                                {{ tag }}
                            </template>
                            <template v-else-if="tag.includes('in')">
                                <Icon name="Calendar" />
                                {{ tag }}
                            </template>
                            <template v-else>
                                {{ tag }}
                            </template>
                        </span>
                    </div>
                    <h4>
                        Related Links:
                    </h4>
                    <div class="links">
                        <a v-for="(link, index) in currentResource.links" :key="index" class="link-icon" href="/">
                            <Icon :name="link" />
                        </a>
                    </div>
                </aside>
                <div class="hero__preview__progress-container" :class="{ 'w-0' : isUserInteracting}">
                    <div class="hero__preview__progress-bar" :style="{ width: `${progressValue}%` }"></div>
                </div>
            </article>

            <div class="hero__preview__pages">
                <label 
                    v-for="(resource, index) in Ressources" 
                    :key="index"
                >
                    <input 
                        type="radio" 
                        name="preview-radio" 
                        :checked="index === selectedRessource" 
                        @change="handleRadioChange(index)"
                    />
                </label>
            </div>
            <img src="/layout/GridBackground.svg" alt="" class="grid-background">
        </div>
    </div>
</template>


<style scoped>
.hero {
    @apply grid relative gap-4 w-full mx-auto;
    grid-template-columns: 1fr auto;
    /* min-height: 90vh; */
    --padding: 1.25rem;
    padding: 2rem var(--padding);
    max-width: calc(var(--max-size) + var(--padding)*2);
    width: 100vw;

    /*// cssrem-disable-next-line */
    @media (max-width: 1440px) {
        @apply grid-cols-1;
    }

    &__content {
        @apply flex flex-col justify-center;
        color: #fff;

        @media (max-width: 1440px) {
            @apply mx-auto items-center;
            margin: minmax(10vh, 200px) 0;
        }

        @media (max-width: 600px) {
            @apply items-start;
        }

        h2 {
            font-weight: 500;
            font-size: 3rem;
            line-height: 3rem;
            position: relative;

            @media (max-width: 600px) {
                font-size: 2rem;
            }

            &::after {
                content: '';
                position: absolute;
                width: .4375rem;
                height: 18.75rem;
                left: -7.5rem;
                top: 50%;
                transform: translateY(-50%);
                background-color: #14E6F2;
                border-radius: 6.25rem;

                @media (max-width: 1440px) {
                    @apply hidden;
                }
            }
        }

        h1 {
            font-size: 4rem;
            font-weight: 900;
            line-height: 3.75rem;

            @media (max-width: 600px) {
                font-size: 3rem;
            }

            &~span {
                font-weight: 700;
                font-size: 1.25rem;
                line-height: 1.25rem;
                font-style: italic;

                @media (max-width: 600px) {
                    font-size: 1rem;
                }
            }

            &~p {
                font-weight: 400;
                font-size: 1.25rem;
                line-height: 1.25rem;
                color: #DBDBDB;
                font-family: 'Open Sans', sans-serif;
                margin-top: 2.25rem;

                @media (max-width: 600px) {
                    font-size: 1rem;
                }
            }

            &~aside {
                font-size: 1.125rem;
                line-height: 2rem;
                font-style: oblique;

                margin-top: 3rem;

                @media (max-width: 600px) {
                    font-size: .90rem;
                }

            }

            &~button {
                @apply text-white font-medium w-max;
                margin-top: 4.75rem;
                font-size: .9375rem;
                /* --color-1 : #0081882e;
                --color-2 : #0ea86b2e;
                background: linear-gradient(90deg, var(--color-1) 0%, var(--color-2) 100%); */
                padding: .5rem .625rem;
                transition: all .25s;

                border-image-slice: 25 25 25 25;
                border-image-width: .5rem;
                border-image-outset: .25rem;
                border-image-repeat: repeat repeat;
                border-image-source: url("data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnMSIgd2lkdGg9IjE5LjI3NG1tIiBoZWlnaHQ9IjE5LjI3NG1tIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxOS4yNzQgMTkuMjc0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGcgaWQ9ImxheWVyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzLjUyOCAtNy44ODYzKSIgZmlsbD0iIzE0ZTZmMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iLjE2Ij4KICA8cGF0aCBpZD0icmVjdDEiIGQ9Im0zNS40NjUgNy44ODYzdjEuOTM2OGgtMS45MzY4djEuMjQ1NGgxLjkzNjh2MS45MzY4aDEuMjQ1NHYtMS45MzY4aDEuOTM2OHYtMS4yNDU0aC0xLjkzNjh2LTEuOTM2OHoiIHN0cm9rZS13aWR0aD0iLjUyOTE3IiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogIDxwYXRoIGlkPSJyZWN0MS04IiBkPSJtNDkuNjE5IDcuODg2M3YxLjkzNjhoLTEuOTM2OHYxLjI0NTRoMS45MzY4djEuOTM2OGgxLjI0NTR2LTEuOTM2OGgxLjkzNjh2LTEuMjQ1NGgtMS45MzY4di0xLjkzNjh6IiBzdHJva2Utd2lkdGg9Ii41MjkxNyIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICA8cmVjdCBpZD0icmVjdDEtMS0zIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCkiIHg9IjEwLjE5OCIgeT0iLTQ0LjczIiB3aWR0aD0iLjQ5NTE1IiBoZWlnaHQ9IjMuMTI5OSIgc3Ryb2tlLXdpZHRoPSIuMjYwOTIiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgPHJlY3QgaWQ9InJlY3QxLTEtMy0yIiB0cmFuc2Zvcm09InNjYWxlKC0xKSIgeD0iLTUwLjQ5IiB5PSItMTkuMDg4IiB3aWR0aD0iLjQ5NTE1IiBoZWlnaHQ9IjMuMTI5OSIgc3Ryb2tlLXdpZHRoPSIuMjYwOTIiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgPHBhdGggaWQ9InJlY3QxLTgtNSIgZD0ibTM4LjY0NyAyMy45NzhoLTEuOTM2OHYtMS45MzY4aC0xLjI0NTR2MS45MzY4aC0xLjkzNjh2MS4yNDU0aDEuOTM2OHYxLjkzNjhoMS4yNDU0di0xLjkzNjhoMS45MzY4eiIgc3Ryb2tlLXdpZHRoPSIuNTI5MTciIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgPHJlY3QgaWQ9InJlY3QxLTEtMy0xIiB0cmFuc2Zvcm09InNjYWxlKC0xKSIgeD0iLTM2LjMzNSIgeT0iLTE5LjA4OCIgd2lkdGg9Ii40OTUxNSIgaGVpZ2h0PSIzLjEyOTkiIHN0cm9rZS13aWR0aD0iLjI2MDkyIiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogIDxwYXRoIGlkPSJyZWN0MS04LTAiIGQ9Im00OS42MTkgMjIuMDQxdjEuOTM2OGgtMS45MzY4djEuMjQ1NGgxLjkzNjh2MS45MzY4aDEuMjQ1NHYtMS45MzY4aDEuOTM2OHYtMS4yNDU0aC0xLjkzNjh2LTEuOTM2OHoiIHN0cm9rZS13aWR0aD0iLjUyOTE3IiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogIDxyZWN0IGlkPSJyZWN0MS0xLTMtMyIgdHJhbnNmb3JtPSJyb3RhdGUoOTApIiB4PSIyNC4zNTMiIHk9Ii00NC43MyIgd2lkdGg9Ii40OTUxNSIgaGVpZ2h0PSIzLjEyOTkiIHN0cm9rZS13aWR0aD0iLjI2MDkyIiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogPC9nPgo8L3N2Zz4K");
                border-style: solid;

                background-color: #14e7f20a;


                &:hover {
                    /* --color-1 : #0ea86b;
                    --color-2 : #008188; */
                    background-color: #14e7f227;
                    /* border-image-width: calc(.5rem * .75); */
                    border-image-outset: calc(.25rem * 1.5);


                }
            }

        }

    }

    &__preview {
        @apply flex flex-col justify-center items-center gap-6;
        padding: 4.75rem 0 4rem 0;
        position: relative;
        overflow: visible;

        &__content {
            display: grid;
            position: relative;
            grid-template:
                "logoNpreview content" 1fr
                "tagsNlinks content" 1fr / 1fr 1fr;
            width: 52.5625rem;
            max-width: 100vw;
            height: 39.9375rem;
            background-color: #0E111E;
            padding: 0 5.125rem;


            & *:not(.hero__preview__progress-container, .hero__preview__progress-bar) {
                transition: all 1s;
                filter: blur(0);
            }
            &.switch > *:not(.hero__preview__progress-container, .hero__preview__progress-bar) {
                filter: blur(16px);
                opacity: 0;
            }

            @media (max-width: 600px) {
                height: auto;
                grid-template:
                    "logoNpreview" 340px
                    "content" 1fr
                    "tagsNlinks" auto / auto 1fr;
            }

            @media (max-width: 800px) {
                padding: 0 1rem;
            }



            [name="logoNpreview"] {
                grid-area: logoNpreview;
                position: relative;
            }



            & .logo {

                &,
                &__blur {
                    height: 340px;
                    width: 90%;
                    margin-top: -4.75rem;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transition: all .35s;
                    background-image: var(--src);
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;

                    z-index: 2;
                }

                &__blur {
                    clip-path: polygon(-100% 4.75rem, 200% 4.75rem, 200% 200%, -200% 200%);
                    filter: blur(50px);
                    opacity: .5;
                    z-index: 1;
                }

            }

            &.switch .logo {
                top: -50px;
                opacity: .0;
            }

            & .preview {
                position: absolute;
                bottom: 0;
                right: 0;
                z-index: 3;
                --padding: .35rem;
                padding: var(--padding);
                --url: url('data:image/svg+xml;utf8,<svg width="12.014" height="12.014" viewBox="0 0 3.179 3.179" xmlns="http://www.w3.org/2000/svg"><path d="M.905 0l-.7.7L0 .905v2.274h2.274l.205-.205.495-.496.205-.204V0zm.29.7h1.283v1.284l-.494.494H.7V1.194z" fill="currentColor"/></svg>');

                @media (max-width: 600px) {
                    right: 15%;
                }

                &::after {
                    content: '';
                    position: absolute;
                    bottom: var(--padding);
                    right: var(--padding);
                    width: calc(100% - var(--padding)*2);
                    height: calc(100% - var(--padding)*2);

                    transform: rotateY(180deg);

                    border-image-slice: 5 5 5 5;
                    border-image-width: var(--padding);
                    border-image-outset: calc(var(--padding) / 2);
                    border-image-repeat: stretch stretch;
                    border-image-source: var(--url);
                    border-style: solid;
                }

            }
        }

        & [name="content"] {

            grid-area: content;

            max-width: 14.125rem;
            width: 100%;
            margin: 0 auto;

            @media (max-width: 600px) {
                max-width: 100%;
            }

            hgroup {
                position: relative;
            }

            h3 {
                @apply font-semibold text-2xl text-white mt-12;

                @media (max-width: 600px) {
                    @apply mt-0;
                }

                &+p {
                    @apply text-white text-sm leading-6 mt-6;
                }
            }

            hr {
                width: 100%;
                color: transparent;
                margin-top: 2.25rem;
                --color-end: #b13be8;
                --color-start: #003d69;
                border-image: linear-gradient(90deg, var(--color-start) 0%, var(--color-end) 100%);
                border-image-slice: 1;
            }



            h4 {
                @apply font-bold text-white text-sm leading-6 mt-6;

                &~button {
                    @apply -mt-8 float-right;
                }

                &~p {
                    @apply text-sm leading-6 line-clamp-[11];
                    color: #D9D8FF;
                }

                @media (max-width: 600px) {
                    &~button {
                        @apply mt-2
                    }

                    &~p {
                        @apply line-clamp-[4];
                    }
                }

            }
        }

        & [name="tagsNlinks"] {
            grid-area: tagsNlinks;

            h4 {
                @apply font-bold text-white text-sm leading-6 mb-3;
            }

            .tags,
            .links {
                @apply flex flex-row justify-start items-center gap-3
            }

            .tags {
                margin: 3.2rem 0 3rem 0;
            }

            @media (max-width: 600px) {
                @apply mb-6;
                .tags {
                    margin: 1rem 0;
                }
            }


        }

        &__progress-container {
                @apply w-full h-[1px] bg-gray-800 overflow-hidden;
                position: absolute;
                bottom: 0;
                left:0;
                
                .hero__preview__progress-bar {
                    @apply h-full bg-blue-500;
                    transition: width 30ms linear;
                }
            }

        &__pages {
            @apply flex flex-row justify-center items-center;
            position: relative;
            width: 100%;
            

            
            label {
                @apply cursor-pointer grid place-items-center py-2 px-1;
            }

            input {
                cursor: pointer;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-color: #162540;
                width: .5rem;
                height: .5rem;
                border-radius: 50%;

                &:checked {
                    background-color: #0349C8;
                    transform: scale(1.25);
                }
            }
            
            @apply flex flex-row justify-center items-center gap-1;
        }

        .grid-background {
            position: absolute;
            bottom: 0;
            left: -250px;
            z-index: -1;
            width: 1641px;
            height: 465px;
            max-width: none;
        }
    }
}
</style>