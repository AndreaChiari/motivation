<script>
export default {
    name: 'footerList',
    props: {
        title: String,
        navFirst: String,
        navSecond: String,
        navThird: String,
        navFourth: String,

    }
}
</script>
<template>
    <div class="list-container d-flex flex-column justify-content-center">
        <h3>
            {{ title }}
        </h3>
        <ul>
            <li>{{ navFirst }}</li>
            <li>{{ navSecond }}</li>
            <li>{{ navThird }}</li>
            <li>{{ navFourth }}</li>
        </ul>
    </div>

</template>

<style scoped lang="scss">
@use '../assets/colors.scss' as *;
@use '../assets/mixin.scss' as *;

.list-container {
    padding-top: 60px;
}

h3 {
    color: white;
    cursor: pointer;
}

ul {
    list-style-type: none;
    padding: 0;

    li {
        color: $color-gray;
        line-height: 30px;
        cursor: pointer;
    }
}
</style>