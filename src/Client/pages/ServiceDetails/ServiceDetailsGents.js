import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceCard from "../../components/Card/ServiceCard";
import Footer from "../HomePage/Footer";
import { Scrollbars } from "react-custom-scrollbars";
import ServiceCategorySelectBut from "../../components/buttons/ServiceCategorySelectBut";
import ServiceImage from "../../images/services/salon working-01.png";
import ServiceCardTopic from "../../components/Card/ServiceCardTopic";
import { getAllMenServices } from "../../../actions/menServices";

export default function ServiceDetailsGents() {
  const dispatch = useDispatch();
  // const [ispoup, setIspopup] = useState(false);

  const { womenServices, womenLoading } = useSelector(
    (state) => state.menService
  );

  useEffect(() => {
    dispatch(getAllMenServices());
  }, []);

  return (
    <>
      <div className="md:h-full lg:h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-6">
        {/* <!--Card 1--> */}
        <div className="border-r border-gray-200 flex md:flex-col flex-row justify-center md:justify-start px-8">
          <ServiceCategorySelectBut
            content="Hair"
            BaseUrl="ServiceDetailsGents"
          />
          <ServiceCategorySelectBut
            content="Skin"
            BaseUrl="ServiceDetailsGents"
          />
          <ServiceCategorySelectBut
            content="Face"
            BaseUrl="ServiceDetailsGents"
          />
        </div>
        {/* <!--Card 2--> */}
        <div className="border-r border-gray-200 ">
          <Scrollbars style={{ height: 800 }}>
            <ServiceCard />
            <ServiceCard />
            <ServiceCardTopic Topic="Face" />
            <ServiceCard />
            <ServiceCard />
            <ServiceCardTopic Topic="Hair" />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCardTopic Topic="Skin" />
            <ServiceCard />
          </Scrollbars>{" "}
        </div>

        {/* <!--Card 3--> */}
        <div className="border-r border-gray-200">
          <img className="pt-44" src={ServiceImage} />
        </div>
      </div>
      <Footer />
    </>
  );
}
