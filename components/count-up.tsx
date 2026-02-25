"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  separator?: string
  className?: string
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export function CountUp({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  separator = ",",
  className,
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  const formatNumber = useCallback(
    (num: number) => {
      const rounded = Math.floor(num)
      if (!separator) return `${prefix}${rounded}${suffix}`
      return `${prefix}${rounded.toLocaleString("en-US")}${suffix}`
    },
    [prefix, suffix, separator]
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutExpo(progress)

      setCount(Math.floor(easedProgress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [hasStarted, end, duration])

  return (
    <span ref={ref} className={className}>
      {formatNumber(count)}
    </span>
  )
}
