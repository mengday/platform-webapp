<template>
  <div>
    <el-table :data="tableData" :header-cell-style="{'text-align':'center'}" border>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column label="理科">
        <el-table-column prop="physics" label="物理"/>
        <el-table-column prop="chemistry" label="化学"/>
        <el-table-column prop="biology" label="生物"/>
      </el-table-column>
    </el-table>
    <button @click="handleDownload">导出</button>
  </div>
</template>

<script>
export default {
  name: 'ExcelExportExample',
  data () {
    return {
      tableData: [
        {
          name: '张三',
          physics: 88,
          chemistry: 99,
          biology: 66
        },
        {
          name: '李四',
          physics: 88.5,
          chemistry: 99.5,
          biology: 66.5
        }
      ]
    }
  },
  methods: {
    handleDownload () {
      import('@/vendor/Export2Excel').then(excel => {
        const list = this.tableData
        const props = ['name', 'physics', 'chemistry', 'biology']
        let multiHeader = [['姓名', '理科', '', '']]
        let header = ['', '物理', '化学', '生物']
        // s表示start，指定开始的行r和列c
        // e表示end，指定结束的行r和列c
        let merges = [
          // 理科合并单元格
          {
            s: {c: 1, r: 0},
            e: {c: 3, r: 0}
          },
          // 姓名
          {
            s: {c: 0, r: 0},
            e: {c: 0, r: 1}
          }
        ]
        const data = list.map(v => props.map(j => v[j]))
        excel.export_json_to_excel({
          multiHeader: multiHeader,
          merges: merges,
          header: header,
          data: data,
          filename: '学生成绩表',
          autoWidth: true,
          bookType: 'xlsx'
        })
      })
    }
  }
}
</script>
