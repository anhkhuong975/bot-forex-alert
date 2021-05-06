export const TIME_INTERVAL:number = 600000;

export const RETRY_API :number = 3;

export const END_POINT = {
    RSI_GBP_USD_M30: {
        URL: "https://finnhub.io/api/v1//indicator" +
            "?symbol=FXPIG:412" +
            "&resolution=30" +
            "&indicator=rsi" +
            "&timeperiod=14" +
            "&count=30" +
            "&seriestype=c" +
            "&token=c2947qqad3if6b4ccp7g",
        DES: 'GBP_USD_M30'
    },
    RSI_GBP_USD_H1: {
        URL: "https://finnhub.io/api/v1//indicator" +
            "?symbol=FXPIG:412" +
            "&resolution=60" +
            "&indicator=rsi" +
            "&timeperiod=14" +
            "&count=30" +
            "&seriestype=c" +
            "&token=c2947qqad3if6b4ccp7g",
        DES: 'GBP_USD_H1'
    },
    RSI_GBP_USD_H4: {
        URL: "https://finnhub.io/api/v1//indicator" +
            "?symbol=FXPIG:412" +
            "&resolution=240" +
            "&indicator=rsi" +
            "&timeperiod=14" +
            "&count=30" +
            "&seriestype=c" +
            "&token=c2947qqad3if6b4ccp7g",
        DES: 'GBP_USD_H4'
    },
    RSI_EUR_USD_H1: {
        URL: "https://finnhub.io/api/v1//indicator?" +
            "symbol=OANDA:EUR_USD&" +
            "resolution=60&" +
            "indicator=rsi&" +
            "timeperiod=14&" +
            "count=30&" +
            "seriestype=c" +
            "&token=c2947qqad3if6b4ccp7g",
        DES: 'EUR_USD_H1'
    },
    RSI_EUR_USD_M30: {
        URL: "https://finnhub.io/api/v1//indicator?" +
            "symbol=OANDA:EUR_USD&" +
            "resolution=30&" +
            "indicator=rsi&" +
            "timeperiod=14&" +
            "count=30&" +
            "seriestype=c" +
            "&token=c2947qqad3if6b4ccp7g",
        DES: 'EUR_USD_M30'
    },
    RSI_EUR_USD_H4: {
        URL: "https://finnhub.io/api/v1//indicator?" +
            "symbol=OANDA:EUR_USD&" +
            "resolution=240&" +
            "indicator=rsi&" +
            "timeperiod=14&" +
            "count=30&" +
            "seriestype=c" +
            "&token=c2947qqad3if6b4ccp7g",
        DES: 'EUR_USD_H4'
    },
}

export const RSI_OVER_H = 70;
export const RSI_OVER_L = 30;

export const MAIL_SERVICE_CONFIG = {
    service: 'gmail',
    auth: {
        user: 'bot.forex.alert@gmail.com',
        pass: 'anhkhuong95'
    }
};

export const MAIN_CONTENT = {
    START: "BOT START",
}
