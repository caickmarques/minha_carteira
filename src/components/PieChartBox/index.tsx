import React from 'react';
import { Container, SideLeft, SideRight, Legend, LegendContainer } from './styles';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

interface IChartBoxProps {
    data: {
        name: string,
        value: number,
        percent: number,
        color: string
    }[];
}
const PieChartBox: React.FC<IChartBoxProps> = ({ data }) => (
    <Container>
        <SideLeft>
            <h1>Relação</h1>
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
                <PieChart>
                    <Pie data={data} dataKey='percent'>
                        {
                            data.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>

    </Container>
)


export default PieChartBox;