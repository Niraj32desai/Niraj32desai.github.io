function aclick(input)
{
    v=input.value;
    op2=document.getElementsByClassName('op2')[0];
    op1=document.getElementsByClassName('op1')[0];
    switch (v) 
    {
        case '=':
            
            if (op2.innerHTML=="") break
            op2.innerHTML = eval(op1.innerHTML+op2.innerHTML);
            op1.innerHTML='';
            break;

        case '+':
            
            if (op2.innerHTML=="") break
            op2.innerHTML = eval(op1.innerHTML+op2.innerHTML);
            op1.innerHTML='';
            op1.innerHTML = op2.innerHTML + v;
            op2.innerHTML='';
            break;

        case '-':
            
            if (op2.innerHTML=="") break
            op2.innerHTML = eval(op1.innerHTML+op2.innerHTML);
            op1.innerHTML='';
            op1.innerHTML += op2.innerHTML + v;
            op2.innerHTML='';
            break;

        case '*':
            
            if (op2.innerHTML=="") break
            op2.innerHTML = eval(op1.innerHTML+op2.innerHTML);
            op1.innerHTML='';
            op1.innerHTML += op2.innerHTML + v;
            op2.innerHTML='';
            break;

        case '/':
            
            if (op2.innerHTML=="") break
            op2.innerHTML = eval(op1.innerHTML+op2.innerHTML);
            op1.innerHTML='';
            op1.innerHTML += op2.innerHTML + v;
            op2.innerHTML='';
            break;

        case '%':
            
            if (op2.innerHTML=="") break
            op2.innerHTML=eval(parseFloat(op2.innerHTML)/100);
            break;

        case 'DEL':
            
            v1=op1.innerHTML;
            v2=op2.innerHTML;
            if (v2=='')
            {
                op1.innerHTML=v1.slice(0,-1);
            }
            else
            {
                op2.innerHTML=v2.slice(0,-1);
            }
            break;

        case 'CE':
            
            op2.innerHTML="0";
            break;

        case 'C':
            
            op1.innerHTML="";
            op2.innerHTML="0";
            break;

        case "1/x":
            
            if (op2.innerHTML=="") break
            op2.innerHTML=1/parseFloat(op2.innerHTML);
            break;

        case "x^2":
            
            if (op2.innerHTML=="") break
            op2.innerHTML=Math.pow(parseFloat(op2.innerHTML),2);
            break;

        case "√x":
            
            if (op2.innerHTML=="") break
            op2.innerHTML=Math.pow(parseFloat(op2.innerHTML),0.5);
            break;

        case "+/-":
            
            if (op2.innerHTML=="") break
            op2.innerHTML*=-1;
            break;
            
        default:
            
            if (op2.innerHTML.toString().includes('.') && v.toString()=='.') break
            else if (op2.innerHTML.toString()=='0' && v.toString()!='.')
            {
                op2.innerHTML="";
                op2.innerHTML += v;
            }
            else if (op2.innerHTML.toString().length==0 && v.toString()=='0') break
            else{
                op2.innerHTML += v;
            }
            break;
    }
}
