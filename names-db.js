// names-db.js
// Baza "imię -> cechy charakteru" oparta na tradycyjnej, popularnej w Polsce
// etymologii/symbolice imion (styl kalendarza imienin / "co oznacza Twoje imię").
// Klucze obiektu NAMES są znormalizowane: lowercase, bez polskich znaków diakrytycznych.
// Każda wartość to tablica 2-3 wariantów tekstu gotowego do wstawienia po zwrocie
// "jesteś osobą, która ...". Warianty w obrębie jednego imienia są tematycznie spójne.

function normalize(str){
  return (str||"").toLowerCase()
    .replace(/ą/g,"a").replace(/ć/g,"c").replace(/ę/g,"e").replace(/ł/g,"l")
    .replace(/ń/g,"n").replace(/ó/g,"o").replace(/ś/g,"s").replace(/ź/g,"z").replace(/ż/g,"z");
}

var NAMES = {

  // ===================== IMIONA MĘSKIE =====================

  "aleksander": [
    "ma w sobie naturalną potrzebę ochrony innych i nie boi się stawać w czyjejś obronie",
    "przejmuje odpowiedzialność za grupę, zanim ktokolwiek zdąży o to poprosić",
    "łączy odwagę z opiekuńczością — inni czują się przy niej bezpiecznie"
  ],
  "antoni": [
    "ma w sobie ciepło, które sprawia, że inni czują się przy niej ważni",
    "jest tą osobą w grupie, bez której coś od razu byłoby nie tak",
    "buduje relacje powoli, ale bardzo trwale"
  ],
  "jakub": [
    "rzadko odpuszcza, gdy raz postanowi coś osiągnąć",
    "ma w sobie upór, który zamienia przeszkody w kolejne kroki do celu",
    "działa spokojnie, ale bardzo konsekwentnie dąży do swojego"
  ],
  "jan": [
    "ma prosty, szczery stosunek do świata — mówi to, co myśli",
    "jest solidnym fundamentem dla innych — można na niej polegać bez pytania",
    "podchodzi do życia z pogodą ducha, która udziela się otoczeniu"
  ],
  "szymon": [
    "naprawdę słucha innych — i to sprawia, że ludzie chętnie się przed nią otwierają",
    "ma dar wychwytywania tego, co inni mówią między wierszami",
    "potrafi być uważną obserwatorką, zanim stanie się głosem w dyskusji"
  ],
  "franciszek": [
    "ceni wolność myślenia i nie lubi działać według cudzego scenariusza",
    "ma bliski, naturalny kontakt ze światem i innymi ludźmi — bez pozy",
    "łączy prostotę w podejściu do życia z głęboką wrażliwością na innych"
  ],
  "filip": [
    "ma w sobie energię, która nie pozwala jej długo stać w miejscu",
    "szuka wolności działania i najlepiej czuje się w ruchu, nie w rutynie",
    "rzuca się w nowe wyzwania z entuzjazmem, który zaraża innych"
  ],
  "wojciech": [
    "ma w sobie odwagę, którą pokazuje wtedy, gdy naprawdę na tym zależy",
    "broni tego, w co wierzy, nawet gdy jest to niewygodne",
    "łączy siłę charakteru z poczuciem odpowiedzialności za innych"
  ],
  "mikolaj": [
    "ma w sobie naturalną hojność — dzieli się tym, co ma, bez wyrachowania",
    "potrafi poprowadzić innych, nie stawiając się ponad nimi",
    "sprawia, że ludzie wokół niej czują się obdarowani jej uwagą"
  ],
  "kacper": [
    "ma w sobie odrobinę tajemnicy — nie zdradza wszystkiego od razu",
    "potrafi dostrzec wartość tam, gdzie inni przechodzą obojętnie",
    "działa własnym tempem i nie daje się popędzać"
  ],
  "michal": [
    "ma silne poczucie sprawiedliwości i reaguje, gdy coś jest nie tak",
    "potrafi stanąć w pierwszym szeregu, gdy trzeba bronić słusznej sprawy",
    "łączy siłę charakteru ze spokojem — nie musi krzyczeć, żeby być słyszaną"
  ],
  "bartosz": [
    "trzyma się swoich wartości, nawet gdy łatwiej byłoby odpuścić",
    "zachowuje lojalność wobec ludzi, na których jej zależy, bez względu na okoliczności",
    "buduje wszystko, co robi, na solidnych, sprawdzonych fundamentach"
  ],
  "bartlomiej": [
    "łączy skromność z siłą — nie musi się chwalić, żeby zostać zauważoną",
    "jest tą osobą, na której wsparcie zawsze można liczyć",
    "działa w swoim tempie, ale bardzo konsekwentnie"
  ],
  "adam": [
    "ma w sobie coś autentycznego — nie udaje kogoś, kim nie jest",
    "podchodzi do świata z ciekawością kogoś, kto wciąż odkrywa go od nowa",
    "łatwo znajduje wspólny język z bardzo różnymi ludźmi"
  ],
  "piotr": [
    "jest punktem oparcia dla innych, nawet gdy sama mierzy się z trudnościami",
    "ma w sobie spokojną, niewzruszoną pewność, która uspokaja otoczenie",
    "trzyma się raz obranego kierunku, nawet gdy wieje mocny wiatr"
  ],
  "pawel": [
    "potrafi całkowicie zmienić kierunek, gdy odkryje, że dotychczasowy nie był właściwy",
    "ma w sobie siłę przekonań, która potrafi poruszyć innych",
    "działa z pełnym zaangażowaniem, gdy raz uwierzy w cel"
  ],
  "tomasz": [
    "chce sprawdzić rzeczy na własną rękę, zanim w nie uwierzy",
    "ma analityczny umysł, który nie przyjmuje niczego bezkrytycznie",
    "zadaje pytania, których inni nie odważą się zadać"
  ],
  "krzysztof": [
    "pomaga innym przejść przez trudne chwile, nawet kosztem własnego wysiłku",
    "ma w sobie siłę, na której inni mogą się oprzeć w drodze do celu",
    "czuje się najlepiej, gdy może komuś towarzyszyć w ważnej podróży — dosłownej lub życiowej"
  ],
  "marcin": [
    "ma w sobie wojowniczą energię, którą kieruje w stronę tego, co uważa za słuszne",
    "rzuca się do działania, zamiast długo czekać na idealny moment",
    "broni swojego zdania z pełnym przekonaniem"
  ],
  "lukasz": [
    "zauważa, gdy komuś jest trudno, zanim ta osoba zdąży o tym powiedzieć",
    "ma w sobie opiekuńczość, która wychodzi na jaw w trudnych momentach",
    "łączy analityczne myślenie z troską o innych"
  ],
  "grzegorz": [
    "czuwa nad sprawami, które innym umykają z oczu",
    "ma w sobie odpowiedzialność, przez którą trudno jej odpuścić coś do końca",
    "reaguje szybko, zanim problem zdąży urosnąć"
  ],
  "andrzej": [
    "ma w sobie stanowczość, która pozwala jej iść pod prąd, gdy trzeba",
    "nie boi się trudnych decyzji, nawet gdy inni się wahają",
    "działa z odwagą, która budzi zaufanie otoczenia"
  ],
  "marek": [
    "mówi wprost to, co myśli, zamiast owijać w bawełnę",
    "ma w sobie energię, która popycha ją do szybkiego działania",
    "łatwo przejmuje inicjatywę, gdy inni się wahają"
  ],
  "rafal": [
    "ma dar łagodzenia napięć tam, gdzie inni tylko je pogłębiają",
    "potrafi wysłuchać i naprawić więcej, niż się po niej spodziewano",
    "działa spokojnie, ale skutecznie, gdy trzeba komuś pomóc"
  ],
  "dawid": [
    "nie daje się onieśmielić przeciwnikom dużo większym od siebie",
    "ma w sobie odwagę, która ujawnia się właśnie wtedy, gdy inni już się poddają",
    "wierzy we własne możliwości nawet wtedy, gdy statystyki są przeciwko niej"
  ],
  "maciej": [
    "traktuje to, co ma, jako coś wartego pielęgnowania, nie oczywistości",
    "ma w sobie wdzięczność, która sprawia, że dostrzega dobro innych",
    "dzieli się swoimi talentami, zamiast trzymać je tylko dla siebie"
  ],
  "wiktor": [
    "nie znosi się poddawać — nawet przegraną potrafi zamienić w naukę",
    "ma w sobie determinację, która pcha ją do przodu, gdy inni już odpuszczają",
    "traktuje każde wyzwanie jak coś, co da się w końcu pokonać"
  ],
  "ignacy": [
    "ma w sobie wewnętrzny ogień, który zapala też innych do działania",
    "angażuje się w to, co robi, całym sobą, bez połowiczności",
    "potrafi zarazić otoczenie entuzjazmem, gdy sama w coś wierzy"
  ],
  "leon": [
    "ma w sobie spokojną siłę, która nie potrzebuje niczego udowadniać",
    "broni swojego terytorium — ludzi i wartości, na których jej zależy",
    "budzi respekt samą swoją obecnością, bez podnoszenia głosu"
  ],
  "igor": [
    "łączy siłę z opanowaniem, działając stanowczo, ale bez agresji",
    "chroni to, co dla niej ważne, konsekwentnie i bez rozgłosu",
    "ma w sobie spokojną pewność siebie, która uspokaja innych w trudnych chwilach"
  ],
  "oskar": [
    "ma w sobie szlachetność, która nie pozwala jej skrzywdzić słabszego",
    "działa odważnie, ale zawsze z wyczuciem, kogo może to dotknąć",
    "łączy walecznego ducha z troską o innych"
  ],
  "julian": [
    "podchodzi do świata z refleksją, zanim podejmie decyzję",
    "ma w sobie klasę, która ujawnia się w tym, jak traktuje innych",
    "ceni porządek myśli bardziej niż chwilowe emocje"
  ],
  "nataniel": [
    "traktuje swoje talenty jako coś, czym warto się dzielić z innymi",
    "ma w sobie wdzięczność za to, co ją otacza, i chęć oddawania tego dalej",
    "potrafi dostrzec dar tam, gdzie inni widzą tylko codzienność"
  ],
  "konstanty": [
    "trzyma się swojego zdania nawet wtedy, gdy inni już je zmienili",
    "ma w sobie spokojną wytrwałość, która z czasem przynosi efekty",
    "buduje swoje cele krok po kroku, bez zbędnego pośpiechu"
  ],
  "stanislaw": [
    "ma ambicję, która motywuje ją do stawiania sobie coraz wyższych celów",
    "chce, by jej czyny mówiły same za siebie",
    "działa tak, by zostać zapamiętaną z dobrej strony"
  ],
  "zygmunt": [
    "chroni to, na czym jej zależy, z pełnym zaangażowaniem",
    "ma w sobie siłę, którą wykorzystuje, by osłaniać słabszych",
    "łączy stanowczość z lojalnością wobec bliskich"
  ],
  "kazimierz": [
    "łagodzi konflikty tam, gdzie inni tylko dolewają oliwy do ognia",
    "ma w sobie spokój, który udziela się osobom w jej otoczeniu",
    "szuka rozwiązań, które pogodzą wszystkie strony"
  ],
  "henryk": [
    "naturalnie przejmuje odpowiedzialność, gdy grupa potrzebuje kogoś, kto poprowadzi",
    "ma w sobie autorytet, który wynika z konsekwencji, nie z narzucania się",
    "dba o to, by wszyscy wokół niej czuli się zaopiekowani"
  ],
  "tadeusz": [
    "ma wielkie serce, które potrafi wybaczyć więcej, niż wypada",
    "nie boi się okazywać uczuć, nawet gdy inni się z tym kryją",
    "działa z odwagą, która płynie prosto z tego, co czuje"
  ],
  "ryszard": [
    "ma twardy charakter, który nie ugina się pod presją otoczenia",
    "podejmuje decyzje szybko i trzyma się ich do końca",
    "prowadzi innych własnym przykładem, nie słowami"
  ],
  "zbigniew": [
    "potrafi ostudzić emocje tam, gdzie inni je podsycają",
    "ma w sobie spokój, który działa jak bufor w trudnych sytuacjach",
    "zachowuje zimną krew dokładnie wtedy, gdy jest to najbardziej potrzebne"
  ],
  "jerzy": [
    "buduje wszystko cierpliwie, krok po kroku, jak ktoś, kto wie, że plony przychodzą z czasem",
    "ma w sobie pracowitość, która nie potrzebuje poklasku, by trwać",
    "dba o to, co zasiała, aż do samego końca"
  ],
  "roman": [
    "ma w sobie wewnętrzną dyscyplinę, dzięki której konsekwentnie realizuje plany",
    "podchodzi do wyzwań z opanowaniem, które robi wrażenie na innych",
    "łączy siłę charakteru z klasą w sposobie bycia"
  ],
  "robert": [
    "przyciąga uwagę samą swoją obecnością, bez wysiłku",
    "ma w sobie charyzmę, dzięki której inni chętnie idą za jej pomysłami",
    "potrafi zabłysnąć dokładnie wtedy, gdy jest to najbardziej potrzebne"
  ],
  "damian": [
    "potrafi opanować chaotyczną sytuację, gdy inni już się poddają",
    "ma w sobie spokojną siłę, która działa uspokajająco na innych",
    "łagodnie, ale skutecznie doprowadza sprawy do końca"
  ],
  "sebastian": [
    "ma w sobie godność, która nie pozwala jej iść na kompromis z własnymi wartościami",
    "traktuje innych z szacunkiem, którego sama też oczekuje",
    "działa z powagą, która budzi zaufanie nawet w trudnych sprawach"
  ],
  "artur": [
    "ma w sobie poczucie honoru, które nie pozwala jej oszukiwać ani siebie, ani innych",
    "naturalnie gromadzi wokół siebie ludzi gotowych podążać za jej wizją",
    "broni swoich zasad tak, jakby broniła czegoś więcej niż tylko siebie"
  ],
  "dariusz": [
    "dzieli się tym, co ma — czasem, uwagą, pomysłami — bez wyrachowania",
    "ma w sobie wewnętrzne bogactwo, które przekłada się na hojność wobec innych",
    "potrafi dostrzec wartość tam, gdzie inni widzą tylko brak"
  ],
  "mateusz": [
    "traktuje swoje umiejętności jak coś, co warto rozwijać z wdzięcznością, nie z przymusu",
    "ma w sobie hojność wobec innych — chętnie dzieli się tym, co potrafi",
    "dostrzega w codzienności małe rzeczy warte docenienia"
  ],
  "hubert": [
    "ma jasny umysł i naturalny dar przekonywania innych do swoich racji",
    "łączy intuicję z uporem — rzadko odpuszcza, gdy coś sobie postanowi",
    "jest urodzonym strategiem, który widzi więcej niż jeden krok do przodu"
  ],
  "konrad": [
    "ma dar dawania trafnych rad dokładnie wtedy, gdy inni ich potrzebują",
    "łączy odwagę z rozsądkiem — działa śmiało, ale przemyślanie",
    "jest tą osobą, do której inni przychodzą po zdanie w trudnej sprawie"
  ],
  "norbert": [
    "wyróżnia się sposobem myślenia, który rzadko idzie utartym szlakiem",
    "ma w sobie coś nietuzinkowego, co trudno przeoczyć",
    "podąża własną drogą, nawet gdy odbiega ona od reszty"
  ],
  "patryk": [
    "trzyma się swoich zasad, nawet gdy łatwiej byłoby pójść na skróty",
    "ma w sobie wewnętrzną klasę, która widać w tym, jak traktuje innych",
    "działa uczciwie, nawet gdy nikt tego nie widzi"
  ],
  "radoslaw": [
    "zaraża innych dobrym humorem, nawet w trudnych momentach",
    "ma w sobie pogodę ducha, która sprawia, że ludzie chętnie szukają jej towarzystwa",
    "potrafi znaleźć powód do radości tam, gdzie inni widzą tylko problem"
  ],
  "slawomir": [
    "buduje swoją pozycję spokojnie, bez rozpychania się łokciami",
    "ma w sobie ambicję połączoną z opanowaniem",
    "chce być docenianą za to, co realnie robi, nie za to, co mówi"
  ],
  "waldemar": [
    "ma w sobie naturalny wpływ na to, co dzieje się wokół niej",
    "podejmuje decyzje z pewnością, która udziela się innym",
    "działa jak ktoś, kto wie, dokąd zmierza"
  ],
  "wieslaw": [
    "stawia sobie coraz wyższe poprzeczki, zamiast poprzestawać na tym, co już osiągnęła",
    "ma w sobie głód rozwoju, który nie pozwala jej stać w miejscu",
    "dąży do tego, by być coraz lepszą wersją siebie"
  ],
  "zdzislaw": [
    "wierzy bardziej w czyny niż w deklaracje",
    "ma w sobie determinację, dzięki której to, co planuje, w końcu się realizuje",
    "buduje swoją reputację konsekwentnym działaniem, nie obietnicami"
  ],
  "emil": [
    "angażuje się w to, co robi, ze starannością sięgającą najmniejszego szczegółu",
    "ma w sobie gorliwość, która sprawia, że rzadko robi coś połowicznie",
    "traktuje każde zadanie jak coś, co zasługuje na pełne zaangażowanie"
  ],
  "fabian": [
    "potrafi czekać na dobry moment zamiast działać pochopnie",
    "ma w sobie strategiczny spokój — widzi, kiedy warto poczekać, a kiedy działać",
    "osiąga cele cierpliwością tam, gdzie inni próbują na siłę"
  ],
  "gustaw": [
    "jest oparciem dla innych, nawet gdy sama mierzy się z trudnościami",
    "ma w sobie stabilność, dzięki której inni czują się przy niej pewniej",
    "trzyma wszystko razem, gdy wokół robi się chaos"
  ],
  "leonard": [
    "ma w sobie siłę charakteru, która ujawnia się w trudnych momentach",
    "nie boi się stanąć na czele, gdy inni się wahają",
    "działa z odwagą, która budzi respekt otoczenia"
  ],
  "maksymilian": [
    "dąży do tego, by robić rzeczy najlepiej, jak potrafi",
    "ma w sobie ambicję, która nieustannie popycha ją do rozwoju",
    "stawia sobie wysokie wymagania, ale też potrafi je spełniać"
  ],
  "milosz": [
    "potrafi połączyć stanowczość z empatią wobec innych, nie tracąc żadnej z nich",
    "ma w sobie delikatność, która wcale nie przeszkadza jej dążyć do celu",
    "łączy ambicję z wrażliwością — zależy jej na uznaniu, ale nie kosztem innych"
  ],
  "olaf": [
    "ma silne poczucie tego, kim jest, i nie zmienia się pod presją otoczenia",
    "czerpie siłę z tego, skąd pochodzi i kim są ludzie, którzy ją ukształtowali",
    "działa z pewnością siebie, która nie potrzebuje potwierdzenia z zewnątrz"
  ],
  "tymoteusz": [
    "traktuje to, co dla niej ważne, z powagą widoczną w każdym działaniu",
    "ma w sobie głęboki szacunek do ludzi i zasad, które uważa za słuszne",
    "działa zgodnie z tym, w co naprawdę wierzy, nawet gdy nikt nie patrzy"
  ],
  "alan": [
    "łagodzi napięcia samą swoją spokojną obecnością",
    "ma w sobie umiejętność godzenia różnych punktów widzenia",
    "szuka porozumienia tam, gdzie inni od razu widzą konflikt"
  ],
  "bruno": [
    "ma w sobie niezależność, która pozwala jej iść własną drogą bez oglądania się na innych",
    "działa w swoim rytmie, nieporuszona cudzą presją",
    "potrafi zareagować twardo dokładnie wtedy, gdy sytuacja tego wymaga"
  ],
  "nikodem": [
    "myśli o dobru grupy, zanim pomyśli o własnej korzyści",
    "ma w sobie umiejętność jednoczenia ludzi wokół wspólnego celu",
    "działa tak, by wygrywali wszyscy, nie tylko ona sama"
  ],
  "gabriel": [
    "ma dar przekazywania ważnych rzeczy w odpowiednim momencie",
    "potrafi być głosem, który inni naprawdę usłyszą",
    "łączy siłę wewnętrzną z delikatnością w kontakcie z ludźmi"
  ],
  "dominik": [
    "angażuje się w to, w co wierzy, bez połowiczności",
    "ma w sobie oddanie, które sprawia, że inni mogą na niej polegać",
    "traktuje swoje zobowiązania poważnie, nawet te niewielkie"
  ],
  "cezary": [
    "ma w sobie naturalną skłonność do prowadzenia, a nie podążania",
    "podejmuje decyzje pewnie, nawet w sytuacjach, które innych paraliżują",
    "działa z rozmachem, który sprawia, że trudno ją przeoczyć"
  ],
  "eryk": [
    "ma w sobie pewność siebie, która nie potrzebuje aprobaty innych",
    "trzyma się własnego zdania, nawet gdy większość myśli inaczej",
    "działa niezależnie, wybierając własną drogę zamiast utartej ścieżki"
  ],
  "feliks": [
    "ma w sobie optymizm, który sprawia, że trudności wydają się mniejsze",
    "przyciąga dobrą energię i potrafi się nią dzielić z innymi",
    "podchodzi do przeszkód z przekonaniem, że w końcu się ułożą"
  ],
  "gniewomir": [
    "potrafi zamienić silne emocje w konstruktywne działanie",
    "ma w sobie determinację, by doprowadzić sprawy do spokojnego końca, nawet jeśli droga jest burzliwa",
    "nie boi się konfliktu, gdy stawką jest coś naprawdę ważnego"
  ],
  "iwo": [
    "ma w sobie giętką siłę — potrafi ugiąć się, nie łamiąc swoich zasad",
    "trwa przy swoim, nawet gdy warunki się zmieniają",
    "łączy elastyczność z wewnętrzną stanowczością"
  ],
  "jeremi": [
    "ma w sobie wewnętrzną siłę, która pozwala jej przetrwać trudne chwile z podniesioną głową",
    "nie poddaje się łatwo, nawet gdy okoliczności są przeciwko niej",
    "działa z godnością, która budzi szacunek innych"
  ],
  "klemens": [
    "ma w sobie wyrozumiałość, która sprawia, że inni czują się przy niej bezpiecznie",
    "potrafi wybaczać i dawać drugie szanse tam, gdzie inni już by się poddali",
    "podchodzi do ludzkich błędów z empatią, nie osądem"
  ],
  "ksawery": [
    "chętnie zaczyna coś od nowa, zamiast trzymać się starych schematów",
    "ma w sobie odwagę do budowania czegoś swojego, nawet od zera",
    "tworzy wokół siebie miejsce, w którym inni czują się dobrze"
  ],
  "longin": [
    "patrzy na sprawy z dystansu, który pozwala jej dostrzec więcej niż innym",
    "ma w sobie cierpliwość do rzeczy, które wymagają czasu",
    "działa metodycznie, budując efekt warstwa po warstwie"
  ],
  "maurycy": [
    "ma w sobie głębię, którą trudno od razu rozszyfrować",
    "nie zdradza wszystkich swoich myśli od razu — woli obserwować",
    "działa z dyskrecją, która budzi ciekawość innych"
  ],
  "natan": [
    "traktuje swoje zdolności jako coś, czym warto obdarowywać innych",
    "ma w sobie wdzięczność, która przekłada się na hojność wobec otoczenia",
    "dostrzega dobro w codziennych, drobnych momentach"
  ],
  "onufry": [
    "potrafi znaleźć spokój we własnym towarzystwie, bez potrzeby ciągłej aprobaty innych",
    "ma w sobie niezależność myślenia, która nie ugina się pod presją grupy",
    "szuka głębi tam, gdzie inni zadowalają się powierzchownością"
  ],
  "prosper": [
    "ma w sobie coś, co sprawia, że rzeczy wokół niej zaczynają się układać",
    "podchodzi do wyzwań z przekonaniem, że da się je przekuć w sukces",
    "przynosi otoczeniu dobrą energię, zwłaszcza w trudnych momentach"
  ],
  "roland": [
    "ma w sobie poczucie honoru, które nie pozwala jej zostawić innych w potrzebie",
    "działa z odwagą, która staje się przykładem dla innych",
    "zachowuje wierność swoim zasadom nawet w obliczu przeciwności"
  ],
  "salomon": [
    "ma dar podejmowania trafnych decyzji tam, gdzie inni się gubią",
    "potrafi spojrzeć na spór z dystansu i znaleźć rozwiązanie satysfakcjonujące obie strony",
    "łączy mądrość życiową ze spokojem w trudnych sytuacjach"
  ],
  "teodor": [
    "ma w sobie ciepło, które sprawia, że inni czują się przy niej dobrze",
    "dzieli się swoimi zdolnościami tak naturalnie, jakby to był oddech",
    "traktuje to, co dostała od życia, jako powód do wdzięczności, nie dumy"
  ],
  "urban": [
    "swobodnie odnajduje się w każdym towarzystwie",
    "ma w sobie ogładę, dzięki której łatwo buduje relacje z nowymi ludźmi",
    "potrafi dostosować się do sytuacji, nie tracąc przy tym siebie"
  ],
  "waclaw": [
    "dąży do uznania, ale zawsze w zgodzie z własnymi zasadami",
    "ma w sobie ambicję, którą realizuje z klasą, a nie kosztem innych",
    "chce, by pamiętano ją z dobrych powodów"
  ],
  "zenon": [
    "ma w sobie naturalny autorytet, który sprawia, że inni jej słuchają",
    "działa z powagą, która budzi zaufanie",
    "trzyma się swoich zasad z siłą, której trudno się przeciwstawić"
  ],

  // ===================== IMIONA ŻEŃSKIE =====================

  "zofia": [
    "ma dar dostrzegania sedna sprawy, zanim zrobią to inni",
    "podchodzi do problemów z rozwagą, która zaskakuje jak na swój wiek",
    "łączy ciekawość świata z umiejętnością wyciągania trafnych wniosków"
  ],
  "julia": [
    "ma w sobie naturalny wdzięk, który przyciąga uwagę bez wysiłku",
    "podchodzi do życia z klasą widoczną w drobnych gestach",
    "łączy delikatność z wewnętrzną siłą"
  ],
  "maja": [
    "ma w sobie energię, która budzi otoczenie do działania jak wiosna",
    "podchodzi do świata z ciekawością, która nie gaśnie",
    "zaraża innych entuzjazmem, nawet w szare dni"
  ],
  "zuzanna": [
    "ma w sobie delikatność, która wcale nie oznacza słabości",
    "potrafi zachować spokój i wdzięk nawet w trudnych sytuacjach",
    "łączy wrażliwość z odpornością, jakiej nie widać na pierwszy rzut oka"
  ],
  "hanna": [
    "ma w sobie dobroć, która sprawia, że inni czują się przy niej bezpiecznie",
    "obdarza innych uwagą i wsparciem, nawet gdy sama tego nie oczekuje w zamian",
    "podchodzi do ludzi z empatią, która rzadko zawodzi"
  ],
  "aleksandra": [
    "staje w obronie innych, zanim ktokolwiek zdąży o to poprosić",
    "ma w sobie odwagę połączoną z troską o słabszych",
    "łączy stanowczość z opiekuńczością — inni czują się przy niej bezpiecznie"
  ],
  "amelia": [
    "angażuje się w to, co robi, z pełnym zaangażowaniem, bez połowiczności",
    "ma w sobie wytrwałość, która pozwala jej doprowadzać rzeczy do końca",
    "działa konsekwentnie, nawet gdy entuzjazm innych już opada"
  ],
  "oliwia": [
    "wnosi spokój tam, gdzie inni wprowadzają napięcie",
    "ma w sobie łagodność, która działa kojąco na otoczenie",
    "szuka porozumienia zamiast konfliktu, nawet w trudnych sytuacjach"
  ],
  "lena": [
    "ma w sobie blask, który przyciąga uwagę, nawet gdy nie stara się o to",
    "rozjaśnia otoczenie samą swoją obecnością",
    "potrafi wnieść lekkość tam, gdzie inni widzą tylko powagę"
  ],
  "emilia": [
    "dopracowuje każdy szczegół tego, co robi",
    "ma w sobie gorliwość, która sprawia, że rzadko poddaje się w połowie drogi",
    "traktuje swoje zadania poważnie, nawet te niewielkie"
  ],
  "antonina": [
    "ma w sobie ciepło, dzięki któremu inni czują się przy niej dostrzeżeni",
    "buduje relacje powoli, ale wyjątkowo trwale",
    "jest kimś, kogo obecność łatwo docenić dopiero, gdy jej zabraknie"
  ],
  "laura": [
    "dąży do celów z wytrwałością, która w końcu przynosi uznanie",
    "ma w sobie ambicję połączoną z gustem — robi rzeczy dobrze i z klasą",
    "potrafi cieszyć się sukcesami, nie zapominając, ile pracy za nimi stoi"
  ],
  "nikola": [
    "myśli o dobru grupy, zanim pomyśli o własnej korzyści",
    "ma w sobie hojność, którą chętnie dzieli się z innymi",
    "potrafi poprowadzić innych, nie stawiając się ponad nimi"
  ],
  "wiktoria": [
    "nie poddaje się, nawet gdy coś wychodzi za pierwszym razem inaczej niż planowała",
    "ma w sobie determinację, która pcha ją do przodu mimo przeszkód",
    "traktuje porażki jako etap w drodze do sukcesu, nie jego koniec"
  ],
  "maria": [
    "ma w sobie spokojną godność, która budzi naturalny szacunek",
    "niesie w sobie siłę, która nie potrzebuje głośnych deklaracji",
    "jest oparciem dla innych, nawet gdy sama mierzy się z trudnościami"
  ],
  "alicja": [
    "mówi prawdę, nawet gdy łatwiej byłoby przemilczeć",
    "ma w sobie szlachetność, która widać w tym, jak traktuje innych",
    "trzyma się swoich zasad, nawet pod presją otoczenia"
  ],
  "natalia": [
    "ma w sobie ciepło, które sprawia, że inni czują się przy niej mile widziani",
    "obdarowuje innych uwagą i troską bez wyrachowania",
    "wnosi radość do sytuacji, które inni uznaliby za zwyczajne"
  ],
  "pola": [
    "ma w sobie wyczucie piękna, które widać w tym, jak podchodzi do rzeczy",
    "łączy jasność umysłu z wrażliwością artystyczną",
    "potrafi dostrzec harmonię tam, gdzie inni widzą chaos"
  ],
  "liliana": [
    "ma w sobie delikatność, która nie przeszkadza jej być stanowczą, gdy trzeba",
    "podchodzi do ludzi z czystymi intencjami, bez ukrytych motywów",
    "łączy wrażliwość z wewnętrzną siłą, która ujawnia się w trudnych chwilach"
  ],
  "iga": [
    "walczy o to, na czym jej zależy, nawet gdy szanse wydają się nierówne",
    "ma w sobie determinację, która nie pozwala jej odpuścić w połowie drogi",
    "działa z uporem, który z czasem przynosi efekty"
  ],
  "marta": [
    "dba o to, by wszystko wokół niej działało jak należy",
    "ma w sobie troskliwość, która ujawnia się w drobnych, praktycznych gestach",
    "bierze na siebie odpowiedzialność za innych, nawet gdy nikt jej o to nie prosi"
  ],
  "anna": [
    "ma w sobie naturalny wdzięk, który sprawia, że ludzie czują się przy niej dobrze",
    "obdarza innych uwagą, która sprawia, że czują się ważni",
    "łączy prostotę w podejściu do życia z głęboką życzliwością"
  ],
  "katarzyna": [
    "ma jasne zasady i trzyma się ich niezależnie od okoliczności",
    "podchodzi do spraw uczciwie, nawet gdy nikt tego nie sprawdza",
    "ceni prawdę bardziej niż wygodne kłamstwo"
  ],
  "agnieszka": [
    "łączy łagodność z odwagą — potrafi być delikatna i stanowcza jednocześnie",
    "ma w sobie czystość intencji, która sprawia, że inni jej ufają",
    "działa z wewnętrznym spokojem nawet w trudnych sytuacjach"
  ],
  "magdalena": [
    "potrafi się zmieniać i rozwijać, nie bojąc się zostawić za sobą tego, co już jej nie służy",
    "ma w sobie siłę emocjonalną, która pozwala jej przechodzić przez trudne chwile",
    "trzyma się wiernie ludzi i spraw, w które naprawdę wierzy"
  ],
  "monika": [
    "ma dar dawania trafnych rad dokładnie wtedy, gdy inni ich potrzebują",
    "potrafi wysłuchać, zanim zacznie doradzać",
    "jest tą osobą, do której inni przychodzą, gdy potrzebują jasnej perspektywy"
  ],
  "ewa": [
    "ma w sobie witalność, która udziela się osobom wokół niej",
    "tchnie życie w to, czym się zajmuje — nic przy niej nie jest nudne",
    "podchodzi do świata z energią, którą trudno przeoczyć"
  ],
  "barbara": [
    "nie boi się wyróżniać z tłumu, gdy ma coś ważnego do powiedzenia",
    "ma w sobie niezależność myślenia, która nie ugina się pod opinią większości",
    "podąża własną drogą, nawet gdy odbiega ona od utartych schematów"
  ],
  "joanna": [
    "ma prosty, szczery stosunek do świata — mówi to, co myśli",
    "jest solidnym oparciem dla innych, na którym można polegać",
    "podchodzi do życia z pogodą ducha, która udziela się otoczeniu"
  ],
  "malgorzata": [
    "ma w sobie wartość, którą trzeba poznać bliżej, żeby w pełni docenić",
    "buduje się powoli, przez doświadczenie, jak perła — warstwa po warstwie",
    "jest kimś, kogo obecność okazuje się cenniejsza, niż się początkowo wydaje"
  ],
  "elzbieta": [
    "dotrzymuje słowa, nawet gdy staje się to trudne",
    "ma w sobie lojalność, na której inni mogą polegać bez wahania",
    "traktuje swoje zobowiązania poważnie, niezależnie od okoliczności"
  ],
  "danuta": [
    "dzieli się tym, co ma, nie oczekując niczego w zamian",
    "ma w sobie hojność, która widać w drobnych, codziennych gestach",
    "traktuje pomaganie innym jako coś naturalnego, nie wysiłku"
  ],
  "krystyna": [
    "ma jasne, przejrzyste podejście do spraw — bez ukrytych motywów",
    "działa uczciwie i konsekwentnie, niezależnie od tego, kto patrzy",
    "ceni prostotę i szczerość ponad efektowne pozory"
  ],
  "teresa": [
    "dąży do tego, na czym jej zależy, z cichą, ale niezachwianą determinacją",
    "ma w sobie głębię, która ujawnia się w chwilach, gdy inni tracą wiarę",
    "potrafi skupić się na celu, nie dając się rozpraszać"
  ],
  "halina": [
    "zachowuje spokój dokładnie wtedy, gdy inni już panikują",
    "ma w sobie wewnętrzną ciszę, która działa kojąco na otoczenie",
    "podejmuje decyzje z rozwagą, a nie pod wpływem emocji"
  ],
  "beata": [
    "ma w sobie pogodę ducha, która nie gaśnie nawet w trudniejsze dni",
    "potrafi dostrzec dobro tam, gdzie inni widzą tylko problem",
    "dzieli się dobrą energią z otoczeniem, często nieświadomie"
  ],
  "renata": [
    "potrafi zaczynać od nowa, nawet gdy coś się nie udało za pierwszym razem",
    "ma w sobie odporność, która pozwala jej podnosić się po trudnych chwilach",
    "traktuje porażki jako punkt wyjścia, a nie koniec drogi"
  ],
  "iwona": [
    "ma w sobie giętką siłę — potrafi się dostosować, nie tracąc siebie",
    "trwa przy swoich wartościach, nawet gdy okoliczności się zmieniają",
    "łączy elastyczność z wewnętrzną stanowczością"
  ],
  "grazyna": [
    "ma w sobie siłę charakteru, która budzi naturalny respekt otoczenia",
    "nie boi się bronić tego, co uważa za słuszne",
    "działa z odwagą, która staje się przykładem dla innych"
  ],
  "dorota": [
    "traktuje swoje talenty jako coś, czym warto obdarowywać innych",
    "ma w sobie wdzięczność, która przekłada się na hojność wobec otoczenia",
    "dostrzega dobro w codziennych, drobnych momentach"
  ],
  "justyna": [
    "ma silne poczucie sprawiedliwości i reaguje, gdy coś jest nie w porządku",
    "traktuje wszystkich równo, niezależnie od tego, kim są",
    "broni słusznej sprawy, nawet gdy naraża się tym na niepopularność"
  ],
  "aneta": [
    "ma w sobie ciepło, które sprawia, że inni czują się przy niej dobrze",
    "obdarza innych uwagą, która sprawia, że czują się dostrzeżeni",
    "łączy delikatność z pewnością siebie"
  ],
  "karolina": [
    "ma w sobie niezależność, która pozwala jej iść własną drogą",
    "podejmuje decyzje pewnie, nie czekając na cudzą aprobatę",
    "łączy siłę charakteru z ciepłem wobec bliskich"
  ],
  "paulina": [
    "potrafi całkowicie zmienić kierunek, gdy odkryje coś ważniejszego",
    "ma w sobie siłę przekonań, która potrafi poruszyć innych",
    "działa z pełnym zaangażowaniem, gdy raz uwierzy w cel"
  ],
  "sylwia": [
    "ma w sobie naturalność, która sprawia, że łatwo się przy niej odprężyć",
    "czuje się najlepiej blisko natury i prostych, autentycznych rzeczy",
    "podchodzi do świata bez zbędnej pozy"
  ],
  "kinga": [
    "staje w obronie bliskich, nawet kosztem własnego komfortu",
    "ma w sobie odwagę, która ujawnia się dokładnie wtedy, gdy jest potrzebna",
    "broni tego, w co wierzy, z pełnym zaangażowaniem"
  ],
  "weronika": [
    "pokazuje siebie prawdziwie, bez udawania kogoś innego",
    "ma w sobie determinację, która prowadzi ją do celu mimo przeszkód",
    "działa zgodnie z tym, kim naprawdę jest, nawet pod presją otoczenia"
  ],
  "klaudia": [
    "nie pozwala przeszkodom powstrzymać jej od celu",
    "ma w sobie wytrwałość, która sprawia, że idzie dalej, nawet gdy droga jest trudna",
    "traktuje trudności jako coś do pokonania, nie powód do rezygnacji"
  ],
  "patrycja": [
    "ma w sobie wewnętrzną klasę, która widać w tym, jak traktuje innych",
    "trzyma się swoich zasad, nawet gdy łatwiej byłoby pójść na skróty",
    "działa uczciwie, nawet gdy nikt tego nie widzi"
  ],
  "dominika": [
    "angażuje się w to, w co wierzy, bez połowiczności",
    "ma w sobie oddanie, które sprawia, że inni mogą na niej polegać",
    "traktuje swoje zobowiązania poważnie, nawet te niewielkie"
  ],
  "sandra": [
    "broni swojego zdania, nawet gdy większość myśli inaczej",
    "ma w sobie odwagę, która pozwala jej stawać w czyjejś obronie",
    "łączy stanowczość z troską o tych, na których jej zależy"
  ],
  "angelika": [
    "ma dar przynoszenia dobrej energii tam, gdzie jej brakuje",
    "potrafi wesprzeć innych dokładnie w momencie, gdy najbardziej tego potrzebują",
    "łączy delikatność z wewnętrzną siłą"
  ],
  "izabela": [
    "dotrzymuje słowa, nawet gdy staje się to trudne",
    "ma w sobie elegancję, która widać w sposobie, w jaki traktuje innych",
    "trzyma się swoich zasad z klasą, a nie kosztem innych"
  ],
  "gabriela": [
    "ma dar mówienia rzeczy ważnych w odpowiednim momencie",
    "potrafi być głosem, który inni naprawdę usłyszą",
    "łączy siłę wewnętrzną z delikatnością w kontakcie z ludźmi"
  ],
  "milena": [
    "łączy ciepło wobec innych z ambicją, by robić rzeczy naprawdę dobrze",
    "ma w sobie życzliwość, która nie wyklucza stanowczości",
    "dąży do uznania, nie tracąc przy tym troski o innych"
  ],
  "wanda": [
    "ma w sobie dumę, która nie pozwala jej iść na kompromis z własnymi wartościami",
    "podejmuje trudne decyzje samodzielnie, licząc na własny osąd",
    "działa z odwagą, która staje się inspiracją dla innych"
  ],
  "jadwiga": [
    "walczy o sprawy, w które wierzy, nawet gdy jest to niewygodne",
    "ma w sobie determinację, która nie pozwala jej odpuścić",
    "broni słabszych z pełnym zaangażowaniem"
  ],
  "irena": [
    "wprowadza spokój tam, gdzie inni podsycają napięcie",
    "ma dar godzenia sprzecznych stron",
    "działa tak, by wszyscy wokół niej czuli się bezpiecznie"
  ],
  "stefania": [
    "chce, by jej czyny mówiły same za siebie",
    "ma w sobie godność, która widać w tym, jak podchodzi do wyzwań",
    "dąży do tego, by zostać zapamiętaną z dobrej strony"
  ],
  "helena": [
    "przyciąga uwagę samą swoją obecnością, bez wysiłku",
    "ma w sobie blask, który potrafi rozjaśnić nawet trudne chwile",
    "inspiruje innych, często nieświadomie"
  ],
  "bronislawa": [
    "broni tego, na czym jej zależy, konsekwentnie i bez wahania",
    "ma w sobie lojalność wobec ludzi i wartości, które są dla niej ważne",
    "działa tak, by chronić dobre imię tych, na których jej zależy"
  ],
  "janina": [
    "ma prosty, szczery stosunek do świata",
    "jest solidnym oparciem dla innych, na którym można polegać",
    "podchodzi do życia z pogodą ducha, która udziela się otoczeniu"
  ],
  "urszula": [
    "ma w sobie siłę, której nie widać na pierwszy rzut oka",
    "potrafi być zaskakująco stanowcza, gdy sytuacja tego wymaga",
    "łączy delikatność z wewnętrzną determinacją"
  ],
  "bogumila": [
    "trzyma się swoich wartości, nawet gdy łatwiej byłoby odpuścić",
    "ma w sobie prawość, która widać w drobnych, codziennych wyborach",
    "działa zgodnie z tym, w co naprawdę wierzy"
  ],
  "celina": [
    "ma w sobie marzycielskość, która nie przeszkadza jej działać konkretnie",
    "potrafi dostrzec piękno tam, gdzie inni go nie zauważają",
    "podchodzi do świata z lekkością, która udziela się otoczeniu"
  ],
  "dagmara": [
    "ma w sobie pogodę ducha, która rozjaśnia nawet trudne dni",
    "potrafi znaleźć jasną stronę tam, gdzie inni widzą tylko trudności",
    "działa z energią, która udziela się innym"
  ],
  "eliza": [
    "dotrzymuje słowa, nawet gdy jest to trudne",
    "ma w sobie elegancję połączoną z lojalnością wobec bliskich",
    "traktuje swoje zobowiązania poważnie"
  ],
  "faustyna": [
    "wierzy, że sprawy w końcu się ułożą, i tą wiarą zaraża innych",
    "ma w sobie optymizm, który pomaga jej przechodzić przez trudne chwile",
    "przynosi otoczeniu spokój, że wszystko będzie dobrze"
  ],
  "gaja": [
    "ma w sobie ugruntowanie, dzięki któremu inni czują się przy niej stabilnie",
    "troszczy się o otoczenie z naturalną, niewymuszoną troskliwością",
    "czuje się najlepiej, gdy może się czymś (lub kimś) zaopiekować"
  ],
  "ida": [
    "angażuje się w to, co robi, ze starannością, jaką rzadko widać u innych",
    "ma w sobie pracowitość, która nie potrzebuje poklasku, by trwać",
    "doprowadza rzeczy do końca, nawet gdy entuzjazm innych już opada"
  ],
  "jagoda": [
    "ma w sobie naturalną słodycz charakteru, bez sztuczności",
    "czuje się najlepiej blisko prostych, autentycznych rzeczy",
    "podchodzi do ludzi z ciepłem, które trudno podrobić"
  ],
  "kornelia": [
    "dzieli się tym, co ma, bez wyrachowania",
    "ma w sobie wewnętrzne bogactwo, które przekłada się na hojność wobec innych",
    "potrafi dostrzec wartość tam, gdzie inni widzą tylko brak"
  ],
  "lidia": [
    "ma smykałkę do organizowania spraw i doprowadzania ich do końca",
    "potrafi dostrzec okazję tam, gdzie inni jej nie widzą",
    "działa samodzielnie i pewnie, licząc na własne umiejętności"
  ],
  "marika": [
    "ma w sobie ciepło, które sprawia, że inni czują się przy niej ważni",
    "łączy spokojną godność z żywiołową energią",
    "jest oparciem dla innych, nawet gdy sama mierzy się z trudnościami"
  ],
  "nadia": [
    "potrafi dostrzec nadzieję tam, gdzie inni już się poddali",
    "ma w sobie wiarę w lepsze rozwiązanie, nawet w trudnych momentach",
    "zaraża innych przekonaniem, że warto próbować dalej"
  ],
  "oksana": [
    "ma w sobie otwartość, dzięki której łatwo przyjmuje nowych ludzi do swojego życia",
    "traktuje innych z gościnnością, nawet gdy dopiero ich poznaje",
    "potrafi budować mosty tam, gdzie inni widzą różnice"
  ],
  "petronela": [
    "jest punktem oparcia dla innych, nawet w trudnych chwilach",
    "ma w sobie spokojną pewność, która uspokaja otoczenie",
    "trzyma się raz obranego kierunku, niezależnie od przeciwności"
  ],
  "roksana": [
    "ma w sobie blask, który sprawia, że trudno ją przeoczyć",
    "przyciąga uwagę swoją wyrazistą osobowością",
    "podchodzi do świata z energią, która rozjaśnia otoczenie"
  ],
  "salome": [
    "wnosi spokój tam, gdzie inni wprowadzają napięcie",
    "ma w sobie wewnętrzną harmonię, która udziela się otoczeniu",
    "szuka porozumienia zamiast konfliktu"
  ],
  "tola": [
    "ma w sobie ciepło, dzięki któremu inni czują się przy niej dostrzeżeni",
    "buduje relacje powoli, ale wyjątkowo trwale",
    "jest kimś, kogo wartość widać dopiero z bliska"
  ],
  "wieslawa": [
    "stawia sobie coraz wyższe cele, zamiast poprzestawać na tym, co już osiągnęła",
    "ma w sobie głód rozwoju, który nie pozwala jej stać w miejscu",
    "dąży do tego, by być coraz lepszą wersją siebie"
  ],
  "zenobia": [
    "ma w sobie siłę przywódczą, która nie boi się iść pod prąd",
    "podejmuje decyzje niezależnie, licząc na własny osąd",
    "działa z odwagą, która robi wrażenie na innych"
  ],
  "blanka": [
    "ma jasne, przejrzyste podejście do spraw, bez ukrytych motywów",
    "działa uczciwie, niezależnie od tego, kto patrzy",
    "wnosi jasność tam, gdzie inni wprowadzają zamęt"
  ],
  "cecylia": [
    "ma wyczucie piękna, które widać w tym, jak podchodzi do świata",
    "dostrzega emocje i niuanse, które innym umykają",
    "łączy wrażliwość artystyczną z głębią przeżywania"
  ],
  "diana": [
    "działa niezależnie, wybierając własną drogę zamiast utartej ścieżki",
    "ma w sobie celność — wie, czego chce, i konsekwentnie do tego zmierza",
    "czuje się najsilniejsza, gdy może polegać na sobie"
  ],
  "estera": [
    "ma w sobie odwagę, która ujawnia się dokładnie wtedy, gdy stawka jest wysoka",
    "potrafi wykorzystać swoją pozycję, by pomóc innym",
    "wyróżnia się w tłumie, nawet gdy nie stara się o to"
  ],
  "filipina": [
    "ma w sobie energię, która nie pozwala jej długo stać w miejscu",
    "szuka wolności działania i najlepiej czuje się poza utartym schematem",
    "rzuca się w nowe wyzwania z entuzjazmem, który zaraża innych"
  ],
  "genowefa": [
    "ma w sobie wierność wartościom, których nauczyła się od najbliższych",
    "działa prosto i uczciwie, bez zbędnej pozy",
    "jest oparciem dla innych dzięki swojej stałości"
  ],
  "ilona": [
    "ma w sobie blask, który przyciąga innych bez wysiłku",
    "inspiruje otoczenie swoją energią i pewnością siebie",
    "potrafi rozjaśnić nawet trudne chwile"
  ],
  "jolanta": [
    "ma w sobie delikatność, za którą kryje się głęboka siła uczuć",
    "potrafi zauważyć to, co inni przeoczają",
    "podchodzi do ludzi z wrażliwością, która buduje prawdziwe relacje"
  ],
  "klara": [
    "ma jasność myślenia, która pomaga jej szybko dotrzeć do sedna sprawy",
    "działa w sposób prosty i przejrzysty, bez zbędnych komplikacji",
    "mówi wprost to, co myśli, zamiast owijać w bawełnę"
  ],
  "ludwika": [
    "walczy o to, na czym jej zależy, nawet gdy szanse wydają się nierówne",
    "ma w sobie determinację, która nie pozwala jej odpuścić w połowie drogi",
    "działa z odwagą, która staje się przykładem dla innych"
  ],
  "malwina": [
    "ma w sobie wrażliwość, która pozwala jej dostrzec to, co inni pomijają",
    "przeżywa rzeczy głęboko, nawet jeśli nie zawsze to okazuje",
    "łączy marzycielskość z wyczuciem tego, co naprawdę ważne"
  ],
  "nina": [
    "ma w sobie subtelną siłę, która ujawnia się dopiero z bliska",
    "działa niezależnie, ufając własnemu osądowi",
    "buduje relacje powoli, ale bardzo trwale"
  ],
  "otylia": [
    "dzieli się tym, co ma, bez wyrachowania",
    "ma w sobie poczucie obfitości, które chętnie przekłada na hojność wobec innych",
    "potrafi dostrzec wartość tam, gdzie inni widzą tylko brak"
  ]

};

// Warianty dla imion spoza bazy — uniwersalne, pozytywne, gramatycznie neutralne.
var GENERIC_TRAITS = [
  "ma rzadką umiejętność łączenia rzeczy, które innym wydają się odległe",
  "jest osobą wielu talentów, które dopiero czekają na właściwy moment",
  "działa inaczej niż większość — i to jest jej największym atutem",
  "potrafi zauważyć to, co inni przeoczają",
  "łączy w sobie ciekawość świata z odwagą do działania",
  "ma w sobie wytrwałość, która pozwala jej docierać do celu własną drogą",
  "potrafi zachować spokój dokładnie wtedy, gdy jest on najbardziej potrzebny",
  "buduje wokół siebie atmosferę, w której inni czują się swobodnie",
  "nie boi się zadawać pytań, których inni wolą unikać",
  "znajduje nieoczywiste rozwiązania tam, gdzie inni utknęliby w schemacie",
  "ma w sobie ciekawość, która nie pozwala jej poprzestawać na powierzchni spraw",
  "potrafi połączyć logiczne myślenie z wyczuciem ludzi",
  "działa z determinacją, która z czasem robi wrażenie na otoczeniu"
];

function getNameTrait(name){
  var norm = normalize(name); // zakładam że funkcja normalize() istnieje w kontekście docelowym
  var entry = NAMES[norm];
  if(entry) return entry[Math.floor(Math.random()*entry.length)];
  return GENERIC_TRAITS[Math.floor(Math.random()*GENERIC_TRAITS.length)];
}
