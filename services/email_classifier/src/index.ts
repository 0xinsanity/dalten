// Copyright Dalter Inc. 2023
import { OPENAI_API_KEY } from './consts'
import { OpenAI } from 'langchain/llms/openai'
import { PromptTemplate } from 'langchain/prompts'

async function main(): Promise<void> {
  const llm = new OpenAI({
    openAIApiKey: OPENAI_API_KEY,
    modelName: 'gpt-4'
  })

  const promptTemplate = PromptTemplate.fromTemplate(
    'Tell me a joke about {topic}'
  )

  const chain = promptTemplate.pipe(llm)

  const result = await chain.invoke({ topic: 'bears' })

  console.log(result)
}

main().catch(err => {
  console.error(err)
})
