import Title from "@/app/detail/_components/_info_component/Title";
import Content from "@/app/detail/_components/_info_component/Content";

const Grape = () => {
    return (
        <div className="mt-[20px]">
            <Title>Grapes</Title>
            <Content>
                Cabernet Sauvignon provides a deep structure and black fruit flavors, while the other grape varieties
                contribute to smoothing the wine and adding subtle nuances of taste.
            </Content>
            <img src={'/info/circlegraph.svg'} className="mt-[20px]"/>
        </div>
    )
}
export default Grape;