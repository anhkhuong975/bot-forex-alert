import {RSI_OVER_H, RSI_OVER_L} from "./constain";
import colors from "colors";


export class RsiService {
    constructor() {
    }

    /**
     * @description check breakout RSI indicator
     */
    checkBreakoutRsi(arrayRSI: number[], symbol: string) {
        const lastRSI = arrayRSI[arrayRSI.length-1];
        const afterRSI = arrayRSI[arrayRSI.length-2];
        let message: string = "";
        console.log(colors.green(symbol + ": ") + colors.yellow(lastRSI.toString()));

        const rsiMax = Math.max(lastRSI, afterRSI);
        if (rsiMax >= RSI_OVER_H) {
            message = `<span style="color: #09C625">${symbol} RSI: ${Math.round(lastRSI*1000)/1000}</span>, đang ở vùng ${RSI_OVER_H}, theo chiều hướng `;
            if (lastRSI > afterRSI) {
                message = message + `tăng`;
            }
            if (lastRSI < afterRSI) {
                message = message + `giảm`;
            }
            if (lastRSI == afterRSI) {
                message = message + `ngang`;
            }
        }

        const rsiMin = Math.min(lastRSI, afterRSI);
        if (rsiMin <= RSI_OVER_L) {
            message = `<span style="color: #09C625">${symbol} RSI: ${Math.round(lastRSI*1000)/1000}</span>, đang ở vùng ${RSI_OVER_L}, theo chiều hướng `;
            if (lastRSI > afterRSI) {
                message = message + `tăng`;
            }
            if (lastRSI < afterRSI) {
                message = message + `giảm`;
            }
            if (lastRSI === afterRSI) {
                message = message + `ngang`;
            }
        }
        return message;
    }
}
