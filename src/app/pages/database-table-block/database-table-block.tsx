import React from 'react';
import {
  EllipsisOutlined,
  FilterOutlined,
  OrderedListOutlined,
} from '@ant-design/icons';
import { Button, Radio, Tooltip } from 'antd';
import { InformTable } from '@components/ui-kit';
import { MOCK_DATA } from './models';

import './styles.scss';

export const DatabaseTableBlock: React.FC = () => {
  return (
    <div className="database-table-block">
      <div className="database-table-block__header">
        <div className="database-table-block__header__title">Database</div>
        <div className="database-table-block__header__btn-block">
          <Button>
            Sort <OrderedListOutlined />
          </Button>
          <Button>
            Filter <FilterOutlined />
          </Button>
        </div>
      </div>
      <div className="database-table-block__btn-block">
        <Radio.Group className="database-table-block__btn-block__radio">
          <Radio.Button value="student">Student</Radio.Button>
          <Radio.Button value="teacher">Teacher</Radio.Button>
        </Radio.Group>
        <Tooltip
          className="database-table__btn-block-block__right"
          title="search"
        >
          <Button shape="circle" icon={<EllipsisOutlined />} />
        </Tooltip>
      </div>

      <InformTable data={MOCK_DATA} />
    </div>
  );
};
