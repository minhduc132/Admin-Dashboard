import React, { useEffect } from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { Projects } from '../../../types';

const { Option } = Select;

interface EditProjectModalProps {
    open: boolean;
    onCancel: () => void;
    onUpdateProject: (updatedProject: Projects) => void;
    project: Projects | null;
}

const EditProjectModal: React.FC<EditProjectModalProps> = ({
    open,
    onCancel,
    onUpdateProject,
    project,
}) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (project) {
            form.setFieldsValue({
                name: project.project_name,
                client: project.client_name,
                status: project.status,
            });
        }
    }, [project, form]);

    const handleOk = () => {
        form.validateFields().then((values) => {
            if (project) {
                const updatedProject = {
                    ...project,
                    project_name: values.name,
                    client_name: values.client,
                    status: values.status,
                };
                onUpdateProject(updatedProject);
                form.resetFields();
            }
        });
    };

    return (
        <Modal
            title="Edit Project"
            open={open}
            onOk={handleOk}
            onCancel={() => {
                form.resetFields();
                onCancel();
            }}
            okText="Update"
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
                    name="client"
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

export default EditProjectModal;
