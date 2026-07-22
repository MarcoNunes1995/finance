# NovaWallet — Dashboard (Homepage)

Projeto exemplo: Homepage PWA/Web para NovaWallet.

## Estrutura principal

- `src/components/atoms` — botões, avatar, inputs mínimos.
- `src/components/molecules` — header, cards, gráficos, listas.
- `src/components/organisms` — `Dashboard` (composição dos blocos principais).
- `src/hooks` — `useDashboardData`, `useAnimationMount`, `useMediaQuery`.
- `src/services` — camada de API (mockada em `src/mockData.ts`).
- `src/types.ts` — tipos TypeScript compartilhados.
- `src/app/page.tsx` — entrada da página principal (App Router / Vite entry).

## Como rodar

1. Instale dependências:

```bash
npm install
```

2. Rodar em desenvolvimento (Vite):

```bash
npm run dev
```

3. Build de produção:

```bash
npm run build
```

## Decisões técnicas

- **Framework**: Escolhi React 18 + Vite para este repositório (CSR) porque o foco imediato foi prototipar uma PWA responsiva com baixo tempo de iteração. Para SSR, recomendo migrar para Next.js 14 (App Router) em produção.

- **TypeScript (strict)**: Tipos definidos em `src/types.ts` para garantir segurança em toda a stack.

- **Estilização**: Tailwind CSS para utilitários rápidos e tokens; estilos críticos em `src/index.css` e CSS-in-file para componentes.

- **Animações**: `framer-motion` usado para entradas e contadores (`react-countup`) para balance.

- **State / Data fetching**: `Zustand` pode ser adicionado para estado global mais complexo; `@tanstack/react-query` já é usado para fetch/caching (`useDashboardData`).

- **Acessibilidade**: Foco visível (`:focus-visible`), redução de movimento respeitada, todos os botões interativos devem ter `aria-label`.

- **Performance**: Lazy-load dinâmico do gráfico (`React.lazy` + `Suspense`), `React.memo` em itens de lista, `useMemo`/`useCallback` aplicados onde necessário.

## Próximos passos recomendados

- Integrar `msw` para mocking avançado durante desenvolvimento e testes.
- Adicionar testes unitários e e2e (Jest + Testing Library / Playwright).
- Refinar tokens de design e extrair em `design-tokens.json`.

## Observações

- Alguns componentes são simplificados para foco no fluxo e arquitetura. Posso detalhar cada componente separadamente ou dividir arquivos mais largos em subcomponentes conforme preferir.

