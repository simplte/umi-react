import React, {useState} from 'react';
import {Table,  Space, } from 'antd'
import UserModal from './components/UserModal'
import { connect } from 'umi';
const index = ({users}) => {
  const [modalVisible, setModalVisible ] = useState(false)
  const [txt, setTitle] = useState("")
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
          <a onClick={()=> {tapDeleteOpen(record)}}>删除 </a>
          <a>添加</a>
        </Space>
      ),
    },
  ];

  const tapDeleteOpen=(record) => {
    console.log(record)
    setTitle(record.name)
    setModalVisible(true)
  }
  const tapDeleteClose=() => {
    setModalVisible(false)
  }
  return (
    
    <div className="listBox">
     <Table columns={columns} dataSource={users} />
     <UserModal isShow={modalVisible} title={txt} handleClose={tapDeleteClose}></UserModal>
    </div>
  );
}

const mapStateToProps = (module)=> {
  console.log(module)
  return {users:module.userModel.data}
}
export default connect(mapStateToProps)(index)