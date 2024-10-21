import Controller from ".";
import QuestionaryServices from "../services/questionaryServices";

const questionaryServices = new QuestionaryServices();

class QuestionaryController extends Controller {
	constructor() {
		super(questionaryServices);
	}
}

export default QuestionaryController;
