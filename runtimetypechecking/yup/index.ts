import fs from "fs"
import type { TypeOf } from "yup";
import * as yup from "yup"

const ResultSchema = yup
  .object()
  .required()
  .shape({
    results: yup
      .array()
      .required()
      .of(
        yup.object().required().shape({
          name: yup.string().required(),
          id: yup.number().required(),
          job: yup.string().required()
        })
      )
  })



// extract the inferred type
type Result = TypeOf<typeof ResultSchema>;


const printJobs = (results: Result) => {
  if (ResultSchema.validateSync(results)) {
    results.results?.map(result => console.log(result))
  } else {
    console.warn("Runtime ERROR:: The JSON response is either tampered or incorrect!")
  }
}

const data: Result = JSON.parse(fs.readFileSync("data.json", "utf-8"))



printJobs(data)