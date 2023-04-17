<template>
  <div v-show="!loading">
    <!-- 第一行 -->
    <el-row>
      <el-col :span="6" v-for="item in rowArrOne" :key="item.index">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>{{ item.name }}</span>
              <span>{{ item.time }}</span>
            </div>
          </template>
          <div class="text item">{{ item.content }}</div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row>
      <el-col :span="3" v-for="item in rowArrTwo" :key="item.index">
        <el-card class="box-card">
          <div>
            <span>{{ item.title }}</span>
          </div>
          <div class="text item">{{ item.message }}</div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 第三行 -->
    <el-row>
      <el-col :span="8" v-for="item in rowArrThree" :key="item.index">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>{{ item.title }}</span>
              <span>更多>></span>
            </div>
          </template>
          <div class="text item">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="Date" width="180" />
              <el-table-column prop="name" label="Name" width="180" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <!-- 骨架屏 -->
  <el-skeleton :loading="loading" animated>
    <template #template>
      <!-- 第一行 -->
      <el-row>
        <el-col :span="6" v-for="item in rowArrOne" :key="item.index">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <el-skeleton-item variant="text" style="width: 20%" />
                <el-skeleton-item variant="text" style="width: 20%" />
              </div>
            </template>
            <el-skeleton />
          </el-card>
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row>
        <el-col :span="3" v-for="item in rowArrTwo" :key="item.index">
          <el-card class="box-card">
            <div>
              <el-skeleton-item variant="text" style="width: 20%" />
            </div>
            <div class="text item"><el-skeleton-item variant="text" style="width: 40%" /></div>
          </el-card>
        </el-col>
      </el-row>
      <!-- 第三行 -->
      <el-row>
        <el-col :span="8" v-for="item in rowArrThree" :key="item.name">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <el-skeleton-item variant="text" style="width: 20%" />
                <el-skeleton-item variant="text" style="width: 20%" />
              </div>
            </template>
            <div class="table-flex">
              <div class="table-flex_div">
                <p v-for="item in tableData" :key="item.index">
                  <el-skeleton-item variant="text" width="100%" />
                </p>
              </div>
              <div class="table-flex_div">
                <p v-for="item in tableData" :key="item.index">
                  <el-skeleton-item variant="text" width="100%" />
                </p>
              </div>
              <div class="table-flex_div">
                <p v-for="item in tableData" :key="item.index">
                  <el-skeleton-item variant="text" width="100%" />
                </p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </template>
  </el-skeleton>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'shouye-gujiaping',
  setup() {
    const state = reactive({
      rowArrOne: [
        {
          index: '1',
          name: '第一行第一个',
          time: '2022-10-27',
          content:
            '俄罗斯卫星通讯社华盛顿10月27日电美国国家安全委员会战略沟通协调员约翰柯比表示，美方未看到俄罗斯拟使用“脏弹”的证据。'
        },
        {
          index: '2',
          name: '第一行第二个',
          time: '2022-10-27',
          content:
            '俄罗斯卫星通讯社华盛顿10月27日电美国国家安全委员会战略沟通协调员约翰柯比表示，美方未看到俄罗斯拟使用“脏弹”的证据。'
        },
        {
          index: '3',
          name: '第一行第三个',
          time: '2022-10-27',
          content:
            '俄罗斯卫星通讯社华盛顿10月27日电美国国家安全委员会战略沟通协调员约翰柯比表示，美方未看到俄罗斯拟使用“脏弹”的证据。'
        },
        {
          index: '4',
          name: '第一行第四个',
          time: '2022-10-27',
          content:
            '俄罗斯卫星通讯社华盛顿10月27日电美国国家安全委员会战略沟通协调员约翰柯比表示，美方未看到俄罗斯拟使用“脏弹”的证据。'
        }
      ],
      rowArrTwo: [
        { index: '1', title: '图标1', message: '意见反馈' },
        { index: '2', title: '图标2', message: '意见反馈' },
        { index: '3', title: '图标3', message: '意见反馈' },
        { index: '4', title: '图标4', message: '意见反馈' },
        { index: '5', title: '图标5', message: '意见反馈' },
        { index: '6', title: '图标6', message: '意见反馈' },
        { index: '7', title: '图标7', message: '意见反馈' },
        { index: '8', title: '图标8', message: '意见反馈' }
      ],
      rowArrThree: [
        { index: '1', title: '表格1' },
        { index: '2', title: '表格2' },
        { index: '3', title: '表格3' }
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: '中国'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: '中国'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: '中国'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: '中国'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: '中国'
        }
      ],
      loading: true
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
<style scoped>
:deep(.card-header) {
  display: flex;
}

:deep(.card-header) span:last-child {
  flex: 1;
  text-align: right;
}

:deep(.el-card__body) {
  text-align: left;
}

:deep(.el-col-6),
:deep(.el-col-3),
:deep(.el-col-8) {
  padding: 10px;
}

:deep(.el-col-3) .el-card__body div {
  text-align: center;
  padding: 6px;
}

:deep(.card-header) {
  justify-content: space-between;
}

:deep(.el-skeleton__item.el-skeleton__p.is-first) {
  width: 100%;
}

.table-flex {
  display: flex;
}

.table-flex .table-flex_div {
  width: 30%;
  padding: 0 10px;
}
</style>
