import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, Button, message } from 'antd';
import './Appointment.css';

const { Option } = Select;

function Appointment() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // 这里添加提交预约信息到后端的逻辑
    console.log('预约信息:', values);
    message.success('预约成功！');
    form.resetFields();
  };

  return (
    <div className="appointment-container">
      <h2>在线预约</h2>
      <Form
        form={form}
        name="appointment"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="name"
          label="姓名"
          rules={[{ required: true, message: '请输入姓名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="联系电话"
          rules={[{ required: true, message: '请输入联系电话' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="department"
          label="就诊科室"
          rules={[{ required: true, message: '请选择就诊科室' }]}
        >
          <Select>
            <Option value="内科">内科</Option>
            <Option value="外科">外科</Option>
            <Option value="儿科">儿科</Option>
            <Option value="妇科">妇科</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="appointmentDate"
          label="预约日期"
          rules={[{ required: true, message: '请选择预约日期' }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交预约
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Appointment;