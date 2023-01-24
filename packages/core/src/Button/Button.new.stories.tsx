import { ArgsTable } from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Button, ButtonChip, CloseButton, Link, Text, ThemeProvider } from '..'
import {
  Hero,
  LiveDemo,
  RelatedComponent,
  RelatedComponentContainer,
  Section,
  StoryHeading,
  TableOfContents,
} from '../storybook/components'
import { Note } from '../storybook/components/Note'

import heroImage from './Button.Hero.png'

type ButtonStory = StoryObj<typeof Button>

export const Default: ButtonStory = { render: () => <Button>Button</Button> }

export const Sizes: ButtonStory = {
  render: () => (
    <Box>
      <Button m={2} size='small'>
        Small
      </Button>
      <Button m={2} size='medium'>
        Large
      </Button>
      <Button m={2} size='large'>
        Medium
      </Button>
      <Button m={2} size='extraLarge'>
        Extra Large
      </Button>
    </Box>
  ),
}

export const CoreVariations: ButtonStory = {
  render: () => (
    <Box>
      <Button m={2} px={100} variation='fill'>
        Fill
      </Button>
      <Button m={2} px={100} variation='outline'>
        Outline
      </Button>
    </Box>
  ),
}

export const TonalVariations: ButtonStory = {
  render: () => (
    <Box bg='background.tint'>
      <Button m={2} px={100} variation='plain'>
        Fill
      </Button>
      <Button m={2} px={100} variation='white'>
        Outline
      </Button>
    </Box>
  ),
}

export const TextButtons: ButtonStory = {
  render: () => (
    <Box>
      <Button m={2} variation='link'>
        Fill
      </Button>
      <Button m={2} variation='link'>
        <Text fontWeight='bold'>Outline</Text>
      </Button>
    </Box>
  ),
}

export const SemanticStyles: ButtonStory = {
  render: () => (
    <Box>
      <Button m={2} color='primary'>
        Primary
      </Button>
      <Button m={2} color='secondary'>
        Secondary
      </Button>
      <Button m={2} color='warning' variation='lightFill'>
        Negative
      </Button>
    </Box>
  ),
}

export const Disabled: ButtonStory = {
  render: () => (
    <Box>
      <Button m={2} disabled>
        Continue
      </Button>
      <Button m={2} disabled variation='link'>
        Button
      </Button>
    </Box>
  ),
}

export const Variations: ButtonStory = {
  render: () => (
    <Box>
      <Button m={2} variation='outline'>
        Outline
      </Button>
      <Button m={2} variation='lightFill'>
        Light Fill
      </Button>
    </Box>
  ),
}

export const BorderRadius: ButtonStory = {
  render: () => (
    <Box>
      <Button m={2} borderRadius='sm'>
        Small
      </Button>
      <Button m={2} borderRadius='md'>
        Medium
      </Button>
      <Button m={2} borderRadius='lg'>
        Large
      </Button>
      <Button m={2} borderRadius='xl'>
        Extra Large
      </Button>
    </Box>
  ),
}

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <Hero name='Button' img={heroImage}>
            Buttons allow users to trigger an action or event with a single click. For example, you can use a
            button for allowing the functionality of submitting a form, opening a dialog, canceling an action,
            or performing a delete operation.
          </Hero>

          <TableOfContents
            links={[
              'Overview',
              'Props',
              'Examples & Variations',
              'Styles & States',
              'Partner Theming',
              'Usage',
              'Related Components',
            ]}
          />

          <Section heading='Overview'>
            <Text>
              Buttons allow users to trigger an action or event with a single click. For example, you can use
              a button for allowing the functionality of submitting a form, opening a dialog, canceling an
              action, or performing a delete operation.
            </Text>
          </Section>

          <Section heading='Props'>
            <ArgsTable />
          </Section>

          <Section heading='Examples & Variations'>
            <Text>
              Each button variation and property has set functions that provide patterns and signals to the
              user their function and the desired actions on a per page and per component basis. Because of
              this it is very important that the different variants are implemented consistently across
              products, so that they message the correct actions.
            </Text>

            <StoryHeading storyName='Sizes' storyTitle={meta.title} />
            <Text>
              Our design system supports a default button size as well as a extraLarge, large and small size.
              If a large or small button is desired, set the size property to either extraLarge, large or
              small. These sizes allow for hierarchy, emphasis, larger/smaller touch targets, and flexibility.
            </Text>
            <LiveDemo code={Sizes} />

            <StoryHeading storyName='Core Variations' storyTitle={meta.title} />
            <Text>
              Our core button variations use fill and subtle properties. These buttons make up the majority of
              our
            </Text>
            <LiveDemo code={CoreVariations} />

            <StoryHeading storyName='Tonal Variations' storyTitle={meta.title} />
            <Text>
              Tonal variations can be used on their own to reduce hierarchy or paired with primary buttons for
              supporting actions.
            </Text>
            <LiveDemo code={TonalVariations} />

            <StoryHeading storyName='Text Buttons' storyTitle={meta.title} />
            <Text>
              Text buttons have less visual prominence, so should be used for secondary actions or low
              emphasis actions. Used when aligning with 16px, 14px, and 12px body copy.
            </Text>
            <LiveDemo code={TextButtons} />

            <StoryHeading storyName='Semantic Styles' storyTitle={meta.title} />
            <Text>
              Text buttons have less visual prominence, so should be used for secondary actions or low
              emphasis actions. Used when aligning with 16px, 14px, and 12px body copy.
            </Text>
            <LiveDemo code={SemanticStyles} />
          </Section>

          <Section heading='Styles & States'>
            <StoryHeading storyName='Disabled' storyTitle={meta.title} />
            <Text>
              Disabled or inactive buttons are often “greyed out”, and used to communicate to the user that
              some kind of task needs to be completed by them before they can proceed. Components can inherit
              a disabled state, such as form fields, list items, cards, chips, and buttons.
            </Text>
            <LiveDemo code={Disabled} />
            <Note>
              Not all users know that an interactive design element can have disabled state. If you show an
              element but don&apos;t allow people to interact with it, they then have to interpret why they
              can&apos;t. Not everyone will be able to do this, for this reason and other issues try to avoid
              disabling buttons or actions.
            </Note>
          </Section>

          <Section heading='Partner Theming'>
            <StoryHeading storyName='Variations' storyTitle={meta.title} />
            <Text>
              Priceline Partners and white-label products can have patterns different from those used on
              Priceline. To support a consistent user experience our button supports additional variations.
            </Text>
            <LiveDemo code={Variations} />

            <StoryHeading storyName='Border Radius' storyTitle={meta.title} />
            <Text>Coming soon...</Text>
            <LiveDemo code={BorderRadius} />
          </Section>

          <Section heading='Usage'>
            <Text textStyle='subheading3' py={4}>
              Responsive Layout
            </Text>
            <Text.p>
              When scaling layouts for large screen devices, buttons can adapt their visual presentation,
              alignment, and arrangement to fit different contexts and user needs.
            </Text.p>
            <Text.p>
              The size and placement of buttons can change as parent containers, such as cards, adapt for
              larger screens.
            </Text.p>
            <Box p={3} my={3} borderRadius='xl' bg='primary.light'>
              <Box height='20rem'>Placeholder</Box>
            </Box>

            <Text textStyle='subheading3' py={4}>
              Alignment
            </Text>
            <Text.p>
              Alignment indicates whether the button aligns left, right or full width in a window, page,
              container, or component. What makes buttons different than most components is that their
              alignment can be independent, aligned with content, fit and fill containers.
            </Text.p>
            <Text.p>
              As a general rule actions follow a similar rule as text, aligning to the left side on pages and
              components. When users are progressing through a series of steps or action required modals, the
              primary action traditionally sits at the bottom right. Buttons within components such as
              notifications, search fields, and data tables are also right-aligned. However there are times
              when the button In some cases a button group may span the entire width of a window or container.
            </Text.p>
            <Text.p>Typical nested button locations include:</Text.p>
            <Box p={3} my={3} borderRadius='xl' bg='primary.light'>
              <Box height='20rem'>Placeholder</Box>
            </Box>

            <Text textStyle='subheading3' py={4}>
              Button Groups
            </Text>
            <Text.p>
              Button Groups Button groups are a design pattern used when presenting users with multiple call
              to actions with hierarchical emphasis or of equal value. Understanding the correct combinations
              of hierarchy and size when displaying groups of buttons helps to prevent the user from feeling
              overwhelm and confuse.
            </Text.p>
            <Text.p>
              As a general rule button groups should be limited to only medium, small, and text buttons.
            </Text.p>
            <Box p={3} my={3} borderRadius='xl' bg='primary.light'>
              <Box height='20rem'>Placeholder</Box>
            </Box>

            <Text textStyle='subheading3' py={4}>
              Do&apos;s and Don&apos;ts
            </Text>
            <Text.p>Coming soon...</Text.p>
            <Box p={3} my={3} borderRadius='xl' bg='primary.light'>
              <Box height='20rem'>Placeholder</Box>
            </Box>
          </Section>

          <Section heading='Related Components'>
            <RelatedComponentContainer>
              <RelatedComponent name='ButtonChip' desc='Coming soon...' linkTo='core-chip-ButtonChip'>
                <ButtonChip>Button Chip</ButtonChip>
              </RelatedComponent>
              <RelatedComponent name='Link' desc='Coming soon...'>
                <Link>Link</Link>
              </RelatedComponent>
              <RelatedComponent name='CloseButton' desc='Coming soon...'>
                <CloseButton />
              </RelatedComponent>
            </RelatedComponentContainer>
          </Section>
        </ThemeProvider>
      ),
    },
  },
}
export default meta
