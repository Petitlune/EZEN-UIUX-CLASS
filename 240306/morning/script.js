// const bag = new Map();
// bag.set("clolor", " red");
// console.log(bag);

const myCup = new Map([
  ["color", "white"],
  ["material", "seramic"],
  ["capacity", "300ml"],
]);
//값 추가
myCup.set("type", "mini").set("purpose", "daily");

myCup.size;
console.log(myCup.size); //Map 객체가 갖고 있는 총 size의 갯수
console.log(myCup.get("color"));
console.log(myCup.has("color"));
console.log(myCup.has("variable"));
myCup.delete("type");
// myCup.clear(); //모든 값 삭제
console.log(myCup);

console.log(myCup.keys());

for (let key of myCup.keys()) {
  console.log(key);
}
//배열과 같이 내부 아이템을 한개씩 찾아와서 반복 순회할 수 있도록 해주는 객체 => 이터레이터 객체
for (let value of myCup.values()) {
  console.log(value);
}
for (let value of myCup.entries()) {
  console.log(value);
}
//단점 : 데이터의 중복을 막을 수 없다.
//=> 일반객체 + 배열객체 + Map + 데이터 중복X => Set() :key와 vaule 값으로 나누어져있지는 않음

const numSet1 = new Set();
numSet1.add("one").add("two");
console.log(numSet1);

const numSet2 = new Set([1, 2, 3]);

console.log(numSet2);
console.log(numSet2.has(2));
numSet2.delete(1);
console.log(numSet2);
numSet2.clear();
console.log(numSet2);
