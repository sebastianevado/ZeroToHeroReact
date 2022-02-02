import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://images.dog.ceo/breeds/pomeranian/n02112018_5367.jpg'

export const Category = ({
  cover = DEFAULT_IMAGE,
  path,
  emoji = '?',
  dog = 'dog'
}) => (
  <Anchor href={path}>
    <Image src={cover} alt={dog} />
    {emoji}
  </Anchor>
)
