import { FontCollection } from '../lib/font-collection'

function processFonts (files: Array<any>) {
  if (!files) return
  files.forEach(file => {
    new FontCollection(file).export()
  })
}

export default processFonts
