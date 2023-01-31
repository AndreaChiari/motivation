<script>
import socialProof from './socialProof.vue'
import generalCard from './generalCard.vue'
import { store } from '../assets/data/store'
export default {
    name: 'appMain',
    components: { socialProof, generalCard },
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

        <!-- about section -->

        <section class='about-jumbotron row'>
            <div class="col-7 jumbo-video">
                <img src="../assets/img/icon-youtube-play.png" alt="icon-youtube-play.png">
            </div>
            <div class="col-5 jumbo-quote ps-5 pt-5">
                <p>"Every morning you have two choices: continue to sleep with your dreams, or wake up
                    and chase them."</p>
                <img src="../assets/img/home-movation-shape-01.png" alt="home-movation-shape-01.png" class="mb-3">
                <h3 class="mb-4">Kaixa Stark</h3>
                <h5>WINGMAN</h5>
            </div>
        </section>

        <!-- Shop section -->

        <section class="shop-courses">
            <h6 class="text-center">BEGIN YOUR JOURNEY AT MAXCOACH</h6>
            <h1 class="text-center mb-3">Latest <span>Online Courses</span></h1>
            <div class="row">
                <div class="col-4" v-for="course in this.store.courses" :key="course.lessons">
                    <generalCard :image="course.image" :cost="course.cost" :title="course.title"
                        :sheetPic="course.sheetPic" :lessons="course.lessons" :userPic="course.userPic"
                        :students="course.students"></generalCard>
                </div>
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
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 5px;
            position: relative;

            img {
                position: absolute;
                top: 42%;
                left: 41%;
                cursor: pointer;
            }

        }

        .jumbo-quote {
            p {
                font-size: 30px;
                margin-bottom: 50px;
            }

            h5 {
                color: $color-gray;
            }
        }


    }

    .shop-courses {
        margin-top: 150px;
        min-height: 800px;

        h6 {
            color: $color-gray;
        }

        h1 {
            span {
                color: $color-green;
            }
        }
    }
}
</style>