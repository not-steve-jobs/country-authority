export const loadAppEnv = (): Record<string, any> => {
  return {
    version: process.env.VERSION ?? null,
  };
};
