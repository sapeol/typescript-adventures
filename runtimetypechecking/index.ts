import fs from 'fs'


export interface Result {
  results: {
    id: number;
    name: string;
    job: string;
  }[];
}

const printJobs = (results: Result) => {
  results.results.map(result => console.log(result))
}

const data: Result = JSON.parse(fs.readFileSync("data.json", "utf-8"))



printJobs(data)