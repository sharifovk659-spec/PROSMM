# PROSMM — GitHub ва Vercel

Сайт омода аст. Пеш аз deploy контактҳоро дар `src/i18n/static.ts` (телефон, WhatsApp, email) иваз кунед.

---

## 1. Git насб кунед (агар нест)

1. Ба [git-scm.com](https://git-scm.com/download/win) равед
2. Git-ро насб кунед (ҳамаи танзимот — default)
3. Cursor/терминалро пӯшед ва аз нав кушоед

Санҷиш:

```bash
git --version
```

---

## 2. Репозиторияи GitHub созед

1. Ба [github.com](https://github.com) воред шавед
2. **New repository** → ном: `prosmm` (ё дилхоҳ)
3. **Public** ё **Private**
4. README, .gitignore илова **накунед** (дар компютер аллакай ҳаст)
5. **Create repository**

---

## 3. Кодро ба GitHub фиристед

Терминалро дар папкаи лоиҳа кушоед:

```bash
cd c:\Users\admin\smm0101
```

Аввал санҷед, ки build хато надорад:

```bash
npm install
npm run build
```

Агар `✓ Compiled successfully` омад — идома диҳед:

```bash
git init
git add .
git commit -m "PROSMM landing: RU/TJ, contact, deploy ready"
git branch -M main
git remote add origin https://github.com/SIZINGIZ/prosmm.git
git push -u origin main
```

`SIZINGIZ` ва `prosmm`-ро бо номи ҳақиқии GitHub-и худ иваз кунед.

Агар GitHub парол пурсад — **Personal Access Token** истифода баред:
GitHub → Settings → Developer settings → Personal access tokens → Generate.

---

## 4. Vercel — сайт дар интернет

1. Ба [vercel.com](https://vercel.com) равед
2. **Sign up** бо ҳамон ҳисоби GitHub
3. **Add New… → Project**
4. Репозиторияи `prosmm`-ро интихоб кунед → **Import**
5. Танзимот (одатан худкор):

| Параметр | Қимат |
|----------|--------|
| Framework | Next.js |
| Build Command | `npm run build` |
| Output Directory | (холӣ — худкор) |
| Install Command | `npm install` |

6. **Deploy** пахш кунед

Пас аз 1–2 дақиқа сайт дар `https://prosmm-xxx.vercel.app` омода мешавад.

---

## 5. Домен (ихтиёрӣ)

Vercel → Project → **Settings → Domains** → домени худро илова кунед.

---

## Навсозии сайт (ҳар дафъа)

```bash
cd c:\Users\admin\smm0101
git add .
git commit -m "Update site"
git push
```

Vercel худкор аз нав deploy мекунад.

---

## Муҳим — чӣ ба Git намеравад

`.gitignore` инҳоро пинҳон мекунад (нафират нест):
- `node_modules/`
- `.next/`
- `.env*`
- `.vercel/`

---

## Агар хато омад

| Хато | Ҳал |
|------|-----|
| `git is not recognized` | Git насб кунед, терминалро аз нав кушоед |
| Build fail дар Vercel | `npm run build` дар компютер иҷро кунед, хаторо ислоҳ кунед |
| `Permission denied` | Token ё SSH барои GitHub танзим кунед |
| Суратҳо намебинанд | Файлҳои `public/images/` бояд дар репо бошанд |

---

## Файлҳои муҳим

- Контактҳо: `src/i18n/static.ts` → `CONTACT`
- Линкҳо: `src/i18n/static.ts` → `LINKS`
- Матнҳои RU: `src/i18n/ru.ts`
- Матнҳои TJ: `src/i18n/tj.ts`
