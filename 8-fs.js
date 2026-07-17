import {readFileSync,writeFileSync} from "fs"

const first =readFileSync('./content/first.txt','utf-8');
const second =readFileSync('./content/subfolder/test.txt','utf-8');

writeFileSync('./content/result.txt',`Here is the result ${first}, ${second}`
    ,{flag:'a'}//append with new line
)




