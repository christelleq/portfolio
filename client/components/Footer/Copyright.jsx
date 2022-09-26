import React from 'react'

export default function Copyright() {
  const endYear = () => {
    const currentYear = new Date().getFullYear()
    return currentYear === 2022 ? '' : `- ${currentYear}`
  }
  return (
    <p className="pb-20">
      Copyright &copy; 2022 {endYear()} Christelle Quilang
    </p>
  )
}
