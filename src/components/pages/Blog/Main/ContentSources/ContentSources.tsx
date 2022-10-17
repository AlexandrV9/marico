import React from 'react';
import { List } from '../List';

import StyledContentSources from './StyledContentSources';

interface ContentSourcesProps {};

export const ContentSources = () => {
  return (
    <StyledContentSources>
      <h1>Content Sources</h1>
      <p className='subtitle'>Connect these sources to your Marico homepage.</p>
      <List />
    </StyledContentSources>
  );
};