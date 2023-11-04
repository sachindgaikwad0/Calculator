let string = '';
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach(button=>{
    button.addEventListener('click', e=>{
        if(e.target.innerHTML == '='){
            try{
            string = eval(string);
            document.querySelector('input').value = string;
            console.log(string);
            }catch(error){
                document.querySelector('input').value = 'Error';
            }
        }else if(e.target.innerHTML == 'CE'){
            string ='';
            document.querySelector('input').value = string;

        }else if(e.target.innerHTML == 'x^2'){
            string = string*string;
            document.querySelector('input').value = string;

        }
        else{
        string += e.target.innerHTML;
        document.querySelector('input').value = string;
        console.log(string);
        }
    })
})