import Controller from ".";
import QuestionServices from "services/question";

const questionServices = new QuestionServices();

class QuestionController extends Controller {
	constructor() {
		super(questionServices);
	}
}

export default QuestionController;
