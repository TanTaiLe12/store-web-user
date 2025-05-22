import { useState, useEffect } from 'react';
import { Divider, Radio, Table } from 'antd';
import CategoriesApi from '~/api/v1/admin/categoriesApi';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Image',
    dataIndex: 'image',
  },
  {
    title: 'Image',
    dataIndex: 'image',
  },
];

const categoriesApi = new CategoriesApi();

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
const Dashboard = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await categoriesApi.listAll();
        if (res) {
          res?.data.forEach((item) => {
            item.key = item.id;
          });
          setData(res.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Radio.Group onChange={(e) => setSelectionType(e.target.value)} value={selectionType}>
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>
      <Divider />
      <Table
        rowSelection={Object.assign({ type: selectionType }, rowSelection)}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default Dashboard;
