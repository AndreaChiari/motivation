<script>
import socialProof from './socialProof.vue'
export default {
    name: 'appMain',
    components: { socialProof },
    data() {
        return {
            proofList: [
                {
                    value: '1926',
                    title: 'FINISHED LESSONS'
                },
                {
                    value: '100%',
                    title: 'SATISFACTION RATE'
                },
                {
                    value: '3092+',
                    title: 'ENROLLED LEARNERS'
                },
                {
                    value: '200',
                    title: 'ONLINE INSTRUCTORS'
                },

            ]

        }
    }
}
</script>

<template>
    <main>
        <section class="row mx-auto mt-5 social-proof">
            <socialProof v-for="sp in proofList" :key="sp.value" :title="sp.title" :value="sp.value"></socialProof>

        </section>
    </main>
</template>

<style scoped lang="scss">
@use '../assets/mixin.scss' as *;

main {
    @include standard-container;
    min-height: 1200px;

    .social-proof {
        background-image: url(../assets/img/background-pattern-grid-line-06.png);
    }

}
</style>