import { chromium } from 'playwright'
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await b.newPage({ viewport: { width: 1440, height: 950 } })
await p.goto('http://localhost:3000/', { waitUntil: 'networkidle' })
await p.getByRole('button', { name: 'Rechercher' }).click()
await p.waitForTimeout(400)
const s = await p.locator('input[placeholder^="Rechercher"]').evaluate((e) => {
  const c = getComputedStyle(e)
  return { outline: c.outline, outlineWidth: c.outlineWidth, border: c.border, boxShadow: c.boxShadow, focused: document.activeElement === e }
})
console.log(s)
