<template>
    <div class="container">
        <div class="row col-md-12" v-for="i in N">
            <div class="col center" :class="{cinza : table[i-1][j-1] == 0 }" v-for="j in N">
              {{ table[i-1][j-1] != 0 && table[i-1][j-1] }}
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Table',
        props: ['table', 'N']
    }
</script>

<style scoped>
    .container{
        width: 300px;
    }
    .col {
        border: 1px solid black;
        height: 100px;
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cinza{
        background-color: grey;
    }
</style>
