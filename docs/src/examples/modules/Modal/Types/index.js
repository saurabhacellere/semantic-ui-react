import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

const ModalExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Modal'
      description='A standard modal.'
      examplePath='modules/Modal/Types/ModalExampleModal'
    />
    <ComponentExample
      title='Basic'
      description='A modal can reduce its complexity.'
      examplePath='modules/Modal/Types/ModalExampleBasic'
    />
    <ShorthandExample
      title='Shorthand'
      description='A modal can be created with shorthand props.'
      examplePath='modules/Modal/Types/ModalExampleShorthand'
    />
  </ExampleSection>
)

export default ModalExamples
