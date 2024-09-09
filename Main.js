import { random } from "./Aleatorio.js"
import { compare } from "./comparador.js";
function main(){
    let num = random()
    var tentativas = 5;
    while (tentativas >= 0){
        let adivinho = parseInt(prompt("Adivinhe o número: "))
        compare(adivinho, num)
        if(adivinho == num){
            break
        }
        else{
            tentativas -= 1
        }
    }
    console.log("O número era:", num)
}