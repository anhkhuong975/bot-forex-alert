import nodemailer from "nodemailer";
import {ENABLE_MAIL, MAIL_SERVICE_CONFIG} from "./constain";
const colors = require('colors');

export class MailService {
    private transporter;
    constructor() {
        this.transporter = nodemailer.createTransport(MAIL_SERVICE_CONFIG);
    }

    /**
     * @description check mail service
     */
    public checkMailService() {
        this.transporter.verify(function(error) {
            if (error) {
                console.log(error);
            } else {
                console.log(colors.green("Check init mail service OKE"));
            }
        });
    }

    public sendMail(content: string, title="PAK Forex Alert") {
        console.log(colors.yellow("SENDING CONTENT: " + content));
        const mail = {
            from: 'bot.forex.alert@gmail.com',
            to: 'anhkhuong975@gmail.com',
            subject: title,
            text: 'PAK',
            html: '<div>' + content + '</div>'
        };
        if (ENABLE_MAIL) {
            this.transporter.sendMail(mail, function(error, info) {
                if (error) {
                    console.log(colors.red(error));
                } else {
                    console.log(colors.blue('Email sent: ' + info.response));
                }
            });
        }
    }
}
