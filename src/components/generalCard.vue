<script>
export default {
    name: 'generalCard',
    props: {
        image: String,
        cost: String,
        title: String,
        sheetPic: String,
        lessons: String,
        userPic: String,
        students: String,
        bookImg: String,
        bookTitle: String,
        bookPrice: String,
        imageArticle: String,
        articleTitle: String,
        infoArticle: String,
        imgCalendar: String,
        date: String
    }

}
</script>
<template>

    <!-- card tipo 1  -->

    <div v-if="cost">
        <figure>
            <img :src="image" alt="">
        </figure>
        <div class="firstTypeCard">
            <h4 class='mb-3'>{{ cost }}</h4>
            <p class="description">{{ title }}</p>
            <div class="d-flex ">
                <div class="d-flex align-items-center">
                    <img :src=sheetPic alt="" class="img-fa me-1">
                    <p class="text-secondary">{{ lessons }}</p>
                </div>
                <div class="d-flex align-items-center">
                    <img :src=userPic class="img-fa me-1" alt="">
                    <p class="text-secondary">{{ students }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- card tipo 2 -->
    <div v-if="date">
        <figure>
            <img :src="imageArticle" alt="" class="second-pic">
        </figure>
        <div class="secondTypeCard">
            <div class="d-flex">
                <img :src="imgCalendar" alt="" class="me-3 pic-info-second">
                <p class="text-secondary">{{ date }}</p>
            </div>
            <h4 class='mb-3'>{{ articleTitle }}</h4>
            <p class="text-secondary"> {{ infoArticle }}</p>
        </div>
    </div>


</template>
<style scoped lang="scss">
@use '../assets/colors.scss' as *;


// style CSS prima card
.img-fa {
    height: auto;
    width: 10px;
}

.description {

    font-weight: 700;
    margin-bottom: 20px;
}

figure {
    img {
        width: 100%;
        margin-top: 20px;
    }
}

.firstTypeCard {
    padding: 0px 35px 0px;

    h4 {
        color: $color-green;
    }

    p {
        margin-bottom: 0;
        margin-right: 15px;
        color: $color-violet;
    }
}

// style CSS seconda card

.second-pic {
    border-radius: 7px;

}

.second-pic-container {
    height: 100px;
    width: 100px;
}

.pic-info-second {
    width: auto;
    height: 15px;
}
</style>