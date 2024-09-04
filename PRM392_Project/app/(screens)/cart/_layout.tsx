import React from 'react';
import Cart from './cart';
import { StyledView } from '@/components/styled.tsx';

export default function CartLayout() {
    return (
        <StyledView classname='flex-1 '>
            <Cart />
        </StyledView>
    );
}
