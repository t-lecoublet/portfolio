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
            <article class="hero__preview__content">
                <section name="logoNpreview" style="--src:url('/main/logoSvgToPlan.svg');">
                    <div class="logo"></div>
                    <div class="logo__blur"></div>
                    <div class="preview preview__border preview-border-[#37D69E]">
                        <img src="/main/previewSvgToPlan.png" alt="">
                    </div>
                </section>
                <section name="content">
                    <hgroup>
                        <h3>SVG 3D Viewer</h3>
                        <p>
                            A tool that allows you to visualize SVG files in 3D within a web environment.
                        </p>
                    </hgroup>

                    <hr />

                    <hgroup>
                        <h4>
                            Why ?
                        </h4>


                        <p>
                            This project aims to enable the creation of 3D plans without requiring mastery of modeling
                            tools. Simple modifications to an SVG file are sufficient. This project was created as a
                            foundational structure for another project, which manages classrooms linked to a database,
                            allowing for the <br> management <br> and interaction with the 3D plan.
                        </p>

                        <button class="btn">
                            Read More
                            <Icon name="ArrowRight" />
                        </button>

                    </hgroup>
                </section>
                <aside name="tagsNlinks">
                    <div class="tags">
                        <span class="tag">#Project</span>
                        <span class="tag">
                            <Icon name="Map" />
                            at LIMOS
                        </span>
                        <span class="tag">
                            <Icon name="Calendar" />
                            in 2025
                        </span>
                    </div>
                    <h4>
                        Related Links:
                    </h4>
                    <div class="links">
                        <a class="link-icon" href="/">
                            <Icon name="Gitlab" />
                        </a>
                        <!-- LimosBold, Cnrs, VueWhite, Threejs -->
                        <a class="link-icon" href="/">
                            <Icon name="LimosBold" />
                        </a>
                        <a class="link-icon" href="/">
                            <Icon name="Cnrs" />
                        </a>
                        <a class="link-icon" href="/">
                            <Icon name="VueWhite" />
                        </a>
                        <a class="link-icon" href="/">
                            <Icon name="Threejs" />
                        </a>

                    </div>
                </aside>
            </article>
            <div class="hero__preview__pages">
                <label><input type="radio" name="preview-radio" /></label>
                <label><input type="radio" name="preview-radio" /></label>
                <label><input type="radio" name="preview-radio" /></label>
                <label><input type="radio" name="preview-radio" checked /></label>
                <label><input type="radio" name="preview-radio" /></label>
                <label><input type="radio" name="preview-radio" /></label>
                <label><input type="radio" name="preview-radio" /></label>
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
        @apply flex flex-col justify-center items-center gap-6;
        padding: 4.75rem 0 4rem 0;
        position: relative;
        overflow: visible;

        &__content {
            display: grid;
            grid-template:
                "logoNpreview content" 1fr
                "tagsNlinks content" 1fr / 1fr 1fr;
            width: 52.5625rem;
            height: 39.9375rem;
            background-color: #0E111E;
            padding: 0 5.125rem;

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

            & .preview {
                position: absolute;
                bottom: 0;
                right: 0;
                z-index: 3;
                --padding: .35rem;
                padding: var(--padding);
                --url: url('data:image/svg+xml;utf8,<svg width="12.014" height="12.014" viewBox="0 0 3.179 3.179" xmlns="http://www.w3.org/2000/svg"><path d="M.905 0l-.7.7L0 .905v2.274h2.274l.205-.205.495-.496.205-.204V0zm.29.7h1.283v1.284l-.494.494H.7V1.194z" fill="currentColor"/></svg>');

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

            hgroup {
                position: relative;
            }

            h3 {
                @apply font-semibold text-2xl text-white mt-12;

                &+p {
                    @apply text-white text-sm leading-6 mt-6;
                }
            }

            hr {
                width: 100%;
                color: transparent;
                margin-top: 2.25rem;
                border-image: linear-gradient(90deg, #304467 0%, #3BE8A3 100%);
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


        }


        &__pages { 
            @apply flex flex-row justify-center items-center;

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