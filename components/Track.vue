<template>
    <div class="container" v-if="store.puzzle && store.puzzle.resolvido">
        <h4> Resolução</h4>
        <div  v-for="(item, index) in store.puzzle.track.s" :key="index" >
            <Table :N="item.tam" :table="item.table"/>
            <br><br>
        </div>
    </div>
</template>
<script>
    import { store } from './store';
    export default{
        name: 'Track',
        data() {
            return {
                store
            }
        },
    }
</script>