import { HStack, Tag } from '@chakra-ui/react';
import React from 'react'

const BlogTags = ({tags}) => {
  return (
    <HStack spacing={2} marginTop={'5px'}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  )
}

export default BlogTags