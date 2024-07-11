type Environment = 'development' | 'staging' | 'production';

type Config = {
    port: number;
    environment: Environment;
    databaseUrl: string;
}

export {
    Environment,
    Config,
}