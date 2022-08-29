let btns=document.querySelectorAll('button')
let del=document.querySelectorAll('.del')
let d=1
let inp=document.getElementById('calci')
let st=''
for(let btn of btns){
btn.addEventListener('click',(e)=>{
    btn=e.target.innerText
 
    console.log(btn)
    if(btn=='X'){
        btn='*'
        st+=btn
        inp.value=st

    }
    else if(btn=='=')
    {
    inp.value=eval(st)
    }
 
    else if(btn=='DEL')
    {
     
        st=st.slice(0,-1)
        inp.value=st
       
     
       }

    else if(btn=='C')
    {
        st=''
    inp.value=st
    }
    else{
        st+=btn
        inp.value=st
    }

d++
})
}