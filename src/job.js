import loader from './loader.js'

async function update(links, state, i18n, wathedObject, p) {
  for (const link of links) {
    loader(link, i18n, state, wathedObject, p)
  }
}

const timer = async () => new Promise(res => setTimeout(res, 5000))

export default async (links, state, i18n, wathedObject, p, sholdExit = true) => {
  for (;;) {
    await timer()
    update(links, state, i18n, wathedObject, p)
    if (sholdExit === false) break
  }
}
