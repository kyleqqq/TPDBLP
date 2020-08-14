import defaultSettings from './settings'

const title = defaultSettings.title || 'Vue Simple demo'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
