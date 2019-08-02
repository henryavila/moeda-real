<template>
    <span class="whitespace-no-wrap" >{{ field.value | toCurrency }}</span>
    <!-- <money v-model="field.value"></money> -->
</template>

<script>
export default {
    props: ['resourceName', 'field'],
    computed() {
        
    }
}
</script>
