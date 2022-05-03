# RomaJS public website

> WIP - In the meantime, join our [Slack channel](https://romajs.herokuapp.com/)

## Development

Copy the default environment file

```bash
cp .env.local.example .env.local
```

Run the local development server

```bash
yarn dev
```

Generate the static version of the website

```bash
yarn export
```

## Installing yarn

If you don't have yarn already installed on you machine, you can use [NodeJS corepack module](https://nodejs.org/dist/latest/docs/api/corepack.html) to manage its installation.

Just enable it using `npm i -g corepack` and then use yarn as if it was installed.
