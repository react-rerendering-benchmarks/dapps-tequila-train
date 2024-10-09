import { memo } from "react";
import styles from './ApiLoader.module.scss';
export const ApiLoader = memo(() => <p className={styles.loader}>Initializing API</p>);