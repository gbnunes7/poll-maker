import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import FixedLayout from "../components/FixedLayout";
import Home from "../pages/Home";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<FixedLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/newpoll" element={<Home />} />
						<Route path="/mypolls" element={<Home />} />
					</Route>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
