class HashTable {
    constructor(size=53) { 
        this.keyMap = new Array(size);
    }

    _hash(key) { 
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i =0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }
    /* 
    Set
    1. Accepts a key and value
    2. hash the key
    3. store the key value pair in the hash table using separate chaining

    GEt
    1. accept a key eg "name"
    2. hash the key
    3. return the value associated with the key
    */
   set(key,value) {
         let index = this._hash(key);
         // if it is empty push an empty array

         if(!this.keyMap[index]) {
              this.keyMap[index] = [];
         }
         this.keyMap[index].push([key, value]);
   } 
   get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]) {
            for(let i =0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                        return this.keyMap[index][i][1];
                }
            }
        }
            return undefined;
    }
    values() {
        const values = [];
        for(let i =0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j =0; j < this.keyMap[i].length; j++) { 
                    if(!values.includes(this.keyMap[i][j][1])) {
                        values.push(this.keyMap[i][j][1]);
                    }
                }
                
            }
         }

         return values;
    }
    keys (){
        const keyArry = [];
        for(let i =0; i < this.keyMap.length; i++) { 
            if(this.keyMap[i]) {
                for(let j =0; j < this.keyMap[i].length; j++) { 
                    if(!keyArry.includes(this.keyMap[i][j][0])) {
                        keyArry.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }

        return keyArry;
    }
    
}

let ht = new HashTable();
ht.set("kita", "james");
ht.set("kita", "six");
ht.set("age", "twont");
ht.set("name", "james");
// console.log(ht.keyMap);
console.log(ht.keys());