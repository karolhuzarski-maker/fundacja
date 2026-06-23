# Fundacja Odporności Cywilnej

Statyczna strona HTML/CSS/JS dla Fundacji Odporności Cywilnej. Projekt nie używa Reacta, Next.js, Vite, Tailwinda ani npm.

## 1. Jak odpalić lokalnie

Najprościej otworzyć plik `index.html` bezpośrednio w przeglądarce.

Możesz też uruchomić prosty lokalny serwer z katalogu repozytorium:

```bash
python3 -m http.server 8000
```

Następnie wejdź na `http://localhost:8000`.

## 2. Jak opublikować na GitHub Pages

1. Wypchnij repozytorium na GitHub.
2. Wejdź w **Settings → Pages**.
3. W sekcji **Build and deployment** wybierz **Deploy from a branch**.
4. Wybierz gałąź z plikiem `index.html`, zwykle `main`, oraz katalog `/root`.
5. Zapisz ustawienia i poczekaj na publikację strony.

Plik `.nojekyll` wyłącza przetwarzanie przez Jekylla.

## 3. Favicon

Projekt wskazuje faviconę w `index.html` przez absolutną ścieżkę `/favicon.png`:

```html
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="shortcut icon" href="/favicon.png" />
```

W repozytorium nie ma obecnie pliku favicon. Dodaj ręcznie plik `favicon.png` do katalogu głównego publikowanej strony, czyli obok `index.html`. Wielkość liter ma znaczenie: plik musi nazywać się dokładnie `favicon.png`, a nie np. `Favicon.png` ani `favicon.PNG`.

Po publikacji na domenie głównej albo domenie własnej ikona powinna być dostępna pod adresem:

```text
https://twoja-domena.pl/favicon.png
```

Jeżeli GitHub Pages publikuje tę stronę jako stronę projektu w podfolderze, np. `https://uzytkownik.github.io/fundacja/`, bez domeny własnej, plik będzie fizycznie dostępny pod adresem `https://uzytkownik.github.io/fundacja/favicon.png`. W takim wariancie absolutna ścieżka `/favicon.png` wskazuje katalog główny domeny `github.io`, więc dla bezproblemowego działania favicony zalecana jest domena własna albo publikacja strony z katalogu głównego domeny.

## 4. Gdzie podmienić logo

Logo używane w headerze i footerze znajduje się w pliku `assetslogo.png.png`. Aby zmienić logo, podmień ten plik albo zaktualizuj atrybuty `src` w `index.html` przy elementach logo.

## 5. Gdzie podmienić grafikę hero

Główna grafika hero to `graphic man right.png`. Jej ścieżka znajduje się w sekcji hero w pliku `index.html`.

## 6. Gdzie podmienić ikony

Ikony kart są wstawione jako zwykłe elementy `img` w `index.html`:

- `clock.png` — Pierwsze 10 minut
- `blood.png` — Lokalne Punkty Kontroli Krwotoku
- `repsonder.png` — Cywilny First Responder
- `peopel.png` — Odporność cywilna w praktyce
- `target human.png` — Nasza misja
- `humans.png` — Mieszkańcy
- `eudction.png` — Szkoły
- `fire.png` — OSP
- `monument.png` — Samorządy i instytucje

## 7. Gdzie zmienić dane kontaktowe

Dane kontaktowe znajdują się w sekcji `Kontakt` oraz w stopce w pliku `index.html`. Wyszukaj `kontakt@odpornosccywilna.pl`, `+48 123 456 789` i `Ochojno, Małopolska`.
