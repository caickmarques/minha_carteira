import React, { useState, useMemo } from 'react';
import ContentHeader from '../../components/ContentHeader';
import WalletBox from '../../components/WalletBox';
import { Container, Content } from './styles';
import listOfMonths from '../../utils/months';
import SelectInput from '../../components/SelectInput';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYeatSelected] = useState<number>(new Date().getFullYear() - 1);

    const options = [
        { value: 'Caick', label: 'Caick' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Ana', label: 'Ana' },
    ];
    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item => {
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
    }, []);


    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });

    }, []);

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch (error) {
            throw new Error('Invalid month value. Is accept 0 - 24.');
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYeatSelected(parseYear);
        } catch (error) {
            throw new Error('Invalid year value. Is accept interger numbers.');
        }
    }

    return (
        <Container>
            <ContentHeader title='Dashboard' lineColor='#F7931B'>
                <SelectInput
                    options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected} />

                <SelectInput
                    options={years}
                    onChange={(e) => handleYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                />
            </ContentHeader>
            <Content>
                <WalletBox
                    title='Saldo'
                    amount={150.00}
                    footerlabel='Atualizado com base nas entradas e saídas'
                    icon='dolar'
                    color='#4E41F0'
                />
                <WalletBox
                    title='Entradas'
                    amount={5000.00}
                    footerlabel='Atualizado com base nas entradas e saídas'
                    icon='arrowUp'
                    color='#F7931B'
                />
                <WalletBox
                    title='Saída'
                    amount={4850.00}
                    footerlabel='Atualizado com base nas entradas e saídas'
                    icon='arrowDown'
                    color='#E44C4E'
                />
            </Content>
        </Container>
    );
}

export default Dashboard;