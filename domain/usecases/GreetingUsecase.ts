
import { DATASOUCE } from '../constants/DataSource';
import { GreetingRepository } from '../repositories/GreetingRepository';

export class GreetingUsecase {
    private dataSource: DATASOUCE;
    private greetingRepository: GreetingRepository;

    constructor(dataSource: DATASOUCE) {
        this.dataSource = dataSource;
        this.greetingRepository = new GreetingRepository(this.dataSource);
        
    }

    getMessage() {
        return this.greetingRepository.getMessage();
    }
}