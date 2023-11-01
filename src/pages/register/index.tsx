import { Container, Center, Stack, TextInput, Group, Button, Anchor, PasswordInput, Radio } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useCallback } from "react";
import { z } from "zod";

const Register = () => {
  const form = useForm<RegisterProf>({
    initialValues: {
      fullName: "",
      gender: "male",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    validate: resolver,
  });
  const onSubmit = useCallback((value: RegisterProf) => {
    // TODO: register
    console.log(value);
    if (value.password !== value.confirmPassword) {
      form.setErrors({
        password: "Password and Confirm Password do not match.",
        confirmPassword: "Password and Confirm Password do not match.",
      });
      return;
    }
  }, [form]);
  const handleGenderChange = (selectedGender: string) => {
    form.setValues({
      gender: selectedGender,
    });
  };

  return (
    <Container h="100vh" size="" bg="var(--mantine-color-gray-light)">
      <Container pt="5rem">
        <Container size="xs" p={0} bg="white" style={{ borderRadius: "4px" }}>
          <Center>
            <Stack gap="1rem" p="2rem">
              <Center fz="1.4rem">Free Register</Center>
              <div>Get your free MyMy Store account now</div>
            </Stack>
          </Center>
          <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
            <Stack p="2rem">
              <TextInput label="FullName" placeholder={"Enter Full name"} {...form.getInputProps("fullName")} />
              <Radio.Group value={form.values.gender} name="gender" label="Gender" onChange={handleGenderChange}>
                <Group>
                  <Radio label="Male" value="male" checked={form.values.gender === "male"} />
                  <Radio label="Female" value="female" checked={form.values.gender === "female"} />
                </Group>
              </Radio.Group>
              <TextInput label="FullName" placeholder={"Enter Full name"} {...form.getInputProps("email")} />
              <PasswordInput label="Password" placeholder={"Enter Password"} {...form.getInputProps("password")} />
              <PasswordInput
                label="Confirm Password"
                placeholder={"Enter Password"}
                {...form.getInputProps("confirmPassword")}
              />
              <TextInput label="Phone" placeholder={"Enter Phone"} {...form.getInputProps("phone")} />
              <Group justify="flex-start" mt="xl">
                <Button w="100%" type="submit">
                  Register
                </Button>
              </Group>
            </Stack>
          </form>
        </Container>
      </Container>
      <Center mt="2rem">
        Already have an account ?&nbsp;
        <Anchor href="/login" underline="never">
          Login
        </Anchor>
      </Center>
    </Container>
  );
};
export default Register;

const phoneRegex = new RegExp(/^[0-9]{9,15}$/);
const schema = z.object({
  fullName: z.string().min(1, { message: "Please enter FullName" }),
  gender: z.string().min(1, { message: "Please select a gender" }),
  email: z.string().min(1, { message: "Please enter Email" }),
  password: z.string().min(1, { message: "Please enter Password" }),
  confirmPassword: z.string().min(1, { message: "Please enter Password" }),
  phone: z.string().min(1, { message: "Please enter Phone" }).regex(phoneRegex, "Invalid Phone number!"),
});
const resolver = zodResolver(schema);
type RegisterProf = z.infer<typeof schema>;
