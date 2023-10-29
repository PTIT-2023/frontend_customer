import {
  Anchor,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Group,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useCallback, useEffect } from "react";
import { z } from "zod";
import { IconLock } from "@tabler/icons-react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/main");
    }
  });
  const form = useForm<LoginProps>({
    initialValues: {
      name: "",
      password: "",
    },
    validate: resolver,
  });

  const onLogin = useCallback((value: LoginProps) => {
    // TODO: login
    console.log(value);
  }, []);

  return (
    <Container h="100vh" size="" bg="var(--mantine-color-gray-light)">
      <Container pt="5rem">
        <Container size="xs" p={0} bg="white" style={{ borderRadius: "4px" }}>
          <Center>
            <Stack gap="1rem" p="2rem">
              <Center fz="1.4rem">Welcome Back !</Center>
              <div>Sign in to continue to MyMy Store.</div>
            </Stack>
          </Center>
          <Container>
            <Stack gap="xs" p="2rem">
              <Box py="1rem">
                <form onSubmit={form.onSubmit((values) => onLogin && onLogin(values))}>
                  <TextInput label="Email" placeholder={"Enter email"} {...form.getInputProps("name")} />
                  <PasswordInput label="Password" placeholder="Enter password" {...form.getInputProps("password")} />
                  <Group justify="flex-start" mt="xl">
                    <Checkbox defaultChecked label="Remember me" />
                    <Button type="submit" w="100%">
                      Login
                    </Button>
                  </Group>
                </form>
              </Box>
              <Center w="100%" fz="0.8rem">
                <Anchor href="/forgot-password" underline="never">
                  <Center>
                    <IconLock size="1rem" />
                    Forgot your password?
                  </Center>
                </Anchor>
              </Center>
            </Stack>
          </Container>
        </Container>
        <Center mt="1rem">
          Do not have an account ?&nbsp;
          <Anchor href="/register" underline="never">
            Register now
          </Anchor>
        </Center>
      </Container>
    </Container>
  );
}
const schema = z.object({
  password: z.string().min(1, { message: "Please enter password" }),
  name: z.string().min(1, { message: "Please enter Email" }),
});
const resolver = zodResolver(schema);
type LoginProps = z.infer<typeof schema>;
