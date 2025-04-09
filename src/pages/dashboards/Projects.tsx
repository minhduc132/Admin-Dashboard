// import { Alert, Button, Col, Row, Segmented, Space } from 'antd';
// import {
//   Card,
//   PageHeader,
//   ProjectsTable,
// } from '../../components';
// import AddUserModal from '../../components/dashboard/modal/add';
// const [userList, setUserList] = useState<any[]>([]);
// const handleAddUser = (newUser: any) => {
//   setUserList((prev) => [...prev, newUser]);
// };

// import { Column } from '@ant-design/charts';
// import { Projects } from '../../types';
// import { useState } from 'react';
// import {
//   HomeOutlined,
//   PieChartOutlined,
//   PlusOutlined,
// } from '@ant-design/icons';
// import { DASHBOARD_ITEMS } from '../../constants';
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import { useFetchData } from '../../hooks';

// const RevenueColumnChart = () => {
//   const data = [
//     {
//       name: 'Income',
//       period: 'Mon',
//       value: 18.9,
//     },
//     {
//       name: 'Income',
//       period: 'Tue',
//       value: 28.8,
//     },
//     {
//       name: 'Income',
//       period: 'Wed',
//       value: 39.3,
//     },
//     {
//       name: 'Income',
//       period: 'Thur',
//       value: 81.4,
//     },
//     {
//       name: 'Income',
//       period: 'Fri',
//       value: 47,
//     },
//     {
//       name: 'Income',
//       period: 'Sat',
//       value: 20.3,
//     },
//     {
//       name: 'Income',
//       period: 'Sun',
//       value: 24,
//     },
//     {
//       name: 'Spent',
//       period: 'Mon',
//       value: 12.4,
//     },
//     {
//       name: 'Spent',
//       period: 'Tue',
//       value: 23.2,
//     },
//     {
//       name: 'Spent',
//       period: 'Wed',
//       value: 34.5,
//     },
//     {
//       name: 'Spent',
//       period: 'Thur',
//       value: 99.7,
//     },
//     {
//       name: 'Spent',
//       period: 'Fri',
//       value: 52.6,
//     },
//     {
//       name: 'Spent',
//       period: 'Sat',
//       value: 35.5,
//     },
//     {
//       name: 'Spent',
//       period: 'Sun',
//       value: 37.4,
//     },
//   ];
//   const config = {
//     data,
//     isGroup: true,
//     xField: 'period',
//     yField: 'value',
//     seriesField: 'name',
//     label: {
//       position: 'middle',
//       layout: [
//         {
//           type: 'interval-adjust-position',
//         },
//         {
//           type: 'interval-hide-overlap',
//         },
//         {
//           type: 'adjust-color',
//         },
//       ],
//     },
//   };
//   // @ts-ignore
//   return <Column {...config} />;
// };

// const PROJECT_TABS = [
//   {
//     key: 'all',
//     label: 'All projects',
//   },
//   {
//     key: 'inProgress',
//     label: 'Seller',
//   },
//   {
//     key: 'onHold',
//     label: 'Buyer',
//   },
// ];

// export const ProjectsDashboardPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => setIsModalOpen(true);
//   const handleCancel = () => setIsModalOpen(false);
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const {
//     data: projectsData,
//     error: projectsDataError,
//     loading: projectsDataLoading,
//   } = useFetchData('../mocks/Projects.json');
//   const [projectTabsKey, setProjectsTabKey] = useState<string>('all');

//   const PROJECT_TABS_CONTENT: Record<string, React.ReactNode> = {
//     all: <ProjectsTable key="all-projects-table" data={projectsData} />,
//     inProgress: (
//       <ProjectsTable
//         key="in-progress-projects-table"
//         data={projectsData.filter((_: Projects) => _.status === 'in progress')}
//       />
//     ),
//     onHold: (
//       <ProjectsTable
//         key="on-hold-projects-table"
//         data={projectsData.filter((_: Projects) => _.status === 'on hold')}
//       />
//     ),
//   };

//   const onProjectsTabChange = (key: string) => {
//     setProjectsTabKey(key);
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>User Dashboard</title>
//       </Helmet>
//       <PageHeader
//         title=""
//         breadcrumbs={[
//           {
//             title: (
//               <>
//                 <HomeOutlined />
//                 <span>home</span>
//               </>
//             ),
//             path: '/',
//           },
//           {
//             title: (
//               <>
//                 <PieChartOutlined />
//                 <span>dashboards</span>
//               </>
//             ),
//             menu: {
//               items: DASHBOARD_ITEMS.map((d) => ({
//                 key: d.title,
//                 title: <Link to={d.path}>{d.title}</Link>,
//               })),
//             },
//           },
//           {
//             title: 'user',
//           },
//         ]}
//       />
//       <Row
//         gutter={[
//           { xs: 8, sm: 16, md: 24, lg: 32 },
//           { xs: 8, sm: 16, md: 24, lg: 32 },
//         ]}
//       >
//         <Col span={24}>
//           <Card
//             title="User"
//             extra={
//               <Space>
//                 <Button icon={<PlusOutlined />} onClick={showModal}>New user</Button>
//               </Space>
//             }
//             tabList={PROJECT_TABS}
//             activeTabKey={projectTabsKey}
//             onTabChange={onProjectsTabChange}
//           >
//             {PROJECT_TABS_CONTENT[projectTabsKey]}
//           </Card>
//           <AddUserModal
//             open={isModalOpen}
//             onOk={handleOk}
//             onCancel={handleCancel}
//             onAddUser={handleAddUser}
//           />

//         </Col>
//       </Row>
//     </div>
//   );
// };
import {
  Button,
  Col,
  Row,
  Space,
} from 'antd';
import {
  HomeOutlined,
  PieChartOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Card, PageHeader, ProjectsTable } from '../../components';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useFetchData } from '../../hooks';
import { Projects } from '../../types';
import AddUserModal from '../../components/dashboard/modal/add';
import { DASHBOARD_ITEMS } from '../../constants';

const PROJECT_TABS = [
  { key: 'all', label: 'All user' },
  { key: 'inProgress', label: 'Seller' },
  { key: 'onHold', label: 'Buyer' },
];

export const ProjectsDashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userList, setUserList] = useState<Projects[]>([]);
  const [projectTabsKey, setProjectsTabKey] = useState<string>('all');

  const {
    data: projectsData,
    error: projectsDataError,
    loading: projectsDataLoading,
  } = useFetchData('../mocks/Projects.json');

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleOk = () => setIsModalOpen(false);

  const handleAddUser = (newUser: Projects) => {
    setUserList((prev) => [...prev, newUser]);
  };

  const allProjects = [...(projectsData || []), ...userList];

  const PROJECT_TABS_CONTENT: Record<string, React.ReactNode> = {
    all: <ProjectsTable key="all" data={allProjects} />,
    inProgress: (
      <ProjectsTable
        key="inProgress"
        data={allProjects.filter((p) => p.status === 'in progress')}
      />
    ),
    onHold: (
      <ProjectsTable
        key="onHold"
        data={allProjects.filter((p) => p.status === 'on hold')}
      />
    ),
  };

  return (
    <div>
      <Helmet>
        <title>User Dashboard</title>
      </Helmet>

      <PageHeader
        title=""
        breadcrumbs={[
          {
            title: (
              <>
                <HomeOutlined />
                <span>home</span>
              </>
            ),
            path: '/',
          },
          {
            title: (
              <>
                <PieChartOutlined />
                <span>dashboards</span>
              </>
            ),
            menu: {
              items: DASHBOARD_ITEMS.map((d) => ({
                key: d.title,
                title: <Link to={d.path}>{d.title}</Link>,
              })),
            },
          },
          { title: 'user' },
        ]}
      />

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card
            title="User"
            extra={
              <Space>
                <Button icon={<PlusOutlined />} onClick={showModal}>
                  New user
                </Button>
              </Space>
            }
            tabList={PROJECT_TABS}
            activeTabKey={projectTabsKey}
            onTabChange={setProjectsTabKey}
          >
            {PROJECT_TABS_CONTENT[projectTabsKey]}
          </Card>

          <AddUserModal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            onAddUser={handleAddUser}
          />
        </Col>
      </Row>
    </div>
  );
};
