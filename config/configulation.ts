export const configuration = async () => {
  return {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    discord: {
      webhookUrl: process.env.DISCORD_WEBHOOK_URL,
    },
    accessToken: process.env.ACCESS_TOKEN || 'my_secret_token',
  };
};
