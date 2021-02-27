import React, { useMemo, useState, useEffect } from 'react';
import ContentHeader from '../../components/ContentHeader';
import { Container, Content, Filters } from './styles';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';
import { useLocation } from 'react-router-dom';
import { v4 as uuid_v4 } from 'uuid';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string,
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYeatSelected] = useState<string>(String(new Date().getFullYear()));

    const { type } = match.params;
    const title = useMemo(() => {
        return type === 'entry-balance' ? {
            title: 'Entradas',
            lineColor: '#F7931B'
        } : {
                title: 'Saídas',
                lineColor: '#E44C4E',

            }
    }, [type]);

    const ListData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type]);


    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        ListData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });
        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        })
    }, [ListData]);

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });

    }, []);

    useEffect(() => {
        console.log(ListData);

        const filteredData = ListData.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());
            return month === monthSelected && year === yearSelected;
        });


        const formattedData = filteredData.map(item => {
            return {
                id: uuid_v4(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        });
        setData(formattedData);
    }, [ListData, monthSelected, yearSelected, data.length]);

    return (
        <Container>
            <ContentHeader title={title.title} lineColor={title.lineColor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => setYeatSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>

            <Filters>
                <button type='button' className='tag-filter recurrent'>Recorrentes</button>
                <button type='button' className='tag-filter eventual'>Eventuais</button>
            </Filters>

            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;