import colors from "colors";
import {MAIN_CONTENT, TIME_INTERVAL} from "./constain";
import {MailService} from "./mail.service";
import {RsiService} from "./rsi.service";
import {RSI_END_POINTS} from "./endpoint.constain";
import fetch from "node-fetch";
import {concat, Observable} from 'rxjs';


const mailService = new MailService();
const rsiService = new RsiService();

// mailService.checkMailService();

function rsi_process() {
    let successMessage: string = "";
    let errorMessage: string = "";
    let observables: Observable<any>[]=[];

    RSI_END_POINTS.forEach(RSI_END_POINT => {
        const observable = new Observable(obs => {
            fetch(RSI_END_POINT.URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Finnhub-Token': 'c2947qqad3if6b4ccp7g'}
            }).then(res => res.json())
                .then(json => {
                    const message = rsiService.checkBreakoutRsi(json.rsi, RSI_END_POINT.DES);
                    if (message.length) {
                        successMessage = successMessage + '<li>' + message + '</li>';
                    }
                    obs.complete();
                })
                .catch(err => {
                    console.log(colors.red(err));
                    errorMessage = errorMessage + "<li>" + RSI_END_POINT.DES + "</li>";
                    obs.complete();
                });
        });
        observables.push(observable);
    });
    const sendMail = new Observable(subscriber => {
        let content:string = "";
        if (successMessage.length) {
            content = '<ul>' + successMessage + '</ul>' + "<br><br>";
        }
        if (errorMessage !== "") {
            content = content + "<br>ERROR: <br>" + "<ul>" + errorMessage + "</ul>";
        }
        if (content.length !== 0) {
            mailService.sendMail(content);
        }
        subscriber.complete();
    });
    observables.push(sendMail);
    concat(...observables).subscribe();
}

// START IN HERE
mailService.sendMail(MAIN_CONTENT.START);
rsi_process();
setInterval(() => {
    rsi_process();
}, TIME_INTERVAL);
