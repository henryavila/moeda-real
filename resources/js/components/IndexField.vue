<template>
    <!--<span>{{ field.value }}</span>-->
    <money v-model="field.value"></money>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
}
</script>
