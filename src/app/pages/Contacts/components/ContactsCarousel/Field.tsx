import { ReactNode } from "react";
import styles from "./Field.module.css";
function Field({
    title,
    value
}: {
    title: string;
    value: ReactNode
}) {

    return (
        <div className={styles.field}>
            <div className={styles.key}>{title}:</div>
            <div className={styles.value}>{value}</div>
        </div>
    );

};

export default Field;
