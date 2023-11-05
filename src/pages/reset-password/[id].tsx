import { Loader } from "@/Components/Common/Loader";
import useToggle from "@/hooks/useToggle";
import { resetPassword } from "@/services/auth";
import { Container, Center, Stack, Group, Button, Anchor, PasswordInput, Flex } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useParams } from "next/navigation";
import { useCallback, useState } from "react";
import { z } from "zod";
import { IconArrowRight } from "@tabler/icons-react";

const ResetPassword = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, toggle] = useToggle(false);

  const form = useForm<ResetPasswordProf>({
    initialValues: {
      token: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validate: resolver,
  });

  const onSubmit = useCallback(
    async (value: ResetPasswordProf) => {
      if (value.confirmNewPassword !== value.newPassword) {
        form.setErrors({
          newPassword: "New password and confirm new password do not match.",
          confirmNewPassword: "New password and confirm new password do not match.",
        });
        return;
      }
      setIsLoading(true);
      try {
        value.token = params.id as string;
        const res = await resetPassword(value);
        res ? toggle() : form.setErrors({ currentPassword: "Processing failed, please check your request!" });
      } catch (e) {
        form.setErrors({ currentPassword: "Processing failed, please check your request!" });
      }
      setIsLoading(false);
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form, toggle],
  );
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
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!openModal ? (
                <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
                  <Stack p="2rem" gap="1rem">
                    <PasswordInput
                      label="Current password:"
                      placeholder="Current password"
                      {...form.getInputProps("currentPassword")}
                    />
                    <PasswordInput
                      label="New password:"
                      placeholder="New password"
                      {...form.getInputProps("newPassword")}
                    />
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
              ) : (
                <Center pb="2rem">
                  <Anchor href="/login" underline="never">
                    <Flex align="center">
                      Go to Login
                      <IconArrowRight size={16} />
                    </Flex>
                  </Anchor>
                </Center>
              )}
            </>
          )}
        </Container>
      </Container>
    </Container>
  );
};
export default ResetPassword;

const schema = z.object({
  token: z.string(),
  currentPassword: z.string().min(1, { message: "Please enter password" }),
  newPassword: z.string().min(1, { message: "Please enter password" }),
  confirmNewPassword: z.string().min(1, { message: "Please enter password" }),
});
const resolver = zodResolver(schema);
export type ResetPasswordProf = z.infer<typeof schema>;
