import React from "react";
import styles from './TeamDrawing.module.css';

export default function TeamDrawing() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.drawing} src={require('../../srcs/teams/team_drawing.png')} alt="" />
      </div>
      <img className={styles.speech} src={require('../../srcs/teams/team_speech.png')} alt="" />
    </>
);
}