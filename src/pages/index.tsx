import React from 'react'
import Seo from '@/components/Seo'
import Features from '@/components/Features'
import Feature from '@/components/Feature'
import { ReactComponent as SupervisorIcon } from '@/icons/supervisor.svg'
import { ReactComponent as TeamBuilderIcon } from '@/icons/team-builder.svg'
import { ReactComponent as CalculatorIcon } from '@/icons/calculator.svg'
import { ReactComponent as KarmaIcon } from '@/icons/karma.svg'

function IndexPage() {
  return (
    <main className="min-h-screen grid place-items-center px-8 py-20">
      <Seo title="Frontend Mentor: Four card feature section" />
      <section className="max-w-lg text-center mb-16">
        <p className="font-extralight text-2xl md:text-4xl mb-1 md:mb-3">Reliable, efficient delivery</p>
        <h1 className="font-semibold text-2xl md:text-4xl mb-3">Powered by Technology</h1>
        <p className="text-primary text-opacity-50">
          Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is
          successful
        </p>
      </section>
      <section className="max-w-6xl">
        <h2 className="sr-only">Our features</h2>
        <Features>
          <Feature name="Supervisor" Icon={SupervisorIcon} color="cyan">
            Monitors activity to identify project roadblocks
          </Feature>
          <Feature name="Team Builder" Icon={TeamBuilderIcon} color="red">
            Scans our talent network to create the optimal team for your project
          </Feature>
          <Feature name="Calculator" Icon={CalculatorIcon} color="blue">
            Uses data from past projects to provide better delivery estimates
          </Feature>
          <Feature name="Karma" Icon={KarmaIcon} color="orange">
            Regularly evaluates our talent to ensure quality
          </Feature>
        </Features>
      </section>
    </main>
  )
}

export default IndexPage
