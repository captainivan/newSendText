import Link from "next/link";
import { Send, Download, RotateCcw } from "lucide-react";
import styles from "@/app/styles/NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.upperDiv}>
                <div className={styles.navbarLogo}>
                    <Send size={28} color="#22c55e" />
                    <p className={styles.logoText}>SEND<span>TEXT</span></p>
                </div>

                <div className={styles.navbarContent}>
                    <h1 className={styles.navbarTitle}>
                        SendText Anywhere Without Email or Phone Number
                    </h1>
                    <p className={styles.navbarSubtext}>
                        Say Goodbye to Spam with Secure Anonymous Messaging! 
                        Tired of intrusive messages? Use our temporary texting solution to
                        send and receive messages anonymously. 
                        Enjoy end-to-end encrypted communication that keeps your privacy
                        protected. 
                        Wondering how you can text without approval? With SendText, you can
                        communicate freely without constraints. 
                        Learn how to transmit a circuit signal via SMS and discover innovative
                        ways to send texts effortlessly!
                    </p>
                </div>
            </div>

            <div className={styles.navbarActions}>
                <Link href="/" className={styles.navBtn}>
                    <Send size={18} />
                    <span>Send</span>
                </Link>
                <Link href={`../receiveBody`} className={styles.navBtn}>
                    <Download size={18} />
                    <span>Receive</span>
                </Link>
                <Link href="../sended" className={styles.navBtn}>
                    <RotateCcw size={18} />
                    <span>Sended</span>
                </Link>
                <Link href="../received" className={styles.navBtn}>
                    <RotateCcw size={18} />
                    <span>Received</span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
