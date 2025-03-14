# Nest Discord Notifier

This project is a proof of concept for a Discord notifier built with NestJS.

## Installation

Install the dependencies using pnpm:

```bash
pnpm install
```

## Configuration

To change the Discord webhook URL, update the `local.env` file with the new URL.

## Running the application

### Development

To run the application in development mode:

```bash
pnpm run start:dev
```

### Production

To run the application in production mode:

```bash
pnpm run start:prod
```

## Testing

You can test the application using httpYac. The test scripts are located in `test/app.e2e.http`.
