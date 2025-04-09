import React from 'react';
import { Modal, Input, Form, Select } from 'antd';

const { Option } = Select;

interface AddUserModalProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  onAddUser: (user: any) => void;
}

const generateId = () => {
  return 'proj_' + Math.random().toString(36).substr(2, 9);
};

const AddUserModal: React.FC<AddUserModalProps> = ({
  open,
  onOk,
  onCancel,
  onAddUser,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const newUser = {
        project_id: generateId(),
        project_name: values.name,
        client_name: values.email,
        status: values.status,
        priority: 'low',
        team_size: 1,
        start_date: new Date().toLocaleDateString(),
        end_date: new Date().toLocaleDateString(),
        budget: 'USD',
        project_manager: 'Default PM',
        project_description: 'Default description',
        project_location: 'Default location',
        project_type: 'development',
        project_category: 'internal',
        project_duration: 6,
      };

      onAddUser(newUser);
      form.resetFields();
      onOk();
    });
  };

  return (
    <Modal
      title="Add New Project"
      open={open}
      onOk={handleSubmit}
      onCancel={onCancel}
      okText="Add"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Project Name"
          name="name"
          rules={[{ required: true, message: 'Please input project name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Client Name"
          name="email"
          rules={[{ required: true, message: 'Please input client name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: 'Please select status!' }]}
        >
          <Select>
            <Option value="in progress">In Progress</Option>
            <Option value="on hold">On Hold</Option>
            <Option value="completed">Completed</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUserModal;
