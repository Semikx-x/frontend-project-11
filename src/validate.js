import * as yup from 'yup'

export default function getUrlSchema(existingUrls = []) {
  return yup
    .string('invalid')
    .required('invalid')
    .url('invalid')
    .notOneOf(existingUrls, 'dubl')
}
