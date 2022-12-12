// A class can have any number of static {} initialization blocks in its class body.

class Dictionary {
  static words = ["yes", "no", "maybe"];
}

class Words extends Dictionary {
  static englishWords = [];
  static #localWord = "ok";
  // first static block
  static {
    // link by super to the  Dictionary class
    const words = super.words;
    this.englishWords.push(...words);
  }
  // second static block
  static {
    this.englishWords.push(this.#localWord);
  }
}

console.log(Words.englishWords);
  //Output -> ["yes", "no", "maybe", "ok"]