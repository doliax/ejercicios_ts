function arrUpper(word: string): number[]{
       word.split('')
       let arr: number[] = [];
      
        for(let i  = 0; i < word.length; i++){
           const char = word[i];
                if (char === char.toUpperCase() && char !== char.toLowerCase()) {
                        arr.push(i);
                }
        }

        /**
         const result = [];
        for (let i = 0; i < word.length; i++) {
                if (word[i] === word[i].toUpperCase()) {
                result.push(i);
                }
        }
         */
       return arr as number[];
}


console.log(arrUpper("EstoEsUNaprUebA"))