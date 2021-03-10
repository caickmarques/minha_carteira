import React from 'react';
import { Container, SideLeft, SideRight, LegendContainer, Legend } from './styles';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';
import formatCurrent from '../../utils/formatCurrency';

interface IBarChartProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string
    }[],
}

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => (
    <Container>
        <SideLeft>
            <h2>{title}</h2>
            <LegendContainer>
                {
                    data.map((indicator) => (
                        <Legend
                            key={indicator.name}
                            color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLeft>

        <SideRight>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <Tooltip formatter={(value: number) => formatCurrent(value)} cursor={{ fill: 'none' }} />
                    <Bar dataKey='amount' name='valor'>
                        {
                            data.map((indicator) => (
                                <Cell
                                    key={indicator.name}
                                    cursor='pointer'
                                    fill={indicator.color}
                                />
                            ))
                        }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
);

export default BarChartBox;