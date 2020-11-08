<template>
    <div class="child">
        {{ name }}
        <slot></slot>
        <slot name='header'></slot>
    </div>
</template>
<script>
export default {
    props:{
        name:String,
    }
}
</script>