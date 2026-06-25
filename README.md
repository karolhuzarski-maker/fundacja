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

## 3. Gdzie podmienić logo

Logo używane w headerze i footerze jest obecnie wskazane w plikach HTML jako `logo_foc_home_1600w%20%20NEW%20MAIN.png` (plik źródłowy: `logo_foc_home_1600w  NEW MAIN.png`). Aby zmienić logo, podmień referencje `src`/`og:image` w odpowiednich plikach HTML.

## 4. Gdzie podmienić grafikę hero

Główna grafika hero to `graphic man right.png`. Jej ścieżka znajduje się w sekcji hero w pliku `index.html`.

## 5. Gdzie podmienić ikony

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

## 6. Gdzie zmienić dane kontaktowe

Dane kontaktowe znajdują się w sekcji `Kontakt` oraz w stopce w pliku `index.html`. Wyszukaj `kontakt@odpornosccywilna.pl`, `+48 123 456 789` i `Ochojno, Małopolska`.
