<template>
    <header>
        <div class="nav">
            <div class="nav__logo">

                <svg class="w-8 h-8" fill="none" version="1.1" viewBox="0 0 37 38"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="m6.9219 0.25195c-0.33933 0.0094216-0.59961 0.076172-0.59961 0.076172a0.75008 0.75008 0 0 0-0.47656 0.42383c-0.93943 2.192-0.97648 4.6351-0.24414 6.8945-1.6849 1.9233-2.6764 4.361-2.6641 6.9277v0.001953 0.001953c8.868e-4 5.0048 1.5684 8.2385 3.9258 10.221 2.0606 1.7327 4.642 2.4251 7.1777 2.8301-0.8243 1.2397-1.3538 2.6546-1.248 4.1621v0.95117c-2.3476 0.66659-4.4345 0.60086-6.2402-0.1543-1.9375-0.81025-3.5988-2.4325-4.8828-5a0.75 0.75 0 0 0-1.0059-0.33594 0.75 0.75 0 0 0-0.33398 1.0059c1.404 2.8075 3.3268 4.7456 5.6445 5.7148 2.0469 0.85598 4.3653 0.94257 6.8184 0.32227v2.5859a0.75 0.75 0 0 0 0.75 0.75 0.75 0.75 0 0 0 0.75-0.75v-5.1426a0.75008 0.75008 0 0 0-0.001953-0.050781c-0.10504-1.4979 0.4306-2.9696 1.4746-4.0488a0.75008 0.75008 0 0 0-0.44727-1.2656c-2.7523-0.34196-5.4833-1.0367-7.4883-2.7227-2.005-1.6859-3.3926-4.3734-3.3926-9.0762a0.75008 0.75008 0 0 0 0-0.001953 0.75008 0.75008 0 0 0 0-0.001954c-0.012092-2.3263 0.87629-4.5653 2.4805-6.25a0.75008 0.75008 0 0 0 0.16016-0.7793c-0.69782-1.8696-0.62966-3.9074 0.054688-5.7715 0.21554 0.0027095 0.47697 0.011285 0.91016 0.10742 1.0281 0.22816 2.6959 0.84547 5.082 2.4453a0.75008 0.75008 0 0 0 0.61328 0.10156c3.9782-1.0764 8.1702-1.0764 12.148 0a0.75008 0.75008 0 0 0 0.61328-0.10156c2.3861-1.5993 4.054-2.2173 5.082-2.4453 0.4341-0.096291 0.69655-0.10287 0.91211-0.10547 0.68363 1.8636 0.75032 3.9006 0.052734 5.7695a0.75008 0.75008 0 0 0 0.16016 0.7793c1.5919 1.6724 2.48 3.8922 2.4805 6.2012 0 4.7399-1.3897 7.4465-3.3926 9.1309-2.0029 1.6844-4.7298 2.3597-7.4785 2.666a0.75008 0.75008 0 0 0-0.45508 1.2676c1.057 1.0904 1.5937 2.5818 1.4746 4.0957a0.75008 0.75008 0 0 0-0.003907 0.058593v5.1406a0.75 0.75 0 0 0 0.75 0.75 0.75 0.75 0 0 0 0.75-0.75v-5.1406c0.10192-1.5028-0.42167-2.9177-1.2441-4.1562 2.5347-0.37787 5.1133-1.052 7.1719-2.7832 2.3597-1.9844 3.9277-5.2372 3.9277-10.279-5.62e-4 -2.5484-0.99123-4.9654-2.6641-6.875 0.73176-2.259 0.69506-4.7012-0.24414-6.8926a0.75008 0.75008 0 0 0-0.47656-0.42383s-0.26029-0.068684-0.59961-0.078125c-0.33932-0.009441-0.81936 0.021306-1.4453 0.16016-1.2025 0.26674-2.9777 0.97714-5.334 2.5176-4.0135-1.0233-8.2091-1.0233-12.223 0-2.3563-1.5409-4.1315-2.2507-5.334-2.5176-0.62596-0.13892-1.106-0.16958-1.4453-0.16016z"
                        fill="#fff" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
            <div class="nav__menu">
                <ul>
                    <li>
                        <nuxt-link to="/">PROJECTS</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/#about">CAREER</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/#about">ARTICLES</nuxt-link>
                    </li>
                    <li class="blue">
                        <nuxt-link to="/#contact">CONTACT</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>

</template>

<style>
header {
    @apply sticky top-0 left-0 w-full;
    z-index: 1000;
}

.nav {
    @apply flex justify-between items-center w-full mx-auto;
    max-width: var(--max-size);
    width: 100%;
    height: 75px;

    &__logo {
        @apply flex items-center;
    }

    &__menu {
        @apply flex items-center sm:w-full justify-end overflow-hidden;

        ul {
            @apply flex space-x-4 gap-16;
            /* gap:76px; */

            li {
                @apply text-base font-medium text-white;
                line-height: 19px;
                
                &.blue {
                    color: #21C7D2;
                }
            }

            @media (max-width: 768px) {
                @apply hidden;
            }
        }
    }
}
</style>