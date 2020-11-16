import React from 'react';
import {Table, Tag, Space} from 'antd'

import { connect } from 'umi';
const index = ({users}) => {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>删除 </a>
          <a>添加</a>
        </Space>
      ),
    },
  ];

  
  return (
    
    <div className="listBox">
     <Table columns={columns} dataSource={users} />
    </div>
  );
}

const mapStateToProps = (module)=> {
  console.log(module)
  return {users:module.userModel.data}
}
export default connect(mapStateToProps)(index)