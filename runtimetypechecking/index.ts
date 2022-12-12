import fs from 'fs'
import { z } from "zod";

const ResultSchema = z.object({
  results: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      job: z.string()
    })
  ),
});



// extract the inferred type
type Result = z.infer<typeof ResultSchema>;


const printJobs = (results: Result) => {
  if (ResultSchema.safeParse(results).success) {
    results.results.map(result => console.log(result))
  } else {
    console.warn("Runtime ERROR:: The JSON response is either tampered or incorrect!")
  }
}

const data: Result = JSON.parse(fs.readFileSync("data.json", "utf-8"))



printJobs(data)