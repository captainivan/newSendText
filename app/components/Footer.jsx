import styles from "@/app/styles/Footer.module.css";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
      <Send size={28} color="#22c55e" />
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} SendText. All rights reserved.
      </p>
    </footer>
  );
}
