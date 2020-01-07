<template>
    <input 
        type="text"
        :value="value"
         @input="handleInput"
        />
</template>

<script>
export default {
    name: 'inputdemo',
    props: {
        value: {
            type: String,
            default: ''
        },
    },
    methods: {
        handleInput (event) {
            this.$emit('input', event.target.value);
        },
    }
}
</script>

<style>

</style>