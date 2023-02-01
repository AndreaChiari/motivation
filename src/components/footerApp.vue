<script>
import footerList from '../components/footerList.vue'
import { store } from '../assets/data/store'
export default {
    name: 'footerApp',
    components: { footerList },
    data() {
        return {
            store

        }
    }
}
</script>
<template>
    <footer>
        <div class="standard-container row">
            <div class="col-6 address-list">
                <h3>
                    Address
                </h3>
                <ul>
                    <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
                    <li>+1(305)547-9909(9am - 5pm EST,Monday - Friday)</li>
                    <li>support@maxcoach.com</li>
                </ul>
            </div>
            <div class="col-2" v-for="item in this.store.footerList">
                <footerList :title="item.title" :navFirst="item.navFirst" :navSecond="item.navSecond"
                    :navThird="item.navThird" :navFourth="item.navFourth"></footerList>
            </div>
            <div class="brand-icons-footer">
                <i class="fa-brands fa-facebook me-4"></i>
                <i class="fa-brands fa-twitter me-4"></i>
                <i class="fa-brands fa-instagram me-4"></i>
                <i class="fa-brands fa-linkedin me-4"></i>
            </div>
            <p class="text-center mt-5 copyright-text"> &copy; Maxcoach. All Rights Reserved</p>
        </div>
    </footer>
</template>


<style scoped lang="scss">
@use '../assets/colors.scss' as *;
@use '../assets/mixin.scss' as *;

// generals

.fa-brands {
    font-size: 30px;
    color: $color-gray;
    cursor: pointer;
}

.address-list {
    padding-top: 60px;

    h3 {
        color: white;
        cursor: pointer;
    }
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

footer {
    margin-top: 150px;
    min-height: 400px;
    background-color: rgb(23, 22, 33);

    .standard-container {
        @include standard-container;
    }

    .copyright-text {
        color: $color-gray;
    }
}
</style>
