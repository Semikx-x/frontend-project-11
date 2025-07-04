import axios from 'axios'

export default async (url, i18n) => {
  try {
    const instance = axios.create()
    const response = await instance.get('https://allorigins.hexlet.app/get?disableCache=true&url=' + url, {
      timeout: 3000 })
    if (response.status === 200) {
      return response
    }
  }
  // eslint-disable-next-line no-unused-vars
  catch (_) {
    throw new Error(i18n.t('RssNull'))
  }

  throw new Error(i18n.t('networkErr'))
}
