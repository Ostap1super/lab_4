function znajdzNajwiekszyElement(tablica) {
  // Sprawdzenie, czy tablica ma przynajmniej jeden element
  if (tablica.length === 0) {
    return null;
  }
  // Jeśli tablica ma tylko jeden element, to jest to największy element
  if (tablica.length === 1) {
    return tablica[0];
  }
  // Podział tablicy na dwie równe części
  var polowa = Math.floor(tablica.length / 2);
  // Rekurencyjne wywołanie algorytmu dla każdej połowy
  var lewaPolowa = znajdzNajwiekszyElement(tablica.slice(0, polowa));
  var prawaPolowa = znajdzNajwiekszyElement(tablica.slice(polowa));
  // Porównanie wyników dla obu połówek i wybór większego elementu
  if (lewaPolowa > prawaPolowa) {
    return lewaPolowa;
  } else {
    return prawaPolowa;
  }
}
var wektor = [5, 3, 8, 1, 7, 2];
var najwiekszyElement = znajdzNajwiekszyElement(wektor);
console.log(najwiekszyElement); // powinno wyświetlić "8"