import { Box, Flex, Text, Heading, List, ListItem, Link } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const GitHubFollowingList = ({ username }) => {
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    
    const fetchFollowing = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/following`);
        if (response.ok) {
          const data = await response.json();
          setFollowing(data);
        } else {
          console.error('Error fetching data from GitHub API');
        }
      } catch (error) {
        console.error('Error fetching data from GitHub API', error);
      }
    };

    fetchFollowing();
  }, [username]);

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        GitHub Users Followed by {username}
      </Heading>
      <List spacing={3}>
        {following.map((user) => (
          <ListItem key={user.id}>
            <Link href={user.html_url} target="_blank">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight="bold">{user.login}</Text>
                <Text color="gray.600">GitHub</Text>
              </Flex>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GitHubFollowingList;
