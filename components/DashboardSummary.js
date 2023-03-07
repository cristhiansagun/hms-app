import { React } from 'react'
import { Card, Row, Col, Statistic  } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';


function DashboardSummary() {

    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card bordered={false}>
                    <Statistic
                        title="Normal Temperature"
                        value={1021}
                        valueStyle={{
                            color: '#3f8600',
                        }}
                        prefix={<ArrowUpOutlined />}
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card bordered={false}>
                    <Statistic
                        title="Above Normal Temperature"
                        value={2834}
                        valueStyle={{
                            color: '#cf1322',
                        }}
                        prefix={<ArrowDownOutlined />}
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card bordered={false}>
                    <Statistic
                        title="Total People"
                        value={2543}
                        valueStyle={{
                            color: '#3f8600',
                        }}
                        prefix={<ArrowUpOutlined />}
                    />
                </Card>
            </Col>
        </Row>
    )
}


export default DashboardSummary