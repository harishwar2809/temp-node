import { log } from "console";
import os, { release } from "os";

const user= os.userInfo();
console.log(user);

console.log(os.uptime());

const CurrOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(CurrOs);


