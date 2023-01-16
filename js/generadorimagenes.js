function generaimagen()
{
  var aleatorio=parseInt(1+100*Math.random());
  document.getElementById("img1").src="https://source.unsplash.com/random/800x600/?sig="+aleatorio;
  document.getElementById("img2").src="https://source.unsplash.com/random/800x600/?sig="+(aleatorio+1);

}
function generaimagen2(imagensilla)
{
  var aleatorio=parseInt(1+100*Math.random());

  document.getElementById(imagensilla).src="https://source.unsplash.com/random/800x600/?sig="+aleatorio;
 
}

generaimagen();