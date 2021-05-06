import axios from 'axios';
import colors from "colors";
import {END_POINT, MAIN_CONTENT, RETRY_API, TIME_INTERVAL} from "./constain";
import {MailService} from "./mail.service";
import {RsiService} from "./rsi.service";

const mailService = new MailService();
const rsiService = new RsiService();

mailService.checkMailService();

let flatRetry = 0;
let symbolError: string = "";
function main() {
    axios.all([
        axios.get(END_POINT.RSI_GBP_USD_M30.URL),
        axios.get(END_POINT.RSI_GBP_USD_H1.URL),
        axios.get(END_POINT.RSI_GBP_USD_H4.URL),
        //
        axios.get(END_POINT.RSI_EUR_USD_H1.URL),
        axios.get(END_POINT.RSI_EUR_USD_M30.URL),
        axios.get(END_POINT.RSI_EUR_USD_H4.URL),
        //
        axios.get(END_POINT.RSI_USD_CHF_M30.URL),
        axios.get(END_POINT.RSI_USD_CHF_H1.URL),
        axios.get(END_POINT.RSI_USD_CHF_H4.URL),


    ]).then(axios.spread((
        R_G_U_M30,
        R_G_U_H1,
        R_G_U_H4,

        R_E_U_H1,
        R_E_U_M30,
        R_E_U_H4,

        R_U_C_M30,
        R_U_C_H1,
        R_U_C_H4,

    ) => {
        flatRetry = 0;
        symbolError =
                    R_G_U_M30.data ? "" : END_POINT.RSI_GBP_USD_M30.DES +
                    R_G_U_H1.data ? "" : END_POINT.RSI_GBP_USD_H1.DES +
                    R_G_U_H4.data ? "" : END_POINT.RSI_GBP_USD_H4.DES +
                    R_E_U_H1.data ? "" : END_POINT.RSI_EUR_USD_H1.DES +
                    R_E_U_M30.data ? "" : END_POINT.RSI_EUR_USD_M30.DES +
                    R_E_U_H4.data ? "" : END_POINT.RSI_EUR_USD_H4.DES +
                    R_U_C_M30.data ? "" : END_POINT.RSI_USD_CHF_M30.DES +
                    R_U_C_H1.data ? "" : END_POINT.RSI_USD_CHF_H1.DES +
                    R_E_U_H4.data ? "" : END_POINT.RSI_EUR_USD_H4.DES;
        if (symbolError !== "") {
            mailService.sendMail("ERROR FETCH API " + symbolError);
        } else {
            rsiService.checkBreakoutRsi(R_G_U_M30.data.rsi, END_POINT.RSI_GBP_USD_M30.DES);
            rsiService.checkBreakoutRsi(R_G_U_H1.data.rsi, END_POINT.RSI_GBP_USD_H1.DES);
            rsiService.checkBreakoutRsi(R_G_U_H4.data.rsi, END_POINT.RSI_GBP_USD_H4.DES);

            rsiService.checkBreakoutRsi(R_E_U_H1.data.rsi, END_POINT.RSI_EUR_USD_H1.DES);
            rsiService.checkBreakoutRsi(R_E_U_M30.data.rsi, END_POINT.RSI_EUR_USD_M30.DES);
            rsiService.checkBreakoutRsi(R_E_U_H4.data.rsi, END_POINT.RSI_EUR_USD_H4.DES);

            rsiService.checkBreakoutRsi(R_U_C_M30.data.rsi, END_POINT.RSI_USD_CHF_M30.DES);
            rsiService.checkBreakoutRsi(R_U_C_H1.data.rsi, END_POINT.RSI_USD_CHF_H1.DES);
            rsiService.checkBreakoutRsi(R_U_C_H4.data.rsi, END_POINT.RSI_USD_CHF_H4.DES);

        }
    })).catch(() => {
        console.log(colors.red("ERROR FETCH API " + symbolError));
        if (flatRetry <= RETRY_API) {
            flatRetry = flatRetry + 1;
            main();
        }
    });
}

// START IN HERE
mailService.sendMail(MAIN_CONTENT.START);
main();
setInterval(() => {
    main();
}, TIME_INTERVAL);
