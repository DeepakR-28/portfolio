import { Dvr } from '@mui/icons-material'
import React from 'react'
import styles from './index.module.css'
export function ProjectFile(props) {
  console.log(props.projectName)
  switch(props.projectName){
    case "vishwall":
      return (
        <div className={styles.projectInfo}>
          <div>Birthday wish aggregator to wish your friends</div>
          <div><a className={styles.link} target="_blank" href="https://deepakr28.hashnode.dev/vishwall">Blog URL</a></div>
          <div><a className={styles.link} target="_blank" href="https://github.com/DeepakR-28/vishwall">GitHub URL</a></div>
          <div><a className={styles.link} target="_blank" href="https://vishwall.vercel.app/vishwall">Live URL</a></div>
        </div>
      )
    case "hindi_wordle":
      return (
        <div className={styles.projectInfo}>
          <div>World clone for hindi words with different lengths</div>
          <div><a className={styles.link} target="_blank" href="https://github.com/DeepakR-28/hindi-wordle">GitHub URL</a></div>
          <div><a className={styles.link} target="_blank" href="https://hindiwordle.vercel.app/">Live URL</a></div>
        </div>
      ) 
    case "medium_clone_backend":
      return (
        <div className={styles.projectInfo}>
          <div>Medium clone backend written in GoLang, which uses JWT authentication and authorization</div>
          <div><a className={styles.link} target="_blank" href="https://github.com/DeepakR-28/conduit_golang_backend">GitHub URL</a></div>
        </div>
      ) 
    case "daily_progress":
      return (
        <div className={styles.projectInfo}>
          <div>A website to track my daily progress while learning a tech stack</div>
          <div><a className={styles.link} target="_blank" href="https://github.com/DeepakR-28/dailycodingblog">GitHub URL</a></div>
          <div><a className={styles.link} target="_blank" href="https://deepakr-28.github.io/dailycodingblog/">Live URL</a></div>
        </div>
      ) 
    default:
      return (<div>default</div>)
  }
}