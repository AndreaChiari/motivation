<script>
export default {
    name: 'generalButton'
}
</script>
<template>
    <button>
        <slot></slot>
    </button>


</template>
<style scoped lang="scss">
@use '../assets/colors.scss' as *;

button {
    padding: 8px 30px;
    background-color: $color-green;
    border: none;
    border-radius: 5px;
    color: white;
}

button:hover {
    background-color: rgb(63, 58, 100)
}
</style>