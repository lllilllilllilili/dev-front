<template>
    <div>
        <b-container class="bv-example-row">
            <b-row >
                <b-col class="mr-2">1 of 3</b-col>
                <b-col class="mr-2">1 of 3</b-col>
                <b-col class="mr-2">2 of 3</b-col>
                <b-col class="mr-2">3 of 3</b-col>
            </b-row>

        </b-container>
    </div>
</template>

<script>
    export default {}
</script>

<style lang ="scss" scoped>
.col {
    border: solid;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
}

</style>