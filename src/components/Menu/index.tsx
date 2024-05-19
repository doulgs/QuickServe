import { FlatList } from "react-native";
import {
  Product,
  ProductImage,
  ProductDetails,
  Separator,
  ButtonAdd,
} from "./styles";
import { products } from "../../mocks/products";
import { Text } from "../Texts";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";

const Menu: React.FC = () => {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 16 }}
      keyExtractor={(item) => String(item._id)}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage
            source={{
              uri: `https://redefoodservice.com.br/wp-content/uploads/2023/07/Pizza-Quatro-Queijos.jpg`,
            }}
          />

          <ProductDetails>
            <Text weight="600">{product.name}</Text>
            <Text color="#666" size={14} numberOfLines={2}>
              {product.description}
            </Text>
            <Text weight="600" size={14}>
              {formatCurrency(product.price)}
            </Text>
          </ProductDetails>
          <ButtonAdd>
            <PlusCircle />
          </ButtonAdd>
        </Product>
      )}
      ItemSeparatorComponent={Separator}
    />
  );
};

export { Menu };
