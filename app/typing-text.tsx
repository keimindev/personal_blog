'use client'

import React, { useEffect, useState } from 'react'

interface TypingTextProps {
  texts: string[]
  speed?: number
  eraseSpeed?: number
  delay?: number
}

const TypingText: React.FC<TypingTextProps> = ({
  texts,
  speed = 100,
  eraseSpeed = 50,
  delay = 1000,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const currentText = texts[currentTextIndex]

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1))
        if (displayedText === '') {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }, eraseSpeed)
    } else {
      if (displayedText !== currentText) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        }, speed)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), delay)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, texts, currentTextIndex, speed, eraseSpeed, delay])

  return (
    <span className="animate-pulse border-r-2 border-black pr-1 text-4xl">{displayedText}</span>
  )
}

export default TypingText
