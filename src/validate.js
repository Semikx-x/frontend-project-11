import * as yup from 'yup'

export default function getUrlSchema(existingUrls = []) {
  return yup
    .string('invalid')
    .required('empty')
    .url('invalid')
    .notOneOf(existingUrls, 'dubl')
}
