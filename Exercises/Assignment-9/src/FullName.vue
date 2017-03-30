<template>
<div>
    <div class="form-group">
        <label for="">First Name</label>
        <input type="text" class="form-control" :value="firstName" @input="nameChanged(true, $event)">
    </div>
    <div class="form-group">
        <label for="">Last Name</label>
        <input type="text" class="form-control" :value="lastName" @input="nameChanged(false, $event)">
    </div>
</div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        nameChanged(isFirst, event) {
            if (isFirst) {
                this.value = event.target.value + ' ' + this.lastName
            } else {
                this.value = this.firstName + ' ' + event.target.value
            }

            this.$emit('input', this.value)
        }
    },
    computed: {
        firstName() {
            return this.value.split(" ")[0]
        },
        lastName() {
            return this.value.split(" ")[1]
        }
    }
}
</script>

<style>

</style>
