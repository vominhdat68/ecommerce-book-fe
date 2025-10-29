
import SectionContainer from "@/shared/components/SectionContainer";
import { ActionButton } from "@/shared/components/Button";
import { ProductsCardSkeleton } from "@/shared/components/skeleton-screen/HomeSkeleton";

import bg_suggestion from '/cfhs/image/bg_image/banner_personalization.png'

import ProductCard from "@/features/home/components/Card/ProductCard";
import { useGetSuggestionsQuery } from "@/features/home/service/homeService";


const CatSuggestionsSlider: React.FC = () => {
    const { data, isLoading } = useGetSuggestionsQuery({});
    const personalization = data?.data.personalization;

    return (
        <SectionContainer>
            <div className="bg-no-repeat bg-cover rounded-lg" style={{ backgroundSize: "contain", backgroundImage: `url(${bg_suggestion})` }}>
                <div className="h-[100px] w-full" />
                {
                    isLoading ?
                        <ProductsCardSkeleton /> :
                        <div className=" px-3">
                            <ul className="grid grid-cols-5">
                                {
                                    personalization && personalization.length > 0 && (
                                        personalization.map((item) =>
                                            <>
                                                <li key={item.id} className="">
                                                    <ProductCard key={item.id} cardType="personalization" product={item} />
                                                </li>
                                            </>)
                                    )
                                }
                            </ul>
                        </div>
                }
                <div className="text-center mt-5 pb-5">
                    <ActionButton
                        variant="navigation"
                        label="Xem thêm"
                        onClick={() => alert('Xem Thêm')}
                    />
                </div>
            </div>
        </SectionContainer>
    );
};

export default CatSuggestionsSlider;