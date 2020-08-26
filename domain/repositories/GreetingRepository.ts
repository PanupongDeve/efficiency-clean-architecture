

import { DATASOUCE } from '../constants/DataSource';
import { message } from '../../datasource/mock/Greeting';

export class GreetingRepository {
    private dataSource: DATASOUCE

    constructor(dataSource: DATASOUCE) {
        this.dataSource = dataSource;
    }

    getMessage() {
        if (this.dataSource === DATASOUCE.MOCK) {
            return message;
        } else {
            return 'error';
        }
    }
}