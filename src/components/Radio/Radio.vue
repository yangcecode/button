<template>
    <input 
        type="radio"
        :checked="currentValue"
        @change="change"
        :disabled="disabled"
    >
</template>

<script>
import Emitter from '../../mixins/emitter.js';
import { findComponentUpward } from '../../utils/assist';
export default {
    name: 'iRadio',
    props: {
        value: {
            type: [String ,Number ,Boolean],
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            currentValue: this.value
        }
    },
    methods: {
        change (event) {
            if (this.disabled) {
                return false;
            };

            const value = event.target.checked;
            this.currentValue = value;
            this.$emit('input', value);
            this.$emit('on-change', value);
            this.dispatch('iFormItem', 'on-form-change', value);

        }
    }

}
</script>

<style>

</style>