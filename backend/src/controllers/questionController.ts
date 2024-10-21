import Controller from ".";
import QuestionServices from "services/questionServices";

const questionServices = new QuestionServices();

class QuestionController extends Controller {
	constructor() {
		super(questionServices);
	}
}

export default QuestionController;
