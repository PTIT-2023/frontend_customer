import { notifications } from "@mantine/notifications";
import { NOTIFICATION_TIME_OUT } from "@/config/constants";

export function showSuccessNotification(message?: string) {
  notifications.show({
    message: message ?? "thành công",
    autoClose: NOTIFICATION_TIME_OUT,
    withBorder: true,
  });
}

export function showFailNotification(message?: string) {
  notifications.show({
    message: message ?? "thất bại",
    color: "red",
    autoClose: NOTIFICATION_TIME_OUT,
    withBorder: true,
  });
}
