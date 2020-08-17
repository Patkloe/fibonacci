function getPossibilities(n) {
 if(n < 3) {
	return n;
 }
  return getPossibilities(n-1) + getPossibilities(n-2);
}
getPossibilities(3);
