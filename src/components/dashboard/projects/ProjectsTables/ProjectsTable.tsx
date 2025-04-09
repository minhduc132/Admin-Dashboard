
import React, { useState, useEffect } from 'react';
import {
  Badge,
  BadgeProps,
  Table,
  TableProps,
  Tag,
  TagProps,
  Typography,
} from 'antd';
import { EyeTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import ProjectDetailModal from '../../modal/details';
import DeleteConfirmModal from '../../modal/delete';
import { Projects } from '../../../../types';

type Props = {
  data: Projects[];
} & TableProps<Projects>;

export const ProjectsTable = ({ data, ...others }: Props) => {
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [tableData, setTableData] = useState<Projects[]>([]); // clone dữ liệu
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<Projects | null>(null);

  // Cập nhật tableData mỗi khi props.data thay đổi
  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleView = (record: Projects) => {
    setSelectedProject(record);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (record: Projects) => {
    setProjectToDelete(record);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (projectToDelete) {
      const newData = tableData.filter(
        (project) => project.project_id !== projectToDelete.project_id
      );
      setTableData(newData);
    }
    setIsDeleteModalOpen(false);
    setProjectToDelete(null);
  };

  const COLUMNS = [
    {
      title: 'Name',
      dataIndex: 'project_name',
      key: 'proj_name',
      render: (_: any, { project_name }: Projects) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {project_name.substring(0, 20)}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'Client',
      dataIndex: 'client_name',
      key: 'proj_client_name',
    },
    {
      title: 'Category',
      dataIndex: 'project_category',
      key: 'proj_category',
      render: (_: any) => <span className="text-capitalize">{_}</span>,
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'proj_priority',
      render: (_: any) => {
        let color: TagProps['color'];
        if (_ === 'low') color = 'cyan';
        else if (_ === 'medium') color = 'geekblue';
        else color = 'magenta';
        return <Tag color={color} className="text-capitalize">{_}</Tag>;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'proj_status',
      render: (_: any) => {
        let status: BadgeProps['status'];
        if (_ === 'on hold') status = 'default';
        else if (_ === 'completed') status = 'success';
        else status = 'processing';
        return <Badge status={status} text={_} className="text-capitalize" />;
      },
    },
    {
      title: 'Date',
      dataIndex: 'start_date',
      key: 'proj_start_date',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: Projects) => (
        <div style={{ display: 'flex', gap: '12px' }}>
          <EyeTwoTone
            style={{ color: '#52c41a', cursor: 'pointer' }}
            onClick={() => handleView(record)}
          />
          <EditTwoTone
            style={{ color: '#1890ff', cursor: 'pointer' }}
            onClick={() => console.log('Edit', record)}
          />
          <DeleteTwoTone
            style={{ color: '#faad14', cursor: 'pointer' }}
            onClick={() => handleDeleteClick(record)}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={tableData}
        columns={COLUMNS}
        rowKey={(record) => String(record.project_id)}
        className="overflow-scroll"
        {...others}
      />

      {/* Modal xem chi tiết */}
      <ProjectDetailModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />

      {/* Modal xác nhận xóa */}
      <DeleteConfirmModal
        open={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        itemName={projectToDelete?.project_name}
      />
    </>
  );
};
