
const  forwardRapper = document.getElementsByClassName('home-container-forward')[0];
const  reverseRapper = document.getElementsByClassName('home-container-reverse')[0];
const welcomeText = document.getElementsByClassName('home-welcome')[0];
const expandArrow =document.getElementsByClassName('arrow');
  const forwardCartoon = setInterval(function()
   {
     if(forwardRapper.scrollLeft < 2000)
     {
       forwardRapper.scrollLeft += 600;
     }

else {
  forwardRapper.classList.remove('smooth');
     forwardRapper.scroll(0,forwardRapper.scrollTop);
     forwardRapper.classList.add('smooth');
}
if(reverseRapper.scrollTop < 1300)
{
  reverseRapper.scrollTop +=400;
}
else {
     reverseRapper.classList.remove('smooth');
     reverseRapper.scroll(reverseRapper.scrollLeft,0);
     reverseRapper.classList.add('smooth');

}
}, 3000);
function addListenrForArrow()
{
for(var i =0 ;i< expandArrow.length;i++)
    {
expandArrow[i].addEventListener('click',(e) => {
 var elm_id = e.target.id;
    elm_id=elm_id.split("-");
 var val = elm_id[1];

    var h_elm = document.getElementById('list-dropdown-'+val);

    h_elm.classList.toggle("hide");
    console.log(elm_id);
})}
}
function homeBtnFun(typeA,typeB,typeC)
{
  document.getElementsByClassName(typeA)[0].classList.remove('hide');
  document.getElementsByClassName(typeB)[0].classList.add('hide');
  console.log(typeA);
var m =  document.getElementsByClassName(typeC)[0].classList.add('hide');
console.log(m);

}
  addListenrForArrow();
