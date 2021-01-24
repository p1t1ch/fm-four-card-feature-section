import React from 'react'

interface FeaturesProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function Features({ children, className = '', ...props }: FeaturesProps) {
  return (
    <ul className={`grid md:grid-cols-3 md:grid-rows-4 gap-6 md:gap-8 ${className}`} {...props}>
      {React.Children.map(children, (child, i) => (
        <li
          className={`md:row-span-2 ${
            i === 0
              ? 'md:row-start-2'
              : i === 1
              ? 'md:row-start-1'
              : i === 2
              ? 'md:row-start-2'
              : i === 3
              ? 'md:row-start-3'
              : ''
          }`}
        >
          {React.isValidElement(child) && React.cloneElement(child, { className: 'h-full' })}
        </li>
      ))}
    </ul>
  )
}

export default Features
