import React from 'react'

interface FeaturesProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function Features({ children, className = '', ...props }: FeaturesProps) {
  return (
    <ul className={`grid grid-cols-3 grid-rows-4 gap-8 ${className}`} {...props}>
      {React.Children.map(children, (child, i) => (
        <li
          className={`row-span-2 ${
            i === 0 ? 'row-start-2' : i === 1 ? 'row-start-1' : i === 2 ? 'row-start-2' : i === 3 ? 'row-start-3' : ''
          }`}
        >
          {React.isValidElement(child) && React.cloneElement(child, { className: 'h-full' })}
        </li>
      ))}
    </ul>
  )
}

export default Features
