import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Header />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
