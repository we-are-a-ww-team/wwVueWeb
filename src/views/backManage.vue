<template>
  <div class="backManage"
       id="components-layout-demo-basic">

    <a-layout>
      <a-layout-sider>
        <div class="backManageTitle">后台管理</div>
        <div>
          <a-menu v-model="defaultMenu"
                  style="width: 200px"
                  mode="vertical"
                  @click="handleClick">
            <a-menu-item key="1">
              菜单1
            </a-menu-item>
            <a-menu-item key="2">
              菜单2
            </a-menu-item>
            <a-menu-item key="3">
              菜单3
            </a-menu-item>
            <a-menu-item key="4">
              菜单4
            </a-menu-item>
          </a-menu>
        </div>
      </a-layout-sider>
      <div class="minDiv"></div>
      <a-layout>
        <div class="backGrid">
          <div>
            <a-button type="primary">新增</a-button>
            <a-button>删除</a-button>
          </div>
          <div>
            <a-table :columns="columns"
                     :dataSource="data">
              <a slot="name"
                 slot-scope="text">{{text}}</a>
            </a-table>
          </div>
        </div>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data () {
    return {
      data,
      columns,
      defaultMenu: ['1']
    }
  },
  methods: {
    handleClick (e) {
      console.log('click ', e);
    },
  },
};
</script>
<style scoped>
.backManage >>> .ant-layout,
.backManage {
  height: 100%;
}
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: white;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
.backManage >>> .ant-menu-item {
  font-size: 24px;
  height: 60px;
  line-height: 60px;
}
.backManageTitle {
  font-size: 40px;
  color: black;
}
.backGrid {
  width: 100%;
  height: 100%;
  /* margin: 0 20px; */
  background: white;
  padding-top: 20px;
  padding-left: 20px;
  text-align: left;
}
.backGrid > div:first-child > button {
  margin-right: 20px;
  font-size: 20px;
}
.backGrid > div:first-child {
  margin-bottom: 20px;
}
.minDiv {
  width: 20px;
  height: 100%;
}
</style>
