<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column label="序号">
        <template scope="scope">
          <span>{{scope.$index+(form.pageNo - 1) * form.pageSize  + 1}}</span>
        </template>
      </el-table-column>

      <el-table-column v-for="(item, i) in  tableColumns" :label="item.label" :key="item.id">
        <el-table-column v-for="(child, j) in item.children" :label="child.label" :prop="child.prop" :key="child.id">
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'DynamicTable2',
  data () {
    return {
      tableColumns: [
        {
          id: 'shopName',
          label: '门店',
          children: [
            {
              id: 'shopName',
              prop: 'shopName',
              label: ''
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
              label: '销售金额'
            },
            {
              id: 'zf0012',
              prop: 'zf0012',
              label: '抹零'
            },
            {
              id: 'zf0013',
              prop: 'zf0013',
              label: '实收金额'
            },
            {
              id: 'zf0014',
              prop: 'zf0014',
              label: '差异'
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
              label: '销售金额'
            },
            {
              id: 'zf0022',
              prop: 'zf0022',
              label: '手续费'
            },
            {
              id: 'zf0023',
              prop: 'zf0023',
              label: '实收金额'
            },
            {
              id: 'zf0024',
              prop: 'zf0024',
              label: '差异'
            }
          ]
        }
      ],
      form: {
        pageNo: 1,
        pageSize: 31
      },
      tableData: [
        { shopName: '南丹店', zf0011: 1, zf0012: 2, zf0013: 3, zf0014: 4, zf0021: 5, zf0022: 6, zf0023: 7, zf0024: 8 },
        { shopName: '斜土店', zf0011: 11, zf0012: 12, zf0013: 13, zf0014: 14, zf0021: 15, zf0022: 16, zf0023: 17, zf0024: 18 }
      ]
    }
  }
}
</script>

<style scoped>

</style>
