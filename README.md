# react-webpack-MF

A complete Webpack Module Federation Case with React.

# project directory

## lib-app

It is a low-level or basic app, which exposes libraries like `react`, `react-dom`.

It is a pure `remote`

## component-app

It is a middle-level app, which depends on modules exposed from `lib-app` : `react` ,`react-dom`. In the meantime, it also exposes components: `Dialog`, `Button` to another app called `main-app`.

It is both host and remote.

## main-app

the top-level app, which depends on `lib-app` and `component-app`.

It is a pure host.

# how to use

- `chmod u+x ./scripts/*`
- `pnpm install:all`
- `pnpm start` in root

after all the commands done, open your browser at `http://localhost:3002`, open the dev-tool's network tab to see resources loading details

# delete dist and node_module folders

In root:
- `./rmdists.sh`
- `./rmnm.sh`

They don't have any valuable or really useful use case. I just made them because I like to obsess over small scripts.