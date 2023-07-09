function helloworld() {
    console.log('hello world');
}

function hellojapan(japan, uk) {
    let helloPulus = (japan + uk);
    return helloPulus
}

console.log('外部ファイルに書いたプログラムです');
console.log('hello'+'world');
console.log('あんぱん', 'jam', 'pan')

let japanese = 'こんにちは';
let english = 'hello'
helloworld();

let hellouk = hellojapan(japanese, english);
console.log(hellouk);