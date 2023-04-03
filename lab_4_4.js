function policzSume(tablica) {
  if (tablica.length === 0) {
    return 0;
  }
  if (tablica.length === 1) {
    return tablica[0];
  }
  var polowa = Math.floor(tablica.length / 2);
  var lewaPolowa = policzSume(tablica.slice(0, polowa));
  var prawaPolowa = policzSume(tablica.slice(polowa));
  return lewaPolowa + prawaPolowa;
}
var tablica = [5, 3, 8, 1, 7, 2];
var suma = policzSume(tablica);
console.log(suma); 