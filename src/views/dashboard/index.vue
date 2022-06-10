<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: Hello</div>
     <el-table :data="tableData" border show-summary style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name">
    </el-table-column>
    <el-table-column
      prop="amount1"
      sortable
      label="Amount 1">
    </el-table-column>
    <el-table-column
      prop="amount2"
      sortable
      label="Amount 2">
    </el-table-column>
    <el-table-column
      prop="amount3"
      sortable
      label="Amount 3">
    </el-table-column>
  </el-table>

  <Grid
        :data-items="products"
        :filterable="true"
        :filter="filter"
        @filterchange="filterChange"
        :columns="columns">
    </Grid>
  </div>
</template>

<script>
import { Grid } from '@progress/kendo-vue-grid';
import { filterBy } from '@progress/kendo-data-query';
import sampleProducts from '@/../mock/products.json';
import '@/styles/default-ocean-blue.css';

export default {
  name: 'Dashboard',
  components: {
    'Grid': Grid
  },
  data() {
    return {
      tableData: [{
          id: '12987122',
          name: 'Tom',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: 'Tom',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: 'Tom',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: 'Tom',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: 'Tom',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
      }],
      filter: {
          logic: "and",
          filters: [
              { field: "UnitPrice", operator: "neq", value: 18 },
              { field: "FirstOrderedOn", operator: "gte", value:new Date("1996-10-10") }
          ]
      }
    }
  },
  computed: {
        products: function() {
            return filterBy(sampleProducts, this.filter);
        },
        columns: function () {
            return [
                { field: 'ProductID', filterable:false, title: 'Product ID', width:'50px'},
                { field: 'ProductName', title: 'Product Name' },
                { field: 'FirstOrderedOn', filter:'date', title: 'First Ordered On'},
                { field: 'UnitPrice', filter:'numeric', title: 'Unit Price'},
                { field: 'Discontinued', filter:'boolean', title: 'Discontinued'}
            ]
        }
    },
    methods: {
        filterChange: function(ev) {
            this.filter = ev.filter;
        }
    }
}
</script>