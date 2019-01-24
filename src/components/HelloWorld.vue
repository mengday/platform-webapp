<template>
  <div>
    {{lastMonth}}
    <!--<el-table :data="tableData" border>-->
      <!--<el-table-column label="序号">-->
        <!--<template scope="scope">-->
          <!--<span>{{scope.$index+(form.pageNo - 1) * form.pageSize  + 1}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="日期">-->
        <!--<el-table-column>-->
          <!--<el-table-column label="合计"></el-table-column>-->
        <!--</el-table-column>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="现金">-->
        <!--<el-table-column label="销售金额合计">-->
          <!--<el-table-column :label="v1" prop="v1"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="抹零合计">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="实收金额合计">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="差异合计">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="银行卡">-->
        <!--<el-table-column label="销售金额">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="手续费">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="实收金额">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="差异">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="聚合">-->
        <!--<el-table-column label="销售金额">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="手续费">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="实收金额">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="差异">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="OK卡">-->
        <!--<el-table-column label="销售金额">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="手续费">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="实收金额">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="差异">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="支付宝（记账）">-->
        <!--<el-table-column label="销售金额">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="手续费">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="实收金额">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="差异">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="微信（记账）">-->
        <!--<el-table-column label="销售金额">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="手续费">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="实收金额">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="差异">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="合计" prop="v1">-->
        <!--<el-table-column label="销售额合计">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="抹零合计">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="手续费合计">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="实收合计">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
        <!--<el-table-column label="差异合计">-->
          <!--<el-table-column :label="v1" prop="v2"></el-table-column>-->
        <!--</el-table-column>-->
      <!--</el-table-column>-->
    <!--</el-table>-->
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'HelloWorld',
  filters: {
    dateFrm: function (value) {
      return moment(value).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  data () {
    return {
      v1: '111',
      v2: 'v2',
      v3: 'v3',
      v4: 'v4',
      form: {
        pageNo: 1,
        pageSize: 31
      },
      lastMonth: moment(moment().month(moment().month() - 1).startOf('month').valueOf()).format('YYYY-MM'),
      tableData: [
        { v1: 'v1', v2: 'v2', v3: 'v3', v4: 'v4' },
        { v1: 'v1', v2: 'v2', v3: 'v3', v4: 'v4' },
        { v1: 'v1', v2: 'v2', v3: 'v3', v4: 'v4' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
