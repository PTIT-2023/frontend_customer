import { notifications } from "@mantine/notifications";
import { NOTIFICATION_TIME_OUT } from "@/config/constants";

export function showSuccessNotification() {
  notifications.show({
    message: "thành công",
    autoClose: NOTIFICATION_TIME_OUT,
    withBorder: true,
  });
}

export function showFailNotification() {
  notifications.show({
    message: "thất bại",
    color: "red",
    autoClose: NOTIFICATION_TIME_OUT,
    withBorder: true,
  });
}
