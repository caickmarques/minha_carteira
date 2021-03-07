import React, { useState, useMemo } from 'react';
import ContentHeader from '../../components/ContentHeader';
import WalletBox from '../../components/WalletBox';
import PieChartBox from '../../components/PieChartBox';
import { Container, Content } from './styles';
import listOfMonths from '../../utils/months';
import SelectInput from '../../components/SelectInput';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import MessageBox from '../../components/MessageBox';
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinning from '../../assets/grinning.svg';

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYeatSelected] = useState<number>(new Date().getFullYear() - 1);
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

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('Invalid amount!');
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('Invalid amount!');
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalGains, totalExpenses]);

    const message = useMemo(() => {
        if (totalBalance < 0) {
            return {
                title: 'Que triste!',
                description: 'Neste mês, você gastou mais do que deveria!',
                footerText: 'Verifique seus gastos e tente cortar algumas coisas desnecessárias.',
                icon: sadImg
            }
        } else if (totalBalance === 0) {
            return {
                title: 'Ufaa!',
                description: 'Neste mês, você gastou exatamente o que ganhou!',
                footerText: 'Tenha cuidado. No próximo mês tente poupar o seu dinheiro.',
                icon: grinning
            }
        }
        else {
            return {
                title: 'Muito bem!',
                description: 'Sua carteira está positiva!',
                footerText: 'Continue assim. Considere investir o seu saldo.',
                icon: happyImg,
            }
        }
    }, [totalBalance]);

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;
        const percentGains = (totalGains / total) * 100;
        const percentExpenses = (totalExpenses / total) * 100;

        const data = [{
            name: 'Entradas',
            value: totalGains,
            percent: Number(percentGains.toFixed(1)),
            color: '#F7931B'
        },
        {
            name: 'Saídas',
            value: totalExpenses,
            percent: Number(percentExpenses.toFixed(1)),
            color: '#E44C4E'
        }]

        return data;
    }, [totalGains, totalExpenses]);


    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch {
            throw new Error('Invalid month value. Is accept 0 - 24.');
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYeatSelected(parseYear);
        } catch {
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
                    amount={totalBalance}
                    footerlabel='Atualizado com base nas entradas e saídas'
                    icon='dolar'
                    color='#4E41F0'
                />
                <WalletBox
                    title='Entradas'
                    amount={totalGains}
                    footerlabel='Atualizado com base nas entradas e saídas'
                    icon='arrowUp'
                    color='#F7931B'
                />
                <WalletBox
                    title='Saída'
                    amount={totalExpenses}
                    footerlabel='Atualizado com base nas entradas e saídas'
                    icon='arrowDown'
                    color='#E44C4E'
                />
                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />
                <PieChartBox data={relationExpensesVersusGains} />
            </Content>
        </Container>
    );
}

export default Dashboard;