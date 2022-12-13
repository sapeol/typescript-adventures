import fs from 'fs'
import { ResulSchmeas } from './schemas'
import { Result } from './interfaces'


const ResultSchema =



  // extract the inferred type
  type Result = z.infer<typeof ResultSchema>;


const printJobs = (results: Result) => {
  const data = ResultSchema.validata(results)
  if (!data.error) {
    results.results.map(result => console.log(result))
  } else {
    console.warn("Runtime ERROR:: The JSON response is either tampered or incorrect!")
  }
}

const data: Result = JSON.parse(fs.readFileSync("data.json", "utf-8"))



printJobs(data)