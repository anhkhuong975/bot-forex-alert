export const RSI_END_POINTS: Array<{ URL: string, DES: string }> =
    [
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
            URL: "https://finnhub.io/api/v1//indicator?" +
                "symbol=OANDA:USD_CHF&" +
                "resolution=30&" +
                "indicator=rsi&" +
                "timeperiod=14&" +
                "count=30&" +
                "seriestype=c" +
                "&token=c2947qqad3if6b4ccp7g",
            DES: 'USD_CHF_M30'
        },
        {
            URL: "https://finnhub.io/api/v1//indicator?" +
                "symbol=OANDA:USD_CHF&" +
                "resolution=60&" +
                "indicator=rsi&" +
                "timeperiod=14&" +
                "count=30&" +
                "seriestype=c" +
                "&token=c2947qqad3if6b4ccp7g",
            DES: 'USD_CHF_H1'
        },
        {
            URL: "https://finnhub.io/api/v1//indicator?" +
                "symbol=OANDA:USD_CHF&" +
                "resolution=240&" +
                "indicator=rsi&" +
                "timeperiod=14&" +
                "count=30&" +
                "seriestype=c" +
                "&token=c2947qqad3if6b4ccp7g",
            DES: 'USD_CHF_H4'
        },
    ]
