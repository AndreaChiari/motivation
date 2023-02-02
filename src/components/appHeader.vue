<script>
import generalButton from './generalButton.vue'
import { store } from '../assets/data/store'
export default {
    name: 'appHeader',
    components: { generalButton },
    data() {
        return {
            store

        }
    }

}
</script>
<template>

    <!-- navbar  -->

    <div class="background-header">
        <header>
            <div class="header-navbar d-flex justify-content-between align-items-center">
                <img src="../assets/img/dark-logo.png" alt="dark-logo.png" class="img-fluid">
                <ul class="d-flex">
                    <li v-for="list in this.store.headerNavList" :key="list.name" class="me-4">{{ list.name }}
                        <i class="fa-solid fa-chevron-down"></i>

                        <!--
                            li:hover ul {
                                display: block;
                            }
                            
                        -->

                        <!--
                    
                            list.subnav !=== null
                            <ul v-show="list.showSubnav">
                                v-for="submenu in list.subnav"
                            </ul>

                        -->
                    </li>
                </ul>
                <div class="d-flex header-icons">
                    <i class="fa-brands fa-twitter me-4"></i>
                    <i class="fa-brands fa-facebook me-4"></i>
                    <i class="fa-brands fa-instagram me-4"></i>
                    <i class="fa-brands fa-linkedin me-4"></i>
                </div>
            </div>

            <!-- header jumbotron -->

            <div class="header-jumbotron pt-5 d-flex">
                <div class="jumbo-info">
                    <p> I'M WINGMAN</p>
                    <h1 class="mb-3">Peace On Earth A Wonderful Wish But No Way</h1>
                    <p class="mb-4">Success isn't overnight.It's when everyday you get a little bettter than the day
                        before. It all
                        adds up.</p>
                    <generalButton>
                        Get started from free
                        <i class="fa-solid fa-arrow-right ms-1"></i>
                    </generalButton>

                </div>
                <div class="jumbo-pic">
                    <img src="../assets/img/home-movation-hero-image.png" alt="image.png">
                </div>

            </div>
        </header>
    </div>











</template>
<style scoped lang="scss">
@use '../assets/mixin.scss' as *;

// generals

ul {
    list-style: none;
}

.background-header {

    background-image: url(../assets/img/background-pattern-wavify.png);
}

header {
    @include standard-container;
    min-height: 500px;

    .header-navbar {
        min-height: 100px;
    }

    .header-jumbotron {
        min-height: 500px;

        .jumbo-info {
            flex-basis: 50%;

            h1 {
                padding-right: 250px;
            }

            p {
                padding-right: 183px;
            }
        }

        .jumbo-pic {
            flex-basis: 50%;
            background-image: url(../assets/img/home-movation-shape-face-300x267.png);
            background-repeat: no-repeat;
            background-position: 36% 137%;
            background-size: 70%;


            img {
                height: auto;
                width: 65%;
            }

        }
    }
}
</style>
