export default function trackThis (json) {
  json.value = null // We are not using value on this website
  console.log('Analytics Event', json)
  if (typeof window.ga === 'function') {
    window.ga('send', 'event', json.category, json.action, json.label, json.value)
  } else {
    console.warn('ga not found')
  }
}
