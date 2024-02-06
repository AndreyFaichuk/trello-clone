import React from 'react';
import { BaseHeader } from '../BaseHeader';

export const DefaultAppHeader = () => {
    return (
        <>
            <BaseHeader.Root>
                <BaseHeader.Section>1 section</BaseHeader.Section>
                <BaseHeader.Section>2 section</BaseHeader.Section>
                <BaseHeader.Section>2 section</BaseHeader.Section>
                <BaseHeader.Section>2 section</BaseHeader.Section>
            </BaseHeader.Root>
        </>
    );
};
