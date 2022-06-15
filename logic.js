function inverter(string) // criação da função denominada inverter e passando ela como uma string
{
    var saida = "" // criação da var saída com nada atribuído
    for(var i = string.length-1; i>=0; i--){
        saida += string[i]; //saída recebe string na posição i
    }

    document.write(saida); // escreve no documento o conteúdo da var saida
}
inverter("palavra"); // chamando a funcão inverter e passando a string para ser invertida 