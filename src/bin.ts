import os from "os"
import {app} from "./index"
import cluster from "cluster"




if (cluster.isPrimary){
    console.log(`Master process id is ${process.pid}`)
    for(let i = 0 ; i < os.cpus().length ;i++){
        cluster.fork();
    }
}else{
    app.listen(3000, () => {
        console.log(`Worker ${process.pid} started`);
    })
}