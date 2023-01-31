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
        students: String
    }

}
</script>
<template>
    <figure>
        <img :src="image" alt="">
    </figure>
    <h4 class='mb-3'>{{ cost }}</h4>
    <p class="description">{{ title }}</p>
    <div class="d-flex ">
        <div class="d-flex align-items-center">
            <img :src=sheetPic alt="sheet-plastic-solid.svg" class="img-fa me-1">
            <p class="text-secondary">{{ lessons }}</p>
        </div>
        <div class="d-flex align-items-center">
            <img :src=userPic class="img-fa me-1" alt="">
            <p class="text-secondary">{{ students }}</p>
        </div>
    </div>




</template>
<style scoped lang="scss">
@use '../assets/colors.scss' as *;

figure {
    img {
        width: 100%;
        margin-top: 20px;
    }
}

p {
    margin-bottom: 0;
    margin-right: 15px;
}

.img-fa {
    height: auto;
    width: 10px;
}


.description {
    font-weight: 700;
    margin-bottom: 20px;
}

h4 {
    color: $color-green;
}
</style>