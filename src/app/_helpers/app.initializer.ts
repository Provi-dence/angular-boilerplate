import { AccountService } from '@app/_services';

export function appInitializer(accountService: AccountService) {
    return () => new Promise(resolve => {
        // attempt to refresh token on app start up to auto authenticate
        //prince wilfie verame. akoa ni part sakspan
        accountService.refreshToken()
            .subscribe()
            .add(resolve);
    });
}