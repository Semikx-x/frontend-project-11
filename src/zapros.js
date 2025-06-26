import axios from 'axios'

export default async (url, i18n) => {
  const instance = axios.create()
  const response = await instance.get('https://allorigins.hexlet.app/get?url=' + url, {
    timeout: 3000 })
  if (response.status === 200) {
    return response
  }

  throw new Error(i18n.t('networkErr'))
}
