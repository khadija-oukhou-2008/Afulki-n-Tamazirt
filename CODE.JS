/* Langue du site : français (fr) ou arabe (ar) */
var racine = document.documentElement;

function appliquerLangue(l) {
  racine.lang = l;                                  /* fr ou ar : affiche la bonne langue (voir CSS) */
  racine.dir = (l === "ar") ? "rtl" : "ltr";       /* l'arabe s'écrit de droite à gauche */
  try { localStorage.setItem("langue", l); } catch (e) {}
}

var choix = "fr";
try { choix = localStorage.getItem("langue") || "fr"; } catch (e) {}
appliquerLangue(choix);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("langue").addEventListener("click", function () {
    appliquerLangue(racine.lang === "fr" ? "ar" : "fr");
  });
});
