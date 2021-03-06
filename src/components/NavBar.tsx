import { Box, Button, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { useMeQuery } from '../generated/graphql';

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{data, fetching}] = useMeQuery();
  let body = null;

  if (fetching) {
    // data is loading

  } else if (!data?.me) {
    //user is NOT logged in
    body = (
      <>
        <NextLink href="/login">
          <Link color={'black'} mr={2}>login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link color={'black'}>register</Link>
        </NextLink>
      </>
    )
  } else {
    // user IS logged in
    body = (
      <Flex>
        <Box mr={2}>{data.me.username}</Box>
        <Button variant={'link'} color={'black'} fontWeight={'normal'}>Log Out</Button>
      </Flex>
    )
  }
    return (
      <Flex bg='tomato' p={4}>
        <Box ml={'auto'} justifyContent={'flex-start'}>
          {body}
        </Box>
      </Flex>
    );
}