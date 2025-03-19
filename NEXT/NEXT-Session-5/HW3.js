let randomnum = Math.random();
let result = prompt("숫자를 입력하세요.")
if (result > randomnum ){
    console.log("승자는 user")
    }
else if (result < randomnum){
    console.log("승자는 컴퓨터")
}
else { 
    console.log("무승부")
}
