import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import { Container } from './styles';
import SelectInput from '../../components/SelectInput';

const List: React.FC = () => {
    const options = [
        { value: 'Caick', label: 'Caick' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Ana', label: 'Ana' },
    ];

    return (
        <Container>
            <ContentHeader title='Saídas' lineColor='#E44C4E'>
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
}

export default List;