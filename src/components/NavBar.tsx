import { Box, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    return (
      <Flex bg='tomato' p={4}>
        <Box ml={'auto'} justifyContent={'flex-start'}>
          <NextLink href="/login">
          <Link color={'black'} mr={2}>login</Link>
          </NextLink>
          <NextLink href="/register">
            <Link color={'black'}>register</Link>
          </NextLink>
        </Box>
      </Flex>
    );
}