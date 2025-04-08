import {
  Badge,
  BadgeProps,
  Table,
  TableProps,
  Tag,
  TagProps,
  Typography,
} from 'antd';
import { EditTwoTone, DeleteTwoTone, EyeTwoTone } from '@ant-design/icons';

import { Projects } from '../../../../types';

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

      if (_ === 'low') {
        color = 'cyan';
      } else if (_ === 'medium') {
        color = 'geekblue';
      } else {
        color = 'magenta';
      }
      return (
        <Tag color={color} className="text-capitalize">
          {_}
        </Tag>
      );
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'proj_status',
    render: (_: any) => {
      let status: BadgeProps['status'];

      if (_ === 'on hold') {
        status = 'default';
      } else if (_ === 'completed') {
        status = 'success';
      } else {
        status = 'processing';
      }
      return <Badge status={status} text={_} className="text-capitalize" />;
    },
  },
  // {
  //   title: 'Team size',
  //   dataIndex: 'team_size',
  //   key: 'proj_team_size',
  // },
  // {
  //   title: 'Duration',
  //   dataIndex: 'project_duration',
  //   key: 'project_duration',
  // },
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
          onClick={() => console.log('View', record)}
        />
        <EditTwoTone
          style={{ color: '#52c41a', cursor: 'pointer' }}
          onClick={() => console.log('View', record)}
        />
        <DeleteTwoTone
          style={{ color: '#faad14', cursor: 'pointer' }}
          onClick={() => console.log('Update', record)}
        />
      </div>
    ),
  }
  
  
];
type Props = {
  data: Projects[];
} & TableProps<Projects>;


export const ProjectsTable = ({ data,...others }: Props) => {
  return (
    <Table
      dataSource={data}
      columns={COLUMNS}
      // rowKey={(record) => String(record.id)}
      className="overflow-scroll"
      {...others}
    />
  );
};
