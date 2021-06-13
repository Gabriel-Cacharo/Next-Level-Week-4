import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://cdn.discordapp.com/attachments/747566334908432524/813358541162151986/551af95b16a5d00307d1e54d3f8784a2.gif" alt="Shank7"/>
      <div>
        <strong>Shank7</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}