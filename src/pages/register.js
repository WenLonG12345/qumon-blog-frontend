import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  FormHelperText,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const imgRef = useRef();
  const [avatarPreview, setAvatarPreview] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    if(!avatarPreview) {
      setError('avatar', { type: 'custom', message: 'Please select your avatar' });
      return;
    }

    // continue with registration
  };

  const onChangeAvatar = (e) => {
    setAvatarPreview(URL.createObjectURL(e.target.files[0]));
  };

    return (
    <Flex align={"center"} justify={"center"}>
      <Stack
        spacing={5}
        w={"full"}
        maxW={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={5}
        align="center"
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Account Registration
        </Heading>
        <FormControl id="avatar" isRequired>
          <FormLabel>Avatar</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src={avatarPreview}>
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                  onClick={() => setAvatarPreview(undefined)}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <input
                ref={(e) => (imgRef.current = e)}
                type="file"
                hidden
                accept="image/*"
                onChange={onChangeAvatar}
              />
              <Button w="full" onClick={() => imgRef.current.click()}>
                Set Avatar
              </Button>
            </Center>
          </Stack>
          {errors.avatar && (
            <FormHelperText color="red">
              {errors.avatar.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl id="username" isRequired>
          <FormLabel>Username (will be displayed)</FormLabel>
          <Input
            placeholder="Enter your username"
            _placeholder={{ color: "gray.500" }}
            {...register("username", {
              required: "Please enter username",
            })}
          />
          {errors.username && (
            <FormHelperText color="red">
              {errors.username.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="Enter your email"
            _placeholder={{ color: "gray.500" }}
            {...register("email", {
              required: "Please enter email.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <FormHelperText color="red">{errors.email.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Enter your password"
            _placeholder={{ color: "gray.500" }}
            type="password"
            {...register("password", {
              required: "Please enter password.",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <FormHelperText color="red">
              {errors.password.message}
            </FormHelperText>
          )}
        </FormControl>

        <Button
          bg={"blue.400"}
          color={"white"}
          w="full"
          _hover={{
            bg: "blue.500",
          }}
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Stack>
    </Flex>
  );
};

export default RegisterPage;
