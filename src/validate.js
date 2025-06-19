import * as yup from 'yup'

export default function getUrlSchema(existingUrls = []) {
  return yup
    .string()
    .required('строка пустая')
    .url('некоректный URL')
    .notOneOf(existingUrls, 'Этоот URL уже добавлен')
}
