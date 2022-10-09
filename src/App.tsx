import Home from "./components/Home";
import DataProvider from "./context/DataProvider";

export default function App() {
    return (
        <DataProvider>
            <Home/>
        </DataProvider>
    );
}

