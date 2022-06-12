import { HStack, Image, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";

const baseUrl = process.env.API_URL;

const BlogAuthor = ({ avatar, name, date }) => {
  return (
    <HStack mt={5} spacing="2" display="flex" alignItems="center">
      {avatar && (
        <Image
          borderRadius="full"
          boxSize="25px"
          src={`${baseUrl}${avatar}`}
          alt="avatar"
        />
      )}

      <Text fontSize="xs">{name}</Text>
      <Text fontSize="xs">{dayjs(date).format("YYYY-MM-DD")}</Text>
    </HStack>
  );
};

export default BlogAuthor;
