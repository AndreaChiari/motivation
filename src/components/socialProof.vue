<script>
export default {
    name: 'socialProof',
    props: {
        title: String,
        value: String
    }
}
</script>
<template>
    <div class="col-3 d-flex flex-column align-items-center">
        <h2>{{ value }}</h2>
        <h5>{{ title }}</h5>
    </div>
</template>


<style scoped lang="scss">
@use '../assets/colors.scss' as *;


h2 {
    color: $color-green;
}
</style>


