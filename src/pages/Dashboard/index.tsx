import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import { Container } from './styles';
import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => {
    const options = [
        { value: 'Caick', label: 'Caick' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Ana', label: 'Ana' },
    ];

    return (
        <Container>
            <ContentHeader title='Dashboard' lineColor='#F7931B'>
                <SelectInput options={options} onChange={() => { }} />
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;