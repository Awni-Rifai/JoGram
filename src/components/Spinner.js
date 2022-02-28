import React from 'react';
import styles from './Spinner.module.css'

export default function Spinner() {
  return <>
   <div class={styles.center}>
  <div class={styles.wave}></div>
  <div class={styles.wave}></div>
  <div class={styles.wave}></div>
  <div class={styles.wave}></div>
  <div class={styles.wave}></div>
  <div class={styles.wave}></div>
  <div class={styles.wave}></div>
  <div class={styles.wave}></div>
  <div class={styles.wave}></div>
  <div class={styles.wave}></div>
</div>
  </>;
}
