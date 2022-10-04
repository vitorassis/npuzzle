<template>
<div class="container">
    <form class="p-3">
        <h3>Parametrizações</h3>
        <TableInput />
        <div class="row col-md-12 form-group">
            <div class="col-md-6 text-right">
                <label>Função Avaliativa:</label>
            </div>
            <div class="col-md-6">
                <select class="form-control" v-model="store.avaliacao">
                    <option value="p">Peças Fora</option>
                    <option value="m">Distância Manhattan</option>
                </select>
            </div>
        </div>
        <div class="row col-md-12 form-group">
            <div class="col-md-6 text-right">
                <label>Método de Busca:</label>
            </div>
            <div class="col-md-6">
                <select class="form-control" v-model="store.busca">
                    <option value="p">Cega em Profundidade</option>
                    <option value="l">Cega em Largura</option>
                    <option value="a">A*</option>
                </select>
            </div>
        </div>
        <div class="row col-md-12 form-group" v-if="store.busca == 'a'">
            <div class="col-md-6 text-right">
                <label>Níveis:</label>
            </div>
            <div class="col-md-6">
                <select class="form-control" v-model="store.niveis">
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
        </div>
        <hr>
        <h3> Estado Inicial</h3>
        <div class="row col-md-12 form-group">
            <div class="col-md-6 text-right">
                <Table v-if="store.shuffledTable != null" :N="store.N" :table="store.shuffledTable.table"></Table>
            </div>
            <div class="col-md-6">
                <div class="row col-md-12">
                    <div class="row col-md-12 form-group">
                        <div class="col-md-4 text-right">
                            <label>Movimentos:</label>
                        </div>
                        <div class="col-md-4">
                            <input type="number" class="form-control" v-model.number="store.movimentos" />
                        </div>
                        <div class="col-md-4">
                            <button type="button" class="btn btn-primary" @click="store.embaralhar()">Embaralhar</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <hr>
        <div class="row">
            <div class="text-center col-md-12">
                <button type="button" :disabled="store.shuffledTable == null" class="btn btn-success" @click="store.resolver()">Resolver!</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import {
    store
} from "./store";
export default {
    name: 'Form',
    data() {
        return {
            store
        }
    },
}
</script>

<style scoped>
form {
    border: 1px solid black;
}
</style>
