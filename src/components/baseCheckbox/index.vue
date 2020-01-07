<template>
    <input 
        type="checkbox"
        :checked = "checked"
        @change="change"
    >
</template>

<script>
export default {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    mounted () {
        console.log(this.checked);
    },
    methods:{
        change ($event) {
            console.log('aaaaaa');
            this.$emit('change', $event.target.checked)
        }
    }
}
</script>

<style>

</style>