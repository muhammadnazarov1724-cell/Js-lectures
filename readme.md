## Recursion and Closure
 **1.Recursion -** Як тарзи навишти функция хаст, **Рекурсия** як функцияе ҳаст ки худашро дар даруни худаш визв мекунад ва агар то дар дарунаш шарт (condition) намонем вай бесконечни кор мекунад.

 ### Syntaxis of Recursion
 **function recurse () {
 if (condition) {
 recurse ();
 }
 }
 else {
 // stop calling recurse()
 }
 console.log(recurse())**
 


**2.Closure -**  Як тарзи навишти функция хаст, **Closure** функцияе ки дар даруни худ ягала функция месозад ва ба область видимости доступ медиҳад.

**Формула:**
**Замакание = Функция + Её логическая окружения ( lexical Environment ).**

 ### Syntaxis of Closure 
 **function closure (n) {
 return (m) => {
 return n * m ;
 }
 }
 console.log (closure (10)(5))**