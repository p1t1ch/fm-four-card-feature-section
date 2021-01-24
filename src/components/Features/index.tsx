import React from 'react'

interface FeaturesProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function Features({ children, className = '', ...props }: FeaturesProps) {
  return (
    <ul className={`grid grid-cols-3 grid-rows-4 ${className}`} {...props}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}

export default Features
