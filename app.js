// NIP: wagi GUS 6,5,7,2,3,4,5,6,7, modulo 11.
(function () {
  'use strict';
  function render() {
    var v = (document.getElementById('nip').value || '').replace(/\D/g, '');
    var out = document.getElementById('out');
    var det = document.getElementById('detail');
    if (!v) { out.textContent = '—'; det.textContent = 'Wpisz 10 cyfr (myślniki nie szkodzą).'; return; }
    if (!/^\d{10}$/.test(v)) {
      out.textContent = '⛔ Za krótki'; det.textContent = 'NIP ma dokładnie 10 cyfr (wpisano ' + v.length + ').';
      return;
    }
    var w = [6, 5, 7, 2, 3, 4, 5, 6, 7], s = 0;
    for (var i = 0; i < 9; i++) s += (+v[i]) * w[i];
    var k = s % 11;
    if (k === 10) { out.textContent = '⛔ Niepoprawny'; det.textContent = 'Ta kombinacja nie może być prawidłowym NIP-em.'; return; }
    if (k !== +v[9]) {
      out.textContent = '⛔ Niepoprawny'; det.textContent = 'Suma kontrolna się nie zgadza — sprawdź cyfry.'; return;
    }
    out.textContent = '✓ Poprawny';
    det.textContent = 'Format OK. Pamiętaj: to nie potwierdza aktywności podatnika VAT (biała lista MF).';
  }
  document.getElementById('nip').addEventListener('input', render);
  render();
})();
