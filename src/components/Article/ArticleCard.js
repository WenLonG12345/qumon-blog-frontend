import {
  Box,
  Heading,
  Text,
  Image,
  AspectRatio,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { get } from "lodash";
import ArticleAuthor from "./ArticleAuthor";
import {Link as NextLink} from 'next/link';
import { GrArticle } from "react-icons/gr";

const baseUrl = process.env.API_URL;

const ArticleCard = ({ item }) => {
  const { attributes } = item;
  const {
    title,
    description,
    content,
    publishedAt,
    category,
    cover,
    author,
    user,
    slug,
  } = attributes || {};
  const imgUrl = get(cover, "data.attributes.url", "");
  const imgName = get(cover, "data.attributes.name", "");
  const userName = get(user, "data.attributes.username", "");
  const userAvatar = get(
    user,
    "data.attributes.avatar.data.attributes.url",
    ""
  );

  return (
    <Link href={`/article/${slug}`} style={{textDecoration: 'none'}}>
      <Box w="100%" cursor={"pointer"}>
        <AspectRatio borderRadius="lg" overflow="hidden" ratio={4.5 / 3}>
          {imgUrl ? (
            <Image
              transform="scale(1.0)"
              src={`${baseUrl}${imgUrl}`}
              alt={imgName}
              objectFit="contain"
              width="100%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
            />
          ) : (
            <Box bg={useColorModeValue("blackAlpha.300", "whiteAlpha.500")}>
              <GrArticle size={30} />
            </Box>
          )}
        </AspectRatio>
        {/* <BlogTags tags={["Engineering", "Product"]} marginTop="3" /> */}
        <Heading fontSize="xl" marginTop="2">
          {title}
        </Heading>
        <Text as="p" fontSize="md" marginTop="2">
          {description}
        </Text>
        <ArticleAuthor avatar={userAvatar} name={userName} date={publishedAt} />
      </Box>
    </Link>
  );
};

export default ArticleCard;
