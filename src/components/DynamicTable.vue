<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column label="序号">
        <template scope="scope">
          <span>{{scope.$index+(form.pageNo - 1) * form.pageSize  + 1}}</span>
        </template>
      </el-table-column>

      <el-table-column v-for="(item, i) in  tableColumns" :label="item.label" :key="item.id">
        <el-table-column v-for="(child, j) in item.children" :label="child.label" :key="child.id">
          <el-table-column :label="child.sum" :prop="child.prop" :key="child.id"></el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'DynamicTable',
  data () {
    return {
      tableColumns: [
        {
          id: 'datetime',
          label: '日期',
          children: [
            {
              id: 'datetime',
              prop: 'datetime',
              label: '',
              sum: '合计'
            }
          ]
        },
        {
          id: 'zf001',
          label: '现金',
          children: [
            {
              id: 'zf0011',
              prop: 'zf0011',
              label: '销售金额',
              sum: 1
            },
            {
              id: 'zf0012',
              prop: 'zf0012',
              label: '抹零',
              sum: 2
            },
            {
              id: 'zf0013',
              prop: 'zf0013',
              label: '实收金额',
              sum: 3
            },
            {
              id: 'zf0014',
              prop: 'zf0014',
              label: '差异',
              sum: 4
            }
          ]
        },
        {
          id: 'zf002',
          label: '银行卡',
          children: [
            {
              id: 'zf0021',
              prop: 'zf0021',
              label: '销售金额',
              sum: 11
            },
            {
              id: 'zf0022',
              prop: 'zf0022',
              label: '手续费',
              sum: 22
            },
            {
              id: 'zf0023',
              prop: 'zf0023',
              label: '实收金额',
              sum: 33
            },
            {
              id: 'zf0024',
              prop: 'zf0024',
              label: '差异',
              sum: 4
            }
          ]
        }
      ],
      form: {
        pageNo: 1,
        pageSize: 31
      },
      tableData: [
        { datetime: '2019-04-01', zf0011: 1, zf0012: 2, zf0013: 3, zf0014: 4, zf0021: 5, zf0022: 6, zf0023: 7, zf0024: 8 },
        { datetime: '2019-04-02', zf0011: 11, zf0012: 12, zf0013: 13, zf0014: 14, zf0021: 15, zf0022: 16, zf0023: 17, zf0024: 18 }
      ]
    }
  }
}
</script>

<style scoped>

</style>
