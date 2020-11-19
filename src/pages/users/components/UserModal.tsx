import React, { Component } from 'react'
import {  Modal, Button } from 'antd'


export default function UserModal(props) {
    let isShow =  props.isShow
    const closeHandler = props.handleClose
    let title = props.title
    return (
        <div>
            <Modal
                title="提示"
                visible={isShow}
                onOk={closeHandler}
                onCancel={closeHandler}
            >{title}
                </Modal> 
        </div>
    )
}



