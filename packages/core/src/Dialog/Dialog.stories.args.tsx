import { ArgTypes } from '@storybook/react'
import React from 'react'
import { Button } from '../Button/Button'
import { Grid } from '../Grid/Grid'
import { Text } from '../Text/Text'
import { borderRadii, colorSchemeNames, paletteColors } from '../theme/theme'
import type { DialogProps } from './Dialog'
import { dialogSizes } from './Dialog.styled'

const overflowArgs = ['scroll', 'visible', 'hidden', 'auto']
export const argTypes: Partial<ArgTypes<DialogProps>> = {
  borderRadius: { control: { type: 'select' }, options: Object.keys(borderRadii) },
  children: { control: { disable: true } },
  fullWidth: { control: { type: 'boolean' } },
  headerColorScheme: { control: { type: 'select' }, options: colorSchemeNames },
  headerContent: { type: 'string' },
  headerIcon: { type: 'boolean' },
  headerShowCloseButton: { type: 'boolean' },
  hugColor: { control: { type: 'select' }, options: paletteColors },
  open: { control: { type: 'boolean' } },
  sheet: { control: { type: 'boolean' } },
  showCloseButton: { control: { type: 'boolean' } },
  size: { control: { type: 'select' }, options: dialogSizes },
  triggerNode: { control: { disable: true } },
  overflowX: { control: { type: 'select' }, options: overflowArgs },
  overflowY: { control: { type: 'select' }, options: overflowArgs },
  shouldDisableTabIndex: { control: { type: 'boolean' } },
  onOpenChange: { action: 'Dialog opened' },
}

export const defaultArgs: Partial<DialogProps> = {
  ariaDescription: 'This is a description',
  ariaTitle: 'This is a title',
  borderRadius: '2xl',
  children: (
    <Grid p={[3, 3, 3, 3, '24px', '24px']} gap={3}>
      <Text>
        The quick brown fox jumps over the lazy dog to discover new deals every day. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id erat nec ante semper eleifend. In ex
        mi, eleifend non ultricies sed, ullamcorper a sem. Aenean mollis mi eget libero commodo, non auctor
        dui fermentum. Aliquam ultrices nisi in odio sodales, vel feugiat libero gravida.
      </Text>
    </Grid>
  ),
  fullWidth: false,
  headerColorScheme: 'neutralDarkOnLightest',
  headerIcon: false,
  headerShowCloseButton: false,
  scrimDismiss: true,
  scrimColor: 'dark',
  sheet: false,
  showCloseButton: true,
  size: 'md',
  triggerNode: <Button>Open Dialog</Button>,
  overflowX: 'auto',
  overflowY: 'auto',
  shouldDisableTabIndex: undefined,
}
