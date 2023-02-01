<script>
import socialProof from './socialProof.vue'
import generalCard from './generalCard.vue'
import generalButton from './generalButton.vue'
import { store } from '../assets/data/store'
export default {
    name: 'appMain',
    components: { socialProof, generalCard, generalButton },
    data() {
        return {
            store
        }
    }


}
</script>

<template>

    <main>
        <div class="core-container">
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
                        Distinctio non delectus quas accusamus! Optio quam cumque repellendus. Quas dolorem magnam
                        facere
                        dignissimos, cum quis quos?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque veniam nostrum odio dolore
                        ratione
                        dolorum placeat vitae ea vel? Magnam laudantium esse mollitia at doloribus cum ad, error veniam
                        aut!
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

            <!-- Shop courses section -->

            <section class="shop-courses">
                <h6 class="text-center">BEGIN YOUR JOURNEY AT MAXCOACH</h6>
                <h1 class="text-center mb-3">Latest <span>Online Courses</span></h1>
                <div class="row">
                    <div class="col-4 card-course" v-for="course in this.store.courses" :key="course.lessons">
                        <generalCard :image="course.image" :cost="course.cost" :title="course.title"
                            :sheetPic="course.sheetPic" :lessons="course.lessons" :userPic="course.userPic"
                            :students="course.students"></generalCard>
                    </div>
                </div>
                <div class="d-flex justify-content-center mb-5 mt-5">
                    <generalButton>
                        View all courses
                        <i class="fa-solid fa-arrow-right ms-1"></i>
                    </generalButton>
                </div>
            </section>

            <!-- shop book section -->
            <section class="shop-book row mb-5">
                <div class="col-6">
                    <p class="mb-3">BOOK STORE ONLINE</p>
                    <h1 class="first-title mb-3">Be Alpha With</h1>
                    <h1 class="mb-3">Wingman's Book</h1>
                    <ul class="mb-4">
                        <li class="me-5"><i class="fa-solid fa-check me-2"></i>Help you Understand yourself better</li>
                        <li class="me-5"><i class="fa-solid fa-check me-2"></i>Revealing mature tips</li>
                        <li class="me-5"><i class="fa-solid fa-check me-2"></i>Give the right advice</li>
                        <li class="me-5"><i class="fa-solid fa-check me-2"></i>Fascinating examples of alpha man</li>
                    </ul>
                    <generalButton class="mt-3">
                        Get Free Ebook
                    </generalButton>
                </div>

                <!-- pic book section -->

                <div class="col-6 d-flex">
                    <div class="d-flex justify-content-center align-items-center secondTypeCard">
                        <div>
                            <figure class="second-pic-container">
                                <img src="/src/assets/img/product-book-11-400x400.jpg" alt="" class="img-fluid">
                            </figure>
                            <div>
                                <p class="book-title text-center">Alpha man by Maxcoach</p>
                                <h4 class='mb-3 text-center book-price'>$29.00</h4>
                            </div>
                        </div>
                        <div>
                            <figure class="second-pic-container">
                                <img src="/src/assets/img/product-book-10-400x400.jpg" alt="" class="img-fluid">
                            </figure>
                            <div>
                                <p class="book-title text-center">Real man 4.0 by Maxcoach</p>
                                <h4 class='mb-3 text-center book-price'>$39.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- brands logo intermezzo-->

            <div class="logo-brands row">
                <div class="col-2" v-for="logo in this.store.logos">
                    <img :src="logo" :alt="logo" class="logos-img">
                </div>
            </div>
        </div>


        <!-- jumbotron main social proof -->

        <section class="main-jumbotron row">
            <div class="col-6 jumbo-info d-flex flex-column justify-content-center align-items-center">
                <h5>REAL STORIES</h5>
                <p class="text-center mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
                    recusandae
                    omnis, optio
                    voluptatibus accusamus facilis alias voluptatem officiis explicabo, vel do
                    lor molestiae natus ipsa odio necessitatibus sed! Nobis, saepe ipsam?</p>
                <img src="../assets/img/testimonial-avata-02.jpg" alt="testimonial-avata-02.jpg">
                <h4>Mina Hollace</h4>
                <p class="profession-info">/Freelancer</p>
            </div>
            <div class="col-6 jumbo-pic"></div>
        </section>
        <div class="secondary-main-container">

            <!-- articles section -->

            <section class="articles">
                <h5 class="mb-3">BLOG UPDATED</h5>
                <h1>Interesting <span>articles updated </span>daily</h1>
                <div class="row">
                    <div class="col-3" v-for="article in this.store.articles">
                        <generalCard :imageArticle="article.imageArticle" :articleTitle="article.articleTitle"
                            :infoArticle="article.infoArticle" :imgCalendar="article.imgCalendar" :date="article.date">
                        </generalCard>
                    </div>
                    <h6 class="text-center"> VIEW ALL POSTS</h6>
                </div>
            </section>


        </div>
    </main>

</template>
            



        











<style scoped lang="scss">
@use '../assets/mixin.scss' as *;
@use '../assets/colors.scss' as *;

// generals
ul {
    list-style: none;
    padding: 0;

    li {
        margin-bottom: 10px;
        color: $color-gray
    }
}

.core-container {
    @include standard-container;
    min-height: 1200px;
}

.fa-check {
    color: $color-green
}

main {

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

    // about jumbotron
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

    // shop courses section
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

    .card-course:hover {
        box-shadow: 0px 5px 5px gray;
        cursor: pointer
    }

    // shop book section
    .book-title {
        color: $color-violet;
        font-weight: 700;
    }

    .book-price {
        color: $color-green;
    }

    .shop-book {
        min-height: 400px;

        div {
            h1 {
                color: $color-green;
            }

            .first-title {
                color: $color-violet;
            }
        }
    }

    // logo brands intermezzo
    .logos-img {
        filter: grayscale(100%);
        opacity: 0.5;
    }

    .logo-brands {
        height: 200px;
        margin-top: 300px;
    }

    .secondary-main-container {
        @include standard-container
    }

    // jumbotron real stories
    .main-jumbotron {
        min-height: 500px;
        margin-bottom: 200px;

        .jumbo-info {
            background-image: url(../assets/img/background-pattern-wavify.png);
            background-color: rgb(243, 243, 250);
            padding: 160px;

            h5 {
                color: $color-green;
                margin-bottom: 30px;
            }

            p {
                font-weight: 500;
                padding: 10px;
            }

            .profession-info {
                color: $color-gray
            }

            img {
                border-radius: 50%;
                width: auto;
                height: 85px;
            }
        }

        .jumbo-pic {
            background-image: url("../assets/img/home-movation-testimonial-image-768x562.jpg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;


        }
    }

    //articles section
    .articles {
        h1 {
            span {
                color: $color-green
            }
        }

        .row {
            h6 {
                margin-top: 40px;
                color: $color-green;
                text-decoration: underline;
                text-underline-position: under;
                cursor: pointer;
            }
        }
    }

}
</style>