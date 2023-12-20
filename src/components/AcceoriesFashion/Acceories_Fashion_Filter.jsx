// Import các biểu tượng (icons) từ thư viện react-icons/fa và useDispatch từ thư viện react-redux
import { FaList, FaThLarge } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Input } from "antd";

// Import các action và reducer từ file reducer của Redux
import {
  changePerPageQuantity,
  searchProduct,
  selectViewState,
  sortProduct,
} from "@/redux/reducer";

import style from "./Acceories_Fashion_Filter.module.scss";
import { useState } from "react";

/**
 * Component cho thanh lọc sản phẩm phụ kiện và thời trang trong trang web thương mại điện tử.
 * @param {object} props - Props của component.
 * @param {number} props.page - Trang hiện tại của sản phẩm, mặc định là 1.
 * @param {number} props.perpageSelector - Số lượng sản phẩm hiển thị trên mỗi trang, mặc định là 20.
 * @param {number} props.viewSelector - Chế độ xem danh sách hoặc lưới, trạng thái xem (1: lưới, 2: danh sách).
 * @returns {JSX.Element} - Giao diện JSX của component.
 */
export default function Acceories_Fashion_Filter({
  page = 1,
  perpageSelector = 20,
  viewSelector = 1,
}) {
  // Sử dụng useDispatch để lấy hàm dispatch từ Redux
  const dispatch = useDispatch();

  // Lấy giá trị perpage từ prop và gán vào biến productQuantity
  const [productQuantity, setProductQuantity] = useState(perpageSelector);

  // Lấy giá trị view từ prop và gán vào biến viewState
  const [viewState, setViewState] = useState(viewSelector);

  /**
   * Hàm xử lý sự kiện thay đổi số lượng sản phẩm trên mỗi trang.
   * @param {Object} e - Đối tượng sự kiện.
   */
  function handleChangePageQuantity(e) {
    setProductQuantity(e.target.value);
    dispatch(
      changePerPageQuantity({
        page: page,
        data: e.target.value,
      })
    );
  }

  /**
   * Hàm xử lý sự kiện sắp xếp sản phẩm.
   * @param {Object} e - Đối tượng sự kiện.
   */
  function handleSortProduct(e) {
    dispatch(
      sortProduct({
        page: page,
        data: e.target.value,
      })
    );
  }

  /**
   * Hàm xử lý sự kiện tìm kiếm sản phẩm.
   * @param {Object} e - Đối tượng sự kiện.
   */
  function handleSearchResult(value) {
    dispatch(
      searchProduct({
        page: page,
        data: value,
      })
    );
  }

  /**
   * Hàm xử lý sự kiện thay đổi chế độ xem danh sách.
   * @param {number} state - Trạng thái xem (1: lưới, 2: danh sách).
   */
  function handleChangeStateView(state) {
    setViewState(state);
    dispatch(
      selectViewState({
        page: page,
        data: state,
      })
    );
  }

  // Phần giao diện JSX của component
  return (
    <div className={style.acceoriesFilterBar}>
      <div className={style.left}>
        <h3>Ecommerce Acceories & Fashion item </h3>
        <p className={style.descTitle}>
          {"About 9,620 results (0.62 seconds)"}
        </p>
      </div>
      <div className={style.right}>
        <div className={style.inputGroup_perPage}>
          <label htmlFor={style.input_numberPage}>Per Page</label>
          <input
            placeholder="products per page"
            onChange={handleChangePageQuantity}
            id={style.input_numberPage}
            type="number"
            value={productQuantity}
            name="pageNumber"
          ></input>
        </div>

        <div className={style.inputGroup_sortBy}>
          <label htmlFor={style.input_sort}>Sort By:</label>
          <select onChange={handleSortProduct} id={style.input_sort}>
            <option value="favourite">Yêu Thích</option>
            <option value="Hot_Selling">Bán Chạy</option>
            <option value="price">Giá Tiền</option>
          </select>
        </div>

        <div className={style.inputGroup_view}>
          <label htmlFor={style.input_view}>View:</label>
          <button type="button" onClick={() => handleChangeStateView("grid")}>
            <FaThLarge fill={viewState == "grid" ? "var(--pink)" : "#3F509E"} />
          </button>
          <button type="button" onClick={() => handleChangeStateView("list")}>
            <FaList fill={viewState == "list" ? "var(--pink)" : "#3F509E"} />
          </button>
        </div>

        <Input
          placeholder="input search text"
          allowClear
          style={{ width: 200, padding: "0.25rem 0.5rem" }}
          size="large"
          onChange={(e) => handleSearchResult(e.target.value)}
        />
      </div>
    </div>
  );
}
