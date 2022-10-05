import Table from "../Table";

export default class Manhattan {
    base;
    table;

    getAvaliacao(table, base) {
        this.base = base;
        this.table = table;

        var sum = 0;
        for (var i = 0; i < this.table.tam; i++)
            for (var j = 0; j < this.table.tam; j++)
                sum += this.getDist(i, j);

        return sum;
    }

    getDist(i, j) {
        var elem = this.table.table[i][j];

        var pos = this.base.search(elem);

        return Math.abs(pos.i - i) + Math.abs(pos.j - j);
    }
}