import { FlatList } from "react-native";
import { Text } from "../Texts";
import { ButtonCategory, Container } from "./styles";

//mocks
import { categories } from "../../mocks/categories";
import { useState } from "react";

type Props = {};

const Categories: React.FC<Props> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  function handleCategorySelected(categoryId: string) {
    const category = selectedCategory === categoryId ? "" : categoryId;
    setSelectedCategory(category);
  }

  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item }) => {
          const isSelected = selectedCategory === item._id;

          return (
            <ButtonCategory
              onPress={() => handleCategorySelected(item._id)}
              style={{ elevation: 4 }}
            >
              <Text weight="600" opacity={isSelected ? 1 : 0.5}>
                {item.name}
              </Text>
            </ButtonCategory>
          );
        }}
      />
    </Container>
  );
};

export { Categories };
