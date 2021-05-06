import {RSI_OVER_H, RSI_OVER_L} from "./constain";
import {MailService} from "./mail.service";
import colors from "colors";


export class RsiService {
    private mailService;
    constructor() {
        this.mailService = new MailService();
    }

    /**
     * @description check breakout RSI indicator
     */
    checkBreakoutRsi(arrayRSI: number[], symbol: string) {
        const lastRSI = arrayRSI[arrayRSI.length-1];
        const afterRSI = arrayRSI[arrayRSI.length-2];
        console.log(colors.green(symbol + ": ") + colors.yellow(lastRSI.toString()));

        const rsiMax = Math.max(lastRSI, afterRSI);
        if (rsiMax >= RSI_OVER_H) {
            let message = `${symbol} RSI: ${Math.round(lastRSI*1000)/1000}, đang ở vùng ngưỡng ${RSI_OVER_H}, theo chiều hướng `;
            if (lastRSI > afterRSI) {
                message = message + `tăng`;
                this.mailService.sendMail(message);
            }
            if (lastRSI < afterRSI) {
                message = message + `giảm`;
                this.mailService.sendMail(message);
            }
            if (lastRSI == afterRSI) {
                message = message + `ngang`;
                this.mailService.sendMail(message);
            }
        }

        const rsiMin = Math.min(lastRSI, afterRSI);
        if (rsiMin <= RSI_OVER_L) {
            let message = `${symbol} RSI: ${Math.round(lastRSI*1000)/1000}, đang ở vùng ngưỡng ${RSI_OVER_L}, theo chiều hướng `;
            if (lastRSI > afterRSI) {
                message = message + `tăng`;
                this.mailService.sendMail(message);
            }
            if (lastRSI < afterRSI) {
                message = message + `giảm`;
                this.mailService.sendMail(message);
            }
            if (lastRSI === afterRSI) {
                message = message + `ngang`;
                this.mailService.sendMail(message);
            }
        }
    }
}
