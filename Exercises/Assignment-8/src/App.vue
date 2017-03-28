<template>
<div class="container">
    <div class="row">
        <div class="col-xs-12">
            <br>
            <button class="btn btn-primary" @click="selectedCompenent = 'appBlue'">Load Blue Template</button>
            <button class="btn btn-success" @click="selectedCompenent = 'appGreen'">Load Green Template</button>
            <button class="btn btn-danger" @click="selectedCompenent = 'appRed'">Load Red Template</button>
            <hr>
            <compenent :is="selectedCompenent">
                <p>This is the Content</p>
            </compenent>
            <!--<app-blue>
                <p>This is the Content</p>
            </app-blue>
            <app-green>
                <p>This is the Content</p>
            </app-green>
            <app-red>
                <p>This is the Content</p>
            </app-red>-->
        </div>
    </div>
</div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {
    data: function() {
        return {
            selectedCompenent: 'appBlue'
        }
    },
    components: {
        appBlue: Blue,
        appGreen: Green,
        appRed: Red
    }
}
</script>

<style>

</style>
