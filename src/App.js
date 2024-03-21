import { Routes , Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomPage from './components/HomPage/HomPage';
import EpicerieStores from './components/EpicerieStores/EpicerieStores';
import Footer from './components/Footer/Footer';
import TextileStores from './components/TextileStores/TextileStores';
import CosmeticsStores from './components/CosmeticsStores/CosmeticsStores';
import HairDressingStores from './components/HairDressingStores/HairDressingStores';
import FretStores from './components/FretStores/FretStores';
import HairBrushStores from './components/HairBrushStores/HairBrushStores';
import ContactUs from './components/ContactUs/ContactUs';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import AllRestaurants from './components/AllRestaurants/AllRestaurants';
import Basket from './components/Basket/Basket';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ReservationRestaurant from './components/ReservationRestaurant/ReservationRestaurant';
import ReservationRestauDetails from './components/ReservationRestaurant/ReservationRestauDetails';
import Devis from './components/Devis/Devis';
import AfricanShop from './components/AfricanShop/AfricanShop';
import CosmeticProducts from './components/AfricanShop/CosmeticProducts';
import TextileProducts from './components/AfricanShop/TextileProducts';
import EpicerieProducts from './components/AfricanShop/EpicerieProducts';
import Partners from './components/Partners/Partners';
import PropsTest from './PropsTest/PropsTest';
import EpicerieStoreDetails from './components/StoresDetails/EpicerieStoreDetails';
import TextileStoreDetails from './components/StoresDetails/TextileStoreDetails';
import CosmeticStoreDetails from './components/StoresDetails/CosmeticStoreDetails';
import HairDessingStoreDetails from './components/StoresDetails/HairDessingStoreDetails';
import FretStoreDetails from './components/StoresDetails/FretStoreDetails';
import HairBrushStoreDetails from './components/StoresDetails/HairBrushStoreDetails';
import RestaurantStoreDetails from './components/StoresDetails/RestaurantStoreDetails';
import Tabs from './PropsTest/Tabs';
import PartnersRegister from './components/Partners/PartnersRegister';
import PartnersLogin from './components/Partners/PartnersLogin';
import UserLogin from './components/User/UserLogin';
import UserRegister from './components/User/UserRegister';
import User from './components/User/User';
import ScrollToTop from './components/ScrollToTop';
import TabsPanel from './PropsTest/TabsPanel';
import TabsParent from './PropsTest/TabsParent';

function App() {
    
    return (
        <>
            <Header/>
            <ScrollToTop/>
            <Routes>
                <Route path='/' element={<HomPage/>}/>
                <Route path='/epicerie-stores' element={<EpicerieStores/>}/>
                <Route path='/textile-stores' element={<TextileStores/>}/>
                <Route path='/cosmetic-stores' element={<CosmeticsStores/>}/>
                <Route path='/hair-dressing-stores' element={<HairDressingStores/>}/>
                <Route path='/fret-stores' element={<FretStores/>}/>
                <Route path='/hair-brush-stores' element={<HairBrushStores/>}/>
                <Route path='/all-restaurants' element={<AllRestaurants/>}/>
                <Route path='/who-we-are' element={<WhoWeAre/>}/>
                <Route path='/contact-us' element={<ContactUs/>}/>
                <Route path='/epicerie-store-details' element={<EpicerieStoreDetails/>}/>
                <Route path='/textile-store-details' element={<TextileStoreDetails/>}/>
                <Route path='/cosmetic-store-details' element={<CosmeticStoreDetails/>}/>
                <Route path='/hairdessing-store-details' element={<HairDessingStoreDetails/>}/>
                <Route path='/fret-store-details' element={<FretStoreDetails/>}/>
                <Route path='/hair-brush-store-details' element={<HairBrushStoreDetails/>}/>
                <Route path='/restaurant-store-details' element={<RestaurantStoreDetails/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/product-details' element={<ProductDetails/>}/>
                <Route path='/reservation-resto' element={<ReservationRestaurant/>}/>
                <Route path='/reservation-resto-details' element={<ReservationRestauDetails/>}/>
                <Route path='/devis' element={<Devis/>}/>
                <Route path='/courses-africaines' element={<AfricanShop/>}/>
                <Route path='/cosmetic-products' element={<CosmeticProducts/>}/>
                <Route path='/textile-products' element={<TextileProducts/>}/>
                <Route path='/epicerie-products' element={<EpicerieProducts/>}/>
                <Route path='/partners' element={<Partners/>}/>
                <Route path='/partners-register' element={<PartnersRegister/>}/>                
                <Route path='/partners-login' element={<PartnersLogin/>}/>
                <Route path='/props' element={<PropsTest/>}/>
                <Route path='/tabs' element={<Tabs/>}/>
                <Route path='/user-connexion' element={<User/>}/>
                <Route path='/user-login' element={<UserLogin/>}/>
                <Route path='/user-register' element={<UserRegister/>}/>
                <Route path='/tabs-panel' element={<TabsPanel/>}/>
                <Route path='/tabs-parent' element={<TabsParent/>}/>

            </Routes>
            <Footer/>
        </>
    );
}

export default App;
