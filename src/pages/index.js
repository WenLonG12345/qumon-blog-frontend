import {
  Container,
  Text,
  Heading,
  Box,
  Link,
  useColorModeValue,
  Image,
  VStack,
  WrapItem,
  Divider,
  Wrap,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ArticleCard from "../components/Article/ArticleCard";
import { fetchAPI } from "../lib/api";

const mapState = ({ articlesModel }) => ({
  token: authModel.token,
});

const Home = ({ articles }) => {
  console.log("home", articles);

  return (
    <Container maxW={"container.lg"} p="10">
      <Heading as="h2">Articles</Heading>
      <SimpleGrid columns={[1, 2, 2, 3]} spacing={10} mt={5}>
        {articles.map((item) => {
          return <ArticleCard item={item} key={item.id}/>;
        })}
      </SimpleGrid>
    </Container>
  );
};

export async function getStaticProps() {
  const res = await fetchAPI("/articles", {
    populate: {
      author: { populate: ['picture'] },
      category: { populate: "*" },
      cover: { populate: "*" },
    },
  });

  return {
    props: {
      articles: res.data,
    },
    revalidate: 1,
  };
}

// export async function getStaticProps() {
// Run API calls in parallel
// const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
//   fetchAPI("/articles", { populate: ["image", "category"] }),
//   fetchAPI("/categories", { populate: "*" }),
//   fetchAPI("/homepage", {
//     populate: {
//       hero: "*",
//       seo: { populate: "*" },
//     },
//   }),
// ]);

// return {
//   props: {
//     articles: articlesRes.data,
//     categories: categoriesRes.data,
//     homepage: homepageRes.data,
//   },
//   revalidate: 1,
// };
// }

export default Home;
