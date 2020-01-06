<template>
    <div class="b">
        {{name}}
    </div>
</template>

<script>
export default {
    name: 'b',
    inject: ['name'],
    mounted () {
        // console.log(this.name);
    }
}
</script>

<style>

</style>