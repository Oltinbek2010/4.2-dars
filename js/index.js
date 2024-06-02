 /**
 * 9-masala
 * let n = +prompt ("Uch xonali son kiriting");
 * let yuzlar = Math.trunc(n / 100);
 * console.log(yuzlar);
 */

 /**
  * 10-masala
  * let n = +prompt ("Uch xonali son kiriting");
  * let onlar = Math.trunc(n / 10) % 10;
  * let birlar = n % 10;
  * console.log(onlar, birlar);
  */

/**
 * 11-masala
 * let n = +prompt ("Uch xonali son kiriting");
 * let yuzlar = Math.trunc(n / 100);
 * let onlar = Math.trunc(n / 10) % 10;
 * let birlar = n % 10;
 * let result = yuzlar + onlar + birlar;
 * console.log(result);
 */

/**
 * 12-masala
 * let n = +prompt ("Uch xonali son kiriting");
 * let yuzlar = Math.trunc(n / 100);
 * let onlar = Math.trunc(n / 10) % 10;
 * let birlar = n % 10;
 * let result = birlar * 100 + onlar * 10 + yuzlar;
 * console.log(result);
 */

/**
 * 13-masala
 * let n = +prompt ("Uch xonali son kiriting");
 * let yuzlar = Math.trunc(n / 100);
 * let onlar = Math.trunc(n / 10) % 10;
 * let birlar = n % 10;
 * let result = onlar * 100 + birlar * 10 + yuzlar;
 * console.log(result);
 */

/**
 * 14-masala
 * let n = +prompt ("Uch xonali son kiriting");
 * let yuzlar = Math.trunc(n / 100);
 * let onlar = Math.trunc(n / 10) % 10;
 * let birlar = n % 10;
 * let result = birlar * 100 + onlar * 10 + yuzlar;
 * console.log(result);
 */

/**
 * 15-masala
 * let n = +prompt ("Uch xonali son kiriting");
 * let yuzlar = Math.trunc(n / 100);
 * let onlar = Math.trunc(n / 10) % 10;
 * let birlar = n % 10;
 * let result = onlar * 100 + yuzlar * 10 + birlar;
 * console.log(result);
 */

/**
 * 16-masala
 * let n = +prompt ("Uch xonali son kiriting");
 * let yuzlar = Math.trunc(n / 100);
 * let onlar = Math.trunc(n / 10) % 10;
 * let birlar = n % 10;
 * let result = yuzlar * 100 + birlar * 10 + onlar;
 * console.log(result);
 */

/**
 * 17-masala
 * let n = +prompt ("999dan katta son kiriting");
 * let yordamchi = n % 1000;
 * let yuzlar = Math.trunc(yordamchi / 100);
 * console.log(yuzlar);
 */

/**
 * 18-masala
 * let n = +prompt ("999dan katta son kiriting");
 * let minglar = (n / 1000);
 * console.log(minglikar);
 */

/**
 * 19-masala
 * let sek = +prompt ("Sekundni kiriting");
 * let min = Math.trunc(sek / 60);
 * console.log(min);
 */

/**
 * 20-masala
 * let sek = +prompt ("Sekundni kiriting");
 * let soat = Math.trunc(sek / 3600);
 * console.log(soat);
 */

/**
 * 21-masala
 * let sek = +prompt ("Sekundni kiriting");
 * let minutSekund = sek / 60;
 * console.log(minutSekund);
 */

/**
 * 22-masala
 * let sek = +prompt ("Sekundni kiriting");
 * let soatSekund = sek / 3600;
 * console.log(soatSekund);
 */



  let sek = +prompt ("Sekundni kiriting");
  let soat = Math.trunc(sek / 3600);
  let miny = sek - (soat * 3600);
  let min = Math.trunc(miny / 60);
  let sekund = sek - (min * 60 + (soat * 3600));
  console.log(soat, min, sekund);
 