import { Box, Text, Image, AspectRatio, Heading } from "@chakra-ui/react";
import { get } from "lodash";
import React from "react";
import ReactMarkdown from "react-markdown";
import DetailAuthor from "../../components/Detail/DetailAuthor";
import { fetchAPI } from "../../lib/api";

const baseUrl = process.env.API_URL;

const ArticleSlug = ({ article, categories }) => {
  const { attributes: articleAttr } = article;
  const { author, category, content, cover, description, title, publishedAt } =
    articleAttr;
  const coverUrl = get(cover, "data.attributes.url", "");
  const coverName = get(cover, "data.attributes.name", "");
  const authorName = get(author, "data.attributes.name", "");
  const avatarUrl = get(
    author,
    "data.attributes.picture.data.attributes.url",
    ""
  );

  return (
    <Box p={10}>
      <Heading as={"h1"} fontSize={"2xl"}>
        {title}
      </Heading>
      <AspectRatio borderRadius="lg" overflow="hidden" ratio={16 / 9} my={5}>
        <Image
          src={`${baseUrl}${coverUrl}`}
          alt={coverName}
          objectFit="contain"
          width="100%"
        />
      </AspectRatio>

      <ReactMarkdown>{content}</ReactMarkdown>
      <DetailAuthor avatar={avatarUrl} name={authorName} date={publishedAt} />
    </Box>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["cover", "category", "author.picture"],
  });
  const categoriesRes = await fetchAPI("/categories");

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  };
}

export default ArticleSlug;
