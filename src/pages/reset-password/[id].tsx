import { Container, Center, Stack, Group, Button, Anchor, PasswordInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { z } from "zod";

const ResetPassword = () => {
  const params = useParams();
  // TODO: using params
  useEffect(() => {
    console.log(params);
  }, [params]);

  const form = useForm<ResetPasswordProf>({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validate: resolver,
  });

  const onSubmit = (value: ResetPasswordProf) => {
    if (value.confirmNewPassword !== value.newPassword) {
      form.setErrors({
        newPassword: "New password and confirm new password do not match.",
        confirmNewPassword: "New password and confirm new password do not match.",
      });
      return;
    }
    // TODO: reset password
    console.log(value);
  };
  return (
    <Container h="100vh" size="" bg="var(--mantine-color-gray-light)">
      <Container pt="5rem">
        <Container size="xs" p={0} bg="white" style={{ borderRadius: "4px" }}>
          <Center>
            <Stack gap="1rem" p="2rem">
              <Center fz="1.4rem">Reset Password</Center>
              <div>Re-Password with MyMy Store.</div>
            </Stack>
          </Center>

          <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
            <Stack p="2rem" gap="1rem">
              <PasswordInput
                label="Current password:"
                placeholder="Current password"
                {...form.getInputProps("currentPassword")}
              />
              <PasswordInput label="New password:" placeholder="New password" {...form.getInputProps("newPassword")} />
              <PasswordInput
                label="Confirm new password:"
                placeholder="Confirm new password"
                {...form.getInputProps("confirmNewPassword")}
              />
              <Group justify="flex-end" mt="xl">
                <Button type="submit">Reset</Button>
              </Group>
            </Stack>
          </form>
        </Container>
        <Center mt="2rem">
          Remember It ?&nbsp;
          <Anchor href="/login" underline="never">
            Sign In here
          </Anchor>
        </Center>
      </Container>
    </Container>
  );
};
export default ResetPassword;

const schema = z.object({
  currentPassword: z.string().min(1, { message: "Please enter password" }),
  newPassword: z.string().min(1, { message: "Please enter password" }),
  confirmNewPassword: z.string().min(1, { message: "Please enter password" }),
});
const resolver = zodResolver(schema);
type ResetPasswordProf = z.infer<typeof schema>;
