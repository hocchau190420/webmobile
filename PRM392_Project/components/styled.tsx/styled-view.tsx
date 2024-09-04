import React from 'react';
import { StyledComponent, styled } from 'nativewind';
import { SafeAreaView } from 'react-native';

export default function StyledView({
    children,
    classname,
}: {
    children: React.ReactNode;
    classname?: string;
}) {
    return (
        <StyledComponent
            component={SafeAreaView}
            className={classname}
        >
            {children}
        </StyledComponent>
    );
}
