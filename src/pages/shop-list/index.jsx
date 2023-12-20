import Acceories_Fashion_Filter from "@/components/AcceoriesFashion/Acceories_Fashion_Filter";
import ListProductCard from "@/components/ShopList/ListProductCard";
import AcceorieLayout from "@/layouts/AcceorieLayout";
import { useSelector } from "react-redux";
export default function Acceories_Shop_List() {
  const quantityProductPerPage = useSelector(
    (state) => state.app.shopList.perpage
  );
  const viewState = useSelector((state) => state.app.shopList.viewState);

  return (
    <AcceorieLayout title="Shop List">
      <Acceories_Fashion_Filter
        page={"shopList"}
        perpageSelector={quantityProductPerPage}
        viewSelector={viewState}
      />
      <br />
      <br />
      <br />
      <ListProductCard />
    </AcceorieLayout>
  );
}
