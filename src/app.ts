import axios from 'axios';
import colors from "colors";
import {END_POINT, MAIN_CONTENT, TIME_INTERVAL} from "./constain";
import {MailService} from "./mail.service";
import {RsiService} from "./rsi.service";

const mailService = new MailService();
const rsiService = new RsiService();

mailService.checkMailService();

function main() {
    axios.all([
        axios.get(END_POINT.RSI_GBP_USD_M30.URL),
        axios.get(END_POINT.RSI_GBP_USD_H1.URL),
        axios.get(END_POINT.RSI_GBP_USD_H4.URL),
        axios.get(END_POINT.RSI_EUR_USD_H1.URL),
    ]).then(axios.spread((
        R_G_U_M30, R_G_U_H1, R_G_U_H4, R_E_U_H1
    ) => {
        rsiService.checkBreakoutRsi(R_G_U_M30.data.rsi, END_POINT.RSI_GBP_USD_M30.DES);
        rsiService.checkBreakoutRsi(R_G_U_H1.data.rsi, END_POINT.RSI_GBP_USD_H1.DES);
        rsiService.checkBreakoutRsi(R_G_U_H4.data.rsi, END_POINT.RSI_GBP_USD_H4.DES);
        rsiService.checkBreakoutRsi(R_E_U_H1.data.rsi, END_POINT.RSI_EUR_USD_H1.DES);

    })).catch(error => {
        mailService.sendMail("ERROR FETCH API: " + error.toString());
        console.log(colors.red(error));
    });
}

// START IN HERE
mailService.sendMail(MAIN_CONTENT.START);
setInterval(() => {
    main();
}, TIME_INTERVAL);
