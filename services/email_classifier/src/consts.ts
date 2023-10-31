// Copyright Dalter Inc. 2023

import 'dotenv/config'

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY
if (OPENAI_API_KEY === undefined) {
  throw Error('OPENAI_API_KEY env variable not defined')
}
