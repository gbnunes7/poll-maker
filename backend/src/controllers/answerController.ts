import Controller from ".";
import AnswerService from "services/answerServices";

const answerServices = new AnswerService();

class AnswerController extends Controller {
	constructor() {
		super(answerServices);
	}
}

export default AnswerController;
