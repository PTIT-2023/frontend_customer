import { Avatar } from "@/Components/Common/Icons/Avatar";
import styles from "./index.module.css";
import { AccountForm } from "@/Components/Main/Account/AccountForm";
import { AccountButton } from "@/Components/Main/Account/AccountButton";

export default function Account() {
  return (
    <div className={styles.container}>
      <div className={styles.containerCenter}>
        <Avatar width={295} height={295} className={styles.avatar} />
        <div className={styles.detail}>
          <AccountForm />
          <AccountButton />
        </div>
      </div>
    </div>
  );
}

Account.layout = "Menu";
