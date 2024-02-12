import { Route, Routes } from "react-router-dom"
import LoginPage from "../auth/pages/LoginPage"
import HerosRouter from "../heros/routers/HerosRouter"
import PrivateRouter from "./PrivateRouter"
import PublicRouter from "./PublicRouter"

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={
                    <PublicRouter>
                        <LoginPage />
                    </PublicRouter>
                } />

                <Route path="/*" element={
                    <PrivateRouter>
                        <HerosRouter />
                    </PrivateRouter>
                } />

                {/* <Route path="/login" element={<LoginPage />} /> */}
            </Routes>
        </>
    )
}

export default AppRouter