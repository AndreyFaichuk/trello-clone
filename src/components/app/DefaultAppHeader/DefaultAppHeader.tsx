import React from 'react';
import { BaseHeader } from '../BaseHeader';

import trelloIcon from '../../../assets/icons/trelloIcon.svg';

export const DefaultAppHeader = () => {
    return (
        <>
            <BaseHeader.Root>
                <BaseHeader.Logo logo={trelloIcon}></BaseHeader.Logo>
                <BaseHeader.Section>Logo</BaseHeader.Section>
            </BaseHeader.Root>
        </>
    );
};
