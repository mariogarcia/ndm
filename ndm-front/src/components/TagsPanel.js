import React from 'react'
import { TagCloud } from 'react-tagcloud'

const tagsOptions = {
  luminosity: 'dark',
    hue: 'green'
};

export const TagsPanel = ({relevantWords}) => (
    <TagCloud minSize={12}
              maxSize={35}
              colorOptions={tagsOptions}
              tags={relevantWords}
              onClick={tag => alert(`'${tag.value}' was selected!`)} />
)
