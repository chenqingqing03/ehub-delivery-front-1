import React from 'react';
import { Icon } from 'antd';
import PageHeader from 'ant-design-pro/lib/PageHeader';

import 'ant-design-pro/dist/ant-design-pro.css';

export default class SearchAdjustmentStockHeader extends React.Component {
    render() {
        return (
            <PageHeader
                title={<p><Icon type="search"/>&nbsp;&nbsp;&nbsp;库存调整查询</p>}
            />
        );
    }
}