import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png',
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>

                {/* Dos patrones diferentes */}
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Hola Mundo'} />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    );
};
