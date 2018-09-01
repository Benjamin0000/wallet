import { Component } from '@angular/core';
import { MenuController, NavController, LoadingController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import {NemProvider} from '../../providers/nem/nem.provider';
import { AlertProvider } from '../../providers/alert/alert.provider';
import { WalletProvider } from '../../providers/wallet/wallet.provider';

//pages
// import { BalancePage } from '../balance/balance';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

// import { SimpleWallet } from 'nem-library';


@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
 
export class WelcomePage {

    constructor(public navCtrl: NavController, private nem: NemProvider, private wallet: WalletProvider, private alert: AlertProvider, private loading: LoadingController, private menu: MenuController, public translate: TranslateService) {

    }

    //for the signuppage
    public goToSignup() {
        this.navCtrl.push(SignupPage);
    }

    //for the loginpage
    public goToLoginPage(){
        this.navCtrl.push(LoginPage);
    }
}