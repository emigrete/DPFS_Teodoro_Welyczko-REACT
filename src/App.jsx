import Sidebar from "./components/Sidebar";
import TotalUsers from "./components/TotalUsers";
import TotalProducts from "./components/TotalProducts";
import LastProduct from "./components/LastProduct";
import UsersTable from "./components/UsersTable";
import ProductsTable from "./components/ProductsTable";
import "./styles.css"; // Asegúrate de importar el archivo CSS

function App() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <h1 className="dashboard-title">App Dashboard</h1>
                
                <div className="stats-container">
                    <TotalUsers />
                    <TotalProducts />
                </div>

                <div className="last-product-container">
                    <LastProduct />
                </div>

                <div className="tables-container">
                    <div className="table-wrapper">
                        <UsersTable />
                    </div>
                    <div className="table-wrapper">
                        <ProductsTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;