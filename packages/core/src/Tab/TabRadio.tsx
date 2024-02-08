import React from 'react'
import { Label } from '../Label/Label'
import { Radio } from '../Radio/Radio'
import { TabTriggerRadio } from './Tab.styled'
import { Flex } from '../Flex/Flex'
import { TabProps, MappedTabProps, TabDataProps } from './Tab'

export const TabRadio = ({
  hasHover,
  tab,
  isActive,
  setIsActive,
}: Partial<TabProps> &
  MappedTabProps & {
    tab: TabDataProps
    isActive: string
    setIsActive: React.Dispatch<React.SetStateAction<string>>
  }) => {
  return (
    <TabTriggerRadio asChild hover={hasHover} value={`tab-${tab.id}`} key={`tab-${tab.id}`}>
      <Flex alignItems='center' mr={2}>
        <Label fontSize='14px'>
          <Radio
            type='radio'
            value={tab.id}
            checked={isActive === tab.id}
            name={tab.id}
            onChange={() => setIsActive(tab.id)}
          />
          {tab.text}
        </Label>
      </Flex>
    </TabTriggerRadio>
  )
}
