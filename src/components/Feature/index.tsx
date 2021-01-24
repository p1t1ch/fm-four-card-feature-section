import React from 'react'

interface FeatureProps extends React.HTMLProps<HTMLUListElement> {
  name: string
  children: string
  Icon: SvgrComponent
  color: 'red' | 'cyan' | 'orange' | 'blue'
}

function Feature({ name, children, Icon, color, className = '', ...props }: FeatureProps) {
  return (
    <article className={`border-t-4 border-primary-${color} ${className}`} {...props}>
      <h2>{name}</h2>
      <p>{children}</p>
      <Icon />
    </article>
  )
}

export default Feature
