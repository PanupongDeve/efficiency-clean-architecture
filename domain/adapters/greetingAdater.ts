import { GreetingUsecase } from '../usecases/GreetingUsecase';
import { DATASOUCE } from '../constants/DataSource';

class GreetingAdater {

    private static instance: GreetingAdater;
    private greetingUsecase: GreetingUsecase;

    private constructor() {
        this.greetingUsecase = new GreetingUsecase(DATASOUCE.MOCK)
    }

    public static getInstance(): GreetingAdater {
        if (!GreetingAdater.instance) {
            GreetingAdater.instance = new GreetingAdater();
        }

        return GreetingAdater.instance;
    }

    getMessage() {
        return this.greetingUsecase.getMessage();
    }

}

const greetingAdater: GreetingAdater = GreetingAdater.getInstance();

export {
    greetingAdater
}