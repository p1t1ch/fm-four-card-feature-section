import React from 'react'

interface FeatureProps extends React.HTMLProps<HTMLUListElement> {
  name: string
  children: string
  Icon: SvgrComponent
  color: 'red' | 'cyan' | 'orange' | 'blue'
}

function Feature({ name, children, Icon, color, className = '', ...props }: FeatureProps) {
  return (
    <article
      className={`flex flex-col relative overflow-hidden before:color-line-${color} p-7 md:p-8 bg-neutral-white shadow rounded-lg ${className}`}
      {...props}
    >
      <h2 className="font-semibold text-xl">{name}</h2>
      <p className="text-feature text-primary text-opacity-50 mb-8">{children}</p>
      <Icon className="mt-auto ml-auto" />
    </article>
  )
}

export default Feature
