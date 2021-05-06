import axios from 'axios';
import colors from "colors";
import {END_POINT, MAIN_CONTENT, TIME_INTERVAL} from "./constain";
import {MailService} from "./mail.service";
import {RsiService} from "./rsi.service";

const mailService = new MailService();
const rsiService = new RsiService();

mailService.checkMailService();

let flatRetry = 0;
function main() {
    axios.all([
        axios.get(END_POINT.RSI_GBP_USD_M30.URL),
        axios.get(END_POINT.RSI_GBP_USD_H1.URL),
        axios.get(END_POINT.RSI_GBP_USD_H4.URL),
        axios.get(END_POINT.RSI_EUR_USD_H1.URL),
    ]).then(axios.spread((
        R_G_U_M30, R_G_U_H1, R_G_U_H4, R_E_U_H1
    ) => {
        flatRetry = 0;
        const symbolError: string =
                    R_G_U_M30.data ? "" : END_POINT.RSI_GBP_USD_M30.DES +
                    R_G_U_H1.data ? "" : END_POINT.RSI_GBP_USD_H1.DES +
                    R_G_U_H4.data ? "" : END_POINT.RSI_GBP_USD_H4.DES +
                    R_E_U_H1.data ? "" : END_POINT.RSI_EUR_USD_H1.DES;
        if (symbolError !== "") {
            mailService.sendMail("ERROR FETCH API: " + symbolError);
        } else {
            rsiService.checkBreakoutRsi(R_G_U_M30.data.rsi, END_POINT.RSI_GBP_USD_M30.DES);
            rsiService.checkBreakoutRsi(R_G_U_H1.data.rsi, END_POINT.RSI_GBP_USD_H1.DES);
            rsiService.checkBreakoutRsi(R_G_U_H4.data.rsi, END_POINT.RSI_GBP_USD_H4.DES);
            rsiService.checkBreakoutRsi(R_E_U_H1.data.rsi, END_POINT.RSI_EUR_USD_H1.DES);
        }
    })).catch(() => {
        // mailService.sendMail("ERROR FETCH API");
        console.log(colors.red("ERROR FETCH API"));
        if (flatRetry <= 3) {
            flatRetry = flatRetry + 1;
            main();
        }
    });
}

// START IN HERE
mailService.sendMail(MAIN_CONTENT.START);
setInterval(() => {
    main();
}, TIME_INTERVAL);
