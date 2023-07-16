import React, { useEffect } from 'react'
import style from './Acceories_Fashion_Filter.module.scss'
import { FaList, FaSearch, FaThLarge } from 'react-icons/fa'
import { changePerPageQuantity, searchProduct, selectViewState, sortProduct } from '../../../../redux/reducer'
import { useSelector, useDispatch } from 'react-redux'


export default function Acceories_Fashion_Filter() {
  const dispatch = useDispatch();
  const quantityProductPerPage= useSelector((state) => state.app.acceoriesShop.perpage)
  const viewState = useSelector((state) => state.app.acceoriesShop.viewState)

  
  function handleChangePageQuantity(e){
    dispatch(changePerPageQuantity(e.target.value))
  }
  function handleSortProduct(e){
    dispatch(sortProduct(e.target.value))
  }

  function handleSearchResult(e){
    dispatch(searchProduct(e.target.value))
  }

  function handleChangeStateView(state){
    dispatch(selectViewState(state))
  }
  return (
    <div className={style.acceoriesFilterBar}>
      <div className={style.left}>
        <h3>Ecommerce Acceories & Fashion item </h3>
        <p className={style.descTitle}>{'About 9,620 results (0.62 seconds)'}</p>
      </div>
      <div className={style.right}>
        <div className={style.inputGroup_perPage}>
          <label htmlFor={style.input_numberPage}>Per Page</label>
          <input onChange={handleChangePageQuantity} id={style.input_numberPage} type='number' value={quantityProductPerPage} name="pageNumber"></input>
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
          <button type='button' onClick={() => handleChangeStateView(1)}><FaThLarge fill={viewState ==1? 'var(--pink)' : '#3F509E'}/></button>
          <button type='button' onClick={() => handleChangeStateView(2)}><FaList fill={viewState ==2? 'var(--pink)' : '#3F509E'}/></button>
        </div>

        <div className={style.searchGroup}>
          <input onChange={handleSearchResult} type='text'></input>
          <button><FaSearch/></button>
        </div>
      </div>
    </div>
  )
}
