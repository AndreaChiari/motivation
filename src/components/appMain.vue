<script>
import socialProof from './socialProof.vue'
import { store } from '../assets/data/store'
export default {
    name: 'appMain',
    components: { socialProof },
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <main>

        <!-- social proof section -->

        <section class="row mx-auto mt-5 social-proof">
            <socialProof v-for="sp in this.store.proofList" :key="sp.value" :title="sp.title" :value="sp.value">
            </socialProof>
        </section>
        <section class="row ms-auto about">
            <div class="col-6 title-section">
                <h5>ABOUT ME</h5>
                <p>How to be an Alpha Male:"The 15 Habits of True Alphas"</p>
            </div>
            <div class="col-6 info-section">
                <h3>Want to learn how to be an alpha male? How to be more masculine?
                    How to be the man you've always wanted to be?
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laudantium hic incidunt tempore.
                    Distinctio non delectus quas accusamus! Optio quam cumque repellendus. Quas dolorem magnam facere
                    dignissimos, cum quis quos?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque veniam nostrum odio dolore ratione
                    dolorum placeat vitae ea vel? Magnam laudantium esse mollitia at doloribus cum ad, error veniam aut!
                </p>
            </div>
        </section>
        <section class='about-jumbotron row'>
            <div class="col-8 jumbo-video">
                <img src="../assets/img/icon-youtube-play.png" alt="icon-youtube-play.png">

            </div>
            <div class="col-4 jumbo-quote">

            </div>

        </section>
    </main>
</template>






<style scoped lang="scss">
@use '../assets/mixin.scss' as *;
@use '../assets/colors.scss' as *;

// generals


main {
    @include standard-container;
    min-height: 1200px;

    // social proof section
    .social-proof {
        background-image: url(../assets/img/background-pattern-grid-line-06.png);
    }

    // about section
    .about {
        margin-top: 150px;

        .title-section {


            h5 {
                color: $color-green;
                font-size: 15px;
            }

            p {
                font-size: 45px;
                padding-right: 50px;
            }
        }

        .info-section {
            h3 {
                font-size: 20px;
                margin-bottom: 30px;
            }

            p {
                color: $color-gray;
            }
        }
    }

    .about-jumbotron {
        margin-top: 50px;
        min-height: 500px;

        .jumbo-video {
            background-image: url("../assets/img/home-movation-video-poster-670x450.jpg");
            background-repeat: no-repeat;
            border-radius: 5px;
            position: relative;

            img {
                position: absolute;
                top: 40%;
                left: 34%;
            }

        }

        .jumbo-quote {}


    }
}
</style>