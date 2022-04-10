import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import Sidenav from "../sidenav/Sidenav";
import ProductArea from "./ProductArea";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const cProducts = useSelector((state) => state.crntProducts);
  return (
    <section id="contentHolder">
      <div id="category">
        <div className="container">
          <div className="row">
            <BreadCrumbs urlData={props.urlData} />
            <Sidenav
              allCurrentProducts={props.products}
              products={props.currentProducts}
              urlTaxonomy={props.urlTaxonomy}
              urlData={props.urlData}
              checkAvailability={props.checkAvailability}
              setCheckAvailability={props.setCheckAvailability}
              setSearchText={props.setSearchText}
            />
            <ProductArea
              currentProducts={props.currentProducts}
              urlTaxonomy={props.urlTaxonomy}
              activePage={props.activePage}
              productsPerPage={props.productsPerPage}
              setCurrentPage={props.setCurrentPage}
              property={props.property}
              setProperty={props.setProperty}
              listGridViews={props.listGridViews}
              setListGridViews={props.setListGridViews}
              setPerpageProductscount={props.setPerpageProductscount}
              sortNewestStatus={props.sortNewestStatus}
              sortBrandStatus={props.sortBrandStatus}
              entryTime={props.entryTime}
              setSearchText={props.setSearchText}
              isSearch={props.isSearch}
              slug={props.slug}
              categoryMode={props.categoryMode}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
