import React from 'react';
import { Link } from 'react-router-dom';
import "./Category.scss"; //แสดงข้อมูล คาตาคอลี่

const CategoryList = ({categories}) => { //แสดงหน้าหลัก
  return (
    <div className='section-wrapper bg-whitesmoke'> 
        <div className='container'>
          <div className='sc-title'>categories</div>
          <section className='sc-category grid'> 
            {
              categories.map(category => { //เอาไอดีจาก apl มาใช้
                const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail} = category; 

                return (
                  <Link to = {`/meal/category/${title}`} className = "category-itm align-center justify-center" key = {id}> 
                    <div className='category-itm-img h-100 w-100 flex align-center justify-center'>
                      <img src = {thumbnail} alt = {title} /> 
                      <div className='category-itm-title bg-orange'>
                        <h3 className='text-white fs-11 fw-6 ls-1 text-uppercase'>{title}</h3>
                      </div> 
                    </div> 
                  </Link>
                )
              })
            }
          </section>
        </div>
    </div>
  )
}

export default CategoryList