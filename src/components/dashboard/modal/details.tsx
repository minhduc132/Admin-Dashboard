import React from 'react';
import { Modal, Descriptions } from 'antd';

interface ProjectDetailModalProps {
    open: boolean;
    onClose: () => void;
    project: any | null;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ open, onClose, project }) => {
    if (!project) return null;

    return (
        <Modal
            title="Project Details"
            open={open}
            onCancel={onClose}
            footer={null}
        >
            <Descriptions column={1} bordered size="small">
                <Descriptions.Item label="Project Name">{project.project_name}</Descriptions.Item>
                <Descriptions.Item label="Client">{project.client_name}</Descriptions.Item>
                <Descriptions.Item label="Status">{project.status}</Descriptions.Item>
                <Descriptions.Item label="Priority">{project.priority}</Descriptions.Item>
                <Descriptions.Item label="Start Date">{project.start_date}</Descriptions.Item>
                <Descriptions.Item label="End Date">{project.end_date}</Descriptions.Item>
                <Descriptions.Item label="Budget">{project.budget}</Descriptions.Item>
                <Descriptions.Item label="Manager">{project.project_manager}</Descriptions.Item>
                <Descriptions.Item label="Location">{project.project_location}</Descriptions.Item>
                <Descriptions.Item label="Type">{project.project_type}</Descriptions.Item>
                <Descriptions.Item label="Category">{project.project_category}</Descriptions.Item>
                <Descriptions.Item label="Team Size">{project.team_size}</Descriptions.Item>
                <Descriptions.Item label="Duration">{project.project_duration} months</Descriptions.Item>
                <Descriptions.Item label="Description">{project.project_description}</Descriptions.Item>
            </Descriptions>
        </Modal>
    );
};

export default ProjectDetailModal;
