import { argv } from 'yargs'
import fs from 'fs'
import { join } from 'path'
import { RushConfiguration } from '@rushstack/rush-sdk'
import { createReleaseNotes, formatNotesMarkdown } from '../actions/createReleaseNotes'

const packageName = argv['packageName']

const config = RushConfiguration.loadFromDefaultLocation()

console.log('Creating release notes...')

if (packageName) {
  const notes = createReleaseNotes(packageName)

  console.log('Creating release notes... SUCCESS')

  console.log(formatNotesMarkdown(notes))

  fs.writeFileSync(join(config.rushJsonFolder, 'RELEASE_NOTES.md'), formatNotesMarkdown(notes))

  console.log('Wrote release notes to file')
}
