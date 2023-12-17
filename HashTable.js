//* HashTable

//* Operations

//? => hash();
//? => add();
//? => remove();
//? => size();
//? => display();
//? => clear();

class HashTable {
  constructor(capacity) {
    this.table = [];
    this.capacity = capacity;
    this.size = 0;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.capacity;
  }

  set(key, value) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let findKey = bucket.find((item) => item[0] === key);
      if (findKey) return (findKey[1] = value);
      bucket.push([key, value]);
      this.size++;
    } else {
      this.table[index] = [[key, value]];
      this.size++;
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      let findKey = bucket.find((item) => item[0] === key);
      if (findKey) return findKey[1];
      return undefined;
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const findKey = bucket.find((item) => item[0] === key);
      if (findKey) bucket.splice(bucket.indexOf(findKey), 1);
      this.size--;
      return true;
    }
    return false;
  }

  display() {
    this.table.forEach((item) =>
      item.map(([key, value], i) => console.log(`${key} : ${value}`))
    );
  }
}

const hashTable = new HashTable(20);

hashTable.set('hello', 22);

hashTable.display();

hashTable.remove('hello');

console.log(hashTable.get('hello'));

console.log(hashTable.size);

hashTable.set('hello', 22);

console.log(hashTable.size);
