# JSON endpoint testing 

On CI server execute

    npm test

During development run

    npm start

Define target servers in package.json scripts via URL env variable.

## Debugging in Intellij IDEA

1.  `Run` > `Edit Configurations...`
2. `[+] Add New Configuration` > `Jest`
3. `Environment variables [...]` > `[+]` > `TARGET`=`dev`
4. `Run` > `Debug...`****