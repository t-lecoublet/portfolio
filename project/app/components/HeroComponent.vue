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
            <div class="hero__preview__content">
                <div name="logoNpreview">
                    <img class="logo" src="/main/logoSvgToPlan.svg" alt="logo" />
                </div>
                <div name="content">content</div>
                <div name="tagsNlinks">tagsNlinks</div>
            </div>
            <div class="hero__preview__pages">

            </div>
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
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;

    }

    &__content {
        @apply flex flex-col justify-center;
        color: #fff;

        h2 {
            font-weight: 500;
            font-size: 3rem;
            line-height: 3rem;
            position: relative;

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
            }
        }

        h1 {
            font-size: 4rem;
            font-weight: 900;
            line-height: 3.75rem;

            &~span {
                font-weight: 700;
                font-size: 1.25rem;
                line-height: 1.25rem;
                font-style: italic;
            }

            &~p {
                font-weight: 400;
                font-size: 1.25rem;
                line-height: 1.25rem;
                color: #DBDBDB;
                font-family: 'Open Sans', sans-serif;

                margin-top: 2.25rem;
            }

            &~aside {
                font-size: 1.125rem;
                line-height: 2rem;
                font-style: oblique;

                margin-top: 3rem;

            }

            &~button {
                @apply text-black font-medium rounded-full w-max;
                margin-top: 4.75rem;
                font-size: .9375rem;
                background-color: #FF9257;
                padding: .5rem .625rem;
            }

        }

    }

    &__preview {
        @apply flex justify-center items-center;
        

        &__content {
            display: grid;
            grid-template: 
                "logoNpreview content" 1fr
                "tagsNlinks content" 1fr / 1fr 1fr;
            margin: 4.75rem 0;
            width: 52.5625rem;
            height: 39.9375rem;
            background-color: #0E111E;
            padding: 0 5.125rem;

            [name="logoNpreview"] {
                grid-area: logoNpreview;
                background-color: #FF9257;
            }

            [name="content"] {
                grid-area: content;
                background-color: #1A1D2A;
            }

            [name="tagsNlinks"] {
                grid-area: tagsNlinks;
                background-color: #2b45b6;
            }

            & .logo {
                max-height: 340px;
                margin-top: -4.75rem;
            }
        }
    }
}
</style>