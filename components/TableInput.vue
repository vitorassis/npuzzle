<template>
    <div>
        <div class="row col-md-12 form-group">
            <div class="col-md-6 text-right">
                <label>Tamanho do puzzle:</label>
            </div>
            <div class="col-md-6">
                <input type="number" class="form-control" :value="store.N" @change="event => store.updateN(event.target.value)">
            </div>
        </div>
        <div class="row col-md-12 form-group">
            <div class="col-md-6 text-right">
                <label>Estado final:</label>
            </div>
            <div class="col-md-6">
                <div class="container">
                        <div class="row col-md-12" v-for="i in store.N">
                            <div class="col center" v-for="j in store.N">
                                <input type="number" class="number" 
                                    @change="event => store.updateTableValue(i-1,j-1, event.target.value)"
                                    :value="store.table[i-1][j-1]">
                            </div>
                        </div>
                    </div>
            </div>
        </div>        
    </div>
</template>

<script>
    import { store } from './store';

    export default{
        name: 'Table',
        data() {
            return {
                store
            }
        },
    }
</script>

<style scoped>
    .container{
        width: 400px;
    }
    .col {
        border: 1px solid black;
        height: 100px
    }
    input.number{
        width: 40px;
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>