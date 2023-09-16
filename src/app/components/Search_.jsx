"use client";
import { Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const search = ({ setUserData, setLoading }) => {
  const [query, setquery] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    setUserData(null);
    try {

      const res = await fetch(`https://api.github.com/users/${query}`);
      const data = await res.json();

      if (data.message) {
        return toast({
          title: "Error",
          description:
            data.message === "Not Found" ? "User not found" : data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      setUserData(data);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
  const addUserToLocalStorage = (data, username) => {
		const users = JSON.parse(localStorage.getItem("github-users")) || [];
		const userExists = users.find((user) => user.id === username);

		if (userExists) {
			users.splice(users.indexOf(userExists), 1);
		}
		users.unshift({
			id: username,
			avatar_url: data.avatar_url,
			name: data.name,
			url: data.html_url,
		});

		localStorage.setItem("github-users", JSON.stringify(users));
	};

  return (
    <form onSubmit={handleSubmit}>
      <Input
        variant={"outline"}
        placeholder={"Type a username ie., ali "}
        focusBorderColor="green.500"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
      <Button
        size={"md"}
        type="submit"
        colorScheme="whatsapp"
        mt={4}
        disabled={!query}
        opacity={!query ? 0.5 : 1}
      >
        Search
      </Button>
    </form>
  );
};

export default search;
