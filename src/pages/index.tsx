import React from 'react'
import Seo from '@/components/Seo'
import Features from '@/components/Features'
import Feature from '@/components/Feature'
import { ReactComponent as TeamBuilderIcon } from '@/icons/team-builder.svg'
import { ReactComponent as SupervisorIcon } from '@/icons/supervisor.svg'
import { ReactComponent as CalculatorIcon } from '@/icons/calculator.svg'
import { ReactComponent as KarmaIcon } from '@/icons/karma.svg'

function IndexPage() {
  return (
    <main>
      <Seo title="Frontend Mentor: Four card feature section" />
      <p>Reliable, efficient delivery</p>
      <h1>Powered by Technology</h1>
      <p>
        Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is
        successful
      </p>
      <Features>
        <Feature name="Team Builder" Icon={TeamBuilderIcon} color="red">
          Scans our talent network to create the optimal team for your project
        </Feature>
        <Feature name="Supervisor" Icon={SupervisorIcon} color="cyan">
          Monitors activity to identify project roadblocks
        </Feature>
        <Feature name="Calculator" Icon={CalculatorIcon} color="blue">
          Uses data from past projects to provide better delivery estimates
        </Feature>
        <Feature name="Karma" Icon={KarmaIcon} color="orange">
          Regularly evaluates our talent to ensure quality
        </Feature>
      </Features>
    </main>
  )
}

export default IndexPage
