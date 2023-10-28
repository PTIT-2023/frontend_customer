import { Button, Text } from "@mantine/core";
import styles from "./index.module.css";
import typo from "@/styles/text.module.css";

export function AccountButton() {
  return (
    <div className={styles.container}>
      <Button
        onClick={() => null}
        radius="xl"
        className={styles.changePasswordButton}
      >
        <Text className={`${typo.size_14_600} ${styles.textButton}`}>Đổi mật khẩu</Text>
      </Button>

      <Button
        onClick={() => null}
        radius="xl"
        className={styles.updateUserButton}
      >
        <Text className={`${typo.size_14_600} ${styles.textButton}`}>Sửa thông tin</Text>
      </Button>
    </div>
  );
}
