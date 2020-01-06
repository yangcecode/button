<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Emitter from '../mixins/emitter';
export default {
    name: 'iFormItem',
    mixins: [Emitter],
    inject: ['form'],
    methods: {
        setRules () {
            this.$on('on-form-blur', this.onFieldBlur);
            this.$on('on-form-change', this.onFieldChange);
        },
    },
    mounted () {
        if (this.prop) {
            this.dispatch('iForm', 'on-form-item-add', this);
            this.setRules();
        }
    },
    beforeDestroy () {
        this.dispatch('iForm', 'on-form-item-remove', this);
    },
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String
        }
    }
}
</script>